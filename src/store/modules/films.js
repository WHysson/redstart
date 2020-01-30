export default {
    state: {
        films: []
    },
    mutations: {
        updateFilms(state, films) {
            state.films = films
        }
    },
    actions: {
        async fetchFilms(ctx){
            const res = await fetch('https://admin.lmndev.ml/api/public/films')
            let films = await res.json()
            ctx.commit('updateFilms', films)
        },
        
    },
    modules: {
    },
    getters:{
        allFilms(state) {
            return state.films
        }
    },
}