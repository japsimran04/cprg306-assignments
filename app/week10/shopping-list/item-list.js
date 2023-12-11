"use client"

import { useState } from "react";
import Item from "./item.js";

export default function ItemList({items,onItemSelect}) {
    
        const [sortBy, setSortBy] = useState("name");

        if (sortBy == "name") {
            items.sort((a,b) => a.name.localeCompare(b.name));
        }

        else if (sortBy == "category") {
            items.sort((a,b) => a.category.localeCompare(b.category));
        }

        return (
            <>

                <div> 
                <label for="sort" className="text-white">Sort by: </label>
                <button className="bg-orange-500 p-1 m-2 w-28" onClick={() => setSortBy("name")}>
                Name
                </button>
                <button className="bg-orange-500 p-1 m-2 w-28" onClick={() => setSortBy("category")}>
                Category
                </button>
                </div>

                <div>
                {items.map((i, index) => (
                    <Item
                    key={index}
                    name={i.name}
                    quantity={i.quantity}
                    category={i.category}
                    onSelect={() => onItemSelect(i)}/>))}
                </div>


            </>
        )
}
