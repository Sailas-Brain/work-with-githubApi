<template>
    <div>
        <h2>Фильтр</h2>
            <repositoryFilter 
                :list="list"
            />
        <template v-for="(data, index) in list" >
            <repositoryLIst
                :key="index"
                :title="data.name"
                :date="data.created_at"
                :name="data.owner.login"
                :url="data.clone_url"
                :description="data.description"
            />
        </template>
    </div>    
</template>

<script>
import repositoryFilter from '@/components/blocks/RepositoryFilter'
import repositoryLIst from '@/components/blocks/RepositoryLIst'
export default {
    
    components: {
        repositoryFilter,
        repositoryLIst
    },

    mounted() {
        this.$store.dispatch('GET_DATA_REPOSITORIES');
    },
    
    computed: {
        list() {
            return this.$store.state.repositoryList;
        }
    }
}
</script>


<style lang="stylus" scoped>

</style>