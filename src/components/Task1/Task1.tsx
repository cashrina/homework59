import Task1Form from "./Task1Form.tsx";
import {useState} from "react";
import {Movie} from "../../types.ts";

const Task1 = () => {
    const[movies, setMovies] = useState<Movie[]>([]);

    const addMovie = (item: Movie) => {
        setMovies((prev)=> [...prev, item]);
    };

    return (
        <div className="container">
            Task 1
            <Task1Form onSubmit={addMovie} />
        </div>
    );
};

export default Task1;