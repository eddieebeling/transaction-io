<template>
    <div class="h-full flex flex-col">
        <div class="flex flex-col flex-grow justify-center px-8">
            <h1 class="text-white text-4xl font-black w-1/3 leading-snug">Forgot password</h1>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#44337a" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,112C384,117,480,203,576,218.7C672,235,768,181,864,160C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <form class="bg-purple-900 w-full p-6">
                <!-- Username input -->
                <label class="leading-none border-b border-purple-600 flex py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <input v-model="username" type="text" class="bg-transparent py-1 mx-3 text-purple-100 w-full focus:outline-none" placeholder="Enter username or email" />
                    <svg xmlns="http://www.w3.org/2000/svg" v-bind:class="[testUsername]" class="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </label>
                <br />
                <!-- Login button -->
                <button v-on:click="doLogin" v-bind:disabled="disableResetButton" class="w-full p-3 text-sm font-medium bg-blue-400 text-blue-900 rounded focus:outline-none shadow-lg">
                    Send password reset
                </button>
                <div class="flex items-center justify-center py-6 leading-none">
                    <nuxt-link to="/login" class="text-white text-sm font-medium hover:underline">Back to lgoin</nuxt-link>
                </div>
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
        }
    },
    computed: {
        testUsername: function() {
            var vm = this;
            return (vm.reg.test(vm.username)) ? 'text-green-500' : 'text-transparent';
        },
        disableResetButton: function() {
            var vm = this;
            return (vm.reg.test(vm.username)) ? false : true;
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
            e.preventDefault();
            console.log('submit login');
        }
    },
    mounted () {
    }
}
</script>

<style scoped>

</style>