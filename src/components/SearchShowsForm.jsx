import { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./SearchShowsForm.module.scss";

class SearchShowsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearchFormValid: true,
            inputValue: "",
        };
        this.handleValidateInput = this.handleValidateInput.bind(this);
    }

    fubarHistory = this.props.history;

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname &&
            ["/", "/about"].includes(this.props.location.pathname)) {
            this.props.clearSearch();
            this.setState({ inputValue: "" });
        }
    }

    handleValidateInput = (searchInput) => {
        const validChars = /^[a-zA-Z0-9 ]+$/i;

        const isFormInputValid = validChars.test(searchInput);
        this.setState({ isSearchFormValid: isFormInputValid, inputValue: searchInput });

        if (isFormInputValid) {
            document
                .getElementById("findSearchTerm")
                .classList.remove("textInputError");
            document.getElementById("inputErrorMessage").style.display = "none";

            // The input is valid, so update the state of searchTerm in PageLayout, which will trigger a new search for shows
            this.props.updateSearchTerm(searchInput, this.fubarHistory);
        } else {
            document
                .getElementById("findSearchTerm")
                .classList.add("textInputError");
            document.getElementById("inputErrorMessage").style.display =
                "block";
        }
    };

    render() {
        return (
            <div className={styles.searchContainer}>
                <div
                    id="inputErrorMessage"
                    className={styles.inputErrorMessage}
                >
                    Only letters and numbers are allowed in this search form
                </div>
                <span
                    className={`fas fa-search fa-2x ${styles.btn_episode} ${styles.searchIcon}`}
                ></span>
                <input
                    id="findSearchTerm"
                    className={styles.input_searchterm}
                    type="text"
                    onChange={(event) =>
                        this.handleValidateInput(event.target.value)
                    }
                    value={this.state.inputValue}
                    placeholder="Search TV shows..."
                />
            </div>
        );
    }
}

export default withRouter(SearchShowsForm);
