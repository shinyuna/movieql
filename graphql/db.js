import axios from "axios"
import { go, filter, first } from "ffp-js"

const movie = axios.create({
  baseURL: "https://yts.mx/api/v2/",
})

const MOVIE_LIST_URL = (params) => movie.get("list_movies.json", { params: params })
const MOVIE_URL = (params) => movie.get("movie_details.json", { params: params })
const SUGGESTIONS_MOVIE_URL = (params) => movie.get("movie_suggestions.json", { params: params })

export const getMovieList = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await MOVIE_LIST_URL({
    limit: limit,
    minimum_rating: rating,
  })

  return movies
}

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await MOVIE_URL({ movie_id: id })

  return movie
}

export const getSuggestionList = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await SUGGESTIONS_MOVIE_URL({ movie_id: id })

  return movies
}

// export let movies = [
//   {
//     id: 1,
//     name: "Prozen 2",
//     score: 95,
//   },
//   {
//     id: 2,
//     name: "FORD v FERRARI",
//     score: 99,
//   },
//   {
//     id: 3,
//     name: "Jumanji",
//     score: 86,
//   },
//   {
//     id: 4,
//     name: "Last Christmas",
//     score: 88,
//   },
//   {
//     id: 5,
//     name: "Love at Second Sight",
//     score: 95,
//   },
// ]

// export const getMovies = (_) => movies

// export const getById = (id) =>
//   go(
//     movies,
//     filter((movie) => movie.id === id),
//     first
//   )

// export const deleteMovie = (id) =>
//   go(
//     movies,
//     filter((movie) => movie.id !== id),
//     (arr) => {
//       if (movies.length > arr.length) {
//         movies = arr
//         return true
//       } else {
//         return false
//       }
//     }
//   )

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: movies.length + 1,
//     name,
//     score,
//   }
//   movies.push(newMovie)

//   return newMovie
// }
