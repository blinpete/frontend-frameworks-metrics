import{o as c,r as R,c as j,d as A,a as u,b as i,e as l,F as h,f,u as m,n as k,t as C,g as U,h as T,i as V,j as D,k as L}from"./vendor.1643424d.js";const N=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};N();const M=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}),_=[{amount:60,name:"seconds"},{amount:60,name:"minutes"},{amount:24,name:"hours"},{amount:7,name:"days"},{amount:4.34524,name:"weeks"},{amount:12,name:"months"},{amount:Number.POSITIVE_INFINITY,name:"years"}];function O(t){if(!t)return"";t=new Date(t).valueOf();let e=(t-new Date().valueOf())/1e3;for(let a=0;a<=_.length;a++){const r=_[a];if(Math.abs(e)<r.amount)return M.format(Math.round(e),r.name);e/=r.amount}return""}function b(t,e=!1){const a=O(t);return e?a:a.replace("ago","")}function v(t){return t<1e3?t:t.toLocaleString("en-us")}function q(t){return t[0].toUpperCase()+t.slice(1)}const w=["stars","forks","issues","commits","PRs","created","updated"],z=[{name:"repo",shortDesc:"link",extract:t=>({html:!0,value:`
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
      `;return{html:!0,value:a.filter(s).map(d).join("")}}},{name:"created",shortDesc:"time ago",extract:t=>({value:b(t.createdAt),sortValue:new Date(t.createdAt).getTime()})},{name:"updated",shortDesc:"time ago",extract:t=>({value:b(t.updatedAt),sortValue:t.updatedAt})}];function x(t){const e={};for(const a of z)e[a.name]=a.extract(t);return e}function Z(t,e){return t.includes(e)}function H(t){const e=R({name:"stars",direction:1}),a=j(()=>{const s=e.name,d=e.direction;return[...t].sort((n,p)=>{const g=n[s].sortValue,S=p[s].sortValue;return g&&S?d*(S-g):0})});function r(s){if(e.name===s){e.direction*=-1;return}Z(w,s)&&(e.name=s,e.direction=1)}function o(s){return e.name!==s?null:["sorter",e.direction>0?"bottom":"top"]}return{dataSorted:a,toggleSort:r,getSorterClass:o}}const $={class:"theader"},J=["onClick"],W={class:"name"},I={key:0,class:"info"},G={class:"entry"},F=["innerHTML"],B=A({props:{data:null},setup(t){const e=t,{dataSorted:a,toggleSort:r,getSorterClass:o}=H(e.data);return(s,d)=>(u(),i("table",null,[l("thead",null,[l("tr",$,[(u(!0),i(h,null,f(m(z),n=>(u(),i("th",{class:k([n.name,{sortable:m(Z)(m(w),n.name)},m(o)(n.name)]),onClick:()=>m(r)(n.name)},[l("div",W,C(n.name),1),n.shortDesc?(u(),i("div",I,C(n.shortDesc),1)):U("",!0)],10,J))),256))])]),l("tbody",null,[(u(!0),i(h,null,f(m(a),n=>(u(),i("tr",G,[(u(!0),i(h,null,f(m(z),p=>(u(),i("td",{class:k(p.name)},[n[p.name].html?(u(),i("div",{key:0,class:"cell-wrapper",innerHTML:n[p.name].value},null,8,F)):(u(),i(h,{key:1},[T(C(n[p.name].value),1)],64))],2))),256))]))),256))])]))}});var y=[{nameWithOwner:"vuejs/vue",name:"Vue v2",homepageUrl:"http://v2.vuejs.org",stargazerCount:203672,forkCount:33734,createdAt:"2013-07-29T03:24:51Z",updatedAt:"2023-05-19T23:30:52Z",url:"https://github.com/vuejs/vue",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/6128107?v=4"},latestRelease:{tagName:"v2.7.14",publishedAt:"2022-11-09T12:40:33Z"},issues:{totalCount:371},pullRequests:{totalCount:264},milestones:{totalCount:0},languages:{edges:[{size:1843676,node:{name:"TypeScript",color:"#3178c6"}},{size:34684,node:{name:"JavaScript",color:"#f1e05a"}},{size:17826,node:{name:"HTML",color:"#e34c26"}}],totalSize:1908160},commits:{history:{totalCount:3547}},diskUsage:31925},{nameWithOwner:"vuejs/core",name:"Vue v3",homepageUrl:"https://vuejs.org/",stargazerCount:37652,forkCount:6883,createdAt:"2018-06-12T13:49:36Z",updatedAt:"2023-05-19T23:31:05Z",url:"https://github.com/vuejs/core",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/6128107?v=4"},latestRelease:{tagName:"v3.3.4",publishedAt:"2023-05-18T08:31:59Z"},issues:{totalCount:615},pullRequests:{totalCount:363},milestones:{totalCount:0},languages:{edges:[{size:3222573,node:{name:"TypeScript",color:"#3178c6"}},{size:53903,node:{name:"JavaScript",color:"#f1e05a"}},{size:42543,node:{name:"HTML",color:"#e34c26"}}],totalSize:3334372},commits:{history:{totalCount:4955}},diskUsage:22939},{nameWithOwner:"facebook/react",name:"react",homepageUrl:"https://react.dev",stargazerCount:207653,forkCount:43331,createdAt:"2013-05-24T16:15:54Z",updatedAt:"2023-05-19T23:22:24Z",url:"https://github.com/facebook/react",owner:{avatarUrl:"https://react.dev/favicon.ico"},latestRelease:{tagName:"v18.2.0",publishedAt:"2022-06-14T19:54:21Z"},issues:{totalCount:973},pullRequests:{totalCount:295},milestones:{totalCount:1},languages:{edges:[{size:4119826,node:{name:"JavaScript",color:"#f1e05a"}},{size:120153,node:{name:"HTML",color:"#e34c26"}},{size:64916,node:{name:"CSS",color:"#563d7c"}}],totalSize:4396016},commits:{history:{totalCount:15811}},diskUsage:323577},{nameWithOwner:"angular/angular",name:"angular",homepageUrl:"https://angular.io",stargazerCount:88212,forkCount:23600,createdAt:"2014-09-18T16:12:01Z",updatedAt:"2023-05-19T23:16:13Z",url:"https://github.com/angular/angular",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/139426?v=4"},latestRelease:{tagName:"16.0.2",publishedAt:"2023-05-17T18:32:23Z"},issues:{totalCount:1233},pullRequests:{totalCount:185},milestones:{totalCount:10},languages:{edges:[{size:21682519,node:{name:"TypeScript",color:"#3178c6"}},{size:2371179,node:{name:"JavaScript",color:"#f1e05a"}},{size:595510,node:{name:"Starlark",color:"#76d275"}}],totalSize:25640489},commits:{history:{totalCount:27083}},diskUsage:460502},{nameWithOwner:"sveltejs/svelte",name:"svelte",homepageUrl:"https://svelte.dev",stargazerCount:67850,forkCount:3316,createdAt:"2016-11-20T18:13:05Z",updatedAt:"2023-05-20T00:01:33Z",url:"https://github.com/sveltejs/svelte",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/23617963?v=4"},latestRelease:null,issues:{totalCount:761},pullRequests:{totalCount:57},milestones:{totalCount:3},languages:{edges:[{size:905885,node:{name:"TypeScript",color:"#3178c6"}},{size:637789,node:{name:"Svelte",color:"#ff3e00"}},{size:14985,node:{name:"JavaScript",color:"#f1e05a"}}],totalSize:1558659},commits:{history:{totalCount:7099}},diskUsage:91020},{nameWithOwner:"marko-js/marko",name:"marko",homepageUrl:"https://markojs.com/",stargazerCount:12628,forkCount:673,createdAt:"2014-01-07T23:58:21Z",updatedAt:"2023-05-19T16:26:36Z",url:"https://github.com/marko-js/marko",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/11873696?v=4"},latestRelease:{tagName:"@marko/compiler@5.27.10",publishedAt:"2023-05-19T17:32:05Z"},issues:{totalCount:57},pullRequests:{totalCount:3},milestones:{totalCount:4},languages:{edges:[{size:876567,node:{name:"JavaScript",color:"#f1e05a"}},{size:272489,node:{name:"HTML",color:"#e34c26"}},{size:180256,node:{name:"Marko",color:"#42bff2"}}],totalSize:1329312},commits:{history:{totalCount:4760}},diskUsage:19302},{nameWithOwner:"lit/lit",name:"lit",homepageUrl:"https://lit.dev",stargazerCount:14585,forkCount:757,createdAt:"2017-06-29T16:27:16Z",updatedAt:"2023-05-19T18:40:18Z",url:"https://github.com/lit/lit",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/18489846?v=4"},latestRelease:{tagName:"lit-html@2.7.4",publishedAt:"2023-05-12T00:40:58Z"},issues:{totalCount:330},pullRequests:{totalCount:110},milestones:{totalCount:1},languages:{edges:[{size:2605770,node:{name:"TypeScript",color:"#3178c6"}},{size:2123557,node:{name:"JavaScript",color:"#f1e05a"}},{size:121675,node:{name:"HTML",color:"#e34c26"}}],totalSize:4871421},commits:{history:{totalCount:2049}},diskUsage:46451},{nameWithOwner:"ionic-team/stencil",name:"stencil",homepageUrl:"https://stenciljs.com",stargazerCount:11617,forkCount:744,createdAt:"2017-02-15T18:57:07Z",updatedAt:"2023-05-19T15:56:08Z",url:"https://github.com/ionic-team/stencil",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/3171503?v=4"},latestRelease:{tagName:"v3.2.2",publishedAt:"2023-05-01T13:38:40Z"},issues:{totalCount:406},pullRequests:{totalCount:63},milestones:{totalCount:0},languages:{edges:[{size:3769993,node:{name:"TypeScript",color:"#3178c6"}},{size:48582,node:{name:"HTML",color:"#e34c26"}},{size:36439,node:{name:"JavaScript",color:"#f1e05a"}}],totalSize:3872157},commits:{history:{totalCount:6746}},diskUsage:72180},{nameWithOwner:"alpinejs/alpine",name:"alpine",homepageUrl:"https://alpinejs.dev",stargazerCount:23748,forkCount:1054,createdAt:"2019-11-28T13:51:55Z",updatedAt:"2023-05-19T22:56:09Z",url:"https://github.com/alpinejs/alpine",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/59030169?v=4"},latestRelease:{tagName:"v3.12.1",publishedAt:"2023-05-11T14:53:02Z"},issues:{totalCount:0},pullRequests:{totalCount:6},milestones:{totalCount:0},languages:{edges:[{size:2904085,node:{name:"HTML",color:"#e34c26"}},{size:583353,node:{name:"JavaScript",color:"#f1e05a"}}],totalSize:3487438},commits:{history:{totalCount:1912}},diskUsage:7336},{nameWithOwner:"solidjs/solid",name:"solid",homepageUrl:"https://solidjs.com",stargazerCount:27628,forkCount:746,createdAt:"2018-04-24T16:36:27Z",updatedAt:"2023-05-19T21:09:36Z",url:"https://github.com/solidjs/solid",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/79226042?v=4"},latestRelease:{tagName:"v1.7.0",publishedAt:"2023-03-30T06:33:07Z"},issues:{totalCount:29},pullRequests:{totalCount:10},milestones:{totalCount:6},languages:{edges:[{size:409404,node:{name:"TypeScript",color:"#3178c6"}},{size:171124,node:{name:"JavaScript",color:"#f1e05a"}},{size:1302,node:{name:"CSS",color:"#563d7c"}}],totalSize:581830},commits:{history:{totalCount:1610}},diskUsage:13761},{nameWithOwner:"emberjs/ember.js",name:"ember.js",homepageUrl:"https://emberjs.com",stargazerCount:22451,forkCount:4297,createdAt:"2011-05-25T23:39:40Z",updatedAt:"2023-05-19T07:31:17Z",url:"https://github.com/emberjs/ember.js",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/1253363?v=4"},latestRelease:{tagName:"v5.0.0",publishedAt:"2023-05-15T14:39:36Z"},issues:{totalCount:376},pullRequests:{totalCount:88},milestones:{totalCount:6},languages:{edges:[{size:2958543,node:{name:"JavaScript",color:"#f1e05a"}},{size:1816170,node:{name:"TypeScript",color:"#3178c6"}},{size:7835,node:{name:"HTML",color:"#e34c26"}}],totalSize:4783845},commits:{history:{totalCount:22199}},diskUsage:79356},{nameWithOwner:"meteor/meteor",name:"meteor",homepageUrl:"https://meteor.com",stargazerCount:43479,forkCount:5246,createdAt:"2012-01-19T01:58:17Z",updatedAt:"2023-05-19T22:44:51Z",url:"https://github.com/meteor/meteor",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/789528?v=4"},latestRelease:null,issues:{totalCount:186},pullRequests:{totalCount:55},milestones:{totalCount:3},languages:{edges:[{size:7706512,node:{name:"JavaScript",color:"#f1e05a"}},{size:244827,node:{name:"TypeScript",color:"#3178c6"}},{size:81298,node:{name:"Shell",color:"#89e051"}}],totalSize:8352212},commits:{history:{totalCount:33786}},diskUsage:120577},{nameWithOwner:"elm/core",name:"Elm",homepageUrl:"http://package.elm-lang.org/packages/elm/core/latest",stargazerCount:2736,forkCount:359,createdAt:"2014-10-14T23:33:13Z",updatedAt:"2023-05-15T22:22:35Z",url:"https://github.com/elm/core",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/20698192?v=4"},latestRelease:null,issues:{totalCount:59},pullRequests:{totalCount:38},milestones:{totalCount:0},languages:{edges:[{size:222381,node:{name:"Elm",color:"#60B5CC"}},{size:37912,node:{name:"JavaScript",color:"#f1e05a"}},{size:2079,node:{name:"Shell",color:"#89e051"}}],totalSize:262372},commits:{history:{totalCount:1771}},diskUsage:1815},{nameWithOwner:"preactjs/preact",name:"preact",homepageUrl:"https://preactjs.com",stargazerCount:34413,forkCount:1894,createdAt:"2015-09-11T02:40:18Z",updatedAt:"2023-05-19T20:45:42Z",url:"https://github.com/preactjs/preact",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/26872990?v=4"},latestRelease:{tagName:"10.14.1",publishedAt:"2023-05-16T15:21:42Z"},issues:{totalCount:150},pullRequests:{totalCount:102},milestones:{totalCount:0},languages:{edges:[{size:981002,node:{name:"JavaScript",color:"#f1e05a"}},{size:26842,node:{name:"TypeScript",color:"#3178c6"}},{size:19939,node:{name:"HTML",color:"#e34c26"}}],totalSize:1027783},commits:{history:{totalCount:5321}},diskUsage:15427}];function P(){return console.log("[useData] reposData:",y),y.map(x)}const E=l("h1",null,"Frontend Frameworks",-1),K={class:"this-repo-link",href:"https://github.com/blinpete/frontend-frameworks-stats"},Y=["innerHTML"],Q=["innerHTML"],X={class:"sign"},tt=T("Built with "),et=["innerHTML"],at=T(" on top of "),ot=l("a",{class:"api",href:"https://docs.github.com/en/graphql"},"GitHub API",-1),st=A({setup(t){const e=c["heart-fill"].toSVG(),a=V(P());return(r,o)=>(u(),i(h,null,[l("header",null,[E,l("a",K,[l("span",{innerHTML:m(c)["mark-github"].toSVG({width:30})},null,8,Y),l("span",{class:"inset",innerHTML:m(c)["mark-github"].toSVG({width:30})},null,8,Q)])]),a.value?(u(),D(B,{key:0,class:"main",data:a.value},null,8,["data"])):U("",!0),l("footer",null,[l("div",X,[tt,l("span",{class:"heart",innerHTML:m(e)},null,8,et),at,ot])])],64))}});L(st).mount("#app");
