import React, { useEffect, useState } from 'react'
import styles from './avengers.module.css'
import logo from '../../images/logo.png'
import axios from 'axios'
import Characters from './CharacterTable'
import Search from './Search'

const hash = "b740077e4b32b18f10782e64cc09dbe4"
const apikey = "cfeebd5e05cea5c0225609a25bd904c7"

function Avengers() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('')


    useEffect(() => {
        const fetch = async () => {
            if(query===''){
                const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`)
                console.log(result.data.data.results)
                setItems(result.data.data.results)
                setIsLoading(false)
            }else{
                const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${apikey}&hash=${hash}`)
                console.log(result.data.data.results)
                setItems(result.data.data.results)
                setIsLoading(false)
            }
        }

        fetch()
    }, [query])

    return (
        <>
            <header className={styles.center}>
                <img src={logo} alt='logo' />
            </header>
            <Search search={(q) => setQuery(q)}></Search>
            <Characters items={items} isLoading={isLoading} />
        </>



    )


}

export default Avengers


// useEffect(() => {
//     setTimeout(() => {
//         setIsLoading(false)
//     }, 2500);
// })

// {isLoading == true ?
//     <Loading /> :
//     <Characters />
// }