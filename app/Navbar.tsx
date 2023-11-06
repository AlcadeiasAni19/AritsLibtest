"use client";
import Icon from "@components/library/Icon"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Navbar = () => {

    const currentPath = usePathname();
    const links = [{label: "Home", href: "/"}, {label: "Details", href:"/user_details"}]
  return (
    <nav className="flex space-x-5 border-b-2 mb-28 px-5 h-88 items-center font-bold">
        <Link href="/"><Icon iconName="image-user" iconSize="25px"></Icon></Link>
        <ul className="space-x-5 text-2xl">
            {links.map(link => 
            <Link key={link.href}
                className={`${link.href===currentPath ? "text-emerald-500":"text-black"} hover:text-sky-400 transition-colors mx-10`}  href={link.href}>
            {link.label}</Link>                    
            )}
        </ul> 
    </nav>
  )
}
export default Navbar