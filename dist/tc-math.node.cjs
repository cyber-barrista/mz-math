/* 
Tool Cool Math Helpers
Version: 1.0.14
Documentation: https://github.com/toolcool-org/toolcool-math
License: MIT License        
Author: Tool Cool, toolcool.org@gmail.com>                          
*/
var w=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var tt=Object.getOwnPropertyNames;var rt=Object.prototype.hasOwnProperty;var H=Math.pow;var et=(t,r)=>{for(var e in r)w(t,e,{get:r[e],enumerable:!0})},nt=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of tt(r))!rt.call(t,o)&&o!==e&&w(t,o,{get:()=>r[o],enumerable:!(n=P(r,o))||n.enumerable});return t};var ot=t=>nt(w({},"__esModule",{value:!0}),t);var dr={};et(dr,{convertRange:()=>fr,degreesToRadians:()=>st,doRangesOverlap:()=>lr,equationSystem2:()=>wr,equationSystem3:()=>Sr,equationSystemN:()=>Dr,getRandom:()=>pr,getRandomBoolean:()=>Mr,getRandomInt:()=>$,getRandomItemFromArray:()=>mr,getV2Angle:()=>S,identity2:()=>Bt,identity3:()=>Gt,identityN:()=>Qt,isNumber:()=>Vr,m2Adjugate:()=>Q,m2AppendRow:()=>Ht,m2DeepCopy:()=>L,m2Determinant:()=>G,m2DivideScalar:()=>O,m2Inverse:()=>Y,m2MulScalar:()=>Et,m2PrependRow:()=>Jt,m2Reset:()=>jt,m2Rotation:()=>k,m2Scale:()=>W,m2Sub:()=>Dt,m2Sum:()=>wt,m2Transpose:()=>Rt,m2x2:()=>Lt,m3Adjugate:()=>ar,m3AppendRow:()=>Ot,m3DeepCopy:()=>q,m3Determinant:()=>xr,m3DivideScalar:()=>Tt,m3Inverse:()=>Z,m3MulScalar:()=>zt,m3PrependRow:()=>Kt,m3Reset:()=>At,m3RotationX:()=>J,m3RotationY:()=>K,m3RotationZ:()=>U,m3Scale:()=>_,m3Sub:()=>dt,m3Sum:()=>St,m3Transpose:()=>Nt,m3x3:()=>qt,mAdjugate:()=>X,mAppendCol:()=>Xt,mAppendRow:()=>Zt,mDeepCopy:()=>x,mDelFirstColumn:()=>_t,mDelFirstRow:()=>Wt,mDelLastColumn:()=>F,mDelLastRow:()=>Ut,mDeterminant:()=>v,mDivideScalar:()=>y,mEqual:()=>rr,mGetColumn:()=>Pt,mGetFirstColumn:()=>$t,mGetLastColumn:()=>Ct,mInverse:()=>I,mMinor:()=>B,mMul:()=>tr,mMulScalar:()=>j,mMulVector:()=>a,mNxM:()=>Ft,mPrependCol:()=>Yt,mPrependRow:()=>kt,mReset:()=>A,mSub:()=>N,mSum:()=>R,mTranspose:()=>b,mod:()=>hr,radiansToDegrees:()=>ct,setDecimalPlaces:()=>s,setV2Angle:()=>it,stringToNumber:()=>br,v2:()=>vt,v2CubicBezierCurve:()=>vr,v2DivideScalar:()=>ht,v2DotProduct:()=>bt,v2Length:()=>D,v2MulScalar:()=>Mt,v2Normalize:()=>E,v2QuadraticBezierCurve:()=>gr,v2Rotate:()=>er,v2Scale:()=>cr,v2SetLength:()=>Vt,v2Sub:()=>at,v2Sum:()=>ut,v3:()=>It,v3CrossProduct:()=>yt,v3CubicBezierCurve:()=>Ir,v3DivideScalar:()=>ft,v3DotProduct:()=>gt,v3Length:()=>lt,v3MulScalar:()=>mt,v3Normalize:()=>V,v3QuadraticBezierCurve:()=>yr,v3RotateX:()=>nr,v3RotateY:()=>or,v3RotateZ:()=>ir,v3Scale:()=>sr,v3Sub:()=>pt,v3Sum:()=>xt,vDivideScalar:()=>l,vDotProduct:()=>M,vEqual:()=>T,vLength:()=>g,vMulScalar:()=>f,vN:()=>z,vNormalize:()=>d,vSub:()=>h,vSum:()=>m});module.exports=ot(dr);var s=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=H(10,r);return Math.round(t*e)/e};var S=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return s(e,r)},it=(t,r,e=1/0)=>{let n=D(t);return[s(Math.cos(r)*n,e),s(Math.sin(r)*n,e)]},ct=(t,r=1/0)=>{let e=t*(180/Math.PI);return s(e,r)},st=(t,r=1/0)=>{let e=t*(Math.PI/180);return s(e,r)};var m=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]+r[o],e));return n},ut=(t,r,e=1/0)=>m(t,r,e),xt=(t,r,e=1/0)=>m(t,r,e),h=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]-r[o],e));return n},at=(t,r,e=1/0)=>h(t,r,e),pt=(t,r,e=1/0)=>h(t,r,e),f=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]*r,e));return n},Mt=(t,r,e=1/0)=>f(t,r,e),mt=(t,r,e=1/0)=>f(t,r,e),l=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]/r,e));return n},ht=(t,r,e=1/0)=>l(t,r,e),ft=(t,r,e=1/0)=>l(t,r,e),g=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return s(Math.sqrt(e),r)},D=(t,r=1/0)=>g(t,r),lt=(t,r=1/0)=>g(t,r),Vt=(t,r,e=1/0)=>{let n=S(t);return[s(Math.cos(n)*r,e),s(Math.sin(n)*r,e)]},d=(t,r=1/0)=>{let e=g(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:s(t[o]/e,r));return n},E=(t,r=1/0)=>d(t,r),V=(t,r=1/0)=>d(t,r),M=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return s(n,e)},bt=(t,r,e=1/0)=>M(t,r,e),gt=(t,r,e=1/0)=>M(t,r,e),yt=(t,r,e=1/0)=>[s(t[1]*r[2]-t[2]*r[1],e),s(t[2]*r[0]-t[0]*r[2],e),s(t[0]*r[1]-t[1]*r[0],e)],vt=(t=0)=>[t,t],It=(t=0)=>[t,t,t],z=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},T=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var R=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(m(t[o],r[o],e));return n},wt=(t,r,e=1/0)=>R(t,r,e),St=(t,r,e=1/0)=>R(t,r,e),N=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(h(t[o],r[o],e));return n},Dt=(t,r,e=1/0)=>N(t,r,e),dt=(t,r,e=1/0)=>N(t,r,e),j=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(f(o,r,e));return n},Et=(t,r,e=1/0)=>j(t,r,e),zt=(t,r,e=1/0)=>j(t,r,e),y=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(l(o,r,e));return n},O=(t,r,e=1/0)=>y(t,r,e),Tt=(t,r,e=1/0)=>y(t,r,e),b=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Rt=t=>b(t),Nt=t=>b(t),A=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let c=0;c<o;c++)i.push(r);e.push(i)}return e},jt=(t,r=0)=>A(t,r),At=(t,r=0)=>A(t,r),Lt=(t=0)=>[[t,t],[t,t]],qt=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],Ft=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(z(r,e));return n},Bt=()=>[[1,0],[0,1]],Gt=()=>[[1,0,0],[0,1,0],[0,0,1]],Qt=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},x=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},L=t=>x(t),q=t=>x(t),Xt=(t,r)=>{if(t.length<=0)return[];let e=x(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},Yt=(t,r)=>{if(t.length<=0)return[];let e=x(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},Zt=(t,r)=>{let e=x(t);return e.push(r),e},Ht=(t,r)=>{let e=L(t);return e.push(r),e},Ot=(t,r)=>{let e=q(t);return e.push(r),e},kt=(t,r)=>{let e=x(t);return e.unshift(r),e},Jt=(t,r)=>{let e=L(t);return e.unshift(r),e},Kt=(t,r)=>{let e=q(t);return e.unshift(r),e},Ut=t=>{if(t.length<=0)return[];let r=x(t);return r.pop(),r},Wt=t=>{if(t.length<=0)return[];let r=x(t);return r.shift(),r},F=t=>{if(t.length<=0)return[];let r=x(t);for(let e=0;e<r.length;e++)r[e].pop();return r},_t=t=>{if(t.length<=0)return[];let r=x(t);for(let e=0;e<r.length;e++)r[e].shift();return r},$t=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},Ct=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},Pt=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},tr=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=b(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let c=t[i];for(let u=0;u<o.length;u++){let p=o[u],C=M(c,p,e);n[i].push(C)}}return n},a=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=M(t[o],r,e);return n},rr=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!T(t[e],r[e]))return!1;return!0},k=t=>[[Math.cos(t),-Math.sin(t)],[Math.sin(t),Math.cos(t)]],er=(t,r)=>{let e=E(r);return a(k(t),e)},J=t=>[[1,0,0],[0,Math.cos(t),-Math.sin(t)],[0,Math.sin(t),Math.cos(t)]],nr=(t,r)=>{let e=V(r);return a(J(t),e)},K=t=>[[Math.cos(t),0,Math.sin(t)],[0,1,0],[-Math.sin(t),0,Math.cos(t)]],or=(t,r)=>{let e=V(r);return a(K(t),e)},U=t=>[[Math.cos(t),-Math.sin(t),0],[Math.sin(t),Math.cos(t),0],[0,0,1]],ir=(t,r)=>{let e=V(r);return a(U(t),e)},W=t=>[[t[0],0],[0,t[1]]],cr=(t,r)=>a(W(t),r),_=t=>[[t[0],0,0],[0,t[1],0],[0,0,t[2]]],sr=(t,r)=>a(_(t),r),ur=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let c=[];for(let u=0;u<n;u++)u!==e&&c.push(t[i][u]);o.push(c)}return o},B=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=ur(t,r,e);return v(o)},v=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return G(t);let e=0;for(let n=0;n<r;n++){let o=B(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},G=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},xr=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return v(t)},Q=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},ar=t=>X(t),X=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return Q(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let c=B(t,n,i),u=Math.pow(-1,n+i);o.push(u*c)}e.push(o)}return b(e)},Y=(t,r=1/0)=>{if(t.length<=0)return null;if(t.length!==t[0].length)throw new Error("The matrix must be square.");let e=G(t);if(e===0)return null;let n=Q(t);return n===null?null:O(n,e,r)},Z=(t,r=1/0)=>I(t,r),I=(t,r=1/0)=>{let e=t.length;if(e<=0)return null;if(e!==t[0].length)throw new Error("The matrix must be square.");let n=v(t),o=X(t);return o===null?null:y(o,n,r)};var pr=(t,r,e=1/0)=>s(Math.random()*(r-t)+t,e),$=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),Mr=()=>Math.random()<.5,mr=t=>{let r=$(0,t.length-1);return t[r]};var hr=(t,r)=>(t%r+r)%r,fr=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,lr=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),Vr=t=>!isNaN(parseFloat(t))&&isFinite(t);var br=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var gr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,c=t*t;return[o*r[0]+i*e[0]+c*n[0],o*r[1]+i*e[1]+c*n[1]]},yr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,c=t*t;return[o*r[0]+i*e[0]+c*n[0],o*r[1]+i*e[1]+c*n[1],o*r[2]+i*e[2]+c*n[2]]},vr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),c=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,p=t*t*t;return[i*r[0]+c*e[0]+u*n[0]+p*o[0],i*r[1]+c*e[1]+u*n[1]+p*o[1]]},Ir=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),c=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,p=t*t*t;return[i*r[0]+c*e[0]+u*n[0]+p*o[0],i*r[1]+c*e[1]+u*n[1]+p*o[1],i*r[2]+c*e[2]+u*n[2]+p*o[2]]};var wr=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=Y(n);if(o===null)return null;let i=[t[2],r[2]];return a(o,i,e)},Sr=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=Z(o);if(i===null)return null;let c=[t[3],r[3],e[3]];return a(i,c,n)},Dr=(t,r=1/0)=>{if(t.length<=0)return null;let e=t.length,n=F(t),o=I(n);if(o===null)return null;let i=[];for(let c=0;c<e;c++){let u=t[c];i.push(u[u.length-1])}return a(o,i,r)};0&&(module.exports={convertRange,degreesToRadians,doRangesOverlap,equationSystem2,equationSystem3,equationSystemN,getRandom,getRandomBoolean,getRandomInt,getRandomItemFromArray,getV2Angle,identity2,identity3,identityN,isNumber,m2Adjugate,m2AppendRow,m2DeepCopy,m2Determinant,m2DivideScalar,m2Inverse,m2MulScalar,m2PrependRow,m2Reset,m2Rotation,m2Scale,m2Sub,m2Sum,m2Transpose,m2x2,m3Adjugate,m3AppendRow,m3DeepCopy,m3Determinant,m3DivideScalar,m3Inverse,m3MulScalar,m3PrependRow,m3Reset,m3RotationX,m3RotationY,m3RotationZ,m3Scale,m3Sub,m3Sum,m3Transpose,m3x3,mAdjugate,mAppendCol,mAppendRow,mDeepCopy,mDelFirstColumn,mDelFirstRow,mDelLastColumn,mDelLastRow,mDeterminant,mDivideScalar,mEqual,mGetColumn,mGetFirstColumn,mGetLastColumn,mInverse,mMinor,mMul,mMulScalar,mMulVector,mNxM,mPrependCol,mPrependRow,mReset,mSub,mSum,mTranspose,mod,radiansToDegrees,setDecimalPlaces,setV2Angle,stringToNumber,v2,v2CubicBezierCurve,v2DivideScalar,v2DotProduct,v2Length,v2MulScalar,v2Normalize,v2QuadraticBezierCurve,v2Rotate,v2Scale,v2SetLength,v2Sub,v2Sum,v3,v3CrossProduct,v3CubicBezierCurve,v3DivideScalar,v3DotProduct,v3Length,v3MulScalar,v3Normalize,v3QuadraticBezierCurve,v3RotateX,v3RotateY,v3RotateZ,v3Scale,v3Sub,v3Sum,vDivideScalar,vDotProduct,vEqual,vLength,vMulScalar,vN,vNormalize,vSub,vSum});
//# sourceMappingURL=tc-math.node.cjs.map
