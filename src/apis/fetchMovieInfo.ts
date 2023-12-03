const base_url = "https://omdbapi.com"
//baseUrl에 apikey랑 s:제목 page:숫자로  넣어주면 됨
export interface HeadersOption {
  title: string
  page: number
}
export const fetchMovieInfo = async (option: HeadersOption) => {
  const res = await fetch(
    `${base_url}/?apiKey=${import.meta.env.VITE_ENV_APIKEY}&s=${
      option.title
    }&page=${option.page}`
  )
  const data = await res.json()
  return data
}
