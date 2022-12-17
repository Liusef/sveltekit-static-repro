import{S as fe,i as he,s as pe,k as n,a as k,C as O,q as j,l as u,m as l,h as s,c as B,D as Z,r as F,E as ce,n as e,b as _e,F as t,B as ie,G as me,H as ge,w as $e,x as Ee,y as ze,I as be,J as we,K as Ae,f as ve,t as de,z as Le}from"../../chunks/index-9fae8885.js";import{p as Ie}from"../../chunks/stores-f1cb9539.js";import{j as I}from"../../chunks/singletons-3d7bfc87.js";const ye=""+new URL("../../assets/svelte-logo-87df40b8.svg",import.meta.url).href,He=""+new URL("../../assets/github-1ea8d62e.svg",import.meta.url).href;function Se(m){let a,c,d,o,A,b,i,g,p,D,_,f,E,v,r,h,z,w,y,M,x,H,C,J,N,P,S,R,T,V,G,K,Q;return{c(){a=n("header"),c=n("div"),d=n("a"),o=n("img"),b=k(),i=n("nav"),g=O("svg"),p=O("path"),D=k(),_=n("ul"),f=n("li"),E=n("a"),v=j("Home"),h=k(),z=n("li"),w=n("a"),y=j("About"),x=k(),H=n("li"),C=n("a"),J=j("Sverdle"),P=k(),S=O("svg"),R=O("path"),T=k(),V=n("div"),G=n("a"),K=n("img"),this.h()},l(L){a=u(L,"HEADER",{class:!0});var $=l(a);c=u($,"DIV",{class:!0});var W=l(c);d=u(W,"A",{href:!0,class:!0});var X=l(d);o=u(X,"IMG",{src:!0,alt:!0,class:!0}),X.forEach(s),W.forEach(s),b=B($),i=u($,"NAV",{class:!0});var q=l(i);g=Z(q,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var Y=l(g);p=Z(Y,"path",{d:!0,class:!0}),l(p).forEach(s),Y.forEach(s),D=B(q),_=u(q,"UL",{class:!0});var U=l(_);f=u(U,"LI",{"aria-current":!0,class:!0});var ee=l(f);E=u(ee,"A",{href:!0,class:!0});var te=l(E);v=F(te,"Home"),te.forEach(s),ee.forEach(s),h=B(U),z=u(U,"LI",{"aria-current":!0,class:!0});var ae=l(z);w=u(ae,"A",{href:!0,class:!0});var se=l(w);y=F(se,"About"),se.forEach(s),ae.forEach(s),x=B(U),H=u(U,"LI",{"aria-current":!0,class:!0});var re=l(H);C=u(re,"A",{href:!0,class:!0});var le=l(C);J=F(le,"Sverdle"),le.forEach(s),re.forEach(s),U.forEach(s),P=B(q),S=Z(q,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var ne=l(S);R=Z(ne,"path",{d:!0,class:!0}),l(R).forEach(s),ne.forEach(s),q.forEach(s),T=B($),V=u($,"DIV",{class:!0});var ue=l(V);G=u(ue,"A",{href:!0,class:!0});var oe=l(G);K=u(oe,"IMG",{src:!0,alt:!0,class:!0}),oe.forEach(s),ue.forEach(s),$.forEach(s),this.h()},h(){ce(o.src,A=ye)||e(o,"src",A),e(o,"alt","SvelteKit"),e(o,"class","svelte-1u9z1tp"),e(d,"href","https://kit.svelte.dev"),e(d,"class","svelte-1u9z1tp"),e(c,"class","corner svelte-1u9z1tp"),e(p,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e(p,"class","svelte-1u9z1tp"),e(g,"viewBox","0 0 2 3"),e(g,"aria-hidden","true"),e(g,"class","svelte-1u9z1tp"),e(E,"href",`${I}/`),e(E,"class","svelte-1u9z1tp"),e(f,"aria-current",r=m[0].url.pathname===`${I}/`?"page":void 0),e(f,"class","svelte-1u9z1tp"),e(w,"href",`${I}/about`),e(w,"class","svelte-1u9z1tp"),e(z,"aria-current",M=m[0].url.pathname===`${I}/about`?"page":void 0),e(z,"class","svelte-1u9z1tp"),e(C,"href",`${I}/`),e(C,"class","svelte-1u9z1tp"),e(H,"aria-current",N=m[0].url.pathname===`${I}/sverdle`?"page":void 0),e(H,"class","svelte-1u9z1tp"),e(_,"class","svelte-1u9z1tp"),e(R,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(R,"class","svelte-1u9z1tp"),e(S,"viewBox","0 0 2 3"),e(S,"aria-hidden","true"),e(S,"class","svelte-1u9z1tp"),e(i,"class","svelte-1u9z1tp"),ce(K.src,Q=He)||e(K,"src",Q),e(K,"alt","GitHub"),e(K,"class","svelte-1u9z1tp"),e(G,"href","https://github.com/sveltejs/kit"),e(G,"class","svelte-1u9z1tp"),e(V,"class","corner svelte-1u9z1tp"),e(a,"class","svelte-1u9z1tp")},m(L,$){_e(L,a,$),t(a,c),t(c,d),t(d,o),t(a,b),t(a,i),t(i,g),t(g,p),t(i,D),t(i,_),t(_,f),t(f,E),t(E,v),t(_,h),t(_,z),t(z,w),t(w,y),t(_,x),t(_,H),t(H,C),t(C,J),t(i,P),t(i,S),t(S,R),t(a,T),t(a,V),t(V,G),t(G,K)},p(L,[$]){$&1&&r!==(r=L[0].url.pathname===`${I}/`?"page":void 0)&&e(f,"aria-current",r),$&1&&M!==(M=L[0].url.pathname===`${I}/about`?"page":void 0)&&e(z,"aria-current",M),$&1&&N!==(N=L[0].url.pathname===`${I}/sverdle`?"page":void 0)&&e(H,"aria-current",N)},i:ie,o:ie,d(L){L&&s(a)}}}function ke(m,a,c){let d;return me(m,Ie,o=>c(0,d=o)),[d]}class Be extends fe{constructor(a){super(),he(this,a,ke,Se,pe,{})}}function De(m){let a,c,d,o,A,b,i,g,p,D,_,f;c=new Be({});const E=m[1].default,v=ge(E,m,m[0],null);return{c(){a=n("div"),$e(c.$$.fragment),d=k(),o=n("main"),v&&v.c(),A=k(),b=n("footer"),i=n("p"),g=j("visit "),p=n("a"),D=j("kit.svelte.dev"),_=j(" to learn SvelteKit"),this.h()},l(r){a=u(r,"DIV",{class:!0});var h=l(a);Ee(c.$$.fragment,h),d=B(h),o=u(h,"MAIN",{class:!0});var z=l(o);v&&v.l(z),z.forEach(s),A=B(h),b=u(h,"FOOTER",{class:!0});var w=l(b);i=u(w,"P",{});var y=l(i);g=F(y,"visit "),p=u(y,"A",{href:!0,class:!0});var M=l(p);D=F(M,"kit.svelte.dev"),M.forEach(s),_=F(y," to learn SvelteKit"),y.forEach(s),w.forEach(s),h.forEach(s),this.h()},h(){e(o,"class","svelte-8o1gnw"),e(p,"href","https://kit.svelte.dev"),e(p,"class","svelte-8o1gnw"),e(b,"class","svelte-8o1gnw"),e(a,"class","app svelte-8o1gnw")},m(r,h){_e(r,a,h),ze(c,a,null),t(a,d),t(a,o),v&&v.m(o,null),t(a,A),t(a,b),t(b,i),t(i,g),t(i,p),t(p,D),t(i,_),f=!0},p(r,[h]){v&&v.p&&(!f||h&1)&&be(v,E,r,r[0],f?Ae(E,r[0],h,null):we(r[0]),null)},i(r){f||(ve(c.$$.fragment,r),ve(v,r),f=!0)},o(r){de(c.$$.fragment,r),de(v,r),f=!1},d(r){r&&s(a),Le(c),v&&v.d(r)}}}function Me(m,a,c){let{$$slots:d={},$$scope:o}=a;return m.$$set=A=>{"$$scope"in A&&c(0,o=A.$$scope)},[o,d]}class Re extends fe{constructor(a){super(),he(this,a,Me,De,pe,{})}}export{Re as default};
