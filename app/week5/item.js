export default function Item ({ name, quantity, category}) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>

    );
}
