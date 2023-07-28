<script setup>
    import { Link } from '@inertiajs/inertia-vue3'
    import { ref } from 'vue';

    const timer = ref(0);
    setInterval(() => timer.value++, 1000);

</script>


<template>
    <Link href="/">Main page</Link>&nbsp;
    <Link href="/hello">Show page</Link>
    <div>-------------------------</div>
    <div>{{ timer }}</div>
    <div>-------------------------</div>

    <slot></slot>
</template>