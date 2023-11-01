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
        alert(`Name of an Item: ${name}, \nQuantity: ${quantity}, \nCategory: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        
        <div className="flex justify-between w-full bg-slate-900">
            <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
            <div className="mb-2">
            <h2 className="text-xl text-white font-bold">Add New Item</h2>

            <input className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            type="text"
            id="Name"
            placeholder= "Item name"
            required
            oneChange= {(e) => setName(e.target.value)}/>
            </div>

            <div className="mb-2">
            
            <input className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            type= "number"
            id= "quantity"
            min= "1"
            max= "99"
            value= {quantity}
            required
            onChange= {(e) => setQuantity(Number(e.target.value))} />


            <select 
               id="category"
               value={category}
               required
               onChange={(e) => setCategory(e.target.value)} className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans">

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
            <button className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"onClick={handleSubmit} type="submit">
                +
            </button>
            </form>
        </div>
        
    );



}