/* 
Tool Cool Math Helpers
Version: 1.0.19
Documentation: https://github.com/toolcool-org/toolcool-math
License: MIT License        
Author: Tool Cool, toolcool.org@gmail.com>                          
*/
var z=Math.pow;var u=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=z(10,r);return Math.round(t*e)/e};var g=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return u(e,r)},Mt=(t,r,e=1/0)=>{let n=j(t);return[u(Math.cos(r)*n,e),u(Math.sin(r)*n,e)]},lt=(t,r=1/0)=>{let e=t*(180/Math.PI);return u(e,r)},bt=(t,r=1/0)=>{let e=t*(Math.PI/180);return u(e,r)},A=(t,r,e=1/0)=>{let n=V(t),o=V(r),i=b(n,o),s=Math.acos(i);return u(s,e)},Vt=(t,r,e=1/0)=>A(t,r,e),gt=(t,r,e=1/0)=>A(t,r,e);var y=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]+r[o],e));return n},It=(t,r,e=1/0)=>y(t,r,e),St=(t,r,e=1/0)=>y(t,r,e),v=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]-r[o],e));return n},B=(t,r,e=1/0)=>v(t,r,e),wt=(t,r,e=1/0)=>v(t,r,e),d=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]*r,e));return n},Rt=(t,r,e=1/0)=>d(t,r,e),Lt=(t,r,e=1/0)=>d(t,r,e),I=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]/r,e));return n},Dt=(t,r,e=1/0)=>I(t,r,e),Ct=(t,r,e=1/0)=>I(t,r,e),L=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return u(Math.sqrt(e),r)},j=(t,r=1/0)=>L(t,r),Ht=(t,r=1/0)=>L(t,r),Tt=(t,r,e=1/0)=>{let n=g(t);return[u(Math.cos(n)*r,e),u(Math.sin(n)*r,e)]},V=(t,r=1/0)=>{let e=L(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:u(t[o]/e,r));return n},Et=(t,r=1/0)=>V(t,r),zt=(t,r=1/0)=>V(t,r),b=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return u(n,e)},At=(t,r,e=1/0)=>b(t,r,e),jt=(t,r,e=1/0)=>b(t,r,e),Bt=(t,r,e=1/0)=>[u(t[1]*r[2]-t[2]*r[1],e),u(t[2]*r[0]-t[0]*r[2],e),u(t[0]*r[1]-t[1]*r[0],e)],Nt=(t=0)=>[t,t],Gt=(t=0)=>[t,t,t],qt=(t=0)=>[t,t,t,t],N=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},G=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var q=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(y(t[o],r[o],e));return n},$t=(t,r,e=1/0)=>q(t,r,e),Qt=(t,r,e=1/0)=>q(t,r,e),F=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(v(t[o],r[o],e));return n},Ot=(t,r,e=1/0)=>F(t,r,e),kt=(t,r,e=1/0)=>F(t,r,e),W=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(d(o,r,e));return n},Jt=(t,r,e=1/0)=>W(t,r,e),Kt=(t,r,e=1/0)=>W(t,r,e),D=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(I(o,r,e));return n},et=(t,r,e=1/0)=>D(t,r,e),Ut=(t,r,e=1/0)=>D(t,r,e),S=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Xt=t=>S(t),Yt=t=>S(t),$=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let s=0;s<o;s++)i.push(r);e.push(i)}return e},Zt=(t,r=0)=>$(t,r),_t=(t,r=0)=>$(t,r),Pt=(t=0)=>[[t,t],[t,t]],tr=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],rr=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],er=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(N(r,e));return n},nr=()=>[[1,0],[0,1]],or=()=>[[1,0,0],[0,1,0],[0,0,1]],ir=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],sr=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},h=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},Q=t=>h(t),O=t=>h(t),cr=(t,r)=>{if(t.length<=0)return[];let e=h(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},ur=(t,r)=>{if(t.length<=0)return[];let e=h(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},xr=(t,r)=>{let e=h(t);return e.push(r),e},ar=(t,r)=>{let e=Q(t);return e.push(r),e},pr=(t,r)=>{let e=O(t);return e.push(r),e},mr=(t,r)=>{let e=h(t);return e.unshift(r),e},fr=(t,r)=>{let e=Q(t);return e.unshift(r),e},hr=(t,r)=>{let e=O(t);return e.unshift(r),e},Mr=t=>{if(t.length<=0)return[];let r=h(t);return r.pop(),r},lr=t=>{if(t.length<=0)return[];let r=h(t);return r.shift(),r},k=t=>{if(t.length<=0)return[];let r=h(t);for(let e=0;e<r.length;e++)r[e].pop();return r},br=t=>{if(t.length<=0)return[];let r=h(t);for(let e=0;e<r.length;e++)r[e].shift();return r},Vr=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},J=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},gr=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},yr=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=S(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let c=0;c<o.length;c++){let x=o[c],a=b(s,x,e);n[i].push(a)}}return n},w=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=b(t[o],r,e);return n},vr=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!G(t[e],r[e]))return!1;return!0},nt=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let s=[];for(let c=0;c<n;c++)c!==e&&s.push(t[i][c]);o.push(s)}return o},K=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=nt(t,r,e);return R(o)},R=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return U(t);let e=0;for(let n=0;n<r;n++){let o=K(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},U=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},dr=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return R(t)},X=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},Ir=t=>Y(t),Y=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return X(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let s=K(t,n,i),c=Math.pow(-1,n+i);o.push(c*s)}e.push(o)}return S(e)},Sr=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return R(t)===0},Z=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=U(t);if(e===0)return null;let n=X(t);return n===null?null:et(n,e,r)},_=(t,r=1/0)=>C(t,r),C=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=R(t),o=Y(t);return o===null?null:D(o,n,r)};var p=(t,r,e=1/0)=>u(Math.random()*(r-t)+t,e),ot=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),Lr=()=>Math.random()<.5,Dr=t=>{let r=ot(0,t.length-1);return t[r]};var H=(t,r)=>(t%r+r)%r,P=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,Hr=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),Tr=t=>!isNaN(parseFloat(t))&&isFinite(t);var zr=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var jr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1]]},Br=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1],o*r[2]+i*e[2]+s*n[2]]},Nr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,c=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*e[0]+c*n[0]+x*o[0],i*r[1]+s*e[1]+c*n[1]+x*o[1]]},Gr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,c=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*e[0]+c*n[0]+x*o[0],i*r[1]+s*e[1]+c*n[1]+x*o[1],i*r[2]+s*e[2]+c*n[2]+x*o[2]]};var Wr=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=Z(n);if(o===null)return null;let i=[t[2],r[2]];return w(o,i,e)},$r=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=_(o);if(i===null)return null;let s=[t[3],r[3],e[3]];return w(i,s,n)},Qr=(t,r=1/0)=>{if(t.length<=0)return null;let e=k(t),n=C(e);if(n===null)return null;let o=J(t);return w(n,o,r)};var it=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),Ur=(t,r,e)=>{let n=B(t,r),o=g(n);return o=P(o,0,Math.PI*2,0,Math.PI),it(r,o,e)},Xr=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),Yr=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},Zr=(t,r,e,n,o,i,s)=>[t*Math.cos(n*e-i),r*Math.cos(o*e-s)];var ee=()=>{let t=tt();return ut(t)},ne=()=>{let t=tt();return xt(t)},tt=()=>{let t=p(1,360),r=p(0,100),e=p(0,95);return[t,r,e]},oe=t=>{let r=p(0,100),e=p(0,95);return[t,r,e]},ie=t=>{let r=p(1,360),e=p(0,95);return[r,t,e]},se=t=>{let r=p(1,360),e=p(0,100);return[r,e,t]},ce=()=>[0,0,p(0,100)],ue=(t=1,r=360,e=0,n=100,o=0,i=100)=>{let s=p(t,r),c=p(e,n),x=p(o,i);return[s,c,x]},T=t=>(t*=60,t<0&&(t+=360),t*100/360),st=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:o===t?T((r-e)/(o-n)):o===r?T(2+(e-t)/(o-n)):o===e?T(4+(t-r)/(o-n)):0),rt=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),ct=(t,r,e,n=void 0,o=void 0,i=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(i=i===void 0?rt(t,r,e):i,(i<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),xe=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,i=Math.min(e,n,o),s=Math.max(e,n,o),c=rt(e,n,o,i,s),x=ct(e,n,o,i,s,c),a=st(e,n,o,i,s);return a>360||x>100||c>100?[0,0,100]:a<0||x<0||c<0?[0,0,0]:[u(a,r),u(x,r),u(c,r)]},E=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),ut=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let m=o*255;return[m,m,m]}let i=o<.5?o*(1+n):o+n-o*n,s=2*o-i,c=e+.333,x=e,a=e-.333,M=E(i,s,c),f=E(i,s,x),l=E(i,s,a);return M*=255,f*=255,l*=255,M>255||f>255||l>255?[255,255,255]:M<0||f<0||l<0?[0,0,0]:[u(M,r),u(f,r),u(l,r)]},xt=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,i,s;if(e===0)o=i=s=n;else{let x=(f,l,m)=>(m<0&&(m+=1),m>1&&(m-=1),m<.16666666666666666?f+(l-f)*6*m:m<.5?l:m<.6666666666666666?f+(l-f)*(.6666666666666666-m)*6:f),a=n<.5?n*(1+e):n+e-n*e,M=2*n-a;o=x(M,a,r+1/3),i=x(M,a,r),s=x(M,a,r-1/3)}let c=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${c(o)}${c(i)}${c(s)}`},ae=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=H(e,360)),[e,t[1],t[2]]},pe=(t,r=10)=>{let e=t[2];return e+=r,(e>100||e<0)&&(e=H(e,100)),[t[0],t[1],e]},me=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]};export{it as circleMovement,Ur as circleMovementAfterMouse,P as convertRange,bt as degreesToRadians,Hr as doRangesOverlap,Xr as ellipseMovement,Wr as equationSystem2,$r as equationSystem3,Qr as equationSystemN,p as getRandom,Lr as getRandomBoolean,ce as getRandomGrayscaleHSLColor,tt as getRandomHSLColor,oe as getRandomHSLColorWithHue,se as getRandomHSLColorWithLightness,ie as getRandomHSLColorWithSaturation,ue as getRandomHSLColorWithinRanges,ne as getRandomHexColor,ot as getRandomInt,Dr as getRandomItemFromArray,ee as getRandomRGBColor,ae as getShiftedHue,pe as getShiftedLightness,me as getShiftedSaturation,g as getV2Angle,Vt as getV2AngleBetween,gt as getV3AngleBetween,A as getVNAngleBetween,xt as hslToHex,ut as hslToRgb,nr as identity2,or as identity3,ir as identity4,sr as identityN,Tr as isNumber,Sr as isSingularMatrix,Zr as lissajousCurve,X as m2Adjugate,ar as m2AppendRow,Q as m2DeepCopy,U as m2Determinant,et as m2DivideScalar,Z as m2Inverse,Jt as m2MulScalar,fr as m2PrependRow,Zt as m2Reset,Ot as m2Sub,$t as m2Sum,Xt as m2Transpose,Pt as m2x2,Ir as m3Adjugate,pr as m3AppendRow,O as m3DeepCopy,dr as m3Determinant,Ut as m3DivideScalar,_ as m3Inverse,Kt as m3MulScalar,hr as m3PrependRow,_t as m3Reset,kt as m3Sub,Qt as m3Sum,Yt as m3Transpose,tr as m3x3,rr as m4x4,Y as mAdjugate,cr as mAppendCol,xr as mAppendRow,h as mDeepCopy,br as mDelFirstColumn,lr as mDelFirstRow,k as mDelLastColumn,Mr as mDelLastRow,R as mDeterminant,D as mDivideScalar,vr as mEqual,gr as mGetColumn,Vr as mGetFirstColumn,J as mGetLastColumn,C as mInverse,K as mMinor,yr as mMul,W as mMulScalar,w as mMulVector,er as mNxM,ur as mPrependCol,mr as mPrependRow,$ as mReset,F as mSub,q as mSum,S as mTranspose,H as mod,lt as radiansToDegrees,xe as rgbToHsl,u as setDecimalPlaces,Mt as setV2Angle,Yr as sineWaveMovement,zr as stringToNumber,Nt as v2,Nr as v2CubicBezierCurve,Dt as v2DivideScalar,At as v2DotProduct,j as v2Length,Rt as v2MulScalar,Et as v2Normalize,jr as v2QuadraticBezierCurve,Tt as v2SetLength,B as v2Sub,It as v2Sum,Gt as v3,Bt as v3CrossProduct,Gr as v3CubicBezierCurve,Ct as v3DivideScalar,jt as v3DotProduct,Ht as v3Length,Lt as v3MulScalar,zt as v3Normalize,Br as v3QuadraticBezierCurve,wt as v3Sub,St as v3Sum,qt as v4,I as vDivideScalar,b as vDotProduct,G as vEqual,L as vLength,d as vMulScalar,N as vN,V as vNormalize,v as vSub,y as vSum};
//# sourceMappingURL=tc-math.esm.js.map
