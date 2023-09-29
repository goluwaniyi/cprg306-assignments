import Link from "next/link";
import MyComponent from "./Studentinfo";


export default function Home() {
  return (
    <main>   
      <h1>CPRG 306: Web Development 2 - Assignments </h1>
      <MyComponent/>
        <ul>
           <Link href="/week2/page">Week 2</Link>
        </ul>
    </main>
  )
}