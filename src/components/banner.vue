<template>
	<div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../assets/img/p1.png"></div>
      <div class="swiper-slide"><img src="../assets/img/p2.png"></div>
      <div class="swiper-slide"><img src="../assets/img/p3.png"></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>

    import Swiper from 'swiper';
	import phonedata from '../lib/phonedata.js';
	import phoneitemdata from  '../lib/phoneitem.js'
	export default {
	     data(){
			 return{
				 data01:phonedata
			 }
		 },
		 mounted(){
            var swiper = new Swiper('.swiper-container', {
                spaceBetween: 30,
				autoplay:true,
				pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
    });
    
    }       
  }
</script>

<style>
   .swiper-container {
      width: 100%;
      height: 500px;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .swiper-container-v {
      background: #eee;
    }  
</style>
