import { Link } from "react-router";

export function PageHome() {
    return (
        <>
            <Link to="/todo">Todo</Link>
            <Link to="/plus-minus">Plus Minus</Link>
        </>
    )
}