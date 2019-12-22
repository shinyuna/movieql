import { go, filter, first } from 'ffp-js'

export let movies = [
  {
    id: 1,
    name: "Prozen 2",
    score: 95
  },
  {
    id: 2,
    name: "FORD v FERRARI",
    score: 99
  },
  {
    id: 3,
    name: "Jumanji",
    score: 86
  },
  {
    id: 4,
    name: "Last Christmas",
    score: 88
  },
  {
    id: 5,
    name: "Love at Second Sight",
    score: 95
  }
]

export const getMovies = _ => movies

export const getById = id => go(
  movies,
  filter(movie => movie.id === id),
  first
)

export const deleteMovie = id => go(
  movies,
  filter(movie => movie.id !== id),
  arr => {
    if (movies.length > arr.length) {
      movies = arr
      return true
    } else {
      return false
    }
  }
)

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score
  }
  movies.push(newMovie)

  return newMovie
}