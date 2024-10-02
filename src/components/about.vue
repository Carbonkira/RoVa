<template>
<div class="container">
    <div class="row justify-content-center">
    <div class="col-md-8 text-center">
        <h1 class="display-4">{{ title }}</h1>
        <p class="lead">
        Our photography journey began in 2021, capturing life's precious moments.
        </p>
        <p>
        From weddings to landscapes, our mission is to provide stunning imagery that tells a story. We believe that every picture holds a memory, and we strive to preserve those memories with our craft.
        </p>
        
        <button class="btn custom-btn mt-3" @click="toggleDetails">
        {{ showDetails ? 'Show Less' : 'Read More' }}
        </button>

        <div v-if="showDetails" class="mt-4">
        <div class="row">
            <div class="col-md-4 text-center">
            <h3>Our Vision</h3>
            <p>To capture and share the beauty of the world through our lens.</p>
            </div>
            <div class="col-md-4 text-center">
            <h3>Our Mission</h3>
            <p>We aim to create breathtaking photographs that resonate with people.</p>
            </div>
            <div class="col-md-4 text-center">
            <h3>Our Values</h3>
            <p>Creativity, Passion, and Client Satisfaction guide our work.</p>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
name: 'about',
data() {
    return {
    title: 'About Us',
    showDetails: false
    };
},
methods: {
    toggleDetails() {
    this.showDetails = !this.showDetails;
    }
}
}
</script>

<style scoped>
h1 {
color: #570a52; 
}
p {
font-size: 1.1rem;
}

.custom-btn {
background-color: #570a52; 
color: white; 
border: none; 
}
</style>
