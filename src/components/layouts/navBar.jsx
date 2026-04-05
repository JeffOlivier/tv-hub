import { Link, NavLink } from "react-router-dom";
import styles from "./navBar.module.scss";

const NavBar = () => {
    return (
        <div className={styles.nav_container}>
            <div className={styles.nav_item}>
                <Link className={styles.nav_link} to="/">
                    HOME
                </Link>
            </div>
            <div className={styles.nav_spacer}> | </div>
            {/* <div className={styles.nav_item}>
                <Link className={styles.nav_link} to="/">
                    TV SHOW FINDER
                </Link>
            </div>
            <div className={styles.nav_spacer}> | </div> */}
            <div className={styles.nav_item}>
                <NavLink to="/about" className={styles.nav_link}>
                    ABOUT
                </NavLink>
            </div>
            <div className={styles.nav_spacer}> | </div>
            <div className={styles.nav_item}>
                <a
                    href="https://github.com/JeffOlivier/tv-hub"
                    target="_blank"
                    rel="noreferrer"
                    title="tv show finder on GitHub"
                    className={styles.nav_link}
                >
                    <i className="fas fa-code-branch"></i>{" "}
                    {/* <i className="fab fa-github"></i> */}
                    GITHUB REPO
                </a>
            </div>
        </div>
    );
};

export default NavBar;
