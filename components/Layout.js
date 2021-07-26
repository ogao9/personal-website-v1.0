import TopNav from "./TopNav";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <>
            <TopNav />
            <div className="w-full lg:w-9/12 mx-auto min-h-screen p-2">{children}</div>
            <Footer />
        </>
    );
}
