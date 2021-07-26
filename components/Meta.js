import Head from "next/head";

export default function Meta({ title }){
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="author" content="Oliver Gao" />
            <meta
                name="description"
                content="Oliver Gao. | Visit my website to learn more about me, play a game, and read my blog.| Student at the University of Michigan"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

Meta.defaultProps = {
    title: "Oliver Gao",
};
