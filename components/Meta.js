import Head from "next/head";

export default function Meta({ title }){
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="author" content="Oliver Gao" />
            <meta
                name="description"
                content="Oliver Gao | Student at the University of Michigan | Visit my website to learn more about me, my projects, and read my blog | "
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

Meta.defaultProps = {
    title: "Oliver Gao",
};
