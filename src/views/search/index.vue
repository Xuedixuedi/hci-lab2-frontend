<template>
    <div class="dashboard-container">
        <div class="dashboard-text">Picture Search!</div>
        <form>
            <input type="file" name="file" required />
            <input type="submit" value="Search!" />
        </form>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "Search",
    computed: {
        ...mapGetters(["name"])
    }
}
</script>

<style lang="scss" scoped>
.dashboard {
    &-container {
        margin: 30px;
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
</style>
