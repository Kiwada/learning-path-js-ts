import { useEffect, useState } from 'react'
import styles from './MovieSection.module.css'
import InputText from '../InputText'
import { FaSearch } from 'react-icons/fa'
import FieldSet from '../FieldSet'
import Button from '../Button'
import { getMovies } from '../../api/index.tsx'
import MovieList from '../MovieList/Index.tsx'
import { type Movie } from '../../Types/Index.tsx';



const MovieSection = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const fetchMovies = async () => {
        try {
            const movies = await getMovies();
            setMovies(movies);

        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
        }
    }
    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <main>
            <section className={styles.container}>
                <FieldSet variant="secondary">
                    <InputText placeholder="Buscar filmes..." />
                    <Button variant="icon">
                        <FaSearch />
                    </Button>
                </FieldSet>
                <h1 className={styles.titulo}>Em cartaz</h1>
                <MovieList movies={movies} />
            </section>
        </main>
    );
};

export default MovieSection;