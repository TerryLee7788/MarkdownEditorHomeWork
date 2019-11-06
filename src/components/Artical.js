import React, { useState, useEffect } from 'react';
import {
    Link,
    useParams,
    useHistory
} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import Service from '../libs/Service';

import styles from './Artical.module.css';

function Artical () {

    const { id } = useParams();
    const history = useHistory();
    const [subject, setSubjectValue] = useState('');
    const [content, setContentValue] = useState('');

    useEffect(() => {

        try {

            const updateArtical = (articalId) => {

                const currentData = Service.fetchArtical(articalId),
                    { subject, content } = currentData;

                setSubjectValue(subject);
                setContentValue(content);

            };

            updateArtical(+id);

        }
        catch (error) {

            history.push('/');

        }

    });

    return (
        <>
            <h1>
                {subject}
                <Link
                    to={`/editor/${id}`}
                    className={styles.link}
                >
                    <span
                        className={styles.text}
                    >(Edit)</span>
                </Link>
            </h1>
            <ReactMarkdown
                source={content}
            />
        </>
    );

}

export default Artical;
