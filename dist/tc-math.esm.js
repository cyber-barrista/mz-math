/* 
Tool Cool Math Helpers
Version: 1.0.18
Documentation: https://github.com/toolcool-org/toolcool-math
License: MIT License        
Author: Tool Cool, toolcool.org@gmail.com>                          
*/
var I=Math.pow;var c=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=I(10,r);return Math.round(t*e)/e};var w=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return c(e,r)},$=(t,r,e=1/0)=>{let n=S(t);return[c(Math.cos(r)*n,e),c(Math.sin(r)*n,e)]},C=(t,r=1/0)=>{let e=t*(180/Math.PI);return c(e,r)},P=(t,r=1/0)=>{let e=t*(Math.PI/180);return c(e,r)};var m=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]+r[o],e));return n},nt=(t,r,e=1/0)=>m(t,r,e),ot=(t,r,e=1/0)=>m(t,r,e),M=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]-r[o],e));return n},it=(t,r,e=1/0)=>M(t,r,e),st=(t,r,e=1/0)=>M(t,r,e),h=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]*r,e));return n},ct=(t,r,e=1/0)=>h(t,r,e),ut=(t,r,e=1/0)=>h(t,r,e),f=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]/r,e));return n},xt=(t,r,e=1/0)=>f(t,r,e),pt=(t,r,e=1/0)=>f(t,r,e),g=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return c(Math.sqrt(e),r)},S=(t,r=1/0)=>g(t,r),at=(t,r=1/0)=>g(t,r),mt=(t,r,e=1/0)=>{let n=w(t);return[c(Math.cos(n)*r,e),c(Math.sin(n)*r,e)]},D=(t,r=1/0)=>{let e=g(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:c(t[o]/e,r));return n},Mt=(t,r=1/0)=>D(t,r),ht=(t,r=1/0)=>D(t,r),a=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return c(n,e)},ft=(t,r,e=1/0)=>a(t,r,e),lt=(t,r,e=1/0)=>a(t,r,e),Vt=(t,r,e=1/0)=>[c(t[1]*r[2]-t[2]*r[1],e),c(t[2]*r[0]-t[0]*r[2],e),c(t[0]*r[1]-t[1]*r[0],e)],bt=(t=0)=>[t,t],gt=(t=0)=>[t,t,t],yt=(t=0)=>[t,t,t,t],E=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},R=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var T=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(m(t[o],r[o],e));return n},wt=(t,r,e=1/0)=>T(t,r,e),St=(t,r,e=1/0)=>T(t,r,e),d=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(M(t[o],r[o],e));return n},Dt=(t,r,e=1/0)=>d(t,r,e),Et=(t,r,e=1/0)=>d(t,r,e),z=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(h(o,r,e));return n},Rt=(t,r,e=1/0)=>z(t,r,e),Tt=(t,r,e=1/0)=>z(t,r,e),y=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(f(o,r,e));return n},k=(t,r,e=1/0)=>y(t,r,e),dt=(t,r,e=1/0)=>y(t,r,e),l=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},zt=t=>l(t),jt=t=>l(t),j=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let s=0;s<o;s++)i.push(r);e.push(i)}return e},Nt=(t,r=0)=>j(t,r),qt=(t,r=0)=>j(t,r),At=(t=0)=>[[t,t],[t,t]],Lt=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],Ft=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],Bt=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(E(r,e));return n},Gt=()=>[[1,0],[0,1]],Qt=()=>[[1,0,0],[0,1,0],[0,0,1]],Ht=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Ot=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},x=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},N=t=>x(t),q=t=>x(t),Wt=(t,r)=>{if(t.length<=0)return[];let e=x(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},kt=(t,r)=>{if(t.length<=0)return[];let e=x(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},Jt=(t,r)=>{let e=x(t);return e.push(r),e},Kt=(t,r)=>{let e=N(t);return e.push(r),e},Ut=(t,r)=>{let e=q(t);return e.push(r),e},Xt=(t,r)=>{let e=x(t);return e.unshift(r),e},Yt=(t,r)=>{let e=N(t);return e.unshift(r),e},Zt=(t,r)=>{let e=q(t);return e.unshift(r),e},_t=t=>{if(t.length<=0)return[];let r=x(t);return r.pop(),r},$t=t=>{if(t.length<=0)return[];let r=x(t);return r.shift(),r},A=t=>{if(t.length<=0)return[];let r=x(t);for(let e=0;e<r.length;e++)r[e].pop();return r},Ct=t=>{if(t.length<=0)return[];let r=x(t);for(let e=0;e<r.length;e++)r[e].shift();return r},Pt=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},L=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},tr=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},rr=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=l(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let u=0;u<o.length;u++){let p=o[u],W=a(s,p,e);n[i].push(W)}}return n},V=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=a(t[o],r,e);return n},er=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!R(t[e],r[e]))return!1;return!0},J=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let s=[];for(let u=0;u<n;u++)u!==e&&s.push(t[i][u]);o.push(s)}return o},F=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=J(t,r,e);return b(o)},b=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return B(t);let e=0;for(let n=0;n<r;n++){let o=F(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},B=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},nr=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return b(t)},G=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},or=t=>Q(t),Q=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return G(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let s=F(t,n,i),u=Math.pow(-1,n+i);o.push(u*s)}e.push(o)}return l(e)},ir=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return b(t)===0},H=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=B(t);if(e===0)return null;let n=G(t);return n===null?null:k(n,e,r)},O=(t,r=1/0)=>v(t,r),v=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=b(t),o=Q(t);return o===null?null:y(o,n,r)};var ur=(t,r,e=1/0)=>c(Math.random()*(r-t)+t,e),K=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),xr=()=>Math.random()<.5,pr=t=>{let r=K(0,t.length-1);return t[r]};var mr=(t,r)=>(t%r+r)%r,Mr=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,hr=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),fr=t=>!isNaN(parseFloat(t))&&isFinite(t);var Vr=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var gr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1]]},yr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1],o*r[2]+i*e[2]+s*n[2]]},vr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,p=t*t*t;return[i*r[0]+s*e[0]+u*n[0]+p*o[0],i*r[1]+s*e[1]+u*n[1]+p*o[1]]},Ir=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,p=t*t*t;return[i*r[0]+s*e[0]+u*n[0]+p*o[0],i*r[1]+s*e[1]+u*n[1]+p*o[1],i*r[2]+s*e[2]+u*n[2]+p*o[2]]};var Dr=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=H(n);if(o===null)return null;let i=[t[2],r[2]];return V(o,i,e)},Er=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=O(o);if(i===null)return null;let s=[t[3],r[3],e[3]];return V(i,s,n)},Rr=(t,r=1/0)=>{if(t.length<=0)return null;let e=A(t),n=v(e);if(n===null)return null;let o=L(t);return V(n,o,r)};var dr=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),zr=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),jr=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]};export{dr as circleMovement,Mr as convertRange,P as degreesToRadians,hr as doRangesOverlap,zr as ellipseMovement,Dr as equationSystem2,Er as equationSystem3,Rr as equationSystemN,ur as getRandom,xr as getRandomBoolean,K as getRandomInt,pr as getRandomItemFromArray,w as getV2Angle,Gt as identity2,Qt as identity3,Ht as identity4,Ot as identityN,fr as isNumber,ir as isSingularMatrix,G as m2Adjugate,Kt as m2AppendRow,N as m2DeepCopy,B as m2Determinant,k as m2DivideScalar,H as m2Inverse,Rt as m2MulScalar,Yt as m2PrependRow,Nt as m2Reset,Dt as m2Sub,wt as m2Sum,zt as m2Transpose,At as m2x2,or as m3Adjugate,Ut as m3AppendRow,q as m3DeepCopy,nr as m3Determinant,dt as m3DivideScalar,O as m3Inverse,Tt as m3MulScalar,Zt as m3PrependRow,qt as m3Reset,Et as m3Sub,St as m3Sum,jt as m3Transpose,Lt as m3x3,Ft as m4x4,Q as mAdjugate,Wt as mAppendCol,Jt as mAppendRow,x as mDeepCopy,Ct as mDelFirstColumn,$t as mDelFirstRow,A as mDelLastColumn,_t as mDelLastRow,b as mDeterminant,y as mDivideScalar,er as mEqual,tr as mGetColumn,Pt as mGetFirstColumn,L as mGetLastColumn,v as mInverse,F as mMinor,rr as mMul,z as mMulScalar,V as mMulVector,Bt as mNxM,kt as mPrependCol,Xt as mPrependRow,j as mReset,d as mSub,T as mSum,l as mTranspose,mr as mod,C as radiansToDegrees,c as setDecimalPlaces,$ as setV2Angle,jr as sineWaveMovement,Vr as stringToNumber,bt as v2,vr as v2CubicBezierCurve,xt as v2DivideScalar,ft as v2DotProduct,S as v2Length,ct as v2MulScalar,Mt as v2Normalize,gr as v2QuadraticBezierCurve,mt as v2SetLength,it as v2Sub,nt as v2Sum,gt as v3,Vt as v3CrossProduct,Ir as v3CubicBezierCurve,pt as v3DivideScalar,lt as v3DotProduct,at as v3Length,ut as v3MulScalar,ht as v3Normalize,yr as v3QuadraticBezierCurve,st as v3Sub,ot as v3Sum,yt as v4,f as vDivideScalar,a as vDotProduct,R as vEqual,g as vLength,h as vMulScalar,E as vN,D as vNormalize,M as vSub,m as vSum};
//# sourceMappingURL=tc-math.esm.js.map
