<template>
    <div class="optionsBlockContainer">
            <div class="optionsContainer">
                <span>Фильмы</span>
                <div class="bottomOptions">
                    <div @click="checkSetLeft" v-if="checkedLeft" class="checkmark"> <img src="../img/Path.png" alt=""></div>
                    <div @click="checkSetLeft" v-if="!checkedLeft" class="checkmarkNotChecked"></div>
                    <span>Сортировать по имени</span>
                    <div @click="checkSetRight" v-if="checkedRight"  class="checkmark"><img src="../img/Path.png" alt=""></div>
                    <div @click="checkSetRight" v-if="!checkedRight" class="checkmarkNotChecked"></div>
                    <span>Сортировать по году</span>
                </div>
            </div>
    </div>
</template>
<script>
import customCheckBox from './UI/customCheckBox.vue';
import loaderBlockVue from './UI/loaderBlock.vue';
import LoaderBlock from './UI/loaderBlock.vue';
import timeBlock from './UI/timeBlock.vue';
import TimeBlock from './UI/timeBlock.vue';

export default {
    data:()=>({
        checkedLeft: false,
        checkedRight: false,
    }),
components: {
    customCheckBox,
    loaderBlockVue,
    LoaderBlock,
    timeBlock,
    TimeBlock
},
computed:{
    loader(){
      return this.$store.getters.GETLOADER;
    },

},
methods:{
    checkSetLeft(){
        this.checkedLeft = !this.checkedLeft;
        this.checkedRight = false;
        this.sortByName();
    },
    checkSetRight(){
        this.checkedRight = !this.checkedRight;
        this.checkedLeft = false;
        this.sortByYear();
    },
    sortByName(){
        console.log(this.checkedLeft)
        if(this.checkedLeft){
            this.$store.dispatch('FILM_SORT_BY_NAME');
        }
    },
    sortByYear(){
        console.log(this.checkedRight)
        if(this.checkedRight){
            this.$store.dispatch('FILM_SORT_BY_YEAR');
        }
    }

}
}
</script>
<style>

</style>