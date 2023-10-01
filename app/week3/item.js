import Link from "next/link";


export default function Item() {
    return (
        <main>
        <h1>My ShoppingList</h1>
        <MyComponent />
        <Link href="/">Home</Link>
        </main>
    )
}