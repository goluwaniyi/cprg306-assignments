import Link from "next/link";
import MyComponent from "../Studentinfo";

export default function Page() {
    return (
        <main>
        <h1>My List</h1>
        <MyComponent />
        <Link href="/">Home</Link>
        </main>
    )
}