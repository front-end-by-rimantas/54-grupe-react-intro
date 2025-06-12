import { TextList } from "./components/list/TextList";
import { PlusMinus } from "./components/plus-minus/PlusMinus";
import { Todo } from "./components/todo/Todo";

export function App() {
  return (
    <>
      <Todo />
      <PlusMinus />
      <TextList />
    </>
  )
}
