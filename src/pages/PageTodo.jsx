import { Link } from "react-router";
import { Todo } from "../components/todo/Todo";

export function PageTodo() {
    return (
        <>
            <Link to="/">Back home</Link>
            <Todo />
        </>
    )
}