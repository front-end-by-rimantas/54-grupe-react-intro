import { BrowserRouter, Route, Routes } from "react-router";
import { PageHome } from "./pages/PageHome";
import { PageTodo } from "./pages/PageTodo";
import { PagePlusMinus } from "./pages/PagePlusMinus";
import { PublicPageTemplate } from "./templates/PublicPageTemplate";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={PublicPageTemplate}>
          <Route index path="/" element={<PageHome />} />
          <Route path="/todo" element={<PageTodo />} />
          <Route path="/plus-minus" element={<PagePlusMinus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
