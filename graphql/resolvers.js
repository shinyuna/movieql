import { getMovieList, getMovie, getSuggestionList } from "./db"

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovieList(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestionList(id),
  },
  // Mutation: {
  //   addMovie: (_, { title, score }) => addMovie(title, score),
  //   deleteMovie: (_, { id }) => deleteMovie(id),
  // },
}

export default resolvers
