webpackJsonp([1],{"6w+l":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"toast",data:function(){return{pagetype:"",newdata:{logo:"",name:"",brief:"",homepageUrl:"",ompLink:"",active:!0,id:"",pcHomepageUrl:"",status:1},loading:!1,headers:{}}},methods:{back:function(){this.$router.go(-1)},submit:function(){var t=this;this.DATAFORM.formreg(this.newdata,{name:"请输入应用名称",brief:"功能介绍必填",homepageUrl:"请设置微应用首页地址",logo:"请设置应用图标",ompLink:"请设置微应用后台地址"})||(this.loading=!0,this.newdata.id?this.DATAFORM.request({url:"use/microapp/update",data:this.newdata,method:"post"}).then(function(e){"ok"==e.errmsg&&(t.loading=!1,t.$Message.success("修改成功"),t.DATAFORM.dataform({addapp:!0}),t.$router.go(-1))}):this.DATAFORM.request({url:"use/microapp/create",data:this.newdata,method:"post"}).then(function(e){"ok"==e.errmsg&&(t.loading=!1,t.$Message.success("添加成功"),t.DATAFORM.dataform({addapp:!0}),t.$router.go(-1))}),setTimeout(function(){t.loading=!1},3e3))},getapplist:function(t){var e=this;this.DATAFORM.request({url:"use/microapp/info",data:{id:t}}).then(function(t){e.newdata=t.data})},upload:function(t){this.newdata.logo=t.data,this.$refs.upload.clearFiles()}},created:function(){this.$route.query.id&&this.getapplist(this.$route.query.id),this.headers=this.DATAFORM.gettoken()}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toast"},[a("div",[a("div",{staticClass:"header_name"},[t._v("添加新应用 "),a("div",{staticClass:"delete",on:{click:t.back}},[t._v("×")])]),t._v(" "),a("ul",[a("li",[t._m(0),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[t.newdata.logo?a("Avatar",{attrs:{src:t.newdata.logo}}):t._e(),t._v(" "),a("Upload",{ref:"upload",attrs:{format:["jpg","jpeg","png"],action:"http://139.224.22.192/api/file/api/upload",headers:t.headers,data:{imageType:"corp"},"on-success":t.upload,"on-error":t.upload}},[a("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("上传图片")])],1)],1)]),t._v(" "),a("li",[t._m(1),t._v(" "),a("div",[a("Input",{staticStyle:{width:"200px"},model:{value:t.newdata.name,callback:function(e){t.$set(t.newdata,"name",e)},expression:"newdata.name"}})],1)]),t._v(" "),a("li",[t._m(2),t._v(" "),a("div",[a("Input",{staticStyle:{width:"200px"},model:{value:t.newdata.brief,callback:function(e){t.$set(t.newdata,"brief",e)},expression:"newdata.brief"}})],1)]),t._v(" "),a("li",[t._m(3),t._v(" "),a("div",[a("Input",{staticStyle:{width:"200px"},model:{value:t.newdata.homepageUrl,callback:function(e){t.$set(t.newdata,"homepageUrl",e)},expression:"newdata.homepageUrl"}})],1)]),t._v(" "),a("li",[t._m(4),t._v(" "),a("div",[a("Input",{staticStyle:{width:"200px"},model:{value:t.newdata.ompLink,callback:function(e){t.$set(t.newdata,"ompLink",e)},expression:"newdata.ompLink"}})],1)]),t._v(" "),a("li",[t._m(5),t._v(" "),a("div",[a("Input",{staticStyle:{width:"200px"},model:{value:t.newdata.pcHomepageUrl,callback:function(e){t.$set(t.newdata,"pcHomepageUrl",e)},expression:"newdata.pcHomepageUrl"}})],1)])])]),t._v(" "),a("div",{staticClass:"bottom_s"},[a("Button",{staticClass:"button_s",attrs:{loading:t.loading},on:{click:function(e){t.submit()}}},[t._v("提交")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"name"},[this._v("应用logo "),e("span",[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"name"},[this._v("应用名称 "),e("span",[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"name"},[this._v("功能介绍 "),e("span",[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"name"},[this._v("微应用首页 "),e("span",[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"name"},[this._v("微应用后台 "),e("span",[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"name"},[this._v("微应用管理后台 "),e("span")])}]};var n=a("C7Lr")(i,s,!1,function(t){a("oTX7")},"data-v-86a6ff60",null);e.default=n.exports},oTX7:function(t,e){}});
//# sourceMappingURL=1.cbb1b031d33768727dcb.js.map