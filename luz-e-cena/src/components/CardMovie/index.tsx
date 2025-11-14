import styles from "./CardMovie.module.css"
import Tag from "../Tag/Index";


type Categoria = "2D" | "3D";

type Censura = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";


interface CardMovieProps {
  src: string;
  alt: string;
  titulo: string;
  categoria: Categoria;
  censura: Censura;
  genero: string;
  duracao: number;
}

const CardMovie = (props : CardMovieProps) => {
    const { alt, src , titulo, genero, categoria , censura, duracao} = props;
  return (
    <li className={styles.card}>
    <img src={src} alt={alt}/>
    <div className={styles.container}>
        <h3>{titulo}</h3>
        <div className={styles.informacoes}>
        <div className={styles.linha1}>
            <p>{genero}</p>
            <Tag value={categoria}/>
            <div className={styles.linha2}>
                <p>{duracao}</p>
            <Tag value={censura}/>
        </div>
      </div>
      </div>
    </div>
    </li>
  );
};

export default CardMovie
