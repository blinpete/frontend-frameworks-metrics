import{o as c,r as R,c as j,d as A,a as u,b as i,e as l,F as p,f,u as m,n as S,t as C,g as U,h as T,i as V,j as L,k as N}from"./vendor.1643424d.js";const D=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};D();const M=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}),_=[{amount:60,name:"seconds"},{amount:60,name:"minutes"},{amount:24,name:"hours"},{amount:7,name:"days"},{amount:4.34524,name:"weeks"},{amount:12,name:"months"},{amount:Number.POSITIVE_INFINITY,name:"years"}];function O(t){if(!t)return"";t=new Date(t).valueOf();let e=(t-new Date().valueOf())/1e3;for(let a=0;a<=_.length;a++){const r=_[a];if(Math.abs(e)<r.amount)return M.format(Math.round(e),r.name);e/=r.amount}return""}function b(t,e=!1){const a=O(t);return e?a:a.replace("ago","")}function v(t){return t<1e3?t:t.toLocaleString("en-us")}function q(t){return t[0].toUpperCase()+t.slice(1)}const w=["stars","forks","issues","commits","PRs","created","updated"],z=[{name:"repo",shortDesc:"link",extract:t=>({html:!0,value:`
        <a href="${t.url}" target="_blank">
          ${c["mark-github"].toSVG({width:18})}
        </a>
      `})},{name:"framework",shortDesc:"logo name link",extract:t=>({html:!0,value:`
        <a href="${t.homepageUrl}" target="_blank">
          <img src="${t.owner.avatarUrl}" style="height: 24px"/>
          <span>${q(t.name)}</span>
        </a>
        `})},{name:"stars",shortDesc:"count",icon:c.star.toSVG(),extract:t=>({value:v(t.stargazerCount),sortValue:t.stargazerCount})},{name:"forks",shortDesc:"count",icon:c["repo-forked"].toSVG(),extract:t=>({value:v(t.forkCount),sortValue:t.forkCount})},{name:"issues",shortDesc:"open",icon:c["issue-opened"].toSVG(),extract:t=>({value:v(t.issues.totalCount),sortValue:t.issues.totalCount})},{name:"PRs",shortDesc:"open",icon:c["git-pull-request"].toSVG(),extract:t=>({value:t.pullRequests.totalCount,sortValue:t.pullRequests.totalCount})},{name:"commits",shortDesc:"main branch",icon:c["git-commit"].toSVG(),extract:t=>t.commits&&"history"in t.commits?{value:v(t.commits.history.totalCount),sortValue:t.commits.history.totalCount}:{value:void 0,sortValue:0}},{name:"version",shortDesc:"latest",extract:t=>{var e,a;return{html:!0,value:`
          <div class="tagName">${((e=t.latestRelease)==null?void 0:e.tagName)||""}</div>
          <div class="publishedAt">${b((a=t.latestRelease)==null?void 0:a.publishedAt)}</div>
        `}}},{name:"languages",shortDesc:"dominants",extract:t=>{const e={value:void 0},{edges:a,totalSize:r}=(t==null?void 0:t.languages)||{};if(!a||!r||a.some(n=>n==null))return e;const o=a[0];if(!o)return e;const s=n=>n.size/o.size>.7,d=({size:n,node:{color:h,name:g}})=>`
      <div>
        <span style="color: ${h}">${c["dot-fill"].toSVG()}</span>
        <span>${g}</span>
        <span class="percent muted">${Math.round(n*100/r)}%</span>
      </div>
      `;return{html:!0,value:a.filter(s).map(d).join("")}}},{name:"created",shortDesc:"time ago",extract:t=>({value:b(t.createdAt),sortValue:new Date(t.createdAt).getTime()})},{name:"updated",shortDesc:"time ago",extract:t=>({value:b(t.updatedAt),sortValue:t.updatedAt})}];function H(t){const e={};for(const a of z)e[a.name]=a.extract(t);return e}function Z(t,e){return t.includes(e)}function x(t){const e=R({name:"stars",direction:1}),a=j(()=>{const s=e.name,d=e.direction;return[...t].sort((n,h)=>{const g=n[s].sortValue,k=h[s].sortValue;return g&&k?d*(k-g):0})});function r(s){if(e.name===s){e.direction*=-1;return}Z(w,s)&&(e.name=s,e.direction=1)}function o(s){return e.name!==s?null:["sorter",e.direction>0?"bottom":"top"]}return{dataSorted:a,toggleSort:r,getSorterClass:o}}const $={class:"theader"},J=["onClick"],W={class:"name"},I={key:0,class:"info"},G={class:"entry"},F=["innerHTML"],B=A({props:{data:null},setup(t){const e=t,{dataSorted:a,toggleSort:r,getSorterClass:o}=x(e.data);return(s,d)=>(u(),i("table",null,[l("thead",null,[l("tr",$,[(u(!0),i(p,null,f(m(z),n=>(u(),i("th",{class:S([n.name,{sortable:m(Z)(m(w),n.name)},m(o)(n.name)]),onClick:()=>m(r)(n.name)},[l("div",W,C(n.name),1),n.shortDesc?(u(),i("div",I,C(n.shortDesc),1)):U("",!0)],10,J))),256))])]),l("tbody",null,[(u(!0),i(p,null,f(m(a),n=>(u(),i("tr",G,[(u(!0),i(p,null,f(m(z),h=>(u(),i("td",{class:S(h.name)},[n[h.name].html?(u(),i("div",{key:0,class:"cell-wrapper",innerHTML:n[h.name].value},null,8,F)):(u(),i(p,{key:1},[T(C(n[h.name].value),1)],64))],2))),256))]))),256))])]))}});var y=[{nameWithOwner:"vuejs/vue",name:"Vue v2",homepageUrl:"http://v2.vuejs.org",stargazerCount:204775,forkCount:34262,createdAt:"2013-07-29T03:24:51Z",updatedAt:"2023-08-14T23:18:50Z",url:"https://github.com/vuejs/vue",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/6128107?v=4"},latestRelease:{tagName:"v2.7.14",publishedAt:"2022-11-09T12:40:33Z"},issues:{totalCount:378},pullRequests:{totalCount:268},milestones:{totalCount:0},languages:{edges:[{size:1843676,node:{name:"TypeScript",color:"#3178c6"}},{size:34684,node:{name:"JavaScript",color:"#f1e05a"}},{size:17826,node:{name:"HTML",color:"#e34c26"}}],totalSize:1908160},commits:{history:{totalCount:3547}},diskUsage:31925},{nameWithOwner:"vuejs/core",name:"Vue v3",homepageUrl:"https://vuejs.org/",stargazerCount:39366,forkCount:7228,createdAt:"2018-06-12T13:49:36Z",updatedAt:"2023-08-14T18:41:36Z",url:"https://github.com/vuejs/core",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/6128107?v=4"},latestRelease:{tagName:"v3.3.4",publishedAt:"2023-05-18T08:31:59Z"},issues:{totalCount:706},pullRequests:{totalCount:440},milestones:{totalCount:0},languages:{edges:[{size:3233387,node:{name:"TypeScript",color:"#3178c6"}},{size:53746,node:{name:"JavaScript",color:"#f1e05a"}},{size:42550,node:{name:"HTML",color:"#e34c26"}}],totalSize:3346165},commits:{history:{totalCount:5023}},diskUsage:23218},{nameWithOwner:"facebook/react",name:"react",homepageUrl:"https://react.dev",stargazerCount:211723,forkCount:44424,createdAt:"2013-05-24T16:15:54Z",updatedAt:"2023-08-14T23:56:53Z",url:"https://github.com/facebook/react",owner:{avatarUrl:"https://react.dev/favicon.ico"},latestRelease:{tagName:"v18.2.0",publishedAt:"2022-06-14T19:54:21Z"},issues:{totalCount:1066},pullRequests:{totalCount:392},milestones:{totalCount:1},languages:{edges:[{size:4069652,node:{name:"JavaScript",color:"#f1e05a"}},{size:119939,node:{name:"HTML",color:"#e34c26"}},{size:63809,node:{name:"CSS",color:"#563d7c"}}],totalSize:4344521},commits:{history:{totalCount:15896}},diskUsage:335053},{nameWithOwner:"angular/angular",name:"angular",homepageUrl:"https://angular.io",stargazerCount:89638,forkCount:24104,createdAt:"2014-09-18T16:12:01Z",updatedAt:"2023-08-14T23:04:58Z",url:"https://github.com/angular/angular",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/139426?v=4"},latestRelease:{tagName:"16.2.0",publishedAt:"2023-08-09T21:03:41Z"},issues:{totalCount:1277},pullRequests:{totalCount:223},milestones:{totalCount:10},languages:{edges:[{size:22305130,node:{name:"TypeScript",color:"#3178c6"}},{size:2400195,node:{name:"JavaScript",color:"#f1e05a"}},{size:596766,node:{name:"Starlark",color:"#76d275"}}],totalSize:26289430},commits:{history:{totalCount:27625}},diskUsage:469144},{nameWithOwner:"sveltejs/svelte",name:"svelte",homepageUrl:"https://svelte.dev",stargazerCount:71818,forkCount:3976,createdAt:"2016-11-20T18:13:05Z",updatedAt:"2023-08-15T00:26:20Z",url:"https://github.com/sveltejs/svelte",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/23617963?v=4"},latestRelease:{tagName:"svelte@4.2.0",publishedAt:"2023-08-11T14:33:22Z"},issues:{totalCount:801},pullRequests:{totalCount:75},milestones:{totalCount:3},languages:{edges:[{size:1928993,node:{name:"JavaScript",color:"#f1e05a"}},{size:536595,node:{name:"Svelte",color:"#ff3e00"}},{size:17266,node:{name:"HTML",color:"#e34c26"}}],totalSize:2492557},commits:{history:{totalCount:7473}},diskUsage:99108},{nameWithOwner:"marko-js/marko",name:"marko",homepageUrl:"https://markojs.com/",stargazerCount:12752,forkCount:679,createdAt:"2014-01-07T23:58:21Z",updatedAt:"2023-08-14T20:07:19Z",url:"https://github.com/marko-js/marko",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/11873696?v=4"},latestRelease:{tagName:"@marko/translator-default@5.31.1",publishedAt:"2023-08-14T18:13:50Z"},issues:{totalCount:51},pullRequests:{totalCount:3},milestones:{totalCount:4},languages:{edges:[{size:930505,node:{name:"JavaScript",color:"#f1e05a"}},{size:272445,node:{name:"HTML",color:"#e34c26"}},{size:181064,node:{name:"Marko",color:"#42bff2"}}],totalSize:1384091},commits:{history:{totalCount:4846}},diskUsage:25848},{nameWithOwner:"lit/lit",name:"lit",homepageUrl:"https://lit.dev",stargazerCount:15517,forkCount:803,createdAt:"2017-06-29T16:27:16Z",updatedAt:"2023-08-15T00:00:42Z",url:"https://github.com/lit/lit",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/18489846?v=4"},latestRelease:{tagName:"@lit-labs/task@3.0.1",publishedAt:"2023-08-14T19:57:59Z"},issues:{totalCount:331},pullRequests:{totalCount:92},milestones:{totalCount:1},languages:{edges:[{size:2757927,node:{name:"TypeScript",color:"#3178c6"}},{size:2143634,node:{name:"JavaScript",color:"#f1e05a"}},{size:123341,node:{name:"HTML",color:"#e34c26"}}],totalSize:5046838},commits:{history:{totalCount:2147}},diskUsage:50395},{nameWithOwner:"ionic-team/stencil",name:"stencil",homepageUrl:"https://stenciljs.com",stargazerCount:11847,forkCount:752,createdAt:"2017-02-15T18:57:07Z",updatedAt:"2023-08-14T21:59:19Z",url:"https://github.com/ionic-team/stencil",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/3171503?v=4"},latestRelease:{tagName:"v4.0.5",publishedAt:"2023-08-14T16:58:49Z"},issues:{totalCount:387},pullRequests:{totalCount:56},milestones:{totalCount:0},languages:{edges:[{size:3763278,node:{name:"TypeScript",color:"#3178c6"}},{size:49761,node:{name:"HTML",color:"#e34c26"}},{size:38072,node:{name:"JavaScript",color:"#f1e05a"}}],totalSize:3868254},commits:{history:{totalCount:6961}},diskUsage:74183},{nameWithOwner:"alpinejs/alpine",name:"alpine",homepageUrl:"https://alpinejs.dev",stargazerCount:24563,forkCount:1073,createdAt:"2019-11-28T13:51:55Z",updatedAt:"2023-08-14T22:52:04Z",url:"https://github.com/alpinejs/alpine",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/59030169?v=4"},latestRelease:{tagName:"v3.12.3",publishedAt:"2023-07-02T15:51:23Z"},issues:{totalCount:0},pullRequests:{totalCount:14},milestones:{totalCount:0},languages:{edges:[{size:2914657,node:{name:"HTML",color:"#e34c26"}},{size:650109,node:{name:"JavaScript",color:"#f1e05a"}}],totalSize:3564766},commits:{history:{totalCount:2011}},diskUsage:7522},{nameWithOwner:"solidjs/solid",name:"solid",homepageUrl:"https://solidjs.com",stargazerCount:28659,forkCount:790,createdAt:"2018-04-24T16:36:27Z",updatedAt:"2023-08-15T00:26:11Z",url:"https://github.com/solidjs/solid",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/79226042?v=4"},latestRelease:{tagName:"v1.7.0",publishedAt:"2023-03-30T06:33:07Z"},issues:{totalCount:40},pullRequests:{totalCount:9},milestones:{totalCount:7},languages:{edges:[{size:424605,node:{name:"TypeScript",color:"#3178c6"}},{size:170708,node:{name:"JavaScript",color:"#f1e05a"}},{size:1302,node:{name:"CSS",color:"#563d7c"}}],totalSize:596615},commits:{history:{totalCount:1656}},diskUsage:13907},{nameWithOwner:"emberjs/ember.js",name:"ember.js",homepageUrl:"https://emberjs.com",stargazerCount:22444,forkCount:4312,createdAt:"2011-05-25T23:39:40Z",updatedAt:"2023-08-14T16:38:51Z",url:"https://github.com/emberjs/ember.js",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/1253363?v=4"},latestRelease:{tagName:"v5.2.0",publishedAt:"2023-08-07T15:17:47Z"},issues:{totalCount:269},pullRequests:{totalCount:85},milestones:{totalCount:6},languages:{edges:[{size:2956837,node:{name:"JavaScript",color:"#f1e05a"}},{size:1818735,node:{name:"TypeScript",color:"#3178c6"}},{size:7293,node:{name:"HTML",color:"#e34c26"}}],totalSize:4784162},commits:{history:{totalCount:22278}},diskUsage:78831},{nameWithOwner:"meteor/meteor",name:"meteor",homepageUrl:"https://meteor.com",stargazerCount:43611,forkCount:5286,createdAt:"2012-01-19T01:58:17Z",updatedAt:"2023-08-14T09:13:02Z",url:"https://github.com/meteor/meteor",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/789528?v=4"},latestRelease:null,issues:{totalCount:197},pullRequests:{totalCount:64},milestones:{totalCount:4},languages:{edges:[{size:7707942,node:{name:"JavaScript",color:"#f1e05a"}},{size:244827,node:{name:"TypeScript",color:"#3178c6"}},{size:81326,node:{name:"Shell",color:"#89e051"}}],totalSize:8353699},commits:{history:{totalCount:33929}},diskUsage:121533},{nameWithOwner:"elm/core",name:"Elm",homepageUrl:"http://package.elm-lang.org/packages/elm/core/latest",stargazerCount:2747,forkCount:363,createdAt:"2014-10-14T23:33:13Z",updatedAt:"2023-08-13T09:37:02Z",url:"https://github.com/elm/core",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/20698192?v=4"},latestRelease:null,issues:{totalCount:59},pullRequests:{totalCount:39},milestones:{totalCount:0},languages:{edges:[{size:222381,node:{name:"Elm",color:"#60B5CC"}},{size:37912,node:{name:"JavaScript",color:"#f1e05a"}},{size:2079,node:{name:"Shell",color:"#89e051"}}],totalSize:262372},commits:{history:{totalCount:1771}},diskUsage:1815},{nameWithOwner:"preactjs/preact",name:"preact",homepageUrl:"https://preactjs.com",stargazerCount:34866,forkCount:1931,createdAt:"2015-09-11T02:40:18Z",updatedAt:"2023-08-14T20:44:30Z",url:"https://github.com/preactjs/preact",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/26872990?v=4"},latestRelease:{tagName:"10.17.0",publishedAt:"2023-08-14T13:22:01Z"},issues:{totalCount:148},pullRequests:{totalCount:97},milestones:{totalCount:0},languages:{edges:[{size:1004210,node:{name:"JavaScript",color:"#f1e05a"}},{size:27147,node:{name:"TypeScript",color:"#3178c6"}},{size:19939,node:{name:"HTML",color:"#e34c26"}}],totalSize:1051296},commits:{history:{totalCount:5370}},diskUsage:14959}];function P(){return console.log("[useData] reposData:",y),y.map(H)}const E=l("h1",null,"Frontend Frameworks",-1),K={class:"this-repo-link",href:"https://github.com/blinpete/frontend-frameworks-stats"},Y=["innerHTML"],Q=["innerHTML"],X={class:"sign"},tt=T("Built with "),et=["innerHTML"],at=T(" on top of "),ot=l("a",{class:"api",href:"https://docs.github.com/en/graphql"},"GitHub API",-1),st=A({setup(t){const e=c["heart-fill"].toSVG(),a=V(P());return(r,o)=>(u(),i(p,null,[l("header",null,[E,l("a",K,[l("span",{innerHTML:m(c)["mark-github"].toSVG({width:30})},null,8,Y),l("span",{class:"inset",innerHTML:m(c)["mark-github"].toSVG({width:30})},null,8,Q)])]),a.value?(u(),L(B,{key:0,class:"main",data:a.value},null,8,["data"])):U("",!0),l("footer",null,[l("div",X,[tt,l("span",{class:"heart",innerHTML:m(e)},null,8,et),at,ot])])],64))}});N(st).mount("#app");
