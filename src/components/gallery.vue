<template>
<div class="container">
    <div class="row justify-content-center">
    <div class="col-md-8 text-center">
        <h1 class="display-4">{{ title }}</h1>
        <p class="lead">Explore our collection of stunning photography, from portraits to landscapes and special events.</p>
    </div>
    </div>

    <div class="row mt-5">
    <div class="col-md-4">
        <img :src="require('@/assets/images/portrait.jpg')" class="img-fluid" alt="Elegant Portrait Photography">
        <p class="mt-2">Project 1: Elegant Portrait Photography</p>
    </div>
    <div class="col-md-4">
        <img :src="require('@/assets/images/landscape.jpg')" class="img-fluid" alt="Breathtaking Landscape Shots">
        <p class="mt-2">Project 2: Breathtaking Landscape Shots</p>
    </div>
    <div class="col-md-4">
        <img :src="require('@/assets/images/event.jpg')" class="img-fluid" alt="Capturing Special Events">
        <p class="mt-2">Project 3: Capturing Special Events</p>
    </div>
    </div>

    <div class="row mt-5">
    <div class="col-md-4">
        <img :src="require('@/assets/images/still-life.jpg')" class="img-fluid" alt="Creative Still Life Photography">
        <p class="mt-2">Project 4: Creative Still Life Photography</p>
    </div>
    <div class="col-md-4">
        <img :src="require('@/assets/images/dynamic.jpg')" class="img-fluid" alt="Stunning Wedding Photography">
        <p class="mt-2">Project 5: Stunning Dynamic Photography</p>
    </div>
    <div class="col-md-4">
        <img :src="require('@/assets/images/event-coverage.jpg')" class="img-fluid" alt="Dynamic Event Coverage">
        <p class="mt-2">Project 6: Dynamic Event Coverage</p>
    </div>
    </div>
</div>
</template>


<script>
export default {
name: 'gallery',
data() {
return {
title: 'Our Gallery'
}
}
}
</script>

<style scoped>
img {
border: 2px solid #ddd;
border-radius: 8px;
width: 300px;
height: 300px;
}
</style>
