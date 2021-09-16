import { Container, TextField } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Definitions from './components/Definitions/Definitions';
import Header from './components/Header/Header';


function App() {
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState("en")

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

  // console.log("from state", meanings);

  useEffect(() => {
    dictionaryApi()
  }, [word, category])

  return (
    <div style={{ height: '100vh', backgroundColor: '#282c34', color: 'white' }}>
      <Container
        maxWidth="md" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
        {meanings &&
          (<Definitions word={word} category={category} meanings={meanings} />)
        }
      </Container>
    </div>
  );
}

export default App;
