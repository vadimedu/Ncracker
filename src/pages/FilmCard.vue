<template>
    <div >
        <HeaderBlock></HeaderBlock>
        <div class="borderContainer">
        <div  class="upperOptions">
            <img class="backArrow" src="../img/backstep.png" alt="">
            <span @click="backToMainPage" class="backLink">Назад к списку</span>
            </div>
        </div>
            <div class="borderContainer">
                <div class="borderLine"></div>
            </div>
            <loaderBlock class="loader" v-if="loader"></loaderBlock>
        <div v-if="filmUnit" class="filmContainer">
            <div class="imgFilmCardUnit" ><img class="imgCardUnit" :src="itemImage" alt="image"> </div>
            <div class="filmDescription">
                <timeBlock></timeBlock>
            <span class="filmTitle">{{filmUnit.title}}</span>
            <span class="filmYearGenre">{{filmUnit.year}}, {{stringGenres}}</span>
            <span class="filmYearGenre">режиссёр: {{stringDirectors}} </span>
            <span class="filmYearGenre">актеры: <span class="actorsList">{{stringActors}}</span></span>
            <span class="filmFullDescription">{{filmUnit.description ? filmUnit.description : 'описание отсутствует'}}</span>
        </div>

    </div>
    <NotFoundPage v-if="!filmUnit"></NotFoundPage>
    </div>
</template>
<script>
import HeaderBlock from '@/components/HeaderBlock.vue';
import timeBlock from '@/components/UI/timeBlock.vue';
import NotFoundPage from './NotFoundPage.vue';
import loaderBlock from '@/components/UI/loaderBlock.vue';

export default {
    computed: {
    loader(){
      return this.$store.getters.GETLOADER;
    },
        filmUnit() {
            const description = this.$store.getters.GET_FILM;
            return description;
        },
        itemImage() {
            const itemId = this.$store.getters.GET_FILM;
            console.log(itemId);
            return require(`@/img/${itemId.id}.png`);
        },
        stringGenres() {
            const listOfGenres = this.$store.getters.GET_FILM;
            const genre = listOfGenres.genres;
            return genre.join(", ");
        },
        stringDirectors() {
            const listOfDirectors = this.$store.getters.GET_FILM;
            const directors = listOfDirectors.directors;
            if (directors) {
                return directors.join(", ");
            }
            return "отсутствует";
        },
        stringActors() {
            const listOfActors = this.$store.getters.GET_FILM;
            const actors = listOfActors.actors;
            if (actors) {
                return actors.join(", ");
            }
            return "отсутствуют";
        },
    },
    methods: {
        backToMainPage(){

            this.$router.push('/')
        }
    },
    components: { HeaderBlock, timeBlock, NotFoundPage, loaderBlock }
}
</script>
<style >

</style>