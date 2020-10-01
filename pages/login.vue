<template>
    <div class="h-full flex flex-col">
        <div class="flex flex-col flex-grow justify-center px-8">
            <h1 class="text-white text-4xl font-black w-1/3 leading-snug">Welcome back!</h1>
            <div>{{errorCode}}</div>
            <div>{{errorMessage}}</div>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#44337a" fill-opacity="1" d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,250.7C672,277,768,267,864,224C960,181,1056,107,1152,85.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <form class="bg-purple-900 w-full pt-3 p-6">
                <!-- Username input -->
                <label class="leading-none border-b border-purple-600 flex py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <input v-model="username" type="text" class="bg-transparent py-1 mx-3 text-purple-100 w-full focus:outline-none" placeholder="Username" />
                    <svg xmlns="http://www.w3.org/2000/svg" v-bind:class="[testUsername]" class="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </label>
                <!-- Password input -->
                <label class="leading-none border-b border-purple-600 flex py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    <input v-model="password" ref="password" type="password" class="bg-transparent py-1 mx-3 text-purple-100 w-full focus:outline-none" placeholder="Password" />
                    <svg v-if="maskPassword" v-on:click="togglePasswordMask" xmlns="http://www.w3.org/2000/svg" class="w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    <svg v-else v-on:click="togglePasswordMask" xmlns="http://www.w3.org/2000/svg" class="w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </label>
                <!-- Forgot password link -->
                <div class="flex justify-end py-6 pt-4 leading-none">
                    <nuxt-link to="/forgot" class="text-white text-sm font-medium hover:underline">Forgot password?</nuxt-link>
                </div>
                <!-- Login button -->
                <a v-on:click="doLogin" v-bind:disabled="disableLogin" class="w-full block text-center p-3 text-sm font-medium bg-blue-400 text-blue-900 rounded focus:outline-none shadow-lg">
                    Login
                </a>
                <linethrough>or</linethrough>
                <!-- Sign up button -->
                <nuxt-link to="/signup" class="w-full block text-center p-3 text-sm font-medium border border-purple-600 text-purple-400 rounded focus:outline-none mb-4">
                    Sign up
                </nuxt-link>
            </form>
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
            password: '',
            errorCode: '',
            errorMessage: '',
            reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
        }
    },
    computed: {
        testUsername: function() {
            var vm = this;
            return (vm.reg.test(vm.username)) ? 'text-green-500' : 'text-transparent';
        },
        disableLogin: function() {
            var vm = this;
            if (vm.username.length == 0 || vm.password.length == 0) return true;
            return false;
        }
    },
    methods: {
        togglePasswordMask: function() {
            var vm = this;
            var password = vm.$refs.password;
            var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            (vm.maskPassword) ? vm.maskPassword = false : vm.maskPassword = true;
            password.setAttribute('type', type);
        },
        doLogin: function(e) {
            var vm = this;
            vm.$fireAuth.signInWithEmailAndPassword(vm.username, vm.password).then(function(result) {
                vm.$store.commit('authenticated', true)
                vm.$store.commit('updateUser', JSON.stringify(result.user))
                vm.$router.push('/');
            }).catch(function(error) {
                vm.errorCode = error.code;
                vm.errorMessage = error.message;
            });
        },
    },
    mounted () {
    }
}
</script>

<style scoped>

</style>