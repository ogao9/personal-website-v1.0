import TopNav from "./TopNav";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <>
            <TopNav />
            <div className="w-full min-h-screen light-background">
                <div className="lg:w-9/12 mx-auto p-2">{children}</div>
            </div>
            <Footer />
        </>
    );
}
