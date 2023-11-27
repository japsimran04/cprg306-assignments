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
        <main className="bg-zinc-400 flex">
        <div>
          <h1 className="text-3xl text-white font-bold m-2">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect}/>
        </div>
        <div className="bg-zinc-400">
          <MealIdea ingredient={selectItemName}/>
        </div>    
        </main>
    );
    
}
