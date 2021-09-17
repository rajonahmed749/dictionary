import React from 'react';
import { useForm } from "react-hook-form";
import "./AddWord.css"

const AddWord = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-card">
            <input type="text" name="bookName" placeholder="Enter Book Name" {...register("bookName", { required: true })} />
            <input type="text" name="authorName" placeholder="Enter Author Name" {...register("authorName", { required: true })} />
            <input type="number" name="price" placeholder="Enter Price" {...register("price", { required: true })} />
            {/* <input onChange={handleImage} type="file" /> */}
            <input type="submit" />
        </form>
    );
};

export default AddWord;