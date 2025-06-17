import { Outlet } from "react-router";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export function AdminPageTemplate() {
    const isLoggedIn = false;
    const ProtectedContent =
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>You have to login first!</h1>
                </div>
            </div>
        </div>;

    return (
        <>
            <Header />
            {isLoggedIn ? <Outlet /> : ProtectedContent}
            <Footer />
        </>
    );
}