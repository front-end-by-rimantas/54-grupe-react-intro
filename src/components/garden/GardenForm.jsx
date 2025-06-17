export function GardenForm() {
    return (
        <form>
            <div className="form-floating">
                <input id="item" type="text" className="form-control" placeholder="Garden item" />
                <label for="item">Garden item</label>
            </div>
            <div className="form-floating">
                <input id="amount" type="number" className="form-control" placeholder="0" />
                <label for="amount">Amount</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Add to list</button>
        </form>
    )
}