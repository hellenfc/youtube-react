// getting React.Component as a variable component
import React, { Component } from 'react';

// Class Component should be used when functionality is needd
class SearchBar extends Component {
    // A contructor is needed to initialie state
    constructor(props) {
        // Calling prop from component
        super(props);


        this.state = { term: '' }
    }
    // Should return a jsx
    render() {
        // Always manipulate state this ways to change its value
        return (
            <div className="search-bar" >
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

//  Functional COmponen
// const SearchBar = () => {
//     return <input />
// };

export default SearchBar;