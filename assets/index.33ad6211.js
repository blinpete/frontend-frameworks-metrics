import{o as c,r as R,c as j,d as A,a as u,b as i,e as l,F as p,f,u as m,n as k,t as C,g as U,h as T,i as V,j as D,k as L}from"./vendor.1643424d.js";const N=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};N();const M=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}),_=[{amount:60,name:"seconds"},{amount:60,name:"minutes"},{amount:24,name:"hours"},{amount:7,name:"days"},{amount:4.34524,name:"weeks"},{amount:12,name:"months"},{amount:Number.POSITIVE_INFINITY,name:"years"}];function O(t){if(!t)return"";t=new Date(t).valueOf();let e=(t-new Date().valueOf())/1e3;for(let a=0;a<=_.length;a++){const r=_[a];if(Math.abs(e)<r.amount)return M.format(Math.round(e),r.name);e/=r.amount}return""}function b(t,e=!1){const a=O(t);return e?a:a.replace("ago","")}function v(t){return t<1e3?t:t.toLocaleString("en-us")}function q(t){return t[0].toUpperCase()+t.slice(1)}const w=["stars","forks","issues","commits","PRs","created","updated"],z=[{name:"repo",shortDesc:"link",extract:t=>({html:!0,value:`
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
      `;return{html:!0,value:a.filter(s).map(d).join("")}}},{name:"created",shortDesc:"time ago",extract:t=>({value:b(t.createdAt),sortValue:new Date(t.createdAt).getTime()})},{name:"updated",shortDesc:"time ago",extract:t=>({value:b(t.updatedAt),sortValue:t.updatedAt})}];function x(t){const e={};for(const a of z)e[a.name]=a.extract(t);return e}function Z(t,e){return t.includes(e)}function H(t){const e=R({name:"stars",direction:1}),a=j(()=>{const s=e.name,d=e.direction;return[...t].sort((n,h)=>{const g=n[s].sortValue,S=h[s].sortValue;return g&&S?d*(S-g):0})});function r(s){if(e.name===s){e.direction*=-1;return}Z(w,s)&&(e.name=s,e.direction=1)}function o(s){return e.name!==s?null:["sorter",e.direction>0?"bottom":"top"]}return{dataSorted:a,toggleSort:r,getSorterClass:o}}const $={class:"theader"},J=["onClick"],W={class:"name"},I={key:0,class:"info"},G={class:"entry"},F=["innerHTML"],B=A({props:{data:null},setup(t){const e=t,{dataSorted:a,toggleSort:r,getSorterClass:o}=H(e.data);return(s,d)=>(u(),i("table",null,[l("thead",null,[l("tr",$,[(u(!0),i(p,null,f(m(z),n=>(u(),i("th",{class:k([n.name,{sortable:m(Z)(m(w),n.name)},m(o)(n.name)]),onClick:()=>m(r)(n.name)},[l("div",W,C(n.name),1),n.shortDesc?(u(),i("div",I,C(n.shortDesc),1)):U("",!0)],10,J))),256))])]),l("tbody",null,[(u(!0),i(p,null,f(m(a),n=>(u(),i("tr",G,[(u(!0),i(p,null,f(m(z),h=>(u(),i("td",{class:k(h.name)},[n[h.name].html?(u(),i("div",{key:0,class:"cell-wrapper",innerHTML:n[h.name].value},null,8,F)):(u(),i(p,{key:1},[T(C(n[h.name].value),1)],64))],2))),256))]))),256))])]))}});var y=[{nameWithOwner:"vuejs/vue",name:"Vue v2",homepageUrl:"http://v2.vuejs.org",stargazerCount:203534,forkCount:33706,createdAt:"2013-07-29T03:24:51Z",updatedAt:"2023-05-12T00:09:47Z",url:"https://github.com/vuejs/vue",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/6128107?v=4"},latestRelease:{tagName:"v2.7.14",publishedAt:"2022-11-09T12:40:33Z"},issues:{totalCount:370},pullRequests:{totalCount:264},milestones:{totalCount:0},languages:{edges:[{size:1843676,node:{name:"TypeScript",color:"#3178c6"}},{size:34684,node:{name:"JavaScript",color:"#f1e05a"}},{size:17826,node:{name:"HTML",color:"#e34c26"}}],totalSize:1908160},commits:{history:{totalCount:3547}},diskUsage:31925},{nameWithOwner:"vuejs/core",name:"Vue v3",homepageUrl:"https://vuejs.org/",stargazerCount:37422,forkCount:6850,createdAt:"2018-06-12T13:49:36Z",updatedAt:"2023-05-11T23:47:55Z",url:"https://github.com/vuejs/core",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/6128107?v=4"},latestRelease:{tagName:"v3.3.1",publishedAt:"2023-05-11T08:01:02Z"},issues:{totalCount:607},pullRequests:{totalCount:366},milestones:{totalCount:0},languages:{edges:[{size:3212438,node:{name:"TypeScript",color:"#3178c6"}},{size:53212,node:{name:"JavaScript",color:"#f1e05a"}},{size:42543,node:{name:"HTML",color:"#e34c26"}}],totalSize:3323546},commits:{history:{totalCount:4923}},diskUsage:22647},{nameWithOwner:"facebook/react",name:"react",homepageUrl:"https://react.dev",stargazerCount:207238,forkCount:43244,createdAt:"2013-05-24T16:15:54Z",updatedAt:"2023-05-12T00:01:07Z",url:"https://github.com/facebook/react",owner:{avatarUrl:"https://react.dev/favicon.ico"},latestRelease:{tagName:"v18.2.0",publishedAt:"2022-06-14T19:54:21Z"},issues:{totalCount:981},pullRequests:{totalCount:290},milestones:{totalCount:1},languages:{edges:[{size:4135889,node:{name:"JavaScript",color:"#f1e05a"}},{size:120153,node:{name:"HTML",color:"#e34c26"}},{size:64916,node:{name:"CSS",color:"#563d7c"}}],totalSize:4412079},commits:{history:{totalCount:15803}},diskUsage:320770},{nameWithOwner:"angular/angular",name:"angular",homepageUrl:"https://angular.io",stargazerCount:88082,forkCount:23560,createdAt:"2014-09-18T16:12:01Z",updatedAt:"2023-05-11T19:06:01Z",url:"https://github.com/angular/angular",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/139426?v=4"},latestRelease:{tagName:"16.0.1",publishedAt:"2023-05-10T18:14:15Z"},issues:{totalCount:1229},pullRequests:{totalCount:183},milestones:{totalCount:8},languages:{edges:[{size:21652375,node:{name:"TypeScript",color:"#3178c6"}},{size:2374763,node:{name:"JavaScript",color:"#f1e05a"}},{size:593083,node:{name:"Starlark",color:"#76d275"}}],totalSize:25608780},commits:{history:{totalCount:27038}},diskUsage:459544},{nameWithOwner:"sveltejs/svelte",name:"svelte",homepageUrl:"https://svelte.dev",stargazerCount:67577,forkCount:3308,createdAt:"2016-11-20T18:13:05Z",updatedAt:"2023-05-12T00:35:01Z",url:"https://github.com/sveltejs/svelte",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/23617963?v=4"},latestRelease:null,issues:{totalCount:756},pullRequests:{totalCount:54},milestones:{totalCount:3},languages:{edges:[{size:905885,node:{name:"TypeScript",color:"#3178c6"}},{size:637789,node:{name:"Svelte",color:"#ff3e00"}},{size:14985,node:{name:"JavaScript",color:"#f1e05a"}}],totalSize:1558659},commits:{history:{totalCount:7099}},diskUsage:90410},{nameWithOwner:"marko-js/marko",name:"marko",homepageUrl:"https://markojs.com/",stargazerCount:12611,forkCount:672,createdAt:"2014-01-07T23:58:21Z",updatedAt:"2023-05-11T14:51:33Z",url:"https://github.com/marko-js/marko",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/11873696?v=4"},latestRelease:{tagName:"marko@5.25.13",publishedAt:"2023-05-08T18:24:38Z"},issues:{totalCount:56},pullRequests:{totalCount:2},milestones:{totalCount:4},languages:{edges:[{size:876520,node:{name:"JavaScript",color:"#f1e05a"}},{size:272489,node:{name:"HTML",color:"#e34c26"}},{size:180256,node:{name:"Marko",color:"#42bff2"}}],totalSize:1329265},commits:{history:{totalCount:4754}},diskUsage:20328},{nameWithOwner:"lit/lit",name:"lit",homepageUrl:"https://lit.dev",stargazerCount:14513,forkCount:755,createdAt:"2017-06-29T16:27:16Z",updatedAt:"2023-05-11T22:53:39Z",url:"https://github.com/lit/lit",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/18489846?v=4"},latestRelease:{tagName:"lit-html@2.7.4",publishedAt:"2023-05-12T00:40:58Z"},issues:{totalCount:326},pullRequests:{totalCount:110},milestones:{totalCount:1},languages:{edges:[{size:2600340,node:{name:"TypeScript",color:"#3178c6"}},{size:2123514,node:{name:"JavaScript",color:"#f1e05a"}},{size:121675,node:{name:"HTML",color:"#e34c26"}}],totalSize:4865948},commits:{history:{totalCount:2045}},diskUsage:45837},{nameWithOwner:"ionic-team/stencil",name:"stencil",homepageUrl:"https://stenciljs.com",stargazerCount:11606,forkCount:743,createdAt:"2017-02-15T18:57:07Z",updatedAt:"2023-05-12T00:03:40Z",url:"https://github.com/ionic-team/stencil",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/3171503?v=4"},latestRelease:{tagName:"v3.2.2",publishedAt:"2023-05-01T13:38:40Z"},issues:{totalCount:409},pullRequests:{totalCount:61},milestones:{totalCount:0},languages:{edges:[{size:3751005,node:{name:"TypeScript",color:"#3178c6"}},{size:48582,node:{name:"HTML",color:"#e34c26"}},{size:36439,node:{name:"JavaScript",color:"#f1e05a"}}],totalSize:3853169},commits:{history:{totalCount:6721}},diskUsage:72401},{nameWithOwner:"alpinejs/alpine",name:"alpine",homepageUrl:"https://alpinejs.dev",stargazerCount:23697,forkCount:1052,createdAt:"2019-11-28T13:51:55Z",updatedAt:"2023-05-11T22:16:09Z",url:"https://github.com/alpinejs/alpine",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/59030169?v=4"},latestRelease:{tagName:"v3.12.1",publishedAt:"2023-05-11T14:53:02Z"},issues:{totalCount:0},pullRequests:{totalCount:4},milestones:{totalCount:0},languages:{edges:[{size:2904085,node:{name:"HTML",color:"#e34c26"}},{size:583353,node:{name:"JavaScript",color:"#f1e05a"}}],totalSize:3487438},commits:{history:{totalCount:1911}},diskUsage:7386},{nameWithOwner:"solidjs/solid",name:"solid",homepageUrl:"https://solidjs.com",stargazerCount:27526,forkCount:738,createdAt:"2018-04-24T16:36:27Z",updatedAt:"2023-05-11T23:23:26Z",url:"https://github.com/solidjs/solid",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/79226042?v=4"},latestRelease:{tagName:"v1.7.0",publishedAt:"2023-03-30T06:33:07Z"},issues:{totalCount:22},pullRequests:{totalCount:8},milestones:{totalCount:6},languages:{edges:[{size:407961,node:{name:"TypeScript",color:"#3178c6"}},{size:171620,node:{name:"JavaScript",color:"#f1e05a"}},{size:1302,node:{name:"CSS",color:"#563d7c"}}],totalSize:580883},commits:{history:{totalCount:1605}},diskUsage:13802},{nameWithOwner:"emberjs/ember.js",name:"ember.js",homepageUrl:"https://emberjs.com",stargazerCount:22449,forkCount:4298,createdAt:"2011-05-25T23:39:40Z",updatedAt:"2023-05-10T05:52:11Z",url:"https://github.com/emberjs/ember.js",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/1253363?v=4"},latestRelease:{tagName:"v4.12.0",publishedAt:"2023-04-03T18:17:52Z"},issues:{totalCount:374},pullRequests:{totalCount:93},milestones:{totalCount:6},languages:{edges:[{size:2958543,node:{name:"JavaScript",color:"#f1e05a"}},{size:1816176,node:{name:"TypeScript",color:"#3178c6"}},{size:7835,node:{name:"HTML",color:"#e34c26"}}],totalSize:4783851},commits:{history:{totalCount:22188}},diskUsage:78470},{nameWithOwner:"meteor/meteor",name:"meteor",homepageUrl:"https://meteor.com",stargazerCount:43460,forkCount:5239,createdAt:"2012-01-19T01:58:17Z",updatedAt:"2023-05-11T20:49:36Z",url:"https://github.com/meteor/meteor",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/789528?v=4"},latestRelease:null,issues:{totalCount:185},pullRequests:{totalCount:50},milestones:{totalCount:3},languages:{edges:[{size:7706512,node:{name:"JavaScript",color:"#f1e05a"}},{size:244827,node:{name:"TypeScript",color:"#3178c6"}},{size:81298,node:{name:"Shell",color:"#89e051"}}],totalSize:8352212},commits:{history:{totalCount:33783}},diskUsage:120203},{nameWithOwner:"elm/core",name:"Elm",homepageUrl:"http://package.elm-lang.org/packages/elm/core/latest",stargazerCount:2735,forkCount:359,createdAt:"2014-10-14T23:33:13Z",updatedAt:"2023-05-09T20:42:56Z",url:"https://github.com/elm/core",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/20698192?v=4"},latestRelease:null,issues:{totalCount:59},pullRequests:{totalCount:38},milestones:{totalCount:0},languages:{edges:[{size:222381,node:{name:"Elm",color:"#60B5CC"}},{size:37912,node:{name:"JavaScript",color:"#f1e05a"}},{size:2079,node:{name:"Shell",color:"#89e051"}}],totalSize:262372},commits:{history:{totalCount:1771}},diskUsage:1815},{nameWithOwner:"preactjs/preact",name:"preact",homepageUrl:"https://preactjs.com",stargazerCount:34381,forkCount:1891,createdAt:"2015-09-11T02:40:18Z",updatedAt:"2023-05-11T20:21:42Z",url:"https://github.com/preactjs/preact",owner:{avatarUrl:"https://avatars.githubusercontent.com/u/26872990?v=4"},latestRelease:{tagName:"10.13.2",publishedAt:"2023-03-27T08:32:57Z"},issues:{totalCount:152},pullRequests:{totalCount:98},milestones:{totalCount:0},languages:{edges:[{size:988106,node:{name:"JavaScript",color:"#f1e05a"}},{size:26842,node:{name:"TypeScript",color:"#3178c6"}},{size:19939,node:{name:"HTML",color:"#e34c26"}}],totalSize:1034887},commits:{history:{totalCount:5309}},diskUsage:15293}];function P(){return console.log("[useData] reposData:",y),y.map(x)}const E=l("h1",null,"Frontend Frameworks",-1),K={class:"this-repo-link",href:"https://github.com/blinpete/frontend-frameworks-stats"},Y=["innerHTML"],Q=["innerHTML"],X={class:"sign"},tt=T("Built with "),et=["innerHTML"],at=T(" on top of "),ot=l("a",{class:"api",href:"https://docs.github.com/en/graphql"},"GitHub API",-1),st=A({setup(t){const e=c["heart-fill"].toSVG(),a=V(P());return(r,o)=>(u(),i(p,null,[l("header",null,[E,l("a",K,[l("span",{innerHTML:m(c)["mark-github"].toSVG({width:30})},null,8,Y),l("span",{class:"inset",innerHTML:m(c)["mark-github"].toSVG({width:30})},null,8,Q)])]),a.value?(u(),D(B,{key:0,class:"main",data:a.value},null,8,["data"])):U("",!0),l("footer",null,[l("div",X,[tt,l("span",{class:"heart",innerHTML:m(e)},null,8,et),at,ot])])],64))}});L(st).mount("#app");
