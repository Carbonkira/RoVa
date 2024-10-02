<template>
<div class="container">
    <div class="row justify-content-center">
    <div class="col-md-8 text-center">
        <h1 class="display-4">{{ title }}</h1>
        <p class="lead">We’d love to hear from you! Get in touch with us for any inquiries about our photography services or to schedule a session.</p>
    </div>
    </div>

    <div class="row justify-content-center mt-5">
    <div class="col-md-6">
        <form>
        <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name">
        </div>
        <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email">
        </div>
        <div class="form-group">
            <label for="message">Your Message</label>
            <textarea class="form-control" id="message" rows="4" placeholder="Tell us about your photography needs or ask any questions"></textarea>
        </div>
        <button type="submit" class="btn custom-btn">Submit</button>
        </form>
    </div>
    </div>
</div>
</template>

<script>
export default {
name: 'contact',
data() {
    return {
    title: 'Contact Us'
    }
}
}
</script>

<style scoped>
.custom-btn {
background-color: #570a52; 
color: white; 
border: none; 
}
</style>
