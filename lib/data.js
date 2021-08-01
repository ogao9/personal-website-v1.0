import ProfilePic from '../public/images/oliver-running.jpg'

export const projectInfo = [
    {
        title: "Design.io",
        slug: "design-io",
        description:
            "An online platform for getting inspired by designs we encounter in everyday life",
        link: "https://design-io.herokuapp.com/",
        github: "https://github.com/ogao9/design.io",
        technologies: ["React", "CSS", "HTML"],
        imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/personal-website-f77e4.appspot.com/o/design.io.png?alt=media&token=622d0a7d-0752-4bae-a67d-6721f8d98424",
        details: {
            introduction:
                "I used the ReactJS library to make my site interactive. I didn't use any CSS libraries like MaterialUI or Bootstrap because I wanted to understand the fundamentals first.",
            technicalInfo:
                "I used MongoDB to store user and design information. I also used an express server to handle authentication and build a REST API.",
        },
    },
    {
        title: "Brawl Stars Tracker",
        slug: "brawl-stars-tracker",
        description:
            "A program that fetches data from the Brawl Stars API and then generates beautiful graphs",
        link: "https://colab.research.google.com/drive/1FtPYAq69naw6TdHTMO8uWoFuB2H0WHPf?usp=sharing",
        github: "#",
        technologies: ["Python"],
        imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/personal-website-f77e4.appspot.com/o/BrawlStars.png?alt=media&token=45821b2a-3750-4948-93bf-d539ac478010",
        details: {
            introduction:
                "The Brawl Stars tracker tracks the trophy progress of multiple players. I created this because I was doing a competition with some friends and wanted a way to track our progress without needing to pull out a calculator.",
            technicalInfo:
                "I stored all the data pulled in from the Brawl Stars API in Pandas DataFrames. I handled logic with Python and made graphs with the Seaborn Library.",
        },
    },
    {
        title: "Renewables Exploration",
        slug: "renewables-exploration",
        description:
            "Exploring renewable energy production around the world using interactive visualizations",
        link: "https://observablehq.com/@ogao/renewable-energy-around-the-world",
        github: "#",
        technologies: ["D3.js", "JavaScript"],
        imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/personal-website-f77e4.appspot.com/o/RenewableEnergy.png?alt=media&token=025d7ca9-c20b-411e-9ed9-641bdc6bbaf6",
        details: {
            introduction:
                "A project I did as a part of MDST. We created many interactive visualizations and created an article to document renewable energy trends throughout the world. Much more effort, but definitely worth it. Happy I was on a team that was willing to meet and work",
            technicalInfo:
                "We used Javascript and the D3.js library to create our visualizations. This was all done in an Observable notebook.",
        },
    },
];

export const colorMap = { "React" : "bg-pink-300", "CSS":"bg-blue-300", "HTML":"bg-yellow-500", "D3.js":"bg-yellow-500"}


export const aboutInfo = {
    headline: "I'm Oliver, a sophomore at the University of Michigan studying Computer Science.",
    interests: "I enjoy programming, working with data, and seeing how modern technology can make a positive impact on some of our world's biggest challenges. Recently, I've been delving into the vast world of web development.",
    forfun: "When I'm not dealing with technology, you can find me outside enjoying a nice run / walk / bike, watching NBA basketball, or eating pretzels and fruit.",
    image: ProfilePic,
}

export const homeInfo = {
    headline: "Hello! I'm Oliver.",
    subhead: "Welcome to my home on the web! Have a look around."
}