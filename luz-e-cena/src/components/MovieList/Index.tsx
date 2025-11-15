import styles from "./MovieList.module.css"
import CardMovie from "../CardMovie/index.tsx";
import { type Movie } from "../../Types/Index.tsx";

interface MovieListProps {
    movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
    return (
        <ul className={styles.lista}>
            {movies.map((movie) => (
                <CardMovie key={movie.id} {...movie} />
            ))}
        </ul>
    );
};


export default MovieList
