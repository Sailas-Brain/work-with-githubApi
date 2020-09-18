<template>
    <div class="wrapper-repository">
        <div class="title">
            <h3>{{name}}</h3>
            <span>{{getDate}}</span>
        </div>
        <div>
            <h2>
                <a :href="url" target="_blank">{{title}}</a>
            </h2>
            <div class="description">
                <p>{{description}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            default: '',
        },

        name: {
            type: String,
            default: '',
        },

        url: {
            type: String,
            default: '',
        },

        description: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        }
    },
    computed: {
        getDate() {
            const date = this.date.replace(/[A-Z]/gim,' ').replace(/[-]/gim,'.');
            return date
        }
    },
    methods: {

    },
}
</script>

<style lang="stylus" scoped>
.wrapper-repository 
    border 1px solid black 
    padding 0px 20px
    margin-top 10px
    h3 
        font-family sans-serif
        text-transform uppercase
        margin 0 0 0 0
    .title {
        display flex
        justify-content space-between
        align-items center
        margin-top 18px
    }
</style>