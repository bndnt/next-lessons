import { getPhotos } from '@/services/photos';
async function Photos() {
  const photos = await getPhotos();
  return (
    <div>
      <ul>
        {photos.slice(0, 5).map(photo => (
          <li key={photo.id}>
            <img src={photo.url} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Photos;
