import Link from "next/link";

export default function Navbar (){
    return(
        <>
        <h1> THIS IS NAVBAR</h1>
        <Link href="/about" >About</Link>
        <Link href="/dashboard" >Dashboard</Link>
        </>
    )
};
