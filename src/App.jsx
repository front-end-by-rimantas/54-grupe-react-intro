import { BrowserRouter, Route, Routes } from "react-router";
import { PageHome } from "./pages/PageHome";
import { PageTodo } from "./pages/PageTodo";
import { PagePlusMinus } from "./pages/PagePlusMinus";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<PageHome />} />
        <Route path="/todo" element={<PageTodo />} />
        <Route path="/plus-minus" element={<PagePlusMinus />} />
      </Routes>
    </BrowserRouter>
  )
}
