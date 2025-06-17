import { useState } from "react"

export function GardenForm({ addNewItem }) {
    const [itemName, setItemName] = useState('');
    const [amount, setAmount] = useState(1);

    function handleNameChange(e) {
        setItemName(() => e.target.value);
    }

    function handleAmountChange(e) {
        setAmount(() => +e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        addNewItem(itemName, amount);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-floating">
                <input onChange={handleNameChange} value={itemName} id="item" type="text" className="form-control" placeholder="Garden item" />
                <label for="item">Garden item</label>
            </div>
            <div className="form-floating">
                <input onChange={handleAmountChange} value={amount} id="amount" type="number" className="form-control" placeholder="0" />
                <label for="amount">Amount</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Add to list</button>
        </form>
    )
}