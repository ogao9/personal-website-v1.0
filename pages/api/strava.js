const fetch = require("node-fetch");
const { URLSearchParams } = require("url");

const client_id = process.env.STRAVA_CLIENT_ID;
const client_secret = process.env.STRAVA_CLIENT_SECRET;
const refresh_token = process.env.STRAVA_REFRESH_TOKEN;

const getAccessToken = () => {
    const tokenParams = new URLSearchParams({
        client_id,
        client_secret,
        refresh_token,
        grant_type: "refresh_token",
    });

    return fetch("https://www.strava.com/oauth/token?" + tokenParams, {
        method: "POST",
    })
        .then((res) => res.json())
        .then((json) => {
            return json.access_token
        })
        .catch((err) => console.log(err));
};

const getActivityData = async () => {
    const accessToken = await getAccessToken();

    const getActivityParams = new URLSearchParams({ per_page: "1" });
    return fetch(
        "https://www.strava.com/api/v3/athlete/activities?" + getActivityParams,
        {
            method: "GET",
            headers: {
                authorization: "Bearer " + accessToken,
            },
        }
    ).then((res) => res.json())
    .then((json) => json[0])
    .catch((err) => console.log(err));

};

export default async function handler(req, res) {
    try{
        const {name, distance, start_date_local} = await getActivityData()
        const miles = Math.round(distance / 1600 * 10) / 10;

        return res.status(200).json({
            title : "Activity Uploaded",
            content : name + " ~ " + miles + " miles",
            imageUrl: "/oliverRunning.jpg",
        });

    }catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
}
