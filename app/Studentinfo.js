import Link from "next/link";


export default function MyComponent()
{
  return (
    <div>
      <h1>Student Info</h1>
      <h1>Grace Oluwaniyi </h1>
      <h1>CPRG 306 D </h1>
      <Link href="https://github.com/goluwaniyi/">My GitHub</Link>
      <Link href="..">&lt;- Back</Link>
    </div>
  );
}