"use strict";var x=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var j=x(function(J,P){
function A(a,e,u,i,t,r,s,y){var o,v,f,q,n,c,b;for(o=u.data,v=r.data,f=u.accessors[0],q=r.accessors[1],n=t,c=y,b=0;b<a;b++)q(v,c,f(o,n)+e),n+=i,c+=s;return r}P.exports=A
});var m=x(function(K,M){
var k=require('@stdlib/array-base-arraylike2object/dist'),B=require('@stdlib/blas-base-gcopy/dist').ndarray,C=j(),g=5;function D(a,e,u,i,t,r,s,y){var o,v,f,q,n,c;if(a<=0)return r;if(e===0)return B(a,u,i,t,r,s,y);if(f=k(u),q=k(r),f.accessorProtocol||q.accessorProtocol)return C(a,e,f,i,t,q,s,y),r;if(o=t,v=y,i===1&&s===1){if(n=a%g,n>0)for(c=0;c<n;c++)r[v]=u[o]+e,o+=i,v+=s;if(a<g)return r;for(c=n;c<a;c+=g)r[v]=u[o]+e,r[v+1]=u[o+1]+e,r[v+2]=u[o+2]+e,r[v+3]=u[o+3]+e,r[v+4]=u[o+4]+e,o+=g,v+=g;return r}for(c=0;c<a;c++)r[v]=u[o]+e,o+=i,v+=s;return r}M.exports=D
});var p=x(function(L,R){
var O=require('@stdlib/strided-base-stride2offset/dist'),E=m();function F(a,e,u,i,t,r){return E(a,e,u,i,O(a,i),t,r,O(a,r))}R.exports=F
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=p(),H=m();G(z,"ndarray",H);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
