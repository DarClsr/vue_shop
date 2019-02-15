<template>
	 <div class="server_box">
		  <div class="content"></div>
		   <div class="server_main container">
			    <h1>自助服务</h1>
			   <div class="server_item">
				  
				   <div class="item_top">
					   <img src="../../build/logo.png" />
				   </div>
				   <div class="item_bottom">
					   <h3>到店快修</h3>
					   <span>线下服务网点信息</span>
				   </div>
			   </div>
		   </div>
	 </div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.server_box .content{
	width: 100%;
	height: 500px;
	background: url(../assets/img/bg.jpg) center no-repeat;
	background-size: 100%;
}
.server_box .server_main{
	background: white;
}
.server_box .server_main h1{
	padding: 15px 30px;
	background: #fafafa;
	color: #9f9f9f;
	font-size: 18px;
	border: 1px solid #e0e0e0;
	margin-top: 50px;
	box-sizing: border-box;
}
.server_main .server_item{
	width: 201px;
	height: 270px;
	background: red;
	
}
.server_main .server_item .item_top{
	width: 100%;
	height: 185px;
	overflow: hidden;
}
.server_main .server_item .item_top img{
	width: 50%;
	text-align: center;
	display: block;
	margin: 50px auto;
	margin-top: 50px;
}
.server_main .server_item .item_bottom{
	text-align: center;
}
</style>
