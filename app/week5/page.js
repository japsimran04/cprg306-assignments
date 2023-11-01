import ItemList from "./item-list";

export default function page() {
    return (
        <>
        <main className="bg-slate-900">
            <h1 className="text-3xl text-white font-bold m-2">Shopping list</h1>
            <ItemList />
        </main>
        </>
    );
}