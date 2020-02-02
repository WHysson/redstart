export default {
    state: {
        films: [],        
    },
    mutations: {
        updateFilms(state, films) {
            state.films = films
        }
    },
    actions: {
        async getFilms({commit}){
            const res = await fetch('https://admin.lmndev.ml/api/public/films')
            let films = await res.json()
            commit('updateFilms', films)
        },
        
    },
    getters:{
        allFilms(state) {
            return state.films
        }
    },
}