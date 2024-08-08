<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
function redirectToSignUp(){
  router.push({name: 'SignUp'});
}
</script>

<template>
<!--  header  + navigation section-->
  <header>
    <nav class="navbar" role="navigation">
      <div>
        <RouterLink :to="{name: 'Home'}" class="navbar-brand"><img src="/images/Logo@2x.png" alt="Logo of DineEase"></RouterLink>

        <label for="toggle-nav" id="btn-toggle-nav"><img src="/images/Menu Icon@2x.png" alt="Mobile Menu Icon" role="button" aria-pressed="false" ></label>
        <input type="checkbox" name="toggle-nav" id="toggle-nav" hidden>
        <ul role="menubar" class="navbar-nav">
          <li class="nav-item" role="menuitem">
            <RouterLink :to="{name: 'Home' }" class="nav-link">Home</RouterLink>
          </li>
        </ul>
      </div>

      <button class="btn-primary" id="btn-signup" @click="redirectToSignUp">Sign up</button>
    </nav>
  </header>
</template>

<style scoped>
  header{
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .navbar{
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 90px;
    padding: 0 3rem;
    position: relative;
    background-color: transparent;

  }
  .navbar> div:first-child{
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .navbar-brand > img{
    width: 200px;
    height: auto;
    object-fit: contain;
  }
  .navbar-nav{
    display: flex;
    justify-content: center;
    transition: all 0.2s ease;
  }
  .nav-link{
    padding: 12px;
    display: block;
    font-weight: bold;
  }
  #btn-toggle-nav{
    display: none;
  }
  #btn-toggle-nav > img{
    position: absolute;
    top: 3px;
    right: 8px;
    width: 50px;
    height: auto;
  }

  @media screen and (max-width: 500px){
    .navbar{
      padding:0.25rem 0.5rem;
      flex-wrap: nowrap;
      flex-direction: column;
      height: fit-content;
      z-index: 999;
    }
    .navbar-nav ,#btn-signup{
      opacity: 0;
      visibility: hidden;
    }
    #btn-toggle-nav{
      display: block;
    }

    #toggle-nav:checked + .navbar-nav, .navbar> div:first-child:has(#toggle-nav:checked) ~ #btn-signup{
      text-align: center;
      margin-top: 1rem;
      visibility: visible;
      opacity: 1;
    }
    #toggle-nav:checked + .navbar-nav{
      display: block;
      width: 100%;
    }

    .navbar > div:first-child{
      flex-direction: column;
      width: 100%;
      gap: 0;
    }
    .navbar > div:first-child > .navbar-brand{
      align-self: flex-start;
    }
  }
</style>