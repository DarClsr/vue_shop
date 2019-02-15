<template>
  <div id="app" ref='app'>  
		 <Head></Head>
		 <transition enter-active-class='animated pulse' enter-to-class='animated pulse' leave-to-class='animated pulse' leave-active-class='animated bounceOutLeft' :duration="{enter:500,leave:500}" appear
		  mode='out-in'>
		  <router-view></router-view>
		 </transition>
		 <maxinfo v-if="showinfo"></maxinfo>
		 <Foot></Foot>
  </div>
</template>
<script>
	import Head from '@/components/head';
	import Foot from '@/components/foot';
	import maxinfo from '@/components/maxinfo';
export default {
  name: 'App',
  components:{Head,Foot,maxinfo},
	computed:{
		showinfo(){
			return this.$store.state.maxoff;
		}
	},
}
</script>
<style>
@import url('../static/css/font-awesome.min.css');
@import url('assets/css/reset.css');
</style>
