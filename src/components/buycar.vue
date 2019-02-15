<template>
	    <!-- 购物车组件-->
<li class="nav-cart" @mouseenter="showcar" @mouseleave="hidecar">
		<a href="javascript:;" >购物车</a>
		<!--根据class改变颜色-->
		<span class="cart-empty-num" :class="getshopcount>0?'cart-num':''">
			<i>{{getshopcount}}</i>
		</span>
		<div class="nav-cart-wrapper" v-if="toggle">
			<div class="nav-cart-list">
			   <div class="empty" v-if="getshopcount<=0">
				<h3>购物车为空</h3>
			<p>您还没有选购任何商品，现在前往商城选购吧!</p>
		</div>
		<div class="full">
			<div class="nav-cart-items">
				<ul>
				    <li class="clear" v-for="(item,index) in getshopdata">
						<div class="cart-item js-cart-item cart-item-sell">
						<div class="cart-item-inner">
						<div class="item-thumb">
							<img :src="item.ali_image">
						</div>
						<div class="item-desc">
						<div class="cart-cell">
						<h4> <a href="#/item/100027401">{{item.title}}</a></h4>
						<p class="attrs"><span>{{item.show_name}}</span></p>
						<h6><span class="price-icon">¥</span><span class="price-num">{{item.price}}</span><span class="item-num">x {{item.count}}</span></h6>
						</div>
					</div>
					   <div class="del-btn" @click="deldata(item.sku_id)">删除</div>
				  </div>
			  </div>
	          </li>
          </ul>
			</div>
				<div class="nav-cart-total">
					<p>共 <strong class="ng-binding">{{getshopcount}}</strong> 件商品</p>
					<h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{getshopprice}}</span></h5>
					<h6><router-link to='/buy'><a class="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a></router-link></h6>
				</div>
			</div>
		</div>
	</div>
</li>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			/* 获取添加购物车的商品数据 */
			getshopdata(){
				return this.$store.state.shopdata;
			},
			/* 获取添加购物车的商品数量数据 */
			getshopcount(){
				return this.$store.getters.mathcount;
			},
			/* 获取添加购物车的商品价格数据 */
			getshopprice(){
				return this.$store.getters.mathprice;
			},
			toggle(){
				return this.$store.state.carinfo;
			}
		},
		methods:{
			deldata(id){
				 this.$store.commit('delshopdata',id);
			},
			showcar(){
				 this.$store.commit('showcar');
			},
			hidecar(){
				 this.$store.commit('hidecar');
			},
			
		}
	}
</script>

<style>

</style>
