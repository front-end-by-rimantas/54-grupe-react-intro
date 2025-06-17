import { Outlet } from "react-router";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export function PublicPageTemplate() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}