
export default function Item({name, quantity, category}){
    return (
        <div className="border border-sky-600 bg-sky-800 w-full max-w-xs m-4 p-2">
        <h2> Name: {name}</h2>;
        <p>
            Date: {quantity}
        </p>;
        <p>
            Category: {category}
        </p>;
        </div> 
    );
}