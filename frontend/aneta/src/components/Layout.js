import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
    return (
        <main >
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </main>
    )
}

export default Layout
