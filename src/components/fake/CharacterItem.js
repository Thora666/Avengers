import React from 'react'
import styles from './avengers.module.css'

const CharacterItem = ({item}) => {
    return (
        <div className={styles.content}>
            <div className={styles["content-inner"]}>
                <div className={styles["content-front"]}>
                    <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt='' />
                </div>
                <div className={styles["content-back"]}>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Name:</strong> {item.name}
                        </li>
                        <li>
                            <strong>Description:</strong> {item.description}
                        </li>
                    </ul>
                </div>
            </div>
        </div>  
    )
}

export default CharacterItem
