import { Component } from "react";
import queryString from "query-string";
import SingleShow from "./SingleShow";
import styles from "./ListOfShows.module.scss";

class ListOfShows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: [],
        };

        this.fetchShows = this.fetchShows.bind(this);
    }

    getSearchTerm() {
        return queryString.parse(this.props.location.search).term || "";
    }

    componentDidMount() {
        if (this.getSearchTerm().trim() !== "") {
            this.fetchShows();
        }
    }

    componentDidUpdate(previousProps) {
        if (previousProps.location.search !== this.props.location.search) {
            this.fetchShows();
        }
    }

    fetchShows = async () => {
        const searchTerm = this.getSearchTerm().trim();
        if (searchTerm == null || searchTerm === "") return;
        const apiFullUrl = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;

        const apiCall = await fetch(apiFullUrl);
        const response = await apiCall.json();
        this.setState({ shows: response });
    };

    render() {
        return (
            <div className={styles.showsContainer}>
                {this.state.shows.map((show) => (
                    <SingleShow
                        {...show.show}
                        key={show.show.id}
                        updateShowId={this.props.updateShowId}
                    />
                ))}
            </div>
        );
    }
}

export default ListOfShows;
