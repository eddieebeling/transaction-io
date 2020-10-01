<template>
    <div class="h-full flex flex-col" v-show="$store.state.authenticated">
        <div class="flex flex-col flex-grow justify-center px-8">
            <h1 class="text-white text-4xl font-black w-2/3 leading-snug">Congrats! You got in</h1>
            <a v-on:click="logout" class="text-white my-12 underline">Logout</a>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#44337a" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,112C384,117,480,203,576,218.7C672,235,768,181,864,160C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    </div>
</template>

<script>
import Utils from '../mixins/utils';
export default {
  transition: 'fade',
  mixins: [ Utils ],
    data: function () {
      return {
          validUsername: false,
          maskPassword: true,
          username: '',
      }
  },
  methods: {
    logout: function() {
        var vm = this;
        vm.$fireAuth.signOut().then(function() {
            // Sign-out successful.
            console.log('user is logged out')
            vm.$store.commit('authenticated', false)
            vm.$store.commit('updateUser', {})
            vm.$router.push('/login')
        }).catch(function(error) {
            // An error happened.
            console.log(error)
        });
    }
  },
  mounted() {

  },
  created() {
    if (!this.$store.state.authenticated) this.$router.push('/login')
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
