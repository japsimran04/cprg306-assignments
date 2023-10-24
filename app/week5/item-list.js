"use client"

import { useState } from "react";
import Item from "./item.js";
import items from "./items.json";

export default function ItemList() {
    
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
                    <p>sortBy:</p>
                </div>

                <div>
                <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    onClick={() => setSortBy("name")}
                Name</button>
                

                <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    onClick={() => setSortBy("category")}
                Category</button>
                </div>

                <div>
                {items.map((i, index) => (
                    <Item
                    key={index}
                    name={i.name}
                    quantity={i.quantity}
                    category={i.category}
                    />
                ))}
                </div>


            </>
        )
    
}