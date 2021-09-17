import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import axios from 'axios';
import Header from './Header';
import Definitions from './Definitions';

const Home = ({ LightMode }) => {
    const [word, setWord] = useState("");
    const [meanings, setMeanings] = useState([]);
    const [category, setCategory] = useState("en");

    const dictionaryApi = async () => {
        try {
            const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
            // console.log("actual data", data);
            setMeanings(data.data)
        }
        catch (error) {
            console.log(error);
        }
    }

    console.log("from state", meanings);

    useEffect(() => {
        dictionaryApi()
    }, [word, category])
    return (
        <Container
            maxWidth="md" style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                justifyContent: "space-evenly"
            }}
        >
            <Header
                category={category}
                setCategory={setCategory}
                word={word}
                setWord={setWord}
                LightMode={LightMode}
            />
            {meanings &&
                (<Definitions
                    word={word}
                    category={category}
                    meanings={meanings}
                    LightMode={LightMode}
                />)
            }
        </Container>
    );
};

export default Home;