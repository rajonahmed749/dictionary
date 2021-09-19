import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import "./AddWord.css";
import { useHistory, useLocation } from 'react-router-dom';

const AddWord = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [word, setWord] = useState({});
    const history = useHistory();
    const onSubmit = data => {
        
        const wordData = {
            word: data.word,
            wordMean: data.wordMean,
            synonym: data.synonym,
            user: loggedInUser.name,
            userEmail: loggedInUser.email,
        }
        setWord(wordData)
        const url = `https://mysterious-ridge-35734.herokuapp.com/addWord`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(wordData),
        })
            .then(res => {
                afterSuccess(`${data.word}`)
            })
            .catch((error) => {
                alert('Sorry, try again');
            });
    }
    const afterSuccess = (word) => {
        var person = prompt("Your word is added correctly, see your word?", `${word}`);
        if (person != null) {
            history.push('/learning')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-card">
            <input type="text" name="word" placeholder="Type a word" {...register("word", { required: true })} />
            <input type="text" name="wordMean" minlength="3" placeholder="Word meaning" {...register("wordMean", { required: true })} />
            <input type="text" name="synonym" minlength="3" placeholder="Word's synonym" {...register("synonym", { required: true })} />
            <input type="submit" value="Done" />
        </form>
    );
};

export default AddWord;