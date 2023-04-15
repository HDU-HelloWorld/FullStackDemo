<template>
    <div class="page">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* flex-direction: column; */
}

.box {
    width: 50px;
    height: 50px;
    margin: 10px;
    background-color: #000;
}
</style>
