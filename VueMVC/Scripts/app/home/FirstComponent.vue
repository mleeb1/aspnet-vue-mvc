<template>
    <div class="time">
        <h2>Hello 3</h2>
        {{ time }}
    </div>
</template>
<script>
    export default {
        props: {
            time: {
                type: Object,
                required: true, 
            }
        }
    }
</script>
<style>
    .time {
        color: #F44336;
    }
</style>