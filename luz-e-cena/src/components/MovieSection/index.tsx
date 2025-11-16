import styles from './MovieSection.module.css'
import InputText from '../InputText'
import { FaSearch } from 'react-icons/fa'
import FieldSet from '../FieldSet'
import Button from '../Button'

const MovieSection = () => {
    return (
        <main>
            <section className={styles.container}>
                <FieldSet variant='secondary'>
                    <InputText placeholder='Buscar Filmes...' />
                    <Button variant='icon'>
                        <FaSearch />
                    </Button>
                </FieldSet>
            </section>
        </main>
    )
}

export default MovieSection
