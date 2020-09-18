<template>
    <div class="container">
        <h1>{{title}}</h1>
        <filterComponent />
    </div>
</template>

<script>
import filterComponent from '@/components/FilterComponent'
export default {
    
    components: {
        filterComponent
    },

    data: () => {
        return {
            title: 'GitHub'
        }
    },
    
}
</script>

<style lang="stylus" scoped>

.container 
    width 1180px
    margin 0 auto
</style>