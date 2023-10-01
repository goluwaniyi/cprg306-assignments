import Link from "next/link";

import MyComponent from "../Studentinfo";

 

export default function Page(){

    return (

        <main>

            <h1>Week 2</h1>

            <MyComponent />
            <p>My shopping List</p>

            <Link href="..">&lt;- Back</Link>

        </main>

    );

}