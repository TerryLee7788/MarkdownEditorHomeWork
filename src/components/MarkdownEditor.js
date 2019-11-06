import React, { useState, useEffect } from 'react';
import Editor from 'for-editor';
import {
    useHistory,
    useParams
} from 'react-router-dom';

import Service from '../libs/Service';
import styles from './MarkdownEditor.module.css';

function MarkdownEditor () {

    const history = useHistory();
    const { id } = useParams();
    const [subject, setSubjectValue] = useState('');
    const [content, setContentValue] = useState('');

    const handleArticalSaved = () => {

        const _id = new Date().getTime();

        let list = window.localStorage.getItem('list') ?
            JSON.parse(window.localStorage.getItem('list')) :
            { data: [] };

        const articleData = {
            id: _id,
            subject,
            content
        };

        // edit artical
        if (id) {

            const currentArticalDataIndex = list.data.map((obj) => (obj.id)).indexOf(+id);

            list.data[currentArticalDataIndex] = articleData;
            articleData[id] = id;

        }
        // new artical
        else {

            list.data.push(articleData);

        }

        window.localStorage.setItem('list', JSON.stringify(list));

        history.push('/');

    };

    useEffect(() => {

        try {

            const updateArtical = (articalId) => {

                const currentData = Service.fetchArtical(articalId),
                    { subject, content } = currentData;

                setSubjectValue(subject);
                setContentValue(content);

            };

            // edit
            if (id) {

                updateArtical(+id);

            }
            // reset
            else {

                setSubjectValue('');
                setContentValue('');

            }

        }
        catch (error) {

            history.push('/');

        }

    }, [history, id]);

    return (
        <div>
            <h1>Markdown editor</h1>
            <div
            className={styles.subject}
            >
                <label>
                    Subject: <input type="text" value={subject} onChange={(e) => {

                    setSubjectValue(e.target.value)

                    }} />
                </label>
            </div>
            <Editor
                value={content}
                onChange={setContentValue}
                language="en"
                onSave={handleArticalSaved}
                placeholder="開始編輯..."
            />
        </div>
    );

}

export default MarkdownEditor;