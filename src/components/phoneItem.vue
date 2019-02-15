<template>
<div>
	<div class="item-img">
	<img :alt="item.name_title" :src="item.sku_info[shopindex].ali_image" style="opacity: 1;">
			</div>
	        <h6>{{item.name}}</h6>
			<h3 >{{item.name_title}}</h3>
				<div class="params-colors">
					<ul class="colors-list" v-for="(item,index) in item.sku_info">
						<li><a to="javascript:;" class="active" :title='item.spec_json.show_name' @click='tab(index)'>
						<img :src="item.spec_json.image"></a></li>
					</ul>
				</div>
				<div class="item-btns clearfix">
					<span class="item-gray-btn"><router-link :to="'/phone/'+item.sku_info[shopindex].sku_id">查看详情</router-link> </span><span class="item-blue-btn" @click="addbuycar(item.sku_info[shopindex])">加入购物车 </span>
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
				buyarr:[],
				count:1,
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
				
			}
		},
		created(){
			
		}
	}
</script>

<style>

</style>
