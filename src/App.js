import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import MarkdownEditor from './components/MarkdownEditor';

import Home from './components/Home';
import Artical from './components/Artical';
import styles from './App.module.css';

function App () {

    return (
        <Router>
            <div className={styles.App}>
                <ul
                    className={styles.navLink}
                >
                    <li>
                        <Link
                            to="/"
                        >Home</Link>
                    </li>
                    <li>
                        <Link
                            to="/editor"
                        >MarkdownEditor</Link>
                    </li>
                </ul>
                <Switch>
                    <Route
                        exact
                        path="/"
                    >
                        <Home />
                    </Route>
                    <Route
                        exact
                        path="/artical/:id"
                    >
                        <Artical />
                    </Route>
                    <Route
                        exact
                        path="/editor"
                    >
                        <MarkdownEditor />
                    </Route>
                    <Route
                        exact
                        path="/editor/:id"
                    >
                        <MarkdownEditor />
                    </Route>
                </Switch>
            </div>
        </Router>
    );

}





export default App;
