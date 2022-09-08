<template>
    <div class="timeBlock">
        {{ratingImdb}}
        <img class="imgFilmLine" src="../../img/filmline.png" alt="">
    </div>
</template>
<script>

export default {
computed:{
    ratingImdb(){
            const rating = this.$store.getters.GET_FILM;
            console.log (rating.rating_imdb)
            if(rating.rating_imdb){
                return `Rating IMBD: ${rating.rating_imdb}`;
            }
            return 'рейтинг отсутствует';
}
}
}
</script>
<style>

</style>