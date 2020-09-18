<template>
    <div class="filter-container">
        <div class="sort">
            <div class="col" @click="handlerClickId('id')">
                <span>Сортировать по ID</span>
            </div>
            <div class="col" @click="handlerClickId('updated')">
                <span>Сортировать по дате обновления</span>
            </div>
            <div class="col" @click="handlerClickId('created')">
                <span>Сортировать по дате создания</span>
            </div>
        </div>
        <div class="filter">
            <input type="text" @input="handlerInput(valueInput)" v-model="valueInput" placeholder="Введите название">
            <div v-if="hide && list" class="list">
                <ul>
                    <template v-for="(item, index) in list">
                        <li :key="index" @click="handlerClick(item.name)" >{{item.name}}</li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        list: {
            type: Array,
            default: () => ([]),
        }
    },

    data: () => {
        return {
            hide: false,
            valueInput: ''
        }
    },

    methods: {
        handlerClickId(str) {
            this.$store.dispatch('GET_DATA_REPOSITORIES', str);
        },
        handlerInput(str) {
            this.hide = true;
            this.$store.dispatch("GET_DATA_FILTER", str);
            if(this.valueInput) {
                this.$store.dispatch('GET_DATA_REPOSITORIES');
                this.hide = false;
            }
        },
        handlerClick(name) {
            this.$store.dispatch("GET_DATA_FILTER", name);
            this.valueInput = name;
            this.hide = false;
        }
    }
}
</script>

<style lang="stylus" scoped>
.filter-container
    display flex
    justify-content space-between
    align-items center
    .sort 
        display flex
        .col
            border 1px solid #000
            padding 10px 20px
            cursor pointer
            border-right none
            &:hover  
                background #c5c5c5
            &:last-child 
                border-right 1px solid #000
            
    .filter 
        position relative
        input 
            font-family sans-serif
            padding 5px 10px
        .list 
            position absolute 
            top 29px
            left 0
            background #fff
            border 1px solid #000
            width 100%
            padding 0 0 0 0
            box-sizing border-box
            ul 
                margin 0 0 0 0
                padding 0 0 0 0
            li
                list-style none
                padding 5px 0 5px 10px
                cursor pointer
                &:hover  
                    background #c5c5c5
</style>