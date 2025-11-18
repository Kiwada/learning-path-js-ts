import useFetchMovie from '../../Hooks/useFetchMovie.ts'
import styles from './MovieSection.module.css'
import InputText from '../InputText'
import { FaSearch } from 'react-icons/fa'
import FieldSet from '../FieldSet'
import Button from '../Button'
import MovieList from '../MovieList/Index.tsx'
import useFilterMovies from '../../Hooks/useFilterMovies.ts'




const MovieSection = () => {
    const { movies, isLoading, error } = useFetchMovie();
    const { searchTerm, handleSearch, setSearchTerm, filteredMovies } = useFilterMovies(movies);


    return (
        <main>
            <section className={styles.container}>
                <FieldSet variant="secondary">
                    <InputText
                        value={searchTerm}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
                        placeholder="Buscar filmes..." />
                    <Button variant="icon" onClick={handleSearch}>
                        <FaSearch />
                    </Button>
                </FieldSet>
                <h1 className={styles.titulo}>Em cartaz</h1>
                {isLoading && <p>Carregando filmes...</p>}
                {error && <p>Erro ao carregar filmes: {error}</p>}
                <MovieList movies={filteredMovies} />
            </section>
        </main>
    );
};

export default MovieSection;