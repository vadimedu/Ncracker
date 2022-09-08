import { createStore } from 'vuex'
import films from './modules/films'

export default createStore({
  modules: {
    films
}
})
