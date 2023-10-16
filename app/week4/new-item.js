"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            name: name, 
            quantity: quantity, 
            category: category
        };
        console.log(item);
        alert('Name: ${name}, Quantity: ${quantity}, Category: ${category}');
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (

        <form className="flex flex-col gap-4 justify-center items-center bg-slate-800 rounded border-blue-800">
        <div className="flex-1">
            <label htmlFor= "name" className="block text-white-700 text-sm font-bold mb-2">
                Name
            </label>
            <input 
            type="text"
            id= "name"
            value= {name}
            required
            oneChange= {(e) => setName(e.target.value)}
            />
        </div>

        <div className="flex-1">
            <label htmlFor="quantity" className="block text-white-700 text-sm font-bold mb-2">
                Quantity
            </label>
            <input 
            type= "number"
            id= "quantity"
            min= "1"
            max= "99"
            value= {quantity}
            required
            onChange= {(e) => setQuantity(parseInt(e.target.value))}

            />
        </div>

        <div className="flex-1">
            <label htmlFor="category" className="block text-white-700 text-sm font-bold mb-2">
                Category
            </label>

            <select 
               id="category"
               value={category}
               required
               onChange={(e) => setCategory(e.target.value)}
            >
                <option value= "produce">Produce</option>
                <option value= "dairy">Dairy</option>
                <option value= "bakery">Bakery</option>
                <option value= "meat">Meat</option>
                <option value= "frozen foods">Frozen Foods</option>
                <option value= "canned goods">Canned Goods</option>
                <option value= "dry goods">Dry Goods</option>
                <option value= "beverages">Beverages</option>
                <option value= "snacks">Snacks</option>
                <option value= "household">Household</option>
                <option value= "other">Other</option>
            </select>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={handleSubmit} type="submit">
                submit
        </button>
        </form>
        
    );



}