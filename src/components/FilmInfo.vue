<template>

        <div @click="findFilm(idx)" class="filmContainer" v-for="item, idx in itemImage" key="item.id" value="idx">
            <div class="imgFilmCard" ><img class="imgCard" :src="item" alt="image"> </div>
        <div class="filmDescription">
            <span class="filmTitle">{{filmlist[idx].title}}</span>
            <span class="filmYearGenre">{{filmlist[idx].year}}, {{stringGenres[idx]}}</span>
            <span class="filmYearGenre">режиссёр: {{stringDirectors[idx]}} </span>
            <span class="filmYearGenre">актеры: <span class="actorsList">{{stringActors[idx]}}</span></span>
        </div>
    </div>

</template>
<script>
export default {
    props: {
        filmlist: Array,
        itemImage: Array,
        stringGenres: null,
        stringDirectors: null,
        stringActors: null,

    },
  methods: {
    findFilm(idx){
        console.log(idx)
        this.$store.dispatch('FILM_GET',idx);
        this.$router.push('/film')
    }
  },
}
</script>
<style>

</style>