import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import animate from 'animate.css';
import Vuex from 'vuex'
import 'swiper/dist/css/swiper.css';
/* 这里导入模块化的文件 */
//http://api.bzqll.com/#
Vue.config.productionTip = false;
/* 引用axios模块 */
Vue.prototype.$axios = axios;
/* 引用Vuex模块 */
Vue.use(Vuex);
/* 配置Vuex */
const store=new Vuex.Store({
	  state:{
		  /* 存储商品数据*/
		  shopdata:[],
		  /* 最大商品数量*/
		  maxcount:15,
		  maxoff:false,
		  /* 控制购物车的隐藏和显示*/
		  carinfo:false, 
		  userdata:[
				  {
			        "name": "小张张",
			        "phone": "13811111111",
			        "areaCode": "010",
			        "landLine": "64627856",
			        "provinceId": 110000,
			        "province": "北京市",
			        "cityId": 110100,
			        "city": "市辖区",
			        "countyId": 110106,
			        "county": "海淀区",
			        "add": "上地十街辉煌国际西6号楼319室",
			        "default": true
			      },{
			        "name": "小关关",
			        "phone": "13811111111",
			        "areaCode": "010",
			        "landLine": "64627856",
			        "provinceId": 110000,
			        "province": "上海市",
			        "cityId": 110100,
			        "city": "市辖区",
			        "countyId": 110106,
			        "county": "静安区",
			        "add": "中远潭小区83栋",
			        "default": false
			      }
		  ],
		  orderdata:[],
	  },
	  getters:{
		  /* 计算商品数量*/
		 mathcount(state){
			 var count=0;
			 for(var i=0;i<state.shopdata.length;i++){
				 count+=state.shopdata[i].count;
			 }
			 return count;
		 },
		 /* 计算商品价格*/
		   mathprice(state){
			   var price=0;
			  for(var i=0;i<state.shopdata.length;i++){
			 	  price=state.shopdata[i].count*state.shopdata[i].price;
			 }
			 return price;
		   },
		  //全选的初始化  
		  allcheck(state){
			  var allcheck=true;
			   for(var i=0;i<state.shopdata.length;i++){
			  	  if(!state.shopdata[i].check){
					  allcheck=false;
					  /* 应该加return 否则 就会for循环  造成  大部分都为true的情况*/
					  return 
				  }
			  }
			  return allcheck;
		  },
		  /* 选中的数量*/
		  checkcount(state){
			   var count=0;
			  for(var i=0;i<state.shopdata.length;i++){
				  if(state.shopdata[i].check){
					  count+=state.shopdata[i].count;
				  }
			  }
			  return count;
		  },
		    /* 选中的金额*/
		  checkprice(state){
		  	var price=0;
		    for(var i=0;i<state.shopdata.length;i++){
		  	if(state.shopdata[i].check){
		  		price+=state.shopdata[i].count*state.shopdata[i].price;
		  	 }
		   }
		  	return price;
		  },
		  //获取结算的商品数据
		  checkoutshop(state){
			var shopdata=[];
			 for(var i=0;i<state.shopdata.length;i++){
    		  	if(state.shopdata[i].check){
			 		shopdata.push(state.shopdata[i]);
			  }
			}
			return shopdata;  
		  }
	  },
	  mutations:{
		  /* 现在支付*/
		  paynow(state,id){
			  for(var i=0;i<state.orderdata.length;i++){
				  if(state.orderdata[i].orderId==id){
					  state.orderdata[i].ispay=true;
				  }
			  }
		  },
		  /* 提交订单*/
		  submitorder(state,data){
			  state.orderdata.unshift(data);
			 let i=state.shopdata.length;
			 while(i--){
				if(state.shopdata[i].check){
					state.shopdata.splice(i,1)
				}
			 }
		  },
		  /* 获取用户的信息*/
		  getuserdata(state,data){
			  state.userdata=data;
		  },
		  /* data为商品组件传输过来的信息 ，我们需要在这个里面进行数据的处理*/
		  addbuydata(state,data){
			   /* 是否添加过购物车*/
			 var  onoff=true
			    /* 对存储的商品数据进行筛选添加*/
			 for(var i=0;i<state.shopdata.length;i++){
				 console.log(data.info)
				 if(state.shopdata[i].sku_id===data.info.sku_id){
					 state.shopdata[i].count+=data.count;
					 if( state.shopdata[i].count >state.maxcount){
						 state.shopdata[i].count=state.maxcount;
						 state.maxoff=true;
					 }
					 onoff=false; 
					 state.carinfo=true;
				 }
			 }
			 /* 如果商品已经添加过购物车 我们就改变他的count属性  并且存入仓库*/
			 if(onoff){
				 state.carinfo=true;
				 var goodsdata=data.info;
				 /* 建立一个对象  属性count 用来储存商品数量  属性check 用来表示是否购物车中商品的状态*/
				 Vue.set(goodsdata,'count',data.count);
				  Vue.set(goodsdata,'check',true)
				 state.shopdata.push(goodsdata);
			 }
		  },
		  /* 删除商品*/
		  delshopdata(state,id){
			   for(var i=0;i<state.shopdata.length;i++){
			  		if(state.shopdata[i].sku_id===id){
			  		state.shopdata.splice(i,1)
					}
			  }
		  },
		  /* 显示购物车*/
		  showcar(state){
			  /* true 为显示  false 表示隐藏*/
			  state.carinfo=true;
		  },
		   /* 隐藏购物车*/
		  hidecar(state){
			  var state=state;
			  setTimeout(function(){
				   state.carinfo=false;
			  },600)	
		  },
		  /* 购物车页面商品数量的添加*/
		  pluscardata(state,id){
			   for(var i=0;i<state.shopdata.length;i++){
			  		if(state.shopdata[i].sku_id===id){
			  			 state.shopdata[i].count++;
						  if(state.shopdata[i].count>=state.maxcount){
						 	state.shopdata[i].count=15;
							 state.maxoff=true;
						 }
			  	     }
		      }
		    },	
			/* 购物车页面的商品数量的减少 */
		 subcardata(state,id){
		 	   for(var i=0;i<state.shopdata.length;i++){
		 	  		if(state.shopdata[i].sku_id===id){
			  			 state.shopdata[i].count-- 
						  if(state.shopdata[i].count<=1){
							   state.shopdata[i].count=1; 
						  }
			  	     }
		     }
		   },
		   //改变商品的选中状态
		 changeCheck(state,id){
			  for(var i=0;i<state.shopdata.length;i++){
			 		if(state.shopdata[i].sku_id===id){
			 			state.shopdata[i].check=!state.shopdata[i].check; 
			 	     }
			} 
		 },
		 /* 控制按钮全选*/
		 changeallcheck(state,allcheck){
			for(var i=0;i<state.shopdata.length;i++){
				state.shopdata[i].check=!allcheck; 	
			} 
		 },
		 /* 删除选中的商品*/
		 delcheckshop(state){
			 var length=state.shopdata.length;
			 console.log(length)
			 while(length--){
				 if(state.shopdata[length].check){
					 state.shopdata.splice(length,1); 
				 }
			 }
			 
		 },
		 /* 价格从高到低 */
			reserver(state,data){
				var creatCompare=function(propertyName){
				   return function (obj1,obj2) {
				   var value1=obj1[propertyName];
				   var value2=obj2[propertyName];
				  if(value1>value2){
				    return -1
				  }else if(value1<value2){
				    return 1
				  }else {
				    return 0
						}
					}
				}
				data.sort(creatCompare("price"))
			},
			/* 价格从低到高 */
			sortprice(state,data){
				var sortBig=function(propertyName) {
				return function (obj1,obj2) {
				    var value1=obj1[propertyName];
				    var value2=obj2[propertyName];
				   if(value1<value2){
				     return -1
				   }else if(value1>value2){
				     return 1
					}else {
				     return 0
					}
				}
		   }
				data.sort(sortBig("price"))
		 },
		  /* 添加收货人信息*/
		   saveuser(state,data){
			   console.log(data)
			if(data[0].default){
			state.userdata.forEach((receive,index) => {
			receive.default = false
			receive.checked = false
				})
			}
			if(data[1]==null){
        state.userdata.push(data[0])
			}else{
        state.userdata[data[1]] = data[0]
			}
		 },
		   /* 设为默认地址*/
		    checkDefault (state,data) {
			state.userdata.forEach((receive,index) => {
			if (receive==data) {
			receive.default = true
			} else {
			receive.default = false
			}
      })
    },
	  deluser(state,index){
		  state.userdata.splice(index,1);
	  }
}
})

new Vue({
  el: '#app',   //引用元素
  router:router,   // 用用router
  components: {App:App},  
  template: '<App/>',/* 导入App组件 */
  store:store,/* 把模块化的文件导入实例 */
});
