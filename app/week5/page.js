import ItemList from "./item-list";

export default function page() {
    return (
        <>
        <main className="bg-cyan-900">
            <h1 className="text-3xl font-bold m-2">Shopping list</h1>
            <ItemList />
        </main>
        </>
    );
}