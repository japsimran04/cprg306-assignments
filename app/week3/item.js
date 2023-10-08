export default function Item({name, quantity, category}) {
    return(
            <ol>
                <li>Name: {name}</li>
                <li>Quantity: {quantity}</li>
                <li>Category: {category}</li>
            </ol>
    );
}