<template>
    <div class="container">
        <h1>{{title}}</h1>
        <filterComponent />
    </div>
</template>

<script>
import filterComponent from '@/components/FilterComponent'
export default {
    data: () => {
        return {
            title: 'GitHub'
        }
    },
    components: {
        filterComponent
    },
}
</script>

<style lang="stylus" scoped>

.container 
    width 1180px
    margin 0 auto
</style>