import { defineStore } from "pinia"
import { fetchMovieInfo } from "@/apis/fetchMovieInfo"
import { HeadersOption } from "@/apis/fetchMovieInfo"
export type Movies = Movie[]
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movies: [] as Movies
  }),
  actions: {
    async fetchMovies(options: HeadersOption) {
      const data = await fetchMovieInfo(options)
      console.log(data.Search)
      this.movies = data.Search
    }
  }
})
