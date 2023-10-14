import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return ( 
        <div className="content bg-slate-300">
            <Navbar />
                <div className="min-h-screen flex justify-center align-middle items-center">
                    {children}
                </div>
            <Footer />
        </div>
    );
}
 
export default Layout;