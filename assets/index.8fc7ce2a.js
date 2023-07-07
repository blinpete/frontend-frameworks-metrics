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
      `;return{html:!0,value:a.filter(s).map(d).join("")}}},{name:"created",shortDesc:"time ago",extract:t=>({value:b(t.createdAt),sortValue:new Date(t.createdAt).getTime()})},{name:"updated",shortDesc:"time ago",extract:t=>({value:b(t.updatedAt),sortValue:t.updatedAt})}];function H(t){const e={};for(const a of z)e[a.name]=a.extract(t);return e}function Z(t,e){return t.includes(e)}function x(t){const e=R({name:"stars",direction:1}),a=j(()=>{const s=e.name,d=e.direction;return[...t].sort((n,h)=>{const g=n[s].sortValue,k=h[s].sortValue;return g&&k?d*(k-g):0})});function r(s){if(e.name===s){e.direction*=-1;return}Z(w,s)&&(e.name=s,e.direction=1)}function o(s){return e.name!==s?null:["sorter",e.direction>0?"bottom":"top"]}return{dataSorted:a,toggleSort:r,getSorterClass:o}}const $={class:"theader"},J=["onClick"],W={class:"name"},I={key:0,class:"info"},G={class:"entry"},F=["innerHTML"],B=A({props:{data:null},setup(t){const e=t,{dataSorted:a,toggleSort:r,getSorterClass:o}=x(e.data);return(s,d)=>(u(),i("table",null,[l("thead",null,[l("tr",$,[(u(!0),i(p,null,f(m(z),n=>(u(),i("th",{class:S([n.name,{sortable:m(Z)(m(w),n.name)},m(o)(n.name)]),onClick:()=>m(r)(n.name)},[l("div",W,C(n.name),1),n.shortDesc?(u(),i("div",I,C(n.shortDesc),1)):U("",!0)],10,J))),256))])]),l("tbody",null,[(u(!0),i(p,null,f(m(a),n=>(u(),i("tr",G,[(u(!0),i(p,null,f(m(z),h=>(u(),i("td",{class:S(h.name)},[n[h.name].html?(u(),i("div",{key:0,class:"cell-wrapper",innerHTML:n[h.name].value},null,8,F)):(u(),i(p,{key:1},[T(C(n[h.name].value),1)],64))],2))),256))]))),256))])]))}});var y=[{nameWithOwner:"vuejs/vue",name:"Vue v2",homepageUrl:"http://v2.vuejs.org",stargazerCount:204329,forkCount:34051,createdAt:"2013-07-29T03:24:51Z",updatedAt:"2023-07-06T23:38:43Z",url:"https://github.com/vuejs/vue",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/6128107?v=4"},latestRelease:{tagName:"v2.7.14",publishedAt:"2022-11-09T12:40:33Z"},issues:{totalCount:376},pullRequests:{totalCount:266},milestones:{totalCount:0},languages:{edges:[{size:1843676,node:{name:"TypeScript",color:"#3178c6"}},{size:34684,node:{name:"JavaScript",color:"#f1e05a"}},{size:17826,node:{name:"HTML",color:"#e34c26"}}],totalSize:1908160},commits:{history:{totalCount:3547}},diskUsage:31925},{nameWithOwner:"vuejs/core",name:"Vue v3",homepageUrl:"https://vuejs.org/",stargazerCount:38627,forkCount:7083,createdAt:"2018-06-12T13:49:36Z",updatedAt:"2023-07-06T23:55:06Z",url:"https://github.com/vuejs/core",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/6128107?v=4"},latestRelease:{tagName:"v3.3.4",publishedAt:"2023-05-18T08:31:59Z"},issues:{totalCount:670},pullRequests:{totalCount:448},milestones:{totalCount:0},languages:{edges:[{size:3223037,node:{name:"TypeScript",color:"#3178c6"}},{size:53980,node:{name:"JavaScript",color:"#f1e05a"}},{size:42550,node:{name:"HTML",color:"#e34c26"}}],totalSize:3335399},commits:{history:{totalCount:4977}},diskUsage:23277},{nameWithOwner:"facebook/react",name:"react",homepageUrl:"https://react.dev",stargazerCount:210037,forkCount:43971,createdAt:"2013-05-24T16:15:54Z",updatedAt:"2023-07-06T22:57:50Z",url:"https://github.com/facebook/react",owner:{avatarUrl:"https://react.dev/favicon.ico"},latestRelease:{tagName:"v18.2.0",publishedAt:"2022-06-14T19:54:21Z"},issues:{totalCount:1013},pullRequests:{totalCount:347},milestones:{totalCount:1},languages:{edges:[{size:4067576,node:{name:"JavaScript",color:"#f1e05a"}},{size:119939,node:{name:"HTML",color:"#e34c26"}},{size:63787,node:{name:"CSS",color:"#563d7c"}}],totalSize:4342423},commits:{history:{totalCount:15872}},diskUsage:333038},{nameWithOwner:"angular/angular",name:"angular",homepageUrl:"https://angular.io",stargazerCount:89102,forkCount:23879,createdAt:"2014-09-18T16:12:01Z",updatedAt:"2023-07-07T00:44:09Z",url:"https://github.com/angular/angular",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/139426?v=4"},latestRelease:{tagName:"16.1.4",publishedAt:"2023-07-06T23:48:12Z"},issues:{totalCount:1238},pullRequests:{totalCount:228},milestones:{totalCount:11},languages:{edges:[{size:21802221,node:{name:"TypeScript",color:"#3178c6"}},{size:2366007,node:{name:"JavaScript",color:"#f1e05a"}},{size:597299,node:{name:"Starlark",color:"#76d275"}}],totalSize:25750995},commits:{history:{totalCount:27376}},diskUsage:465956},{nameWithOwner:"sveltejs/svelte",name:"svelte",homepageUrl:"https://svelte.dev",stargazerCount:70694,forkCount:3916,createdAt:"2016-11-20T18:13:05Z",updatedAt:"2023-07-06T23:42:41Z",url:"https://github.com/sveltejs/svelte",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/23617963?v=4"},latestRelease:{tagName:"svelte@4.0.5",publishedAt:"2023-07-06T16:16:05Z"},issues:{totalCount:774},pullRequests:{totalCount:65},milestones:{totalCount:3},languages:{edges:[{size:1931584,node:{name:"JavaScript",color:"#f1e05a"}},{size:536476,node:{name:"Svelte",color:"#ff3e00"}},{size:17266,node:{name:"HTML",color:"#e34c26"}}],totalSize:2495029},commits:{history:{totalCount:7417}},diskUsage:99057},{nameWithOwner:"marko-js/marko",name:"marko",homepageUrl:"https://markojs.com/",stargazerCount:12691,forkCount:679,createdAt:"2014-01-07T23:58:21Z",updatedAt:"2023-07-06T23:13:10Z",url:"https://github.com/marko-js/marko",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/11873696?v=4"},latestRelease:{tagName:"@marko/translator-default@5.29.0",publishedAt:"2023-07-06T22:51:28Z"},issues:{totalCount:52},pullRequests:{totalCount:2},milestones:{totalCount:4},languages:{edges:[{size:890985,node:{name:"JavaScript",color:"#f1e05a"}},{size:272489,node:{name:"HTML",color:"#e34c26"}},{size:180259,node:{name:"Marko",color:"#42bff2"}}],totalSize:1343733},commits:{history:{totalCount:4800}},diskUsage:20548},{nameWithOwner:"lit/lit",name:"lit",homepageUrl:"https://lit.dev",stargazerCount:15144,forkCount:789,createdAt:"2017-06-29T16:27:16Z",updatedAt:"2023-07-06T18:07:02Z",url:"https://github.com/lit/lit",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/18489846?v=4"},latestRelease:{tagName:"lit-html@2.7.5",publishedAt:"2023-07-05T21:58:16Z"},issues:{totalCount:327},pullRequests:{totalCount:87},milestones:{totalCount:1},languages:{edges:[{size:2650216,node:{name:"TypeScript",color:"#3178c6"}},{size:2124432,node:{name:"JavaScript",color:"#f1e05a"}},{size:123341,node:{name:"HTML",color:"#e34c26"}}],totalSize:4918408},commits:{history:{totalCount:2096}},diskUsage:50037},{nameWithOwner:"ionic-team/stencil",name:"stencil",homepageUrl:"https://stenciljs.com",stargazerCount:11744,forkCount:749,createdAt:"2017-02-15T18:57:07Z",updatedAt:"2023-07-06T17:43:48Z",url:"https://github.com/ionic-team/stencil",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/3171503?v=4"},latestRelease:{tagName:"v4.0.1",publishedAt:"2023-06-28T12:12:23Z"},issues:{totalCount:396},pullRequests:{totalCount:63},milestones:{totalCount:0},languages:{edges:[{size:3749157,node:{name:"TypeScript",color:"#3178c6"}},{size:49470,node:{name:"HTML",color:"#e34c26"}},{size:37598,node:{name:"JavaScript",color:"#f1e05a"}}],totalSize:3853368},commits:{history:{totalCount:6866}},diskUsage:74069},{nameWithOwner:"alpinejs/alpine",name:"alpine",homepageUrl:"https://alpinejs.dev",stargazerCount:24194,forkCount:1060,createdAt:"2019-11-28T13:51:55Z",updatedAt:"2023-07-06T18:47:38Z",url:"https://github.com/alpinejs/alpine",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/59030169?v=4"},latestRelease:{tagName:"v3.12.3",publishedAt:"2023-07-02T15:51:23Z"},issues:{totalCount:0},pullRequests:{totalCount:15},milestones:{totalCount:0},languages:{edges:[{size:2914309,node:{name:"HTML",color:"#e34c26"}},{size:635143,node:{name:"JavaScript",color:"#f1e05a"}}],totalSize:3549452},commits:{history:{totalCount:1967}},diskUsage:7371},{nameWithOwner:"solidjs/solid",name:"solid",homepageUrl:"https://solidjs.com",stargazerCount:28241,forkCount:775,createdAt:"2018-04-24T16:36:27Z",updatedAt:"2023-07-06T22:05:28Z",url:"https://github.com/solidjs/solid",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/79226042?v=4"},latestRelease:{tagName:"v1.7.0",publishedAt:"2023-03-30T06:33:07Z"},issues:{totalCount:37},pullRequests:{totalCount:9},milestones:{totalCount:7},languages:{edges:[{size:418764,node:{name:"TypeScript",color:"#3178c6"}},{size:170708,node:{name:"JavaScript",color:"#f1e05a"}},{size:1302,node:{name:"CSS",color:"#563d7c"}}],totalSize:590774},commits:{history:{totalCount:1632}},diskUsage:13785},{nameWithOwner:"emberjs/ember.js",name:"ember.js",homepageUrl:"https://emberjs.com",stargazerCount:22436,forkCount:4304,createdAt:"2011-05-25T23:39:40Z",updatedAt:"2023-07-06T19:19:20Z",url:"https://github.com/emberjs/ember.js",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/1253363?v=4"},latestRelease:{tagName:"v5.1.2",publishedAt:"2023-06-30T17:34:54Z"},issues:{totalCount:327},pullRequests:{totalCount:91},milestones:{totalCount:6},languages:{edges:[{size:2959439,node:{name:"JavaScript",color:"#f1e05a"}},{size:1816746,node:{name:"TypeScript",color:"#3178c6"}},{size:7835,node:{name:"HTML",color:"#e34c26"}}],totalSize:4785317},commits:{history:{totalCount:22241}},diskUsage:79005},{nameWithOwner:"meteor/meteor",name:"meteor",homepageUrl:"https://meteor.com",stargazerCount:43548,forkCount:5263,createdAt:"2012-01-19T01:58:17Z",updatedAt:"2023-07-06T21:35:34Z",url:"https://github.com/meteor/meteor",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/789528?v=4"},latestRelease:null,issues:{totalCount:192},pullRequests:{totalCount:60},milestones:{totalCount:3},languages:{edges:[{size:7706512,node:{name:"JavaScript",color:"#f1e05a"}},{size:244827,node:{name:"TypeScript",color:"#3178c6"}},{size:81298,node:{name:"Shell",color:"#89e051"}}],totalSize:8352212},commits:{history:{totalCount:33789}},diskUsage:121154},{nameWithOwner:"elm/core",name:"Elm",homepageUrl:"http://package.elm-lang.org/packages/elm/core/latest",stargazerCount:2743,forkCount:361,createdAt:"2014-10-14T23:33:13Z",updatedAt:"2023-07-06T15:01:32Z",url:"https://github.com/elm/core",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/20698192?v=4"},latestRelease:null,issues:{totalCount:59},pullRequests:{totalCount:38},milestones:{totalCount:0},languages:{edges:[{size:222381,node:{name:"Elm",color:"#60B5CC"}},{size:37912,node:{name:"JavaScript",color:"#f1e05a"}},{size:2079,node:{name:"Shell",color:"#89e051"}}],totalSize:262372},commits:{history:{totalCount:1771}},diskUsage:1815},{nameWithOwner:"preactjs/preact",name:"preact",homepageUrl:"https://preactjs.com",stargazerCount:34666,forkCount:1920,createdAt:"2015-09-11T02:40:18Z",updatedAt:"2023-07-06T23:00:15Z",url:"https://github.com/preactjs/preact",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/26872990?v=4"},latestRelease:{tagName:"10.15.1",publishedAt:"2023-05-27T09:28:04Z"},issues:{totalCount:143},pullRequests:{totalCount:100},milestones:{totalCount:0},languages:{edges:[{size:999615,node:{name:"JavaScript",color:"#f1e05a"}},{size:26842,node:{name:"TypeScript",color:"#3178c6"}},{size:19939,node:{name:"HTML",color:"#e34c26"}}],totalSize:1046396},commits:{history:{totalCount:5352}},diskUsage:15696}];function P(){return console.log("[useData] reposData:",y),y.map(H)}const E=l("h1",null,"Frontend Frameworks",-1),K={class:"this-repo-link",href:"https://github.com/blinpete/frontend-frameworks-stats"},Y=["innerHTML"],Q=["innerHTML"],X={class:"sign"},tt=T("Built with "),et=["innerHTML"],at=T(" on top of "),ot=l("a",{class:"api",href:"https://docs.github.com/en/graphql"},"GitHub API",-1),st=A({setup(t){const e=c["heart-fill"].toSVG(),a=V(P());return(r,o)=>(u(),i(p,null,[l("header",null,[E,l("a",K,[l("span",{innerHTML:m(c)["mark-github"].toSVG({width:30})},null,8,Y),l("span",{class:"inset",innerHTML:m(c)["mark-github"].toSVG({width:30})},null,8,Q)])]),a.value?(u(),L(B,{key:0,class:"main",data:a.value},null,8,["data"])):U("",!0),l("footer",null,[l("div",X,[tt,l("span",{class:"heart",innerHTML:m(e)},null,8,et),at,ot])])],64))}});N(st).mount("#app");