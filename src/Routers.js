import { Cart } from "./components/Cart"
import { Counter } from "./components/Counter"
import {Routes, Route} from "react-router-dom";
import { Profile } from "./components/Profile";
import { PrivateRoute } from "./components/PrivateRoute";
import styles from "./Navbar.module.css";
import Todo from "./components/Todo";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Counter/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/todo" element={<Todo/>} />

            <Route path="/profile" element={<PrivateRoute/>} > 
            <Route path="/profile" element={<Profile/>} />
            </Route>
        </Routes>
    )
}