import TopNav from "./TopNav";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <>
            <TopNav />
            <div className="w-full min-h-screen bg-cream text-black dark:bg-gray-900 dark:text-gray-50">
                <div className="lg:w-9/12 mx-auto p-2">{children}</div>
            </div>
            <Footer />
        </>
    );
}
