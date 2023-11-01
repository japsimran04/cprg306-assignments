"use client"
import { useState } from "react";
import ItemList from "./item-list";
import itemsData from './items.json';
import NewItem from './new-item';

export default function page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <>
        <main className="bg-slate-900">
            <h1 className="text-3xl text-white font-bold m-2">Shopping list</h1>
            <NewItem onAddItem ={handleAddItem} />
            <ItemList items = {items} />
        </main>
        </>
    );
}
