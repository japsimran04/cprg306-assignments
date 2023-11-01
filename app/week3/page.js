import ItemList from "./item-list";

export default function Page() {
    return (
        <>
        <main className="bg-slate-900">
            <h1 class = "text-3xl text-white font-bold m-2">Shopping List</h1>
            <ItemList />
        </main>
        </>
    );
}