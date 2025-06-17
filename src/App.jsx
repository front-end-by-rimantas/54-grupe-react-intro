import { BrowserRouter, Route, Routes } from "react-router";
import { PageHome } from "./pages/PageHome";
import { PageTodo } from "./pages/PageTodo";
import { PagePlusMinus } from "./pages/PagePlusMinus";
import { PublicPageTemplate } from "./templates/PublicPageTemplate";
import { PageDashboard } from "./pages/PageDashboard";
import { PageSettings } from "./pages/PageSettings";
import { AdminPageTemplate } from "./templates/AdminPageTemplate";
import { PageGarden } from "./pages/PageGarden";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={PublicPageTemplate}>
          <Route index path="/" element={<PageHome />} />
          <Route path="/todo" element={<PageTodo />} />
          <Route path="/plus-minus" element={<PagePlusMinus />} />
          <Route path="/garden" element={<PageGarden />} />
        </Route>

        <Route Component={AdminPageTemplate}>
          <Route path="/dashboard" element={<PageDashboard />} />
          <Route path="/settings" element={<PageSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
