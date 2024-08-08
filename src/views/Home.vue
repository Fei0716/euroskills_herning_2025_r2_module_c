<script setup>
  import {reactive} from 'vue';

  const restaurants = reactive([
    {
      "id": 12,
      "name": "Sarmale Bistro",
      "location": "Timisoara",
      "cuisine": "Romanian",
      "description": "Experience Romania's culinary heart at Sarmale Bistro. Savor classics with a modern touch in our intimate, authentic ambiance. Celebrate timeless tradition.",
      "rating": 5,
      "image": "images/Restaurant3.png"
    },
    {
      "id": 14,
      "name": "Halász Fogadó",
      "location": "Székesfehérvár",
      "cuisine": "Seafood",
      "description": "Immerse in Eastern European authenticity at Halász Fogadö. Relish traditional dishes amid an atmosphere rich in charm and history. Join us for a timeless culinary experience.",
      "rating": 5,
      "image": "images/Restaurant2.png"
    },
    {
      "id": 2,
      "name": "La Piața",
      "location": "Bucharest",
      "cuisine": "Romanian",
      "description": "Discover a fusion of Europe's flavors at La Piața, set in the heart of the city. Savor dishes from locally-sourced ingredients in our cozy bistro ambiance.",
      "rating": 4,
      "image": "images/Restaurant1.png"
    }
  ]);

</script>

<template>
<!--      hero section-->
    <section aria-label="Hero Section" id="section-hero">
        <div class="container" id="hero-wrapper">
            <div>
                 <h1 class="mb-2">DineEase: Exceptional Dining Awaits.</h1>
                 <p class="mb-2">Dive into culinary wonders with DineEase. We curate top-rated restaurants, each with distinct flavors and ambiance. From international dishes to traditional delights and gastronomic adventures, find your perfect spot with DineEase.</p>
                  <button class="btn-primary" id="btn-hero"><img src="/images/Search Icon@2x.png" alt="Search Icon"> Explore Restaurants</button>
            </div>
          <img src="/images/Hero Illustration@3x.png" alt="Hero Section Image" id="img-hero">
        </div>
<!--      stripes deco-->
      <svg id="stripes-group-1" height="225" width="400">
        <g transform="rotate(-10) skewX(-10)">
          <rect x="-5" y="100" width="350" height="50" fill="#8023d8"></rect>
          <rect x="-5" y="150" width="300" height="50" fill="#edd9ff"></rect>
        </g>
      </svg>
      <svg id="stripes-group-2" height="300" width="600">
        <g transform="rotate(-10) skewX(-10)">
          <rect x="325" y="100" width="300" height="50" fill="#edd9ff"></rect>
          <rect x="0" y="150" width="700" height="50" fill="#e0b8ff"></rect>
          <rect x="475" y="200" width="150" height="50" fill="#8023d8"></rect>

        </g>
      </svg>
    </section>

<!--  restaurant section-->
  <section aria-label="Restaurant Section" id="section-restaurant">
    <div class="container" id="restaurant-wrapper">
      <h2 class="mb-1">Top Rated Restaurants</h2>
      <p class="mb-3">Discover Unforgettable Dining Destinations
      </p>

      <div class="cards">
        <!--      restaurant cards-->

        <article v-for="r in restaurants" :aria-label="r.name + ' Restaurant Details'" class="card">
          <img :src="r.image" :alt="r.name + 's Image'" class="card-img">

          <div class="card-head mb-1">
            <strong>{{r.name}}</strong>
            <div class="ratings">
              <template v-for="n in 5">
                <img src="/images/star.png" class="star"  v-if="n <= r.rating">
                <img src="/images/star.png" class="star star-disabled" v-else>
              </template>
            </div>
          </div>
          <div class="card-body">
            <p>
              {{r.description}}
            </p>

            <a href="" class="link-purple">View restaurant »</a>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>
  #section-hero{
    position: relative;
  }
  #section-hero::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(at 115% 17%, #5300ff -28%, var(--primary-color) 30%);
    z-index: -1;
  }
  #hero-wrapper{
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding-top: calc(3rem + 90px);
  }
  #hero-wrapper > *{
    flex: 1 1 50%;
  }
  #img-hero{
    object-fit: cover;
    flex-basis: 50%;
    width: 50%;
  }
  #section-hero > svg{
    z-index: -1;
  }
  #stripes-group-1{
    position: absolute;
    bottom: -5%;
  }
  #stripes-group-2{
    position: absolute;
    bottom: 20%;
    right: 0;
  }
  /*Card for restaurants*/
  #section-restaurant{
    position: relative;
    overflow: hidden;

  }
  #section-restaurant::before{
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background-color: #f0e9ff;
    border-radius: 100%;
    z-index: -1;
    top: 10%;
    right: -15%;
  }
  #section-restaurant::after{
    content: '';
    position: absolute;
    bottom: -20%;
    left: -5%;
    width: 500px;
    height: 500px;
    background-color: #f0e9ff;
    border-radius: 100%;
    z-index: -1;
  }
 .cards{
   display: flex;
   justify-content:center;
   gap: 1rem;
   flex-wrap: wrap;
 }
 .card{
   background-color: white;
   flex-basis: 350px;
   height: 425px;
   padding: 12px;
   border-radius: 0.25rem;
   box-shadow: 1px 1px 1px 1px rgb(189 186 186 / 68%);
   position: relative;
 }
 .card-img{
   border-radius: 0.25rem;
   height: 200px;
   object-fit: cover;
   width: 100%;
   margin-bottom: 0.25rem;
 }
 .card-head{
   display: flex;
   align-items:center;
   justify-content: space-between;
 }
  .card-head > strong{
    font-size: clamp(1rem, 1.5vw, 2.5rem);
  }
  .star-disabled{
    filter: grayscale(1);
  }
  .card-body{
    color: var(--fourth-color);
  }
  .card-body a{
    position: absolute;
    bottom: 12px;
    right: 12px;
  }
  @media screen and   (max-width: 768px) {
    #hero-wrapper{
      flex-wrap: wrap;
    }
    .card{
      flex-basis: 100%;
    }
  }

</style>