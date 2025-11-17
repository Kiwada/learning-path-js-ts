import axios from 'axios';
import type { Movie } from '../Types/Index';

const BASE_URL = 'http://localhost:3001';

export const getMovies = async (): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(`${BASE_URL}/movies`);
    return response.data;
}