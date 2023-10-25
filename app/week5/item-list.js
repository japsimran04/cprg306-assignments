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

        else if (sortBy == "Group category") {
            items.sort((a,b) => a.Groupcategory.localeCompare(b.Groupcategory));
        }

        return (
            <>

                <div>
                <p>Sort By:</p>

                <button className="bg-orange-500 p-1 m-2 w-28" onClick={() => setSortBy("name")}>
                Name
                </button>
                <button className="bg-orange-500 p-1 m-2 w-28" onClick={() => setSortBy("category")}>
                Category
                </button>
                <button className="bg-orange-500 p-1 m-2 w-28" onClick={() => setSortBy(" Groupcategory")}>
                Group Category
                </button>
                </div>

                <div>
                {items.map((i, index) => (
                    <Item
                    key={index}
                    name={i.name}
                    quantity={i.quantity}
                    category={i.category}
                    Groupcategory={i.Groupcategory}/>))}
                </div>


            </>
        )
}
