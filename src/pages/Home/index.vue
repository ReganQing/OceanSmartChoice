<template>
    <div>
        <TypeNav/>
        <RecommendProducts/>
        <RankList/>
        <GuessLike/>
        <FloorPart/>
        <FloorPart/>
        <BrandPart/>
    </div>
</template>

<script>
import RecommendProducts from '@/pages/Home/Recommend'
import RankList from '@/pages/Home/Rank'
import GuessLike from '@/pages/Home/Like'
import FloorPart from '@/pages/Home/Floor'
import BrandPart from '@/pages/Home/Brand'
    export default {
        name: 'HomePage',
        components: {
            RecommendProducts,
            RankList,
            GuessLike,
            FloorPart,
            BrandPart,
            
        }
    }
</script>

<style scoped>

</style>