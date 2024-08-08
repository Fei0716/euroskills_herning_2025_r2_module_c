<script setup>

</script>

<template>
  <footer role="contentinfo" aria-label="Footer Section">
    <section class="container">
      <div>
        <img  src="/images/Logomark@2x.png" alt="Logo of Dineease"  class="mb-1" id="footer-img">
        <div id="footer-links" class="mb-1">
          <a href="">Terms of Use</a>
          <a href="">Privacy Policy</a>
        </div>
        <div class="mb-1">
          +36 30 123 4567 &nbsp; &nbsp;support@dineease.com
        </div>
        <div class="mb-1">
          © 2024 - All rights reserved
        </div>
      </div>
      <div class="mb-1">
        <strong class="mb-1 d-block">Follow Us</strong>
        <div id="social-links">
          <a href=""><img src="/images/Facebook Icon@2x.png" alt="Click To redirect to out Facebook Page"></a>
          <a href=""><img src="/images/Instagram Icon@2x.png" alt="Click To redirect to out Instagram Page"></a>
          <a href=""><img src="/images/Twitter Icon@2x.png" alt="Click To redirect to out Twitter Page"></a>
        </div>
      </div>
    </section>

  </footer>
</template>

<style scoped>
  footer{
    background-color: var(--third-color);
    color: var(--primary-color);
  }
  footer a {
    color: var(--primary-color);
  }
  footer> section{
    display: flex;
    justify-content: space-between;
  }
 #footer-img{
   width: 50px;
   height: auto;
   object-fit: contain;
 }
 #footer-links{
   display: flex;
   gap: 1rem;
   align-items: center;
 }
 #social-links{
   display: flex;
   gap: 0.25rem;
 }
 #social-links  img{
    width: 40px;
    height: 40px;
   cursor: pointer;
   transition: all 0.2s ease;
 }
  #social-links  img:hover{
    transform: scale(1.1);
  }

  @media screen and(max-width: 500px){
    footer> section{
      gap: 0.25rem;
    }
  }
</style>