<script setup>

</script>

<template>
   <section aria-label="Registration Success Section" id="section-registration-success" >
     <div class="container">
         <img width="150" height="150" src="https://img.icons8.com/ios/150/000000/ok--v1.png" alt="ok--v1"/>
         <h2>Successful registration</h2>
     </div>

    </section>
</template>

<style scoped>
  section{
    position: relative;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  section::before{
    content: '';
    position: absolute;
    right: 2%;
    width: 100vh;
    height: 100vh;
    background-image: radial-gradient(at 53% 50%, #9968ff -28%, var(--primary-color) 63%);
    z-index: -1;
  }
  img{
    flex: 0 1 auto;
  }
  @media screen and (max-width: 500px){
    section::before{
      display: none;
    }
  }
</style>