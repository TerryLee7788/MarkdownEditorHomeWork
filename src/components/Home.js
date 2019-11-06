import React, { useState, useEffect } from 'react';
import {
    Link
} from 'react-router-dom';
import Service from '../libs/Service';

import styles from './Home.module.css';

function Home () {

    const [data, setListData] = useState([]);

    const getArticalListData = () => {

        const response = Service.getArticalList();

        setListData(response.data);

    };

    useEffect(() => {

        getArticalListData();

    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {
                    data
                        ? (
                            data.map((obj) => (
                                <li
                                    key={obj.id}
                                    title={obj.subject}
                                >
                                    <Link
                                        to={`/artical/${obj.id}`}
                                        className={styles.link}
                                    >{obj.subject}</Link>
                                    <Link
                                        to={`/editor/${obj.id}`}
                                        className={styles.link}
                                    >(Edit)</Link>
                                </li>
                            ))
                        )
                        : (null)
                }
            </ul>
        </div>
    );

}

export default Home;