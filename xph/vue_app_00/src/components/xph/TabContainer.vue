<template>
    <div>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell title="12324"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 10" :key="n" title="12324"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell title="12324"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <mt-cell title="12324"></mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>
