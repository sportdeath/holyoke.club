<script setup lang="ts">
import MapView from "./MapView.vue";
import { RouterView } from "vue-router";
</script>

<template>
    <main>
        <MapView />
        <RouterView />
    </main>
</template>

<style>
main {
    display: flex;
    flex-direction: row;
    height: 100dvh;
}
</style>
