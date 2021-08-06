import TopNav from "./TopNav";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <>
            <TopNav />
            <div className="w-full min-h-screen bg-white text-black-text dark:bg-black dark:text-white-text">
                <div className="xl:w-9/12 mx-auto p-4">{children}</div>
            </div>
            <Footer />
        </>
    );
}
