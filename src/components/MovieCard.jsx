import { useState } from 'react';
import Button from './Botton';

const MovieCard = ({ title, year, director }) => {
  const [isFavorited, setFavorited] = useState(false);
  const [isHidden, setHidden] = useState(false);

  const onFavoriteClick = () => {
    console.log('Favorite clicked!');
    setFavorited(!isFavorited);
  };

  const onHideClick = () => {
    console.log('Hide clicked!');
    setHidden(!isHidden);
  };

  return (
    <div className={`border p-3 m-3 text-lg ${isFavorited ? 'bg-green-900' : ''} ${isHidden ? 'opacity-5' : ''}`}>
      <h3 className="text-3xl mb-4">{title}</h3>
      <ul>
        <li className="flex">
          <span className="text-xl">Year:</span>
          <span>{year}</span>
        </li>
        <li className="flex">
          <span className="text-xl">Director:</span>
          <span>{director}</span>
        </li>
      </ul>
      <div className="actions">
        <Button onClick={onFavoriteClick}>Favorite</Button>
        <Button onClick={onHideClick}>Hide</Button>
      </div>
    </div>
  );
};

export default MovieCard;
