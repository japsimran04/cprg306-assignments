export default function Item({name, quantity, category}) {
    return(
        <div className="p-2 m-4 bg-slate-200 max-w-sm">
            <h2 className="text-xl font-bold">{name}</h2>
            <h3 className="text-xl font-bold">buy {quantity} in {category}</h3>
        </div>
    )
}