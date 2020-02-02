export default {
    state: {
        filters: [],
    },
    mutations: {
        updateFilters(state, filters) {
            state.filters = filters
        }
    },
    actions: {
        async fetchFilters(ctx){
            const res = await fetch('https://admin.lmndev.ml/api/public/films/filters/15')
            let filters = await res.json()
            ctx.commit('updateFilters', filters)
        }        
    },
    modules: {
    },
    getters:{
        allFilters(state) {
            return state.filters
        },
        ageRatings(state) {
            return state.filters["age_ratings"]

        },
        genres(state) {
            return state.filters["genres"] //как вернуть title?
        },
        dates(state) {
            return state.filters["dates"]
        },
        time(state) {
            return state.filters["seances"]
        }
    },
}