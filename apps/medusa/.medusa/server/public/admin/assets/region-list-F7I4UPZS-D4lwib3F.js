import{L as g}from"./chunk-I3VB6NM2-DwUXsEa7.js";import{f as b}from"./chunk-IR5DHEKS-aVJcUHa1.js";import{P as v}from"./chunk-P3UUX2T6-C49IFCOH.js";import{b as n,r as j,j as s,cM as P,a as _,i as T,k as C,H as N,T as R,L as w,B as S,e7 as k,A as z,t as x}from"./index-BRxROkBw.js";import{c as h}from"./index-Dbl6QEGv.js";import{u as A}from"./chunk-C76H5USB-Bonzcoyj.js";import{u as H,_ as E}from"./chunk-O6K7WXYN-D26HIPYG.js";import"./lodash-Cg4g7BtM.js";import"./chunk-CIE5NZAY-B7wtm0FK.js";import{S as L}from"./chunk-2RQLKDBF-Bu_vXIZr.js";import{u as D}from"./use-prompt-stX4X6j-.js";import{P as q}from"./pencil-square-DMFP5eIU.js";import{T as M}from"./trash-mvIXhvpE.js";import{C as B}from"./container-OOKhHY1d.js";import"./chunk-YEDAFXMB-CcDlSB71.js";import"./chunk-AOFGTNG6-D36rNFbm.js";import"./table-LQZVZ6MT.js";import"./chunk-EMIHDNB7-DP6CWE5u.js";import"./plus-mini-Bwpk2Zvp.js";import"./command-bar-Bs0rk6mi.js";import"./index-CsWjJ2Pi.js";import"./chunk-PWBTCXBJ-CT3gpt_B.js";import"./format-89mWhJXf.js";import"./_isIndex-Cxwhsfnw.js";import"./x-mark-mini-BVvrhrFA.js";import"./index-B3Y03FGi.js";import"./date-picker-CKjR1CwG.js";import"./clsx-B-dksMZM.js";import"./popover-DccmW-kQ.js";import"./triangle-left-mini-DwzVyOYI.js";import"./Trans-8bgdQRqc.js";import"./check-CdIgxtAJ.js";import"./prompt-4ErBodkw.js";var O=()=>{const{t:e}=n();return[...[{label:e("fields.createdAt"),key:"created_at"},{label:e("fields.updatedAt"),key:"updated_at"}].map(t=>({key:t.key,label:t.label,type:"date"}))]},F=({prefix:e,pageSize:r=20})=>{const a=A(["offset","q","order","created_at","updated_at"],e),{offset:t,q:i,order:l,created_at:o,updated_at:c}=a;return{searchParams:{limit:r,offset:t?Number(t):0,order:l,created_at:o?JSON.parse(o):void 0,updated_at:c?JSON.parse(c):void 0,q:i},raw:a}},I=({countries:e})=>{if(!e||e.length===0)return s.jsx(v,{});const r=e.map(a=>{var t;return(t=P.find(i=>i.iso_2===a.iso_2))==null?void 0:t.display_name}).filter(Boolean);return s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx(g,{list:r})})},$=()=>{const{t:e}=n();return s.jsx("div",{className:"flex size-full items-center",children:s.jsx("span",{children:e("fields.countries")})})},J=({paymentProviders:e})=>{if(!e||e.length===0)return s.jsx(v,{});const r=e.map(a=>b(a.id));return s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx(g,{list:r})})},Q=()=>{const{t:e}=n();return s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:e("fields.paymentProviders")})})},W=({name:e})=>s.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:e})}),G=()=>{const{t:e}=n();return s.jsx("div",{className:"flex h-full w-full items-center",children:s.jsx("span",{className:"truncate",children:e("fields.name")})})},m=h(),V=()=>j.useMemo(()=>[m.accessor("name",{header:()=>s.jsx(G,{}),cell:({getValue:e})=>s.jsx(W,{name:e()})}),m.accessor("countries",{header:()=>s.jsx($,{}),cell:({getValue:e})=>s.jsx(I,{countries:e()})}),m.accessor("payment_providers",{header:()=>s.jsx(Q,{}),cell:({getValue:e})=>s.jsx(J,{paymentProviders:e()})})],[]),u=20,Y=()=>{const{t:e}=n(),{searchParams:r,raw:a}=F({pageSize:u}),{regions:t,count:i,isPending:l,isError:o,error:c}=T({...r,fields:"*payment_providers"},{placeholderData:C}),p=O(),f=U(),{table:y}=H({data:t??[],columns:f,count:i,enablePagination:!0,getRowId:d=>d.id,pageSize:u});if(o)throw c;return s.jsxs(B,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsxs("div",{children:[s.jsx(N,{children:e("regions.domain")}),s.jsx(R,{className:"text-ui-fg-subtle",size:"small",children:e("regions.subtitle")})]}),s.jsx(w,{to:"/settings/regions/create",children:s.jsx(S,{size:"small",variant:"secondary",children:e("actions.create")})})]}),s.jsx(E,{table:y,columns:f,count:i,pageSize:u,isLoading:l,filters:p,orderBy:[{key:"name",label:e("fields.name")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],navigateTo:d=>`${d.original.id}`,pagination:!0,search:!0,queryObject:a,noRecords:{message:e("regions.list.noRecordsMessage")}})]})},Z=({region:e})=>{const{t:r}=n(),a=D(),{mutateAsync:t}=k(e.id),i=async()=>{await a({title:r("general.areYouSure"),description:r("regions.deleteRegionWarning",{name:e.name}),verificationText:e.name,verificationInstruction:r("general.typeToConfirm"),confirmText:r("actions.delete"),cancelText:r("actions.cancel")})&&await t(void 0,{onSuccess:()=>{x.success(r("regions.toast.delete"))},onError:o=>{x.error(o.message)}})};return s.jsx(z,{groups:[{actions:[{label:r("actions.edit"),to:`/settings/regions/${e.id}/edit`,icon:s.jsx(q,{})}]},{actions:[{label:r("actions.delete"),onClick:i,icon:s.jsx(M,{})}]}]})},K=h(),U=()=>{const e=V();return j.useMemo(()=>[...e,K.display({id:"actions",cell:({row:r})=>s.jsx(Z,{region:r.original})})],[e])},Ae=()=>{const{getWidgets:e}=_();return s.jsx(L,{widgets:{before:e("region.list.before"),after:e("region.list.after")},children:s.jsx(Y,{})})};export{Ae as Component};
