<template>
	 <div class="container">
		   <banner></banner>
		   <div class="inbox ad">
		   			   <div class="ad_inbox" v-for="item in maindata.adlist">
		   				   <img :src="item.img" />
		   			   </div>
		   </div>
		   <div class="inbox clear">
			   <div class="img" v-for="(item,index) in shop ">
				   <router-link :to='link[index]'>
					 <div class="wrap"></div>
					   <img :src='item.banner' />
				   </router-link>
			   </div>
		   </div>
	 </div>
</template>
<script>
	import banner from  './banner.vue';
	import homedata from '../lib/homdata.js';
	export default {
		data() {
			return {
				maindata:homedata,
				link:['/phone','/product','/around','/access']
			}
		},
		components:{banner},
		computed:{
			shop(){
				var banner=homedata.banner;
				return banner
			}
		}
	}
</script>

<style>
.inbox{
	width: 100%;
	height: auto;
	margin: 50px 0;
}
.ad{
	width: 100%;
	height: 202px;
	border: 1px solid lightgray;
	overflow: visible;
}
.ad .ad_inbox{
	width: 25%;
	height: 202px;
	float: left;
	background: red;
	box-sizing: border-box;
	border: 1px solid #eee;
}
.inbox .ad_inbox img{
	height: 202px;
}
.inbox .img{
	float: left;
	position: relative;
	overflow: hidden;
	text-align: center;
}
.inbox .img .wrap{
	width: 100%;
	height: 100%;
	background: rgba(255,255,255,.4);
	position: absolute;
	left: 0;
	top: 0;
	opacity: 0;
	transition: all .2s linear;
}
.inbox .img:hover .wrap{
opacity: 1;
}

.inbox .img .wrap h1{
	position: absolute;
	color: #fff;
	left: 0;
	right: 0;
	top: -110px;
	transition: all .6s linear;
	font-size: 25px;
}
.inbox .img:hover .wrap h1{
  top: 200px;
}
.clear{
	clear: both;
}
</style>
