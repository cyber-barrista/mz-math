/* 
Tool Cool Math Helpers
Version: 1.0.19
Documentation: https://github.com/toolcool-org/toolcool-math
License: MIT License        
Author: Tool Cool, toolcool.org@gmail.com>                          
*/
var T=Object.defineProperty;var ut=Object.getOwnPropertyDescriptor;var xt=Object.getOwnPropertyNames;var at=Object.prototype.hasOwnProperty;var rt=Math.pow;var pt=(t,r)=>{for(var e in r)T(t,e,{get:r[e],enumerable:!0})},mt=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of xt(r))!at.call(t,o)&&o!==e&&T(t,o,{get:()=>r[o],enumerable:!(n=ut(r,o))||n.enumerable});return t};var ft=t=>mt(T({},"__esModule",{value:!0}),t);var Xr={};pt(Xr,{circleMovement:()=>ot,circleMovementAfterMouse:()=>Er,convertRange:()=>Z,degreesToRadians:()=>lt,doRangesOverlap:()=>dr,ellipseMovement:()=>zr,equationSystem2:()=>Cr,equationSystem3:()=>Hr,equationSystemN:()=>Tr,getRandom:()=>p,getRandomBoolean:()=>yr,getRandomGrayscaleHSLColor:()=>Wr,getRandomHSLColor:()=>tt,getRandomHSLColorWithHue:()=>Gr,getRandomHSLColorWithLightness:()=>Fr,getRandomHSLColorWithSaturation:()=>qr,getRandomHSLColorWithinRanges:()=>$r,getRandomHexColor:()=>Nr,getRandomInt:()=>nt,getRandomItemFromArray:()=>vr,getRandomRGBColor:()=>Br,getShiftedHue:()=>Jr,getShiftedLightness:()=>Kr,getShiftedSaturation:()=>Ur,getV2Angle:()=>g,getV2AngleBetween:()=>bt,getV3AngleBetween:()=>Vt,getVNAngleBetween:()=>E,hslToHex:()=>ct,hslToRgb:()=>st,identity2:()=>Zt,identity3:()=>_t,identity4:()=>Pt,identityN:()=>tr,isNumber:()=>Ir,isSingularMatrix:()=>gr,lissajousCurve:()=>jr,m2Adjugate:()=>K,m2AppendRow:()=>or,m2DeepCopy:()=>W,m2Determinant:()=>J,m2DivideScalar:()=>et,m2Inverse:()=>X,m2MulScalar:()=>Ft,m2PrependRow:()=>cr,m2Reset:()=>kt,m2Sub:()=>Gt,m2Sum:()=>Bt,m2Transpose:()=>Qt,m2x2:()=>Kt,m3Adjugate:()=>Vr,m3AppendRow:()=>ir,m3DeepCopy:()=>$,m3Determinant:()=>br,m3DivideScalar:()=>$t,m3Inverse:()=>Y,m3MulScalar:()=>Wt,m3PrependRow:()=>ur,m3Reset:()=>Jt,m3Sub:()=>qt,m3Sum:()=>Nt,m3Transpose:()=>Ot,m3x3:()=>Ut,m4x4:()=>Xt,mAdjugate:()=>U,mAppendCol:()=>rr,mAppendRow:()=>nr,mDeepCopy:()=>f,mDelFirstColumn:()=>pr,mDelFirstRow:()=>ar,mDelLastColumn:()=>Q,mDelLastRow:()=>xr,mDeterminant:()=>R,mDivideScalar:()=>D,mEqual:()=>Mr,mGetColumn:()=>fr,mGetFirstColumn:()=>mr,mGetLastColumn:()=>O,mInverse:()=>C,mMinor:()=>k,mMul:()=>hr,mMulScalar:()=>q,mMulVector:()=>w,mNxM:()=>Yt,mPrependCol:()=>er,mPrependRow:()=>sr,mReset:()=>F,mSub:()=>G,mSum:()=>N,mTranspose:()=>S,mod:()=>H,radiansToDegrees:()=>Mt,rgbToHsl:()=>kr,setDecimalPlaces:()=>u,setV2Angle:()=>ht,sineWaveMovement:()=>Ar,stringToNumber:()=>Sr,v2:()=>zt,v2CubicBezierCurve:()=>Lr,v2DivideScalar:()=>St,v2DotProduct:()=>Ht,v2Length:()=>z,v2MulScalar:()=>dt,v2Normalize:()=>Dt,v2QuadraticBezierCurve:()=>wr,v2SetLength:()=>Lt,v2Sub:()=>A,v2Sum:()=>gt,v3:()=>At,v3CrossProduct:()=>Et,v3CubicBezierCurve:()=>Dr,v3DivideScalar:()=>wt,v3DotProduct:()=>Tt,v3Length:()=>Rt,v3MulScalar:()=>It,v3Normalize:()=>Ct,v3QuadraticBezierCurve:()=>Rr,v3Sub:()=>vt,v3Sum:()=>yt,v4:()=>jt,vDivideScalar:()=>I,vDotProduct:()=>b,vEqual:()=>B,vLength:()=>L,vMulScalar:()=>d,vN:()=>j,vNormalize:()=>V,vSub:()=>v,vSum:()=>y});module.exports=ft(Xr);var u=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=rt(10,r);return Math.round(t*e)/e};var g=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return u(e,r)},ht=(t,r,e=1/0)=>{let n=z(t);return[u(Math.cos(r)*n,e),u(Math.sin(r)*n,e)]},Mt=(t,r=1/0)=>{let e=t*(180/Math.PI);return u(e,r)},lt=(t,r=1/0)=>{let e=t*(Math.PI/180);return u(e,r)},E=(t,r,e=1/0)=>{let n=V(t),o=V(r),i=b(n,o),s=Math.acos(i);return u(s,e)},bt=(t,r,e=1/0)=>E(t,r,e),Vt=(t,r,e=1/0)=>E(t,r,e);var y=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]+r[o],e));return n},gt=(t,r,e=1/0)=>y(t,r,e),yt=(t,r,e=1/0)=>y(t,r,e),v=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]-r[o],e));return n},A=(t,r,e=1/0)=>v(t,r,e),vt=(t,r,e=1/0)=>v(t,r,e),d=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]*r,e));return n},dt=(t,r,e=1/0)=>d(t,r,e),It=(t,r,e=1/0)=>d(t,r,e),I=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]/r,e));return n},St=(t,r,e=1/0)=>I(t,r,e),wt=(t,r,e=1/0)=>I(t,r,e),L=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return u(Math.sqrt(e),r)},z=(t,r=1/0)=>L(t,r),Rt=(t,r=1/0)=>L(t,r),Lt=(t,r,e=1/0)=>{let n=g(t);return[u(Math.cos(n)*r,e),u(Math.sin(n)*r,e)]},V=(t,r=1/0)=>{let e=L(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:u(t[o]/e,r));return n},Dt=(t,r=1/0)=>V(t,r),Ct=(t,r=1/0)=>V(t,r),b=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return u(n,e)},Ht=(t,r,e=1/0)=>b(t,r,e),Tt=(t,r,e=1/0)=>b(t,r,e),Et=(t,r,e=1/0)=>[u(t[1]*r[2]-t[2]*r[1],e),u(t[2]*r[0]-t[0]*r[2],e),u(t[0]*r[1]-t[1]*r[0],e)],zt=(t=0)=>[t,t],At=(t=0)=>[t,t,t],jt=(t=0)=>[t,t,t,t],j=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},B=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var N=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(y(t[o],r[o],e));return n},Bt=(t,r,e=1/0)=>N(t,r,e),Nt=(t,r,e=1/0)=>N(t,r,e),G=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(v(t[o],r[o],e));return n},Gt=(t,r,e=1/0)=>G(t,r,e),qt=(t,r,e=1/0)=>G(t,r,e),q=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(d(o,r,e));return n},Ft=(t,r,e=1/0)=>q(t,r,e),Wt=(t,r,e=1/0)=>q(t,r,e),D=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(I(o,r,e));return n},et=(t,r,e=1/0)=>D(t,r,e),$t=(t,r,e=1/0)=>D(t,r,e),S=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Qt=t=>S(t),Ot=t=>S(t),F=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let s=0;s<o;s++)i.push(r);e.push(i)}return e},kt=(t,r=0)=>F(t,r),Jt=(t,r=0)=>F(t,r),Kt=(t=0)=>[[t,t],[t,t]],Ut=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],Xt=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],Yt=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(j(r,e));return n},Zt=()=>[[1,0],[0,1]],_t=()=>[[1,0,0],[0,1,0],[0,0,1]],Pt=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],tr=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},f=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},W=t=>f(t),$=t=>f(t),rr=(t,r)=>{if(t.length<=0)return[];let e=f(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},er=(t,r)=>{if(t.length<=0)return[];let e=f(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},nr=(t,r)=>{let e=f(t);return e.push(r),e},or=(t,r)=>{let e=W(t);return e.push(r),e},ir=(t,r)=>{let e=$(t);return e.push(r),e},sr=(t,r)=>{let e=f(t);return e.unshift(r),e},cr=(t,r)=>{let e=W(t);return e.unshift(r),e},ur=(t,r)=>{let e=$(t);return e.unshift(r),e},xr=t=>{if(t.length<=0)return[];let r=f(t);return r.pop(),r},ar=t=>{if(t.length<=0)return[];let r=f(t);return r.shift(),r},Q=t=>{if(t.length<=0)return[];let r=f(t);for(let e=0;e<r.length;e++)r[e].pop();return r},pr=t=>{if(t.length<=0)return[];let r=f(t);for(let e=0;e<r.length;e++)r[e].shift();return r},mr=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},O=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},fr=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},hr=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=S(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let c=0;c<o.length;c++){let x=o[c],a=b(s,x,e);n[i].push(a)}}return n},w=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=b(t[o],r,e);return n},Mr=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!B(t[e],r[e]))return!1;return!0},lr=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let s=[];for(let c=0;c<n;c++)c!==e&&s.push(t[i][c]);o.push(s)}return o},k=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=lr(t,r,e);return R(o)},R=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return J(t);let e=0;for(let n=0;n<r;n++){let o=k(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},J=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},br=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return R(t)},K=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},Vr=t=>U(t),U=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return K(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let s=k(t,n,i),c=Math.pow(-1,n+i);o.push(c*s)}e.push(o)}return S(e)},gr=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return R(t)===0},X=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=J(t);if(e===0)return null;let n=K(t);return n===null?null:et(n,e,r)},Y=(t,r=1/0)=>C(t,r),C=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=R(t),o=U(t);return o===null?null:D(o,n,r)};var p=(t,r,e=1/0)=>u(Math.random()*(r-t)+t,e),nt=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),yr=()=>Math.random()<.5,vr=t=>{let r=nt(0,t.length-1);return t[r]};var H=(t,r)=>(t%r+r)%r,Z=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,dr=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),Ir=t=>!isNaN(parseFloat(t))&&isFinite(t);var Sr=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var wr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1]]},Rr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1],o*r[2]+i*e[2]+s*n[2]]},Lr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,c=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*e[0]+c*n[0]+x*o[0],i*r[1]+s*e[1]+c*n[1]+x*o[1]]},Dr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,c=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*e[0]+c*n[0]+x*o[0],i*r[1]+s*e[1]+c*n[1]+x*o[1],i*r[2]+s*e[2]+c*n[2]+x*o[2]]};var Cr=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=X(n);if(o===null)return null;let i=[t[2],r[2]];return w(o,i,e)},Hr=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=Y(o);if(i===null)return null;let s=[t[3],r[3],e[3]];return w(i,s,n)},Tr=(t,r=1/0)=>{if(t.length<=0)return null;let e=Q(t),n=C(e);if(n===null)return null;let o=O(t);return w(n,o,r)};var ot=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),Er=(t,r,e)=>{let n=A(t,r),o=g(n);return o=Z(o,0,Math.PI*2,0,Math.PI),ot(r,o,e)},zr=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),Ar=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},jr=(t,r,e,n,o,i,s)=>[t*Math.cos(n*e-i),r*Math.cos(o*e-s)];var Br=()=>{let t=tt();return st(t)},Nr=()=>{let t=tt();return ct(t)},tt=()=>{let t=p(1,360),r=p(0,100),e=p(0,95);return[t,r,e]},Gr=t=>{let r=p(0,100),e=p(0,95);return[t,r,e]},qr=t=>{let r=p(1,360),e=p(0,95);return[r,t,e]},Fr=t=>{let r=p(1,360),e=p(0,100);return[r,e,t]},Wr=()=>[0,0,p(0,100)],$r=(t=1,r=360,e=0,n=100,o=0,i=100)=>{let s=p(t,r),c=p(e,n),x=p(o,i);return[s,c,x]},_=t=>(t*=60,t<0&&(t+=360),t*100/360),Qr=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:o===t?_((r-e)/(o-n)):o===r?_(2+(e-t)/(o-n)):o===e?_(4+(t-r)/(o-n)):0),it=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),Or=(t,r,e,n=void 0,o=void 0,i=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(i=i===void 0?it(t,r,e):i,(i<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),kr=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,i=Math.min(e,n,o),s=Math.max(e,n,o),c=it(e,n,o,i,s),x=Or(e,n,o,i,s,c),a=Qr(e,n,o,i,s);return a>360||x>100||c>100?[0,0,100]:a<0||x<0||c<0?[0,0,0]:[u(a,r),u(x,r),u(c,r)]},P=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),st=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let m=o*255;return[m,m,m]}let i=o<.5?o*(1+n):o+n-o*n,s=2*o-i,c=e+.333,x=e,a=e-.333,M=P(i,s,c),h=P(i,s,x),l=P(i,s,a);return M*=255,h*=255,l*=255,M>255||h>255||l>255?[255,255,255]:M<0||h<0||l<0?[0,0,0]:[u(M,r),u(h,r),u(l,r)]},ct=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,i,s;if(e===0)o=i=s=n;else{let x=(h,l,m)=>(m<0&&(m+=1),m>1&&(m-=1),m<.16666666666666666?h+(l-h)*6*m:m<.5?l:m<.6666666666666666?h+(l-h)*(.6666666666666666-m)*6:h),a=n<.5?n*(1+e):n+e-n*e,M=2*n-a;o=x(M,a,r+1/3),i=x(M,a,r),s=x(M,a,r-1/3)}let c=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${c(o)}${c(i)}${c(s)}`},Jr=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=H(e,360)),[e,t[1],t[2]]},Kr=(t,r=10)=>{let e=t[2];return e+=r,(e>100||e<0)&&(e=H(e,100)),[t[0],t[1],e]},Ur=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]};0&&(module.exports={circleMovement,circleMovementAfterMouse,convertRange,degreesToRadians,doRangesOverlap,ellipseMovement,equationSystem2,equationSystem3,equationSystemN,getRandom,getRandomBoolean,getRandomGrayscaleHSLColor,getRandomHSLColor,getRandomHSLColorWithHue,getRandomHSLColorWithLightness,getRandomHSLColorWithSaturation,getRandomHSLColorWithinRanges,getRandomHexColor,getRandomInt,getRandomItemFromArray,getRandomRGBColor,getShiftedHue,getShiftedLightness,getShiftedSaturation,getV2Angle,getV2AngleBetween,getV3AngleBetween,getVNAngleBetween,hslToHex,hslToRgb,identity2,identity3,identity4,identityN,isNumber,isSingularMatrix,lissajousCurve,m2Adjugate,m2AppendRow,m2DeepCopy,m2Determinant,m2DivideScalar,m2Inverse,m2MulScalar,m2PrependRow,m2Reset,m2Sub,m2Sum,m2Transpose,m2x2,m3Adjugate,m3AppendRow,m3DeepCopy,m3Determinant,m3DivideScalar,m3Inverse,m3MulScalar,m3PrependRow,m3Reset,m3Sub,m3Sum,m3Transpose,m3x3,m4x4,mAdjugate,mAppendCol,mAppendRow,mDeepCopy,mDelFirstColumn,mDelFirstRow,mDelLastColumn,mDelLastRow,mDeterminant,mDivideScalar,mEqual,mGetColumn,mGetFirstColumn,mGetLastColumn,mInverse,mMinor,mMul,mMulScalar,mMulVector,mNxM,mPrependCol,mPrependRow,mReset,mSub,mSum,mTranspose,mod,radiansToDegrees,rgbToHsl,setDecimalPlaces,setV2Angle,sineWaveMovement,stringToNumber,v2,v2CubicBezierCurve,v2DivideScalar,v2DotProduct,v2Length,v2MulScalar,v2Normalize,v2QuadraticBezierCurve,v2SetLength,v2Sub,v2Sum,v3,v3CrossProduct,v3CubicBezierCurve,v3DivideScalar,v3DotProduct,v3Length,v3MulScalar,v3Normalize,v3QuadraticBezierCurve,v3Sub,v3Sum,v4,vDivideScalar,vDotProduct,vEqual,vLength,vMulScalar,vN,vNormalize,vSub,vSum});
//# sourceMappingURL=tc-math.node.cjs.map
