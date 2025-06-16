import { Link } from "react-router";
import { PlusMinus } from "../components/plus-minus/PlusMinus";

export function PagePlusMinus() {
    return (
        <>
            <Link to="/">Back home</Link>
            <PlusMinus />
        </>
    )
}