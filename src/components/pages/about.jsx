import React from "react";
// import { Link } from "react-router-dom";
import styles from "./about.module.scss";

const ReadMe = () => {
    return (
        <div className={styles.readmeContainer}>
            {/* <div className={styles.tvImage}>
                <img src="/images/television.png" alt="TV" />
            </div> */}
            <div className={styles.purposeContainer}>
                <h3>Why I Built This App</h3>
                <p>
                    In May 2020, I was furloughed from a car rental company
                    that, like most of the travel industry, was hit hard when
                    Covid-19 brought international travel to a standstill. About
                    two months later, along with 90% of the workforce, I was
                    officially laid off.
                </p>

                <p>
                    I had been coding in PHP and vanilla JavaScript since 1998,
                    and ColdFusion from 2013 up until the layoff. I knew those
                    technologies well, but honestly, I was starting to feel
                    stale. The industry had moved forward and I knew that I had
                    too.
                </p>

                <p>
                    I'd actually had a brief run-in with React just before the
                    furlough, I volunteered to finish an internal dashboard
                    someone had started. The whole "small components" philosophy
                    was a pretty big shift from the large-file approach I was
                    used to, and I was quickly overwhelmed. Then we were
                    furloughed before I had a chance to figure it out.
                </p>

                <p>
                    After the layoff, I started talking to friends who were
                    already working with React, watched some tutorials, and
                    began applying for React developer roles. One of those
                    applications came with a timed coding challenge: use the
                    TVMaze API to build a show search page in React. I didn't do
                    great on it, but instead of letting it go, I decided to
                    finish it properly on my own. This is that project,
                    completed in December 2020.
                </p>
            </div>

            <div className={styles.howtoContainer}>
                <div className={styles.tvImage}>
                    <img src="/images/television.png" alt="TV" width="200px" />
                </div>
                <h3>This App Demonstrates the Use of:</h3>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Local state management</li>
                    <li>Multiple React components</li>
                    <li>Passing state and pointers to child components</li>
                    <li>Accessing URL parameters</li>
                    <li>Responsive CSS Grid</li>
                    <li>Modular Sass</li>
                    <li>JavaScript ES6</li>
                    <li>JavaScript Fetch API with async/await</li>
                </ul>

                {/* <h3>How to Use This App</h3>
                <ul>
                    <li>Type something to search for in the search box</li>
                    <li>
                        After 0.3 seconds (300 ms), an API call to
                        api.tvmaze.com will be made and return a list of the top
                        10 shows based on relevance of your search term. Keep
                        typing to update the search results.
                    </li>
                    <li>
                        Click on the <strong>EPISODES</strong> button to get a
                        list of all the show's episodes broken out by season.
                    </li>
                </ul> */}
            </div>
        </div>
    );
};

export default ReadMe;
