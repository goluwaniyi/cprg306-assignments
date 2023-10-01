import Link from "next/link";
import MyComponent from "./Studentinfo";


export default function Home() {
  return (
    <main>   
      <h1>CPRG 306: Web Development 2 - Assignments </h1>
      <MyComponent/>
        <ul>
           <li><Link href="/week2/page">Week 2</Link></li>
           <li><Link href="/week3/page">Week 3</Link></li>
        </ul>
    </main>
  )
}