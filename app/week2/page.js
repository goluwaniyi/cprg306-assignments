import Link from "next/link";

import MyComponent from "../Studentinfo";

 

export default function Page(){

    return (

        <main>

            <h1>My Shopping List</h1>

            <MyComponent />

            <Link href="..">&lt;- Back</Link>

        </main>

    );

}