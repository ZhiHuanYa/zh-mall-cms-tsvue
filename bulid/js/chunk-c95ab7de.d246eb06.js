(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c95ab7de"],{3573:function(e,t,n){"use strict";var o=n("7a23");const a={class:"page-content"},c={class:"handle-btns"},l=Object(o["createTextVNode"])(" 编辑 "),r=Object(o["createTextVNode"])(" 删除 ");function i(e,t,n,i,s,p){const d=Object(o["resolveComponent"])("el-button"),b=Object(o["resolveComponent"])("ZhTable");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(b,Object(o["mergeProps"])({listData:e.dataList,listCount:e.dataCount},e.contentTableConfig,{onSelectionChange:e.getSelectionChange,page:e.pageInfo,"onUpdate:page":t[0]||(t[0]=t=>e.pageInfo=t)}),Object(o["createSlots"])({headerHandler:Object(o["withCtx"])(()=>[e.isCreate?(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:0,type:"primary",onClick:e.handleNewClick},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("新建"+Object(o["toDisplayString"])(e.contentTableConfig.title),1)]),_:1},8,["onClick"])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(d,{icon:"Refresh"})]),createAt:Object(o["withCtx"])(t=>[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.$filters.formatTime(t.row.createAt)),1)]),updateAt:Object(o["withCtx"])(t=>[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.$filters.formatTime(t.row.updateAt)),1)]),handle:Object(o["withCtx"])(t=>[Object(o["createElementVNode"])("div",c,[e.isUpdate?(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:0,icon:"Edit",size:"small",type:"success",onClick:n=>e.handleEditClick(t.row)},{default:Object(o["withCtx"])(()=>[l]),_:2},1032,["onClick"])):Object(o["createCommentVNode"])("",!0),e.isDelete?(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:1,icon:"Delete",onClick:n=>e.handleDeleteClick(t.row),size:"small",type:"danger"},{default:Object(o["withCtx"])(()=>[r]),_:2},1032,["onClick"])):Object(o["createCommentVNode"])("",!0)])]),_:2},[Object(o["renderList"])(e.otherPropSlots,t=>({name:t.slotName,fn:Object(o["withCtx"])(n=>[t.slotName?Object(o["renderSlot"])(e.$slots,t.slotName,{key:0,row:n.row},void 0,!0):Object(o["createCommentVNode"])("",!0)])}))]),1040,["listData","listCount","onSelectionChange","page"])])}var s=n("0613");const p={class:"zh-table"},d={class:"header"},b={class:"title"},m={class:"handler"},g={key:0,class:"footer"};function u(e,t,n,a,c,l){const r=Object(o["resolveComponent"])("el-table-column"),i=Object(o["resolveComponent"])("el-table"),s=Object(o["resolveComponent"])("el-pagination");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",p,[Object(o["createElementVNode"])("div",d,[Object(o["renderSlot"])(e.$slots,"header",{},()=>[Object(o["createElementVNode"])("div",b,Object(o["toDisplayString"])(e.title+"列表"),1),Object(o["createElementVNode"])("div",m,[Object(o["renderSlot"])(e.$slots,"headerHandler",{},void 0,!0)])],!0)]),Object(o["createVNode"])(i,Object(o["mergeProps"])({data:e.listData,border:"",style:{width:"100%"},onSelectionChange:e.handleSelectionChange},e.childrenProps),{default:Object(o["withCtx"])(()=>[e.showSelectColumn?(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:0,type:"selection",align:"center",width:"60"})):Object(o["createCommentVNode"])("",!0),e.showIndexColumn?(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:1,type:"index",label:"序号",align:"center",width:"80"})):Object(o["createCommentVNode"])("",!0),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.propList,t=>(Object(o["openBlock"])(),Object(o["createBlock"])(r,Object(o["mergeProps"])({key:t.prop},t,{align:"center","show-overflow-tooltip":""}),{default:Object(o["withCtx"])(n=>[Object(o["renderSlot"])(e.$slots,t.slotName,{row:n.row},()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(n.row[t.prop]),1)],!0)]),_:2},1040))),128))]),_:3},16,["data","onSelectionChange"]),e.showFooter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",g,[Object(o["renderSlot"])(e.$slots,"footer",{},()=>[Object(o["createVNode"])(s,{onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange,"current-page":e.page.currentPage,"page-size":e.page.pageSize,"page-sizes":[10,20,30],layout:"->, total, sizes, prev, pager, next, jumper",total:e.listCount},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])],!0)])):Object(o["createCommentVNode"])("",!0)])}var j=Object(o["defineComponent"])({props:{title:{type:String,default:""},listData:{type:Array,required:!0},listCount:{type:Number,default:0},propList:{type:Array,required:!0},showIndexColumn:{type:Boolean,default:!1},showSelectColumn:{type:Boolean,default:!1},page:{type:Object,default:()=>({currentPage:0,pagesize:10})},childrenProps:{type:Object,default:()=>({})},showFooter:{type:Boolean,default:!0}},emits:["selectionChange","update:page"],setup(e,{emit:t}){const n=e=>{t("selectionChange",e)},o=n=>{t("update:page",{...e.page,pageSize:n})},a=n=>{t("update:page",{...e.page,currentPage:n})};return{handleSelectionChange:n,handleSizeChange:o,handleCurrentChange:a}}}),h=(n("c338"),n("6b0d")),C=n.n(h);const O=C()(j,[["render",u],["__scopeId","data-v-bb8bbe7c"]]);var f=O,k=f;function N(e,t){const n=Object(s["c"])(),o=n.state.login.permission,a=`system:${e}:${t}`;return!!o.find(e=>e===a)}var w=Object(o["defineComponent"])({props:{contentTableConfig:{type:Object,required:!0},pageName:{type:String,required:!0}},components:{ZhTable:k},emits:["newBtnClick","editBtnClick"],setup(e,{emit:t}){var n;const a=Object(s["c"])(),c=N(e.pageName,"create"),l=N(e.pageName,"update"),r=N(e.pageName,"delete"),i=N(e.pageName,"query"),p=Object(o["ref"])({currentPage:1,pageSize:10});Object(o["watch"])(p,()=>d());const d=(t={})=>{i&&a.dispatch("system/getPageListAction",{pageName:e.pageName,queryInfo:{offset:(p.value.currentPage-1)*p.value.pageSize,size:p.value.pageSize,...t}})};d();const b=Object(o["computed"])(()=>a.getters["system/pageListData"](e.pageName)),m=Object(o["computed"])(()=>a.getters["system/pageCountData"](e.pageName)),g=e=>{console.log(e[e.length-1].id)},u=null===(n=e.contentTableConfig)||void 0===n?void 0:n.propList.filter(e=>"createAt"!==e.slotName&&("updateAt"!==e.slotName&&"handle"!==e.slotName)),j=t=>{a.dispatch("system/deletePageDataByIdAction",{pageName:e.pageName,id:t.id})},h=()=>{t("newBtnClick")},C=e=>{t("editBtnClick",e)};return{dataList:b,dataCount:m,pageInfo:p,otherPropSlots:u,isCreate:c,isUpdate:l,isDelete:r,getSelectionChange:g,getPageData:d,handleDeleteClick:j,handleNewClick:h,handleEditClick:C}}});n("92b2");const y=C()(w,[["render",i],["__scopeId","data-v-2c52fb8d"]]);var v=y;t["a"]=v},5341:function(e,t,n){},"6d81":function(e,t,n){},"92b2":function(e,t,n){"use strict";n("5341")},ab96:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const a={class:"menu"};function c(e,t,n,c,l,r){const i=Object(o["resolveComponent"])("page-content");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(i,{contentTableConfig:e.contentTableConfig,pageName:"menu"},null,8,["contentTableConfig"])])}var l=n("3573");const r={title:"菜单",propList:[{prop:"name",label:"菜单名称",minWidth:"100"},{prop:"type",label:"类型",minWidth:"60"},{prop:"url",label:"菜单连接",minWidth:"100"},{prop:"icon",label:"菜单图标",minWidth:"100"},{prop:"permission",label:"按钮权限",minWidth:"100"},{prop:"createAt",label:"创建时间",minWidth:"220",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"220",slotName:"updateAt"},{label:"操作",minWidth:"200",slotName:"handle"}],showIndexColumn:!1,showSelectColumn:!1,childrenProps:{rowKey:"id",treeProp:{children:"children"}},showFooter:!1};var i=Object(o["defineComponent"])({name:"zh-menu",components:{PageContent:l["a"]},setup(){return{contentTableConfig:r}}}),s=n("6b0d"),p=n.n(s);const d=p()(i,[["render",c]]);t["default"]=d},c338:function(e,t,n){"use strict";n("6d81")}}]);
//# sourceMappingURL=chunk-c95ab7de.d246eb06.js.map