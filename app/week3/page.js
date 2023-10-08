import ItemList from "./item-list";

export default function Page(){
    return(
        <>
        <h1 class = "text-3xl font-bold m-2">Shopping List</h1>
        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-gray-800 rounded p-4">
            <p className="font-bold text-white"> milk, 4 L 🥛</p>
            <p className="font-bold text-white">Buy 1 in dairy</p>
            </div>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-gray-800 rounded p-4">
            <p className="font-bold text-white">bread 🍞</p>
            <p className="font-bold text-white">Buy 2 in bakery</p>
            </div>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-gray-800 rounded p-4">
            <p className="font-bold text-white"> eggs, dozen 🥚</p>
            <p className="font-bold text-white">Buy 2 in dairy</p>
            </div>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-gray-800 rounded p-4">
            <p className="font-bold text-white"> bananas 🍌</p>
            <p className="font-bold text-white">Buy 6 in produce</p>
            </div>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-gray-800 rounded p-4">
            <p className="font-bold text-white"> broccoli 🥦</p>
            <p className="font-bold text-white">Buy 3 in produce</p>
            </div>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-gray-800 rounded p-4">
            <p className="font-bold text-white">chicken breasts, 1 kg 🍗</p>
            <p className="font-bold text-white">Buy 1 in meat</p>
            </div>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-gray-800 rounded p-4">
            <p className="font-bold text-white"> pasta sauce 🍝</p>
            <p className="font-bold text-white">Buy 3 in canned goods</p>
            </div>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-gray-800 rounded p-4">
            <p className="font-bold text-white">spaghetti, 454 g 🍝</p>
            <p className="font-bold text-white">Buy 2 in dry goods</p>
            </div>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-gray-800 rounded p-4">
            <p className="font-bold text-white">toilet paper, 12 pack 🧻</p>
            <p className="font-bold text-white">Buy 1 in household</p>
            </div>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-gray-800 rounded p-4">
            <p className="font-bold text-white"> paper towels, 6 pack</p>
            <p className="font-bold text-white">Buy 1 in household</p>
            </div>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-gray-800 rounded p-4">
            <p className="font-bold text-white">dish soap 🍽️</p>
            <p className="font-bold text-white">Buy 1 in household</p>
            </div>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-gray-800 rounded p-4">
            <p className="font-bold text-white">hand soap 🧼</p>
            <p className="font-bold text-white">Buy 4 in household</p>
            </div>
        </div>

        

        </>
    );
};