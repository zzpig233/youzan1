webpackJsonp([2],{0:function(t,e,s){"use strict";var a={hotLists:"/index/hotLists",banner:"/index/banner",topLists:"/category/topList",subLists:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",updata:"/cart/updata",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdata:"/address/update",addressSetDefault:"/address/setDefaul"};for(var n in a)a.hasOwnProperty(n)&&(a[n]="http://rapapi.org/mockjsdata/24581"+a[n]);e.a=a},108:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(73),n=(s.n(a),s(74)),i=(s.n(n),s(72)),o=(s.n(i),s(77)),r=(s.n(o),s(75)),d=(s.n(r),s(76)),u=(s.n(d),s(78)),c=(s.n(u),s(1)),l=s(3),f=s.n(l),p=s(0),h=s(6),m=s(13),g=s.n(m),v=s(18),w=s.n(v),y=g.a.parse(location.search.substr(1)),b=y.id,k=["商品详情","本店成交"];new c.default({el:"#app",data:{id:b,details:null,detailTabs:k,tabIndex:0,dealLists:null,bannerLists:null,skuType:1,showSku:!1,skuNum:1,isAddCart:!1,showMessage:!1},created:function(){this.getDetails()},methods:{getDetails:function(){var t=this;f.a.post(p.a.details,{id:b}).then(function(e){console.log(e),t.details=e.data.data,t.bannerLists=[],t.details.imgs.forEach(function(e){t.bannerLists.push({clickUrl:"",image:e})})})},changeTab:function(t){this.tabIndex=t,t&&this.getDeal(t)},getDeal:function(){var t=this;f.a.post(p.a.deal,{id:b}).then(function(e){console.log(e),t.dealLists=e.data.data.lists})},chooseSku:function(t){this.skuType=t,this.showSku=!0},changeSkuNum:function(t){t<0&&1===this.skuNum||(this.skuNum+=t)},addCart:function(){var t=this;f.a.post(p.a.addCart,{id:b,number:this.skuNum}).then(function(e){200===e.data.status&&(t.showSku=!1,t.isAddCart=!0,t.showMessage=!0,setTimeout(function(){t.showMessage=!1},1e3))})}},watch:{showSku:function(t,e){document.body.style.overflow=t?"hidden":"auto",document.querySelector("html").style.overflow=t?"hidden":"auto",document.body.style.height=t?"100%":"auto",document.querySelector("html").style.height=t?"100%":"auto"}},components:{Swipe:w.a},mixins:[h.a]})},18:function(t,e,s){function a(t){s(36)}var n=s(7)(s(26),s(38),a,null,null);t.exports=n.exports},26:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(65),n=s(35);s.n(n);e.default={name:"swipe",props:{lists:{type:Array,required:!0}},mounted:function(){new a.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"},autoplay:{delay:2e3}})}}},35:function(t,e){},36:function(t,e){},38:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper "},t._l(t.lists,function(t){return s("div",{staticClass:"swp-page swiper-slide"},[s("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[s("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.image}})])])})),t._v(" "),s("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},6:function(t,e,s){"use strict";var a={filters:{number:function(t){return t.toFixed(2)}}};e.a=a},72:function(t,e){},73:function(t,e){},74:function(t,e){},75:function(t,e){},76:function(t,e){},77:function(t,e){},78:function(t,e){}},[108]);
//# sourceMappingURL=goods.4b6cdca216dfb8bae1df.js.map