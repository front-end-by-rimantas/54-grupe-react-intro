import { GardenForm } from "../components/garden/GardenForm";
import { GardenList } from "../components/garden/GardenList";
import { GardenSummary } from "../components/garden/GardenSummary";

export function PageGarden() {
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <GardenForm />
                        <GardenList />
                    </div>
                    <div className="col-12 col-md-6">
                        <GardenSummary />
                    </div>
                </div>
            </section>
        </>
    )
}