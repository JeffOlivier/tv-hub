import { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/layouts/Header";
import NavBar from "./components/layouts/navBar";
import SearchShowsForm from "./components/SearchShowsForm";
import Footer from "./components/layouts/Footer";

import ListOfShows from "./components/ListOfShows";
import ListOfEpisodes from "./components/ListOfEpisodes";

import Home from "./components/pages/Home";
import About from "./components/pages/about";
import NotFound from "./components/pages/NotFound";

import "./components/layouts/PageLayoutGenericStyles.scss";
import "./App.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
        };

        this.updateSearchTerm = this.updateSearchTerm.bind(this);
    }

    clearSearch = () => {
        clearTimeout(this.timerId);
        this.setState({ searchTerm: "" });
    };

    timerId = 0;
    updateSearchTerm = (searchTerm, history) => {
        if (searchTerm !== this.state.searchTerm) {
            // Wait 0.3 seconds before updating the state of searchTerm, if this
            // function is called before the timer expires, restart the clock
            clearTimeout(this.timerId);
            this.timerId = setTimeout(() => {
                this.setState({ searchTerm: searchTerm.trim() });
                history.replace(`/shows?term=${searchTerm.trim()}`);
            }, 300); // 300 ms = 0.3 seconds
        }
    };

    render() {
        return (
            <BrowserRouter>
                <div className="pageWrapper">
                    {/* <Header /> */}
                    <NavBar />
                    <div className="contentWrapper">
                        <SearchShowsForm
                            updateSearchTerm={this.updateSearchTerm}
                            searchTerm={this.state.searchTerm}
                            clearSearch={this.clearSearch}
                        />
                        <main className="searchResultsBlock">
                            <Switch>
                                <Route
                                    // path="/shows/:searchTerm"
                                    path="/shows"
                                    component={ListOfShows}
                                />
                                {/* <Route path="/show/:season/:episode" component={ListOfEpisodes} /> */}
                                <Route
                                    path="/show/:showId/:season?"
                                    component={ListOfEpisodes}
                                />
                                {/* <Redirect from="/show/:id" exact to="/show/:id/1" /> */}
                                {/* <Route path="/episode" component={Rentals} /> */}
                                <Route path="/404" component={NotFound} />
                                {/* <Route path="/" exact component={Home} /> */}
                                <Redirect from="/shows" exact to="/" />
                                <Redirect from="/shows" to="/" />
                                <Route path="/about" component={About} />
                                <Route path="/" exact component={Home} />
                                <Redirect to="/404" />
                            </Switch>
                        </main>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
