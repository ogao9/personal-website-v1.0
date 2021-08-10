import TopNav from "./TopNav";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <>
            <TopNav />
            <div className="w-full min-h-screen bg-white text-black-text dark:bg-black dark:text-white-text">
                <div className="lg:w-10/12 mx-auto p-6 sm:p-4">{children}</div>
            </div>
            <Footer />
        </>
    );
}
