import{S as A,i as D,s as N,k as v,q as g,a as I,e as B,l as b,m as E,r as H,h as f,c as P,b as p,C as d,B as q,I as V,n as C,u as S}from"../../../chunks/index-fd23df92.js";function x(r,a,h){const i=r.slice();return i[1]=a[h],i}function y(r){let a,h,i,o=r[1].meta.title+"",m,_,c,n=r[1].meta.date+"",s,e;return{c(){a=v("div"),h=v("h2"),i=v("a"),m=g(o),c=g(`
    Published: `),s=g(n),e=I(),this.h()},l(l){a=b(l,"DIV",{});var t=E(a);h=b(t,"H2",{});var u=E(h);i=b(u,"A",{href:!0});var k=E(i);m=H(k,o),k.forEach(f),u.forEach(f),c=H(t,`
    Published: `),s=H(t,n),e=P(t),t.forEach(f),this.h()},h(){C(i,"href",_=r[1].path)},m(l,t){p(l,a,t),d(a,h),d(h,i),d(i,m),d(a,c),d(a,s),d(a,e)},p(l,t){t&1&&o!==(o=l[1].meta.title+"")&&S(m,o),t&1&&_!==(_=l[1].path)&&C(i,"href",_),t&1&&n!==(n=l[1].meta.date+"")&&S(s,n)},d(l){l&&f(a)}}}function j(r){let a,h,i,o,m,_,c,n=r[0].posts,s=[];for(let e=0;e<n.length;e+=1)s[e]=y(x(r,n,e));return{c(){a=v("h1"),h=g("Blog"),i=I(),o=v("p"),m=g("Here are some cool things I guess"),_=I();for(let e=0;e<s.length;e+=1)s[e].c();c=B()},l(e){a=b(e,"H1",{});var l=E(a);h=H(l,"Blog"),l.forEach(f),i=P(e),o=b(e,"P",{});var t=E(o);m=H(t,"Here are some cool things I guess"),t.forEach(f),_=P(e);for(let u=0;u<s.length;u+=1)s[u].l(e);c=B()},m(e,l){p(e,a,l),d(a,h),p(e,i,l),p(e,o,l),d(o,m),p(e,_,l);for(let t=0;t<s.length;t+=1)s[t].m(e,l);p(e,c,l)},p(e,[l]){if(l&1){n=e[0].posts;let t;for(t=0;t<n.length;t+=1){const u=x(e,n,t);s[t]?s[t].p(u,l):(s[t]=y(u),s[t].c(),s[t].m(c.parentNode,c))}for(;t<s.length;t+=1)s[t].d(1);s.length=n.length}},i:q,o:q,d(e){e&&f(a),e&&f(i),e&&f(o),e&&f(_),V(s,e),e&&f(c)}}}function w(r,a,h){let{data:i}=a;return r.$$set=o=>{"data"in o&&h(0,i=o.data)},[i]}class F extends A{constructor(a){super(),D(this,a,w,j,N,{data:0})}}export{F as default};