"use client"
import { useState } from "react";
import ItemList from "./item-list";
import itemsData from './item.json';
import NewItem from './new-item';
import MealIdea from './meal-ideas';


export default function page() {

    const [items, setItems] = useState(itemsData);
    const [selectItemName, setSelectItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    function handleItemSelect(item) {
        let name = item.name.split(",") [0].replace(/[^a-zA-Z ]/g, "").trim();
        setSelectItemName(name);
    }

    return (
        <>
        <main className="bg-slate-900">
            <h1 className="text-3xl text-white font-bold m-2">Shopping list</h1>
            <NewItem onAddItem ={handleAddItem} />
            <ItemList items = {items} onItemSelect={handleItemSelect}/>

            <div className="bg-slate-900">
                <MealIdea ingredient={selectItemName}/>
            </div>
        </main>
        </>
    );
}
