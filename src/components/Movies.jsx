import MovieCard from './MovieCard';

const Movies = () => {
  const moviesList = [
    {
      title: 'The Dark Knight Rises',
      year: 2012,
      rating: 8.9,
      director: 'Christopher Nolan'
    },
    {
      title: 'Pulp Fiction',
      year: 1994,
      rating: 8.9,
      director: 'Quentin Tarantino'
    },
    {
      title: 'The Good, the Bad and the Ugly',
      year: 1966,
      rating: 9.2,
      director: 'Sergio Leone'
    },
    {
      title: 'The Godfather: Part III',
      year: 1974,
      rating: 9.2,
      director: 'Francis Ford Coppola'
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      rating: 8.9,
      director: 'Christopher Nolan'
    },
    {
      title: 'The Good, the Bad and the Ugly',
      year: 1966,
      rating: 9.2,
      director: 'Sergio Leone'
    },
    {
      title: 'The Godfather',
      year: 1972,
      rating: 9.2,
      director: 'Francis Ford Coppola'
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      rating: 9.2,
      director: 'Francis Ford Coppola'
    },
    {
      title: 'The Dark Knight Rises',
      year: 2012,
      rating: 8.9,
      director: 'Christopher Nolan'
    },
    {
      title: 'Pulp Fiction',
      year: 1994,
      rating: 8.9,
      director: 'Quentin Tarantino'
    },
    {
      title: 'The Good, the Bad and the Ugly',
      year: 1966,
      rating: 9.2,
      director: 'Sergio Leone'
    },
    {
      title: 'The Godfather: Part III',
      year: 1974,
      rating: 9.2,
      director: 'Francis Ford Coppola'
    }
  ];
  return (
    <div>
      <h2 className="text-4xl border-bottom-1">Movies</h2>
      <ul className="grid grid-cols-3">
        {moviesList.map(movie => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </ul>
    </div>
  );
};
export default Movies;
