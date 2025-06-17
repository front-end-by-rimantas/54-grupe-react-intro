import { useState } from "react";
import { GardenForm } from "../components/garden/GardenForm";
import { GardenList } from "../components/garden/GardenList";
import { GardenSummary } from "../components/garden/GardenSummary";

export function PageGarden() {
    const [list, setList] = useState([]);

    function addNewItem(name, amount) {
        setList(currentList => [...currentList, { name, amount }]);
    }

    return (
        <section className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <GardenForm addNewItem={addNewItem} />
                    <GardenList list={list} />
                </div>
                <div className="col-12 col-md-6">
                    <GardenSummary list={list} />
                </div>
            </div>
        </section>
    )
}