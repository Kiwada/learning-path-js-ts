import React from 'react'
import styles from "./MovieList.module.css"
import CardMovie from "../CardMovie/index.tsx";

type Categoria = "2D" | "3D";

type Censura = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";


interface Movie {
    id: number;
    src: string;
    alt: string;
    titulo: string;
    categoria: Categoria;
    censura: Censura;
    genero: string;
    duracao: number;
}

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
