<template>
	 <div id="header">
			<div class="nav-global">
				<div class="container">
					<h1 class="nav-logo">
						<a href="javascript:;"></a>
					</h1>
					<ul class="nav-aside">
						<li class="nav-user">
							<a href="javascript:;">个人中心</a>
							<!--active-->
							<div class="nav-user-wrapper">
								<div class="nav-user-list">
									<dl class="nav-user-avatar">
										<dd><span class="ng-scope"></span></dd>
										<dt class="ng-binding">+86 138****9453</dt>
									</dl>
									<ul>
										<li class="order"><router-link  to='/myorder'>我的订单</router-link></li>
										<li class="support"><a href="javascript:;">售后服务</a></li>
										<li class="coupon"><a href="javascript:;">我的优惠</a></li>
										<li class="information"><a href="javascript:;">账户资料</a></li>
										<li class="address"><a href="javascript:;">收货地址</a></li>
										<li class="logout"><a href="javascript:;">退出</a></li>
									</ul>
								</div>
							</div>
						</li>
						<!--active-->
					  <!-- 购物车-->
					  <buycar></buycar>	
					</ul>
					<ul class="nav-list">
						<li><a href="javascript:;">在线商城</a></li>
						<li><a href="javascript:;">坚果 Pro</a></li>
						<li><a href="javascript:;">Smartisan M1 / M1L</a></li>
						<li><a href="javascript:;">Smartisan OS</a></li>
						<li><a href="javascript:;">欢喜云</a></li>
						<li><a href="javascript:;">应用下载</a></li>
						<li><a href="javascript:;">官方论坛</a></li>
					</ul>
				</div>
			</div>
			<div class="nav-sub ">
				<div class="nav-sub-wrapper">
					<div class="container">
						<ul class="nav-list" ref='link'>
							<li><router-link to="/" exact active-class='head_active'   @touchend="s" >首页</router-link></li>
							<li v-for="(item,index) in arr" @mouseover="show(index)" @mouseout="hide(index)"><router-link :to="item.path" active-class='head_active' class="link" >{{item.name}}</router-link></li>
							<li><router-link to="/allshop" active-class='head_active'>其他商品</router-link></li>
							<li><router-link to="/server" active-class='head_active'>服务</router-link></li>
						</ul>
					</div>
				</div>
				<div class="box" ref='box'>
					<div  class="nav-goods-panel " v-for="(item,index) in arr" @mouseover="showbox(index)" @mouseout="hidebox(index)">
										<ul  class="nav-goods-list"  >
											<!---->
											<li  class="jianguopro2" v-for="item in navdata[index]">
												<a  href="//www.smartisan.com/item/1000351">
													<div  class="item-thumb">
														<!----><img  alt="" height="160" width="160" :src="item.image" style="text-align: center;"> </div>
													<div  class="item-name">{{item.name}}</div>
													<!---->
													<!---->
													<div  class="item-price">¥ {{item.price}} 起</div>
													<!---->
												</a>
											</li>
										</ul>
								</div>	
				</div>
				
			</div>
		</div>
				
</template>
<script>
	import buycar from './buycar.vue';
	import paneldata from '../lib/panel.js';
	export default{
		data(){
			return{
				arr:[
					{path:'/phone',name:'手机'},
					{path:'/phonemo',name:'“足迹系列”手感膜'},
					{path:'/product',name:'官方配件'},
					{path:'/around',name:'周边产品'},
					{path:'/access',name:'第三方配件'},
				],
				linkindex:null,
				navdata:paneldata,
			}
		},
		methods:{
			s(){
				alert(1)
			},
			getdata(){
				var _this=this;
				this.$axios.get('http://127.0.0.1:4200/panel').then(function(data){
					_this.navdata=data.data;
				})
			},
			show(index){
				var abox=document.querySelectorAll('.nav-goods-panel');
				for(var i=0;i<abox.length;i++){
					abox[i].style.opacity=0;
					abox[index].style.display='none';
				}
				abox[index].style.opacity=1;
				abox[index].style.display='block';
			},
			hide(index){
				var abox=document.querySelectorAll('.nav-goods-panel');
				window.timer=setTimeout(function(){
					abox[index].style.opacity=0;
					abox[index].style.display='none';
				},500)
			},
			showbox(index){
				clearTimeout(window.timer);
				var abox=document.querySelectorAll('.nav-goods-panel');
				abox[index].style.opacity=1;
				abox[index].style.display='block';
			},
			hidebox(index){
				var abox=document.querySelectorAll('.nav-goods-panel');
				window.timer=setTimeout(function(){
					abox[index].style.opacity=0;
					abox[index].style.display='none';
				},500)
			}
		
		},
		components:{buycar},
		created(){
			
			console.log(paneldata)
		},
	}
</script>
<style>
   @import url('../assets/css/header.css');
   #header .nav-sub .nav-sub-wrapper .container .nav-list .head_active{
	   color: #000000;
	   font-weight: bold;
   }
   .box{
	   position: relative;
	   height: 350px;
	   display: none;
	   
   }
   .nav-goods-panel{
   			    height: 0px;
   			    position: absolute;
   			    overflow: hidden;
   			   	background: white;
   				width: 100%;
   			   	opacity: 0.6;
   				transition: all .3s linear;
				z-index: 99999;
				top: 0;
				left: 0;
				
   		}
     .nav-goods-panel{
   			    height: 350px;
   			    position: absolute;
   			    overflow: hidden;
   			   	background: white;
				box-shadow:  0 5px 3px rgba(0,0,0,.1);
				border-top: 1px solid #e7e7e7;
   			   	opacity: 0;
   				transition: all .5s linear;
				top: 0;
				left: 0;
				display: none;
   		}
   .nav-goods-list{
   			visibility: visible;
   			opacity: 1;
   			width: 100%;
   		    height: 270px;
   		    padding-top: 52px;
   		    text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
   		}
   .nav-goods-list li{
   			position: relative;
   		    display: inline-block;
   		    vertical-align: top;
			text-align: center;
   		    height: 260px;
   		    font-size: 14px;
   		}
	.nav-goods-list li img{
		text-align: center;
		display: block;
		margin: 0 auto;
	}
</style>
