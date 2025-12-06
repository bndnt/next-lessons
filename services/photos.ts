import axios from 'axios';
import type { Photo } from '@/types/photo';
export async function getPhotos() {
  const { data } = await axios.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  return data;
}
