import React from 'react'
import Loading from '../Loading'
import CharacterItem from './CharacterItem'
import styles from './avengers.module.css'

const CharacterTable = ({items,isLoading}) => {
    return (
        isLoading? <Loading/>:
        <section className={styles.contents}>
            {
                items.map(item=>(
                    <CharacterItem key={item.key} item={item}></CharacterItem>
                ))
            }
        </section>
    )
}

export default CharacterTable
