<script setup>
defineProps({
    listing: Object,
});

</script>

<template>
    <div>
        {{ listing.street + ' ' + listing.city + ', $' + listing.price }}
    </div>
</template>