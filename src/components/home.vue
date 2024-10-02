<template>
  <div class="container">
    <!-- Content -->
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <h1 class="display-4">Welcome to Our Photography Studio</h1>
        <p class="lead">Capture every moment.</p>
        <p>
          Our team specializes in various photography styles, including portrait, event, and landscape photography. Explore our portfolio to see what we can create for you.
        </p>
        <!-- Modal Button -->
        <button type="button" class="btn custom-btn mt-3" data-toggle="modal" data-target="#learnMoreModal">
          Learn More
        </button>
      </div>
    </div>

    <!-- Modal Structure -->
    <div class="modal fade" id="learnMoreModal" tabindex="-1" aria-labelledby="learnMoreModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="learnMoreModalLabel">Learn More About Our Photography Services</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            We offer a diverse range of photography services, including:
            <ul>
              <li>Professional portrait sessions</li>
              <li>Wedding and event photography</li>
              <li>Family and group photography</li>
              <li>Stunning landscape and nature photography</li>
              <li>Custom photo books and prints</li>
            </ul>
            Our team is passionate about capturing the essence of every moment, ensuring your memories are beautifully preserved.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
h1 {
  color: #570a52;
}

.custom-btn {
  background-color: #570a52; 
  color: white; 
  border: none;
}
</style>
