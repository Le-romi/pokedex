import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  maxContentLength: Infinity,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPokemon() {
    return apiClient.get('pokemon?limit=100000&offset=0')
  },

  //t'es rendu la
  getPokemonDescription(strId) {
    return apiClient.get('/pokemon/', strId)
  }
}