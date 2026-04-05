import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.startText}>
            <div>
                <strong>Find any TV show instantly.</strong> Browse the full
                episode guide for any series, organized by season. Powered by
                the TVMaze public API.
            </div>
            <img src="/images/television.png" alt="TV" />
        </div>
    );
};

export default Home;
