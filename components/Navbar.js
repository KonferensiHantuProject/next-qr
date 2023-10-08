import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav className="top-0 flex justify-between mb-6 p-3 bg-slate-300">
            <div className="logo">
                <Image src="/Bonevian.png" width={50} height={50}></Image>
            </div>
            <div className="flex justify-evenly min-w-[300px] items-center">
                <Link className="hover:font-bold" href="/">Home</Link>
                <Link className="hover:font-bold" href="/about">About</Link>
                <Link className="hover:font-bold" href="/bone">Listing</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;