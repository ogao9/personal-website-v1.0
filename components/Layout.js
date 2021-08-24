import TopNav from "./TopNav";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <TopNav />
            <div className="w-full min-h-screen bg-white text-black-text dark:bg-black dark:text-white-text">
                <div className="w-full max-w-screen-xl mx-auto px-6 md:px-4">{children}</div>
            </div>
            <Footer />
        </>
    );
}
