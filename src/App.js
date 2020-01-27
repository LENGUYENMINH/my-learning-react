import React from 'react';
import './App.css';
import Notes from './notes/Notes';

import {ThemeContext, themes} from './context/theme-context';
import ThemedTogglerButton from './context/ThemedTogglerButton';

import FragmentFancyButton from './refs/FancyButton';
import CurrencyConvert from "./currency/CurrencyConvert";

import testMemoize from "./memoize/memoize";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }

    toggleTheme = () => {
        const newTheme = this.state.theme === themes.dark ? themes.light : themes.dark;
        this.setState({theme: newTheme});
    };

    componentDidMount() {
        testMemoize();
    }

    render() {
        const {...valueContext} = this.state;

        return (
            <div className="App">
                <h2>My Learning React</h2>
                <hr/>

                <Notes/>
                <hr/>

                <ThemeContext.Provider value={valueContext}>
                    <ThemedTogglerButton/>
                </ThemeContext.Provider>

                <hr/>
                <br/>
                <FragmentFancyButton/>

                <hr/>
                <CurrencyConvert/>
            </div>
        );
    }
}

export default App;
