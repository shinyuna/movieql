import { getMovieList, getMovie, getSuggestionList } from "./db"

const resolvers = {
  Query: {
    getMovieList: (_, { limit, rating }) => getMovieList(limit, rating),
    getMovie: (_, { id }) => getMovie(id),
    getSuggestionList: (_, { id }) => getSuggestionList(id),
  },
  // Mutation: {
  //   addMovie: (_, { title, score }) => addMovie(title, score),
  //   deleteMovie: (_, { id }) => deleteMovie(id),
  // },
}

export default resolvers
