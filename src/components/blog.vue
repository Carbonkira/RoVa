<template>
<div class="container">
    <div class="row justify-content-center">
    <div class="col-md-8">
        <h1 class="display-4">{{ title }}</h1>
        <p class="lead">Read the latest tips and insights from our photography experts.</p>

        <!-- Photography Post 1 -->
        <div class="blog-post mt-4">
        <h3>Mastering the Art of Portrait Photography</h3>
        <p>Explore techniques to enhance your portrait photography skills and capture the essence of your subjects.</p>
        <button class="btn custom-btn mt-2" @click="togglePost(1)">
            {{ showPost1 ? 'Show Less' : 'Read More' }}
        </button>
        <p v-if="showPost1" class="additional-content">
            This post dives into lighting, composition, and interaction with subjects to create compelling portraits.
        </p>
        </div>

        <!-- Photography Post 2 -->
        <div class="blog-post mt-4">
        <h3>Capturing Stunning Landscapes: Tips and Tricks</h3>
        <p>Learn how to take breathtaking landscape photos that tell a story.</p>
        <button class="btn custom-btn mt-2" @click="togglePost(2)">
            {{ showPost2 ? 'Show Less' : 'Read More' }}
        </button>
        <p v-if="showPost2" class="additional-content">
            We cover the best times to shoot, essential gear, and composition techniques that make landscapes pop.
        </p>
        </div>

        <!-- Photography Post 3 -->
        <div class="blog-post mt-4">
        <h3>The Importance of Post-Processing in Photography</h3>
        <p>Understand how editing can elevate your photographs to the next level.</p>
        <button class="btn custom-btn mt-2" @click="togglePost(3)">
            {{ showPost3 ? 'Show Less' : 'Read More' }}
        </button>
        <p v-if="showPost3" class="additional-content">
            This article discusses popular editing software, techniques, and tips to enhance your images.
        </p>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
name: 'blog',
data() {
    return {
    title: 'Photography Blog',
    showPost1: false,
    showPost2: false,
    showPost3: false
    };
},
methods: {
    togglePost(postNumber) {
    if (postNumber === 1) this.showPost1 = !this.showPost1;
    if (postNumber === 2) this.showPost2 = !this.showPost2;
    if (postNumber === 3) this.showPost3 = !this.showPost3;
    }
}
}
</script>

<style scoped>
h1 {
color: #570a52;
}


.blog-post {
border-bottom: 1px solid #ddd;
padding-bottom: 10px;
margin-bottom: 20px;
}
.additional-content {
margin-top: 10px;
color: #555;
}
.custom-btn {
background-color: #570a52; 
color: white; 
border: none; 
}
</style>
