import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <>
        <div className={styles.Nav}>
       <Link to="/"><button>Counter</button></Link>
        <Link to="/cart"><button>Cart</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
        <Link to="/todo"><button>Todo</button></Link>
        </div>
        </>
    )
}