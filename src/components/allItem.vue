<template>
<div>
	<div class="item-img">
	<img :alt="item.name_title" :src="item.sku_info[shopindex].ali_image" style="opacity: 1;">
			</div>
	        <h6>{{item.name}}</h6>
			<h3 >{{item.name_title}}</h3>
				<div class="item-btns clearfix">
					<span class="item-gray-btn"><router-link :to="'/allshop/'+item.sku_info[shopindex].sku_id">查看详情</router-link> </span><span class="item-blue-btn" @click="addbuycar(item.sku_info[shopindex])">加入购物车 </span>
				</div>
				<div class="item-price clearfix">
					<i>¥</i><span>{{item.price}}</span>
				</div>
				<div class="discount-icon">false</div>
				<div class="item-cover">
					<a href="javascript:;" target="_blank"></a>
			 </div>
</div>
</template>

<script>
	export default {
		data() {
			return {
				shopindex:0,
				count:1,
				price:this.$props.item,
				arr:[]
			};
		},
		props:['item'],
		methods:{
			tab(index){
				this.shopindex=index;
			},
			addbuycar(data){
				/* 调用vuex的方法 */
				let  itemdata={info:data,count:1}
				  this.$store.commit('addbuydata',itemdata);
				
			},
		},
	}
</script>

<style>

</style>
