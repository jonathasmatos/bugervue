<template>
  <Banner />
  <div class="main-container">
    <h1>Monte o seu burger</h1>
    <BurgerForm />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
import BurgerForm from '@/components/BurgerForm.vue';
export default {
  name: 'HomeView',
  components: {
    Navbar,
    Banner,
    BurgerForm
  }
}
</script>
