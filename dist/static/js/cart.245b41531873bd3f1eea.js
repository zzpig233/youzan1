webpackJsonp([5],{0:function(e,t,i){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topLists:"/category/topList",subLists:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",updata:"/cart/updata",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdata:"/address/update",addressSetDefault:"/address/setDefaul"};for(var o in n)n.hasOwnProperty(o)&&(n[o]="http://rapapi.org/mockjsdata/24581"+n[o]);t.a=n},106:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(69),o=(i.n(n),i(70)),s=(i.n(o),i(68)),r=(i.n(s),i(1)),c=i(3),a=i.n(c),d=i(0),u=i(6),h=i(82),f=i.n(h),g=i(66);new r.default({el:".container",data:{cartLists:null,total:0,editingShop:[],editingIndex:-1,removePopup:!1,removeDta:null,removeMsg:""},computed:{selectAll:{get:function(){return!(!this.cartLists||!this.cartLists.length)&&this.cartLists.every(function(e){return e.checked})},set:function(e){this.cartLists.forEach(function(t){t.checked=e,t.goodsList.forEach(function(t){t.checked=e})})}},allRemoveSelected:{get:function(){if(-1!==this.editingIndex)return this.editingShop.removeChecked},set:function(e){-1!==this.editingIndex&&(this.editingShop.removeChecked=e,this.editingShop.goodsList.forEach(function(t){t.removeChecked=e}))}},selectLists:function(){if(this.cartLists&&this.cartLists.length){var e=[],t=0;return this.cartLists.forEach(function(i){i.goodsList.forEach(function(i){i.checked&&(e.push(i),t+=i.price*i.number)})}),this.total=t,e}return[]},removeList:function(){if(-1!==this.editingIndex){var e=[];return this.editingShop.goodsList.forEach(function(t){t.removeChecked&&e.push(t)}),e}return[]}},created:function(){this.getLists()},methods:{getLists:function(){var e=this;a.a.post(d.a.cartLists).then(function(t){var i=t.data.cartList;i.forEach(function(e){e.checked=!0,e.removeChecked=!1,e.editing=!1,e.editingMsg="编辑",e.goodsList.forEach(function(e){e.checked=!0,e.removeChecked=!1})}),e.cartLists=i})},selectGood:function(e,t){var i=-1===this.editingIndex?"checked":"removeChecked";t[i]=!t[i],e[i]=e.goodsList.every(function(e){return e[i]})},selcetShop:function(e){var t=-1===this.editingIndex?"checked":"removeChecked";e[t]=!e[t],e.goodsList.forEach(function(i){i[t]=e[t]})},allSelected:function(){var e=-1===this.editingIndex?"selectAll":"allRemoveSelected";this[e]=!this[e]},edit:function(e,t,i){e.editing=!e.editing,e.editingMsg=e.editing?"完成":"编辑",this.cartLists.forEach(function(i,n){t!==n&&(i.editng=!1,i.editingMsg=e.editing?"":"编辑")}),this.editingShop=e.editing?e:null,this.editingIndex=e.editing?t:-1},reduce:function(e){1!==e.number&&g.a.reduce(e.id).then(function(t){e.number--})},add:function(e){g.a.add(e.id).then(function(t){e.number++})},remove:function(e,t,i,n){this.removePopup=!0,this.removeData={shop:e,shopIndex:t,good:i,goodIndex:n},this.removeMsg="确定要删除该商品吗?"},removeLists:function(){this.removePopup=!0,this.removeMsg="确定将所选的"+this.removeList.length+"个商品删除？"},removeConfirm:function(){var e=this;if("确定要删除该商品吗?"===this.removeMsg){var t=this.removeData,i=t.shop,n=t.shopIndex,o=t.good,s=t.goodIndex;g.a.cartRemove(o.id).then(function(t){console.log(t),i.goodsList.splice(s,1),e.removePopup=!1,i.goodsList.length||(e.cartLists.splice(n,1),e.removeShop())})}else{var r=[];this.removeList.forEach(function(e){r.push(e.id)}),g.a.cartMremove(r).then(function(t){var i=[];e.removePopup=!1,e.editingShop.goodsList.forEach(function(t){-1===e.removeList.findIndex(function(e){return e.id==t.id})&&i.push(t)}),i.length?e.editingShop.goodsList=i:(e.cartLists.splice(e.editingIndex,1),e.removeShop())})}},removeShop:function(){this.editingShop=null,this.editingIndex=-1,this.cartLists.forEach(function(e){e.editing=!1,e.editingMsg="编辑"})},updata:function(e,t){(e.number<1||/[^\d]/g.test(e.number))&&(e.number=1),g.a.updata(e.id,e.number).then(function(e){console.log(e.statusText)})},start:function(e,t){t.startX=e.changedTouches[0].clientX},end:function(e,t,i,n){var o=e.changedTouches[0].clientX,s="0";-1===this.editingIndex&&(i.startX-o>100&&(s="-60px"),o-i.startX>100&&(s="0px"),f()(this.$refs["goods-"+t+"-"+n],{left:s}))}},mixins:[u.a]})},27:function(e,t,i){"use strict";function n(e,t){return new s.a(function(i,n){c.a.post(e,t).then(function(e){i(e)}).catch(function(e){n(e)})})}var o=i(46),s=i.n(o),r=i(3),c=i.n(r);i(0);t.a=n},6:function(e,t,i){"use strict";var n={filters:{number:function(e){return e.toFixed(2)}}};t.a=n},66:function(e,t,i){"use strict";var n=i(47),o=i.n(n),s=i(48),r=i.n(s),c=i(27),a=i(0),d=function(){function e(){o()(this,e)}return r()(e,null,[{key:"add",value:function(e){return i.i(c.a)(a.a.cartAdd,{id:e,number:1})}},{key:"reduce",value:function(e){return i.i(c.a)(a.a.cartReduce,{id:e,number:1})}},{key:"cartRemove",value:function(e){return i.i(c.a)(a.a.cartRemove,{id:e})}},{key:"cartMremove",value:function(e){return i.i(c.a)(a.a.cartMremove,{id:e})}},{key:"updata",value:function(e,t){return i.i(c.a)(a.a.updata,{id:e,number:t})}}]),e}();t.a=d},68:function(e,t){},69:function(e,t){},70:function(e,t){}},[106]);
//# sourceMappingURL=cart.245b41531873bd3f1eea.js.map