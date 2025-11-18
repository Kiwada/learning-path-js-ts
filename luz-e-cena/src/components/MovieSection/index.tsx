import useFetchMovie from '../../Hooks/useFetchMovie.ts'
import styles from './MovieSection.module.css'
import InputText from '../InputText'
import { FaSearch } from 'react-icons/fa'
import FieldSet from '../FieldSet'
import Button from '../Button'
import MovieList from '../MovieList/Index.tsx'



const MovieSection = () => {
    const { movies, isLoading, error } = useFetchMovie();

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