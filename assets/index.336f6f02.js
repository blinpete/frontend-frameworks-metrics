import{o as c,r as R,c as j,d as A,a as u,b as i,e as l,F as h,f,u as m,n as k,t as C,g as U,h as z,i as V,j as L,k as N}from"./vendor.1643424d.js";const D=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};D();const M=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}),_=[{amount:60,name:"seconds"},{amount:60,name:"minutes"},{amount:24,name:"hours"},{amount:7,name:"days"},{amount:4.34524,name:"weeks"},{amount:12,name:"months"},{amount:Number.POSITIVE_INFINITY,name:"years"}];function O(t){if(!t)return"";t=new Date(t).valueOf();let e=(t-new Date().valueOf())/1e3;for(let a=0;a<=_.length;a++){const r=_[a];if(Math.abs(e)<r.amount)return M.format(Math.round(e),r.name);e/=r.amount}return""}function b(t,e=!1){const a=O(t);return e?a:a.replace("ago","")}function v(t){return t<1e3?t:t.toLocaleString("en-us")}function q(t){return t[0].toUpperCase()+t.slice(1)}const w=["stars","forks","issues","commits","PRs","created","updated"],T=[{name:"repo",shortDesc:"link",extract:t=>({html:!0,value:`
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
        `}}},{name:"languages",shortDesc:"dominants",extract:t=>{const e={value:void 0},{edges:a,totalSize:r}=(t==null?void 0:t.languages)||{};if(!a||!r||a.some(n=>n==null))return e;const o=a[0];if(!o)return e;const s=n=>n.size/o.size>.7,d=({size:n,node:{color:p,name:g}})=>`
      <div>
        <span style="color: ${p}">${c["dot-fill"].toSVG()}</span>
        <span>${g}</span>
        <span class="percent muted">${Math.round(n*100/r)}%</span>
      </div>
      `;return{html:!0,value:a.filter(s).map(d).join("")}}},{name:"created",shortDesc:"time ago",extract:t=>({value:b(t.createdAt),sortValue:new Date(t.createdAt).getTime()})},{name:"updated",shortDesc:"time ago",extract:t=>({value:b(t.updatedAt),sortValue:t.updatedAt})}];function H(t){const e={};for(const a of T)e[a.name]=a.extract(t);return e}function Z(t,e){return t.includes(e)}function x(t){const e=R({name:"stars",direction:1}),a=j(()=>{const s=e.name,d=e.direction;return[...t].sort((n,p)=>{const g=n[s].sortValue,S=p[s].sortValue;return g&&S?d*(S-g):0})});function r(s){if(e.name===s){e.direction*=-1;return}Z(w,s)&&(e.name=s,e.direction=1)}function o(s){return e.name!==s?null:["sorter",e.direction>0?"bottom":"top"]}return{dataSorted:a,toggleSort:r,getSorterClass:o}}const $={class:"theader"},J=["onClick"],W={class:"name"},I={key:0,class:"info"},G={class:"entry"},F=["innerHTML"],B=A({props:{data:null},setup(t){const e=t,{dataSorted:a,toggleSort:r,getSorterClass:o}=x(e.data);return(s,d)=>(u(),i("table",null,[l("thead",null,[l("tr",$,[(u(!0),i(h,null,f(m(T),n=>(u(),i("th",{class:k([n.name,{sortable:m(Z)(m(w),n.name)},m(o)(n.name)]),onClick:()=>m(r)(n.name)},[l("div",W,C(n.name),1),n.shortDesc?(u(),i("div",I,C(n.shortDesc),1)):U("",!0)],10,J))),256))])]),l("tbody",null,[(u(!0),i(h,null,f(m(a),n=>(u(),i("tr",G,[(u(!0),i(h,null,f(m(T),p=>(u(),i("td",{class:k(p.name)},[n[p.name].html?(u(),i("div",{key:0,class:"cell-wrapper",innerHTML:n[p.name].value},null,8,F)):(u(),i(h,{key:1},[z(C(n[p.name].value),1)],64))],2))),256))]))),256))])]))}});var y=[{nameWithOwner:"vuejs/vue",name:"Vue v2",homepageUrl:"http://v2.vuejs.org",stargazerCount:206521,forkCount:33564,createdAt:"2013-07-29T03:24:51Z",updatedAt:"2024-03-09T00:33:01Z",url:"https://github.com/vuejs/vue",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/6128107?v=4"},latestRelease:{tagName:"v2.7.16",publishedAt:"2023-12-24T15:02:39Z"},issues:{totalCount:356},pullRequests:{totalCount:249},milestones:{totalCount:0},languages:{edges:[{size:1852998,node:{name:"TypeScript",color:"#3178c6"}},{size:34702,node:{name:"JavaScript",color:"#f1e05a"}},{size:17826,node:{name:"HTML",color:"#e34c26"}}],totalSize:1917500},commits:{history:{totalCount:3590}},diskUsage:32405},{nameWithOwner:"vuejs/core",name:"Vue v3",homepageUrl:"https://vuejs.org/",stargazerCount:43712,forkCount:7698,createdAt:"2018-06-12T13:49:36Z",updatedAt:"2024-03-09T00:18:02Z",url:"https://github.com/vuejs/core",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/6128107?v=4"},latestRelease:{tagName:"v3.4.21",publishedAt:"2024-02-28T11:14:49Z"},issues:{totalCount:695},pullRequests:{totalCount:383},milestones:{totalCount:0},languages:{edges:[{size:3460784,node:{name:"TypeScript",color:"#3178c6"}},{size:63686,node:{name:"JavaScript",color:"#f1e05a"}},{size:42443,node:{name:"HTML",color:"#e34c26"}}],totalSize:3584984},commits:{history:{totalCount:5662}},diskUsage:26881},{nameWithOwner:"facebook/react",name:"react",homepageUrl:"https://react.dev",stargazerCount:219823,forkCount:44919,createdAt:"2013-05-24T16:15:54Z",updatedAt:"2024-03-08T23:39:04Z",url:"https://github.com/facebook/react",owner:{avatarUrl:"https://react.dev/favicon.ico"},latestRelease:{tagName:"v18.2.0",publishedAt:"2022-06-14T19:54:21Z"},issues:{totalCount:1175},pullRequests:{totalCount:448},milestones:{totalCount:1},languages:{edges:[{size:4203549,node:{name:"JavaScript",color:"#f1e05a"}},{size:120786,node:{name:"HTML",color:"#e34c26"}},{size:64424,node:{name:"CSS",color:"#563d7c"}}],totalSize:4479865},commits:{history:{totalCount:16464}},diskUsage:399751},{nameWithOwner:"angular/angular",name:"angular",homepageUrl:"https://angular.dev",stargazerCount:94060,forkCount:24484,createdAt:"2014-09-18T16:12:01Z",updatedAt:"2024-03-08T22:28:59Z",url:"https://github.com/angular/angular",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/139426?v=4"},latestRelease:{tagName:"17.2.4",publishedAt:"2024-03-06T19:28:57Z"},issues:{totalCount:1391},pullRequests:{totalCount:205},milestones:{totalCount:9},languages:{edges:[{size:27106101,node:{name:"TypeScript",color:"#3178c6"}},{size:2833209,node:{name:"JavaScript",color:"#f1e05a"}},{size:793927,node:{name:"HTML",color:"#e34c26"}}],totalSize:32032372},commits:{history:{totalCount:29528}},diskUsage:491500},{nameWithOwner:"sveltejs/svelte",name:"svelte",homepageUrl:"https://svelte.dev",stargazerCount:75751,forkCount:3869,createdAt:"2016-11-20T18:13:05Z",updatedAt:"2024-03-08T23:27:15Z",url:"https://github.com/sveltejs/svelte",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/23617963?v=4"},latestRelease:{tagName:"svelte@4.2.12",publishedAt:"2024-02-23T08:03:26Z"},issues:{totalCount:892},pullRequests:{totalCount:80},milestones:{totalCount:5},languages:{edges:[{size:1987046,node:{name:"JavaScript",color:"#f1e05a"}},{size:684761,node:{name:"Svelte",color:"#ff3e00"}},{size:84406,node:{name:"TypeScript",color:"#3178c6"}}],totalSize:2818729},commits:{history:{totalCount:8100}},diskUsage:103425},{nameWithOwner:"marko-js/marko",name:"marko",homepageUrl:"https://markojs.com/",stargazerCount:13070,forkCount:628,createdAt:"2014-01-07T23:58:21Z",updatedAt:"2024-03-09T00:12:24Z",url:"https://github.com/marko-js/marko",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/11873696?v=4"},latestRelease:{tagName:"@marko/translator-tags@0.1.6",publishedAt:"2024-03-08T21:41:40Z"},issues:{totalCount:54},pullRequests:{totalCount:4},milestones:{totalCount:4},languages:{edges:[{size:1438860,node:{name:"JavaScript",color:"#f1e05a"}},{size:409424,node:{name:"TypeScript",color:"#3178c6"}},{size:267338,node:{name:"HTML",color:"#e34c26"}}],totalSize:2323524},commits:{history:{totalCount:5497}},diskUsage:27137},{nameWithOwner:"lit/lit",name:"lit",homepageUrl:"https://lit.dev",stargazerCount:17232,forkCount:857,createdAt:"2017-06-29T16:27:16Z",updatedAt:"2024-03-09T00:16:52Z",url:"https://github.com/lit/lit",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/18489846?v=4"},latestRelease:{tagName:"@lit/ts-transformers@2.0.1",publishedAt:"2024-01-31T19:50:37Z"},issues:{totalCount:370},pullRequests:{totalCount:99},milestones:{totalCount:1},languages:{edges:[{size:3128139,node:{name:"TypeScript",color:"#3178c6"}},{size:2155593,node:{name:"JavaScript",color:"#f1e05a"}},{size:123480,node:{name:"HTML",color:"#e34c26"}}],totalSize:5429630},commits:{history:{totalCount:2458}},diskUsage:53399},{nameWithOwner:"ionic-team/stencil",name:"stencil",homepageUrl:"https://stenciljs.com",stargazerCount:12215,forkCount:757,createdAt:"2017-02-15T18:57:07Z",updatedAt:"2024-03-08T08:46:44Z",url:"https://github.com/ionic-team/stencil",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/3171503?v=4"},latestRelease:{tagName:"v4.12.5",publishedAt:"2024-03-04T18:25:33Z"},issues:{totalCount:341},pullRequests:{totalCount:40},milestones:{totalCount:0},languages:{edges:[{size:4208094,node:{name:"TypeScript",color:"#3178c6"}},{size:59872,node:{name:"HTML",color:"#e34c26"}},{size:36430,node:{name:"JavaScript",color:"#f1e05a"}}],totalSize:4322702},commits:{history:{totalCount:7552}},diskUsage:77976},{nameWithOwner:"alpinejs/alpine",name:"alpine",homepageUrl:"https://alpinejs.dev",stargazerCount:26432,forkCount:1139,createdAt:"2019-11-28T13:51:55Z",updatedAt:"2024-03-08T23:32:03Z",url:"https://github.com/alpinejs/alpine",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/59030169?v=4"},latestRelease:{tagName:"v3.13.7",publishedAt:"2024-03-08T12:59:26Z"},issues:{totalCount:0},pullRequests:{totalCount:0},milestones:{totalCount:0},languages:{edges:[{size:2903266,node:{name:"HTML",color:"#e34c26"}},{size:677007,node:{name:"JavaScript",color:"#f1e05a"}}],totalSize:3580273},commits:{history:{totalCount:2150}},diskUsage:7313},{nameWithOwner:"solidjs/solid",name:"solid",homepageUrl:"https://solidjs.com",stargazerCount:30658,forkCount:857,createdAt:"2018-04-24T16:36:27Z",updatedAt:"2024-03-08T23:32:15Z",url:"https://github.com/solidjs/solid",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/79226042?v=4"},latestRelease:{tagName:"v1.8.0",publishedAt:"2023-10-09T23:33:49Z"},issues:{totalCount:63},pullRequests:{totalCount:11},milestones:{totalCount:8},languages:{edges:[{size:431435,node:{name:"TypeScript",color:"#3178c6"}},{size:171057,node:{name:"JavaScript",color:"#f1e05a"}},{size:1302,node:{name:"CSS",color:"#563d7c"}}],totalSize:603794},commits:{history:{totalCount:1730}},diskUsage:14003},{nameWithOwner:"emberjs/ember.js",name:"ember.js",homepageUrl:"https://emberjs.com",stargazerCount:22422,forkCount:4218,createdAt:"2011-05-25T23:39:40Z",updatedAt:"2024-03-08T12:32:02Z",url:"https://github.com/emberjs/ember.js",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/1253363?v=4"},latestRelease:{tagName:"v5.7.0",publishedAt:"2024-03-04T21:07:12Z"},issues:{totalCount:284},pullRequests:{totalCount:73},milestones:{totalCount:6},languages:{edges:[{size:2964048,node:{name:"JavaScript",color:"#f1e05a"}},{size:1826049,node:{name:"TypeScript",color:"#3178c6"}},{size:7293,node:{name:"HTML",color:"#e34c26"}}],totalSize:4797718},commits:{history:{totalCount:22426}},diskUsage:81497},{nameWithOwner:"meteor/meteor",name:"meteor",homepageUrl:"https://meteor.com",stargazerCount:43986,forkCount:5150,createdAt:"2012-01-19T01:58:17Z",updatedAt:"2024-03-08T17:28:09Z",url:"https://github.com/meteor/meteor",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/789528?v=4"},latestRelease:null,issues:{totalCount:231},pullRequests:{totalCount:87},milestones:{totalCount:3},languages:{edges:[{size:7726102,node:{name:"JavaScript",color:"#f1e05a"}},{size:244839,node:{name:"TypeScript",color:"#3178c6"}},{size:81309,node:{name:"Shell",color:"#89e051"}}],totalSize:8371909},commits:{history:{totalCount:34596}},diskUsage:124554},{nameWithOwner:"elm/core",name:"Elm",homepageUrl:"http://package.elm-lang.org/packages/elm/core/latest",stargazerCount:2772,forkCount:362,createdAt:"2014-10-14T23:33:13Z",updatedAt:"2024-03-07T13:04:44Z",url:"https://github.com/elm/core",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/20698192?v=4"},latestRelease:null,issues:{totalCount:62},pullRequests:{totalCount:41},milestones:{totalCount:0},languages:{edges:[{size:222381,node:{name:"Elm",color:"#60B5CC"}},{size:37912,node:{name:"JavaScript",color:"#f1e05a"}},{size:2079,node:{name:"Shell",color:"#89e051"}}],totalSize:262372},commits:{history:{totalCount:1771}},diskUsage:1815},{nameWithOwner:"preactjs/preact",name:"preact",homepageUrl:"https://preactjs.com",stargazerCount:35862,forkCount:1914,createdAt:"2015-09-11T02:40:18Z",updatedAt:"2024-03-08T23:56:17Z",url:"https://github.com/preactjs/preact",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/26872990?v=4"},latestRelease:{tagName:"10.19.6",publishedAt:"2024-02-22T09:30:28Z"},issues:{totalCount:153},pullRequests:{totalCount:98},milestones:{totalCount:0},languages:{edges:[{size:1061771,node:{name:"JavaScript",color:"#f1e05a"}},{size:29376,node:{name:"TypeScript",color:"#3178c6"}},{size:20103,node:{name:"HTML",color:"#e34c26"}}],totalSize:1111250},commits:{history:{totalCount:5555}},diskUsage:15583}];function P(){return console.log("[useData] reposData:",y),y.map(H)}const E=l("h1",null,"Frontend Frameworks",-1),K={class:"this-repo-link",href:"https://github.com/blinpete/frontend-frameworks-stats"},Y=["innerHTML"],Q=["innerHTML"],X={class:"sign"},tt=z("Built with "),et=["innerHTML"],at=z(" on top of "),ot=l("a",{class:"api",href:"https://docs.github.com/en/graphql"},"GitHub API",-1),st=A({setup(t){const e=c["heart-fill"].toSVG(),a=V(P());return(r,o)=>(u(),i(h,null,[l("header",null,[E,l("a",K,[l("span",{innerHTML:m(c)["mark-github"].toSVG({width:30})},null,8,Y),l("span",{class:"inset",innerHTML:m(c)["mark-github"].toSVG({width:30})},null,8,Q)])]),a.value?(u(),L(B,{key:0,class:"main",data:a.value},null,8,["data"])):U("",!0),l("footer",null,[l("div",X,[tt,l("span",{class:"heart",innerHTML:m(e)},null,8,et),at,ot])])],64))}});N(st).mount("#app");
