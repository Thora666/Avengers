import React, { useState } from 'react'
import styles from './avengers.module.css'

const Search = ({ search }) => {
    const [content, setContent] = useState('');
    const onSearch = (q) => {
        setContent(q)
        search(q)
    }
    return (
        <section className={styles.search}>
            <form>
                <input type="text"
                    className={styles["form-control"]}
                    placeholder='Find a character'
                    autoFocus
                    onChange={(e) => onSearch(e.target.value)}
                    value={content}
                />
            </form>
        </section>
    )
}

export default Search
