<script setup>
    import { Link } from '@inertiajs/inertia-vue3';

    defineProps({
        message: String,
    })
</script>

<template>
    <div>Index

    </div>
    <h1>OKkkkk</h1>
    <h2>{{ message }}</h2>
    <Link href="/hello">Go to show</Link>
</template>