import React from 'react';
import { useForm } from "react-hook-form";
import "./AddWord.css"

const AddWord = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
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