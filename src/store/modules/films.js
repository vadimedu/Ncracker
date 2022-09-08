import axios from 'axios'

export default {
    state: {
        films: [],
        isLoader: false,
        film: null,

    },
    getters: {
        FILMSLIST: state => {
            return state.films;
        },
        GETLOADER: state => {
            return state.isLoader;
        },
        GET_FILM: state => {
            return state.film;
        }
    },
    mutations: {
        FILMSLIST_SET: (state, payload) => {
            state.films = (payload.data);
            state.isLoader = false;
        },
        ISLOADER_SET: (state) => {
            state.isLoader = true;
        },
        FILM_SET: (state, payload) => {
            state.film = state.films[payload]
        },
        FILM_SET_BY_NAME: (state) => {
            const collator = new Intl.Collator('en');
            let a = null;
            let b = null;
            state.films.sort((a, b) => a.title.localeCompare(b.title, 'en'));
            return collator.compare(a,b);
        },
        FILM_SET_BY_YEAR: (state) => {
            state.films.sort((a,b)=>
                a.year-b.year
            );
        }


    },
    actions:{
        FILMSLIST_GET: (context, payload) => {
                context.commit('ISLOADER_SET');
                     axios.get("https://floating-sierra-20135.herokuapp.com/api/movies")
                    .then(films => films.data)
                    .then(films => {
                    context.commit('FILMSLIST_SET', films)
                    })
                },
        FILM_GET: (context, payload) => {
            let film = payload
            context.commit('FILM_SET', film)
            console.log(film)
        },
        FILM_SORT_BY_NAME:(context) => {
            context.commit('FILM_SET_BY_NAME')

        },
        FILM_SORT_BY_YEAR:(context) => {
            context.commit('FILM_SET_BY_YEAR')

        }
    }
}
