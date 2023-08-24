import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
    return (
        <main className="App">
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </main>
    )
}

export default Layout
