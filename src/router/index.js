import Vue from 'vue'
import Router from 'vue-router';
import Home from '@/components/home';
import Shop from '@/components/shop';
import phonemo from '@/components/phone_mo';
import product from '@/components/product';
import around_product from '@/components/around_product';
import access from '@/components/access_other';
import allshop from '@/components/allshop';
import server from '@/components/server';
import shopItem from '@/components/shop_item';
import phoneshop from '@/components/phoneshop';
import phoneItem from '@/components/phone_item';
import buyPage from '@/components/carpage';
import moItem from '@/components/mo_item';
import checkout from '@/components/checkout';
import order from '@/components/order';
import myorder from '@/components/myorder';
import myod from '@/components/myod';
import address from '@/components/address';
import allitem from '@/components/all_item';
import arounditem from '@/components/around_item';
import accessitem from '@/components/access_item';
Vue.use(Router)
export default new Router({
  routes: [
	  {
		  path:'/',
		  name:'首页',
		  component:Home,
	  },
		 {
		  path:'/phone',
		  name:'手机页面',
		  component:phoneshop,
		},
		 {
		  path:'/phone/:id',
		  name:'手机详情页面',
		  component:phoneItem,
		},
		 {
		  path:'/phonemo',
		  name:'手机膜页面',
		  component:phonemo,
		},
		 {
		  path:'/phonemo/:id',
		  name:'手机膜详情页面',
		  component:moItem,
		},
		 {
		  path:'/product',
		  name:'官方配件页面',
		  component:Shop,
		},
		 {
		  path:'/around/:id',
		  name:'周边产品页面',
		  component:arounditem,
		},
		 {
		  path:'/around',
		  name:'周边产品页面',
		  component:around_product,
		},
		 {
		  path:'/access',
		  name:'第三方配件页面',
		  component:access,
		},
		{
		  path:'/access/:id',
		  name:'所有商品详情页面',
		  component:accessitem,
		},
		 {
		  path:'/allshop',
		  name:'所有商品页面',
		  component:allshop,
		},
		
		{
		  path:'/allshop/:id',
		  name:'所有商品详情页面',
		  component:allitem,
		},
		 {
		  path:'/server',
		  name:'服务页面',
		  component:server,
		},
		 {
		  path:'/product/:id',
		  name:'商品详情页',
		  component:shopItem,
		},
		 {
		  path:'/buy',
		  name:'购物车页面',
		  component:buyPage,
		},
	   {
	    path:'/checkout',
	    name:'结算页面',
	    component:checkout,
	  },
		{
		  path:'/pay',
		  name:'pay',
		  component:order,
		},
		{
		  path:'/myorder',
		  component:myorder,
			children:[{
				 path:'',
				name:'myorder',
				component:myod,
			},
			{
				path:'address',
				name:'address',
				component:address,
			}
			]
		},
  ],
})

