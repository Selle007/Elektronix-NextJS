import Link from "next/link";

export default function AdminSidebar (){
    return(
        <>
        <h1> THIS IS Sidebar</h1>
        <Link href="/" >HOME</Link>
        <Link href="/test" >HOME</Link>
        <Link href="/about" >About</Link>
        <Link href="/dashboard" >Dashboard</Link>
        </>
    )
};
