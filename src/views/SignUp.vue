<script setup>
import{ref,reactive,computed,watch,onMounted} from 'vue';
import{useRouter} from 'vue-router';
import api from '../api';
import  axios from 'axios';
// states
const currentForm = ref(1);
const selectedPlanId = ref(null);
const formData = reactive({
  // form 1 data
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  // form 2 data
  planId: '',
  // form 3data
  restaurants: [
    {
      name: '',
      cuisine: '',
      countryCode: '',
      zipCode: '',
      city: '',
      address: ''
    }
  ],
})

const paymentOption = ref('monthly');
const plans = reactive([]);
const countries = reactive([]);
let selectedPlan = {};
//for number of restaurantsForm
const restaurantFormCount = ref(1);
watch(restaurantFormCount, (newVal,oldVal)=>{
   //if removing a restaurant form

  if(newVal > oldVal){
     formData.restaurants.push({
       name: '',
       cuisine: '',
       countryCode: '',
       zipCode: '',
       city: '',
       address: ''
     });
   }

});
const router = useRouter();
async function getPlans(){
  try{
    const {data}= await api.get('plans');
    plans.push(...data);
    // set the default plan
    selectedPlanId.value = plans[0].id;

    selectedPlan = computed(()=>{
      return plans.find((p) => p.id === selectedPlanId.value);
    })
  }catch(e){
    console.error(e);
  }
}
async function getCountries(){
  try{
    const {data} = await axios.get('/country-codes.json');
    countries.push(...data);
  }catch(e){
    console.error(e);
  }
}
function navigate(step){
  currentForm.value = step;
}
function nextForm(){
  if(currentForm.value < 3){
    currentForm.value++;
  }
}
function switchPlan(id){
  selectedPlanId.value = id;
  formData.planId = id;
}
function changeOption(){
  paymentOption.value = paymentOption.value === 'monthly' ? 'yearly': 'monthly';
}
function addNew(){
  restaurantFormCount.value++;

}
function remove(n){
  formData.restaurants.splice(n-1 , 1);
  restaurantFormCount.value--;
}

async function submitForm(){
  try{
    const {data} = await api.post('/registration' , formData);
  //   when sucess redirect to success page

    router.push({name: 'RegistrationSuccess'});
  }catch(e){
    alert(e.response.data.message)
    currentForm.value = 1;
    console.error(e);
  }
}
// call function on load
getPlans();
getCountries();
</script>

<template>
  <section aria-label="Sign Up Section" class="container">
     <h1 class="mb-3 text-center">Register your restaurant</h1>
    <div id="sign-up-wrapper">
      <nav id="sign-nav-list">
        <div>
            <button class="sign-nav" :class="{'active': currentForm == 1}" @click="navigate(1)">
                1
            </button>
            <div>
              <div>Step 1</div>
              <strong>PERSONAL DETAILS</strong>
            </div>
        </div>

        <div>
          <button class="sign-nav" :class="{'active': currentForm == 2}" @click="navigate(2)">
            2
          </button>
          <div>
            <div>Step 2</div>
            <strong>SELECT A PLAN</strong>
          </div>
        </div>

        <div>
          <button class="sign-nav" :class="{'active': currentForm == 3}" @click="navigate(3)">
            3
          </button>
          <div>
            <div>Step 3</div>
            <strong>RESTAURANTS</strong>
          </div>
        </div>
      </nav>
<!--      form 1 -->
      <form action="#" @submit.prevent="nextForm()" id="form-signup-1" :class="{'hide': currentForm != 1}">
        <h2 class="mb-2">Personal Details</h2>
        <input type="text" placeholder="First Name" name="first-name" id="first-name" v-model="formData.firstName" class="form-control mb-1" required>
        <input type="text" placeholder="Last Name" name="last-name" id="last-name" v-model="formData.lastName" class="form-control mb-1" required>
        <input type="email" placeholder="Email address" name="email" id="email" v-model="formData.email" class="form-control mb-1" required>
        <input type="password" placeholder="Password" name="password" id="password" v-model="formData.password" class="form-control mb-2" required>
        <button type="submit" class="btn-primary">Continue</button>
      </form>

<!--      form 2 -->
      <form action="#" @submit.prevent="nextForm()" id="form-signup-2"  :class="{'hide': currentForm != 2}">
        <h2 class="mb-1">Select a plan</h2>
<!--         list of plans-->
        <div class="plans mb-1">
          <div class="plan" :class="{'selected': selectedPlanId === p.id}"  v-for="p in  plans" @click="switchPlan(p.id)" tabindex="0">
             <h3 class="d-block mb-1 text-capitalize">{{p.name}}</h3>
              <p class="mb-1">{{p.description}}</p>
              <div class="mb-1"><img width="25" height="25" src="https://img.icons8.com/ios/25/000000/ok--v1.png" alt="ok--v1"/> &nbsp;&nbsp; {{p.maxNumberOfRestaurants === 1 ? 1 +" restaurant only":  "Maximum " + p.maxNumberOfRestaurants + " restaurants" }}</div>
              <div class="mb-1" v-if="paymentOption ==='monthly'"><img width="25" height="25" src="https://img.icons8.com/ios/25/000000/average-2.png" alt="average-2"/> &nbsp;&nbsp; <b>{{p.monthlyFee}} $ / mo</b></div>
              <div class="mb-1" v-else><img width="25" height="25" src="https://img.icons8.com/ios/25/000000/average-2.png" alt="average-2"/> &nbsp;&nbsp; <b>{{p.yearlyFee}} $ / year</b></div>
          </div>
        </div>

<!--        toggle payment frequenct option-->
        <div class="toggle mb-1">
            <span :class="{'text-bold': paymentOption === 'monthly'}">Monthly</span>
            <div class="toggle-switch" @click="changeOption">
                 <button type="button"  class="toggle-button" :class="{'right':paymentOption === 'yearly'}"></button>
            </div>
            <span :class="{'text-bold': paymentOption === 'yearly'}">Yearly</span>

        </div>
        <button type="submit" class="btn-primary">Continue</button>
      </form>
      <!--      form 3 -->
      <form action="#" @submit.prevent="submitForm()" id="form-signup-3" :class="{'hide': currentForm != 3}">
        <h2 class="mb-2">Add your restaurant</h2>
        <div v-for="n in restaurantFormCount" class="form-restaurant">
          <div class="mb-1">
            <strong class="d-block">Restaurant {{n}}/{{selectedPlan.maxNumberOfRestaurants}}</strong>
            <button id="btn-remove" @click="remove(n)" v-if="restaurantFormCount > 1">x</button>
          </div>
          <div class="mb-1">
            <input type="text" placeholder="Restaurant Name" name="name" id="name" v-model="formData.restaurants[n-1].name" class="form-control" required>
            <input type="text" placeholder="Cuisine" name="cuisine" id="cuisine" v-model="formData.restaurants[n-1].cuisine" class="form-control" required>
          </div>
          <div class="mb-1">
            <select  name="countryCode" id="countryCode" v-model="formData.restaurants[n-1].countryCode" class="form-control" required>
              <option value="" selected disabled>Country</option>
              <option :value="c.code" v-for="c in countries" :key="c.code">{{c.name}}</option>
            </select>
            <input type="text" placeholder="Zip code" name="zipcode" id="zipcode" v-model="formData.restaurants[n-1].zipCode" class="form-control " required>
            <input type="text" placeholder="City" name="city" id="city" v-model="formData.restaurants[n-1].city" class="form-control " required>
          </div>
          <div class="mb-1">
            <input type="address" placeholder="Address" name="address" id="address" v-model="formData.restaurants[n-1].address" class="form-control" required>
          </div>
        </div>

        <button type="button" class="btn-secondary mb-1" v-if="formData.restaurants.length < selectedPlan.maxNumberOfRestaurants" @click="addNew">Add new restaurant</button>
        <button type="submit" class="btn-primary">Sign up</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
   .container{
     max-width: 1400px;
     padding: 3rem 1rem;
   }
   #sign-up-wrapper{
     display: flex;
     gap: 2rem;
     flex-wrap: wrap;
   }
   #sign-up-wrapper > form{
     flex: 1 1 60%;
   }
   #sign-nav-list{
     flex: 1 0 auto;
     position: relative;
     border-radius: 0.5rem;
     padding: 2.5rem 1.25rem;
     background-color: var(--secondary-color);
     color: white;
     overflow: hidden;
     z-index: 1;
     height: 600px;
   }
   #sign-nav-list *{
     position: relative;
      z-index: 3;
   }
   #sign-nav-list::before{
     content: '';
     position: absolute;
     bottom: -13%;
     right: -25%;
     width: 200px;
      height: 200px;
     border-radius: 100%;
     background-color: rgba(147, 112, 219, 0.85);
     z-index: 2;
   }

   #sign-nav-list::after{
     content: '';
     position: absolute;
     bottom: 7%;
     right: 13%;
     width: 100px;
     height: 100px;
     border-radius: 100%;
     background-color: rgba(147, 112, 219, 0.85);
     z-index: 2;
   }
   #sign-nav-list > div{
     display: flex;
     gap: 1rem;
     align-items: center;
     margin-bottom: 2rem;
   }
   .sign-nav{
     border-radius: 100%;
     background-color: transparent;
     border: 2px solid white;
     color: white;
     transition: all 0.2s ease;
   }
   .sign-nav.active{
     background-color:white;
     color: var(--secondary-color);
   }
   form{
     font-family: 'Helvetica', sans-serif;
     transition: all 0.2s ease;
     opacity: 1;
   }
  #form-signup-1{
    display: flex;
    flex-direction: column;

  }


   .form-control{
     border-radius: 0.25rem;
     border: none;
     padding: 12px 1rem;
     background: #efefef;
      width: 100%;
     font-size: 1rem;
   }
   button[type="submit"]{
     width: 100%;
     text-align: center;
     justify-content: center;
   }
   .plans{
     display: flex;
      gap: 0.25rem;
   }
   .plan{
     cursor: pointer;
     flex-basis: calc(100%/3);
     padding: 1rem;
     border-radius: 0.5rem;
     border: 2px solid var(--fourth-color);
     position: relative;
   }
   .plan > div{
     display: flex;
     align-items: center;
   }
   .plan.selected{
     border-color: var(--secondary-color);
   }
   .plan.selected::after{
     position: absolute;
     content: '';
     width: 100%;
     height: 100%;
     z-index: 4;
     background-color: rgb(147 112 219 / 16%);
     top: 0;
     left: 0;
   }
   .plan p{
     color: var(--fourth-color);
   }
   .toggle{
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 1rem;
   }
   .toggle-switch{
     cursor: pointer;
     position: relative;
     height: 30px;
     width: 78px;
     background-color: #a985f4;
     border-radius: 1rem;
   }
   .toggle-button{
     position: absolute;
     top: -5px;
     left:0;
     width: 40px;
     height: 40px;
     background-color: var(--secondary-color);
     border-radius: 100%;
     cursor: pointer;
     transition: all 0.4s;
     box-shadow: 2px 2px 4px rgba(0,0,0,0.8);
   }
   .toggle-button.right{
     left: 38px;
   }
   .form-restaurant{
     border: 1px solid var(--fourth-color);
     padding: 1rem;
     border-radius: 0.5rem;
     margin-bottom: 1rem;
   }
   .form-restaurant > div{
     display: grid;
     gap: 1rem;
   }
   .form-restaurant > div:nth-of-type(1) {
     grid-template-rows: 1fr;
     grid-template-columns: 1fr 1fr;
     justify-content: space-between;
     align-items: center;
   }
   .form-restaurant > div:nth-of-type(2) {
     grid-template-columns: 2.8fr 1.2fr;
   }
   .form-restaurant > div:nth-of-type(3) {
     grid-template-columns: 1fr 0.5fr 1fr!important;
   }
   .form-restaurant > div:nth-of-type(4) {
     grid-template-columns: 1fr;
   }
   #btn-remove{
     color: red;
     font-size: 1rem;
     width: fit-content!important;
     margin-left: auto;
   }
   @media screen and (max-width: 500px){
     #sign-nav-list{
       height: auto;
       padding: 1rem;
       display: flex;
       justify-content: space-between;
       align-items: center!important;
       gap: 0.25rem;
       flex-wrap: wrap;
       font-size: 0.65rem;
     }
     #sign-nav-list > div{
       gap: 0.25rem;
       align-items: center;
       margin-bottom: 0;
     }
     #sign-nav-list::after, #sign-nav-list::before{
       display: none;
     }
      .sign-nav{
        padding: 3px 0.5rem;
      }

      .plans {
        flex-direction: column;
        gap:1rem;
      }
      #form-signup-2{
        display: flex;
        flex-direction: column;
      }
      .toggle{
        order: -1;
      }
     .form-restaurant > div:nth-of-type(3) {
       grid-template-columns: 1fr 1fr!important;
       grid-template-rows: 1fr 1fr;
     }
     .form-restaurant  #countryCode{
       grid-area: 1 /1 /span 2 /3;
     }
   }
</style>