<template>
    <div>
        <HeaderBlock/>
        <OptionsComponent/>
        <div class="borderContainer">
                <div class="borderLine"></div>
            </div>
        <div class="mainpageContainer">
            <LoaderBlock class="loader" v-if="loader"></LoaderBlock>
            <FilmInfo :filmlist="filmlist" :itemImage="itemImage" :stringGenres="stringGenres" :stringDirectors="stringDirectors"
                :stringActors="stringActors">
            </FilmInfo>
        </div>
    </div>
</template>
<script>
import FilmInfo from '@/components/FilmInfo.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';
import OptionsComponent from '@/components/OptionsComponent.vue';
import LoaderBlock from '@/components/UI/loaderBlock.vue';




export default {
  mounted(){
    this.$store.dispatch('FILMSLIST_GET');
  },
  computed:{
    loader(){
      return this.$store.getters.GETLOADER;
    },
    filmlist(){
      return this.$store.getters.FILMSLIST;
    },
    itemImage() {
        const listOfFilms = this.$store.getters.FILMSLIST;
        return listOfFilms.map(function(item) {

            console.log(`@img/${item.id}.png`)
            return require(`@/img/${item.id}.png`);
        })
    },
    stringGenres(){
        const listOfGenres = this.$store.getters.FILMSLIST;
        return listOfGenres.map(function(item) {
            const genre = item.genres;
            return genre.join(', ');
        })
    },
    stringDirectors(){
        const listOfDirectors = this.$store.getters.FILMSLIST;
        return listOfDirectors.map(function(item) {
            const directors = item.directors;
            if(directors){
                return directors.join(', ');
            }
            return 'отсутствует';
        })
    },
    stringActors(){
        const listOfActors = this.$store.getters.FILMSLIST;
        return listOfActors.map(function(item) {
            const actors = item.actors;
            if(actors){
                return actors.join(', ');
            }
            return 'отсутствуют';
        })
    }
  },
  components: {
    FilmInfo,
    HeaderBlock,
    HeaderBlock,
    OptionsComponent,
    OptionsComponent,
    LoaderBlock,
    LoaderBlock
}
}
</script>
<style>

</style>