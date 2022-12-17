/* 
Tool Cool Math Helpers
Version: 1.0.19
Documentation: https://github.com/toolcool-org/toolcool-math
License: MIT License        
Author: Tool Cool, toolcool.org@gmail.com>                          
*/
var E=Math.pow;var u=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=E(10,r);return Math.round(t*e)/e};var g=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return u(e,r)},mt=(t,r,e=1/0)=>{let n=A(t);return[u(Math.cos(r)*n,e),u(Math.sin(r)*n,e)]},ft=(t,r=1/0)=>{let e=t*(180/Math.PI);return u(e,r)},ht=(t,r=1/0)=>{let e=t*(Math.PI/180);return u(e,r)},z=(t,r,e=1/0)=>{let n=V(t),o=V(r),i=b(n,o),s=Math.acos(i);return u(s,e)},Mt=(t,r,e=1/0)=>z(t,r,e),lt=(t,r,e=1/0)=>z(t,r,e);var y=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]+r[o],e));return n},yt=(t,r,e=1/0)=>y(t,r,e),vt=(t,r,e=1/0)=>y(t,r,e),v=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]-r[o],e));return n},j=(t,r,e=1/0)=>v(t,r,e),It=(t,r,e=1/0)=>v(t,r,e),I=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]*r,e));return n},dt=(t,r,e=1/0)=>I(t,r,e),St=(t,r,e=1/0)=>I(t,r,e),d=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]/r,e));return n},wt=(t,r,e=1/0)=>d(t,r,e),Lt=(t,r,e=1/0)=>d(t,r,e),R=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return u(Math.sqrt(e),r)},A=(t,r=1/0)=>R(t,r),Rt=(t,r=1/0)=>R(t,r),Dt=(t,r,e=1/0)=>{let n=g(t);return[u(Math.cos(n)*r,e),u(Math.sin(n)*r,e)]},V=(t,r=1/0)=>{let e=R(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:u(t[o]/e,r));return n},Ht=(t,r=1/0)=>V(t,r),Ct=(t,r=1/0)=>V(t,r),b=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return u(n,e)},Tt=(t,r,e=1/0)=>b(t,r,e),Et=(t,r,e=1/0)=>b(t,r,e),zt=(t,r,e=1/0)=>[u(t[1]*r[2]-t[2]*r[1],e),u(t[2]*r[0]-t[0]*r[2],e),u(t[0]*r[1]-t[1]*r[0],e)],At=(t=0)=>[t,t],jt=(t=0)=>[t,t,t],Nt=(t=0)=>[t,t,t,t],N=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},B=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var q=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(y(t[o],r[o],e));return n},Gt=(t,r,e=1/0)=>q(t,r,e),Ft=(t,r,e=1/0)=>q(t,r,e),G=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(v(t[o],r[o],e));return n},Wt=(t,r,e=1/0)=>G(t,r,e),$t=(t,r,e=1/0)=>G(t,r,e),F=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(I(o,r,e));return n},Qt=(t,r,e=1/0)=>F(t,r,e),Ot=(t,r,e=1/0)=>F(t,r,e),D=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(d(o,r,e));return n},rt=(t,r,e=1/0)=>D(t,r,e),kt=(t,r,e=1/0)=>D(t,r,e),S=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Jt=t=>S(t),Kt=t=>S(t),W=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let s=0;s<o;s++)i.push(r);e.push(i)}return e},Ut=(t,r=0)=>W(t,r),Xt=(t,r=0)=>W(t,r),Yt=(t=0)=>[[t,t],[t,t]],Zt=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],_t=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],Pt=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(N(r,e));return n},tr=()=>[[1,0],[0,1]],rr=()=>[[1,0,0],[0,1,0],[0,0,1]],er=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],nr=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},h=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},$=t=>h(t),Q=t=>h(t),or=(t,r)=>{if(t.length<=0)return[];let e=h(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},ir=(t,r)=>{if(t.length<=0)return[];let e=h(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},sr=(t,r)=>{let e=h(t);return e.push(r),e},cr=(t,r)=>{let e=$(t);return e.push(r),e},ur=(t,r)=>{let e=Q(t);return e.push(r),e},xr=(t,r)=>{let e=h(t);return e.unshift(r),e},ar=(t,r)=>{let e=$(t);return e.unshift(r),e},pr=(t,r)=>{let e=Q(t);return e.unshift(r),e},mr=t=>{if(t.length<=0)return[];let r=h(t);return r.pop(),r},fr=t=>{if(t.length<=0)return[];let r=h(t);return r.shift(),r},O=t=>{if(t.length<=0)return[];let r=h(t);for(let e=0;e<r.length;e++)r[e].pop();return r},hr=t=>{if(t.length<=0)return[];let r=h(t);for(let e=0;e<r.length;e++)r[e].shift();return r},Mr=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},k=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},lr=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},br=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=S(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let c=0;c<o.length;c++){let x=o[c],a=b(s,x,e);n[i].push(a)}}return n},w=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=b(t[o],r,e);return n},Vr=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!B(t[e],r[e]))return!1;return!0},et=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let s=[];for(let c=0;c<n;c++)c!==e&&s.push(t[i][c]);o.push(s)}return o},J=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=et(t,r,e);return L(o)},L=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return K(t);let e=0;for(let n=0;n<r;n++){let o=J(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},K=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},gr=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return L(t)},U=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},yr=t=>X(t),X=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return U(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let s=J(t,n,i),c=Math.pow(-1,n+i);o.push(c*s)}e.push(o)}return S(e)},vr=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return L(t)===0},Y=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=K(t);if(e===0)return null;let n=U(t);return n===null?null:rt(n,e,r)},Z=(t,r=1/0)=>H(t,r),H=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=L(t),o=X(t);return o===null?null:D(o,n,r)};var p=(t,r,e=1/0)=>u(Math.random()*(r-t)+t,e),nt=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),Sr=()=>Math.random()<.5,wr=t=>{let r=nt(0,t.length-1);return t[r]};var _=(t,r)=>(t%r+r)%r,P=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,Rr=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),Dr=t=>!isNaN(parseFloat(t))&&isFinite(t);var Cr=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var Er=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1]]},zr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1],o*r[2]+i*e[2]+s*n[2]]},Ar=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,c=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*e[0]+c*n[0]+x*o[0],i*r[1]+s*e[1]+c*n[1]+x*o[1]]},jr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,c=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*e[0]+c*n[0]+x*o[0],i*r[1]+s*e[1]+c*n[1]+x*o[1],i*r[2]+s*e[2]+c*n[2]+x*o[2]]};var qr=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=Y(n);if(o===null)return null;let i=[t[2],r[2]];return w(o,i,e)},Gr=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=Z(o);if(i===null)return null;let s=[t[3],r[3],e[3]];return w(i,s,n)},Fr=(t,r=1/0)=>{if(t.length<=0)return null;let e=O(t),n=H(e);if(n===null)return null;let o=k(t);return w(n,o,r)};var ot=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),kr=(t,r,e)=>{let n=j(t,r),o=g(n);return o=P(o,0,Math.PI*2,0,Math.PI),ot(r,o,e)},Jr=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),Kr=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},Ur=(t,r,e,n,o,i,s)=>[t*Math.cos(n*e-i),r*Math.cos(o*e-s)];var Pr=()=>{let t=p(1,360),r=p(0,100),e=p(0,95);return[t,r,e]},te=t=>{let r=p(0,100),e=p(0,95);return[t,r,e]},re=t=>{let r=p(1,360),e=p(0,95);return[r,t,e]},ee=t=>{let r=p(1,360),e=p(0,100);return[r,e,t]},ne=()=>[0,0,p(0,100)],oe=(t=1,r=360,e=0,n=100,o=0,i=100)=>{let s=p(t,r),c=p(e,n),x=p(o,i);return[s,c,x]},ie=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,i=Math.min(e,n,o),s=Math.max(e,n,o),c=tt(e,n,o,i,s),x=it(e,n,o,i,s,c),a=st(e,n,o,i,s);return a>360||x>100||c>100?[0,0,100]:a<0||x<0||c<0?[0,0,0]:[u(a,r),u(x,r),u(c,r)]},C=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),se=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let m=o*255;return[m,m,m]}let i=o<.5?o*(1+n):o+n-o*n,s=2*o-i,c=e+.333,x=e,a=e-.333,M=C(i,s,c),f=C(i,s,x),l=C(i,s,a);return M*=255,f*=255,l*=255,M>255||f>255||l>255?[255,255,255]:M<0||f<0||l<0?[0,0,0]:[u(M,r),u(f,r),u(l,r)]},ce=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,i,s;if(e===0)o=i=s=n;else{let x=(f,l,m)=>(m<0&&(m+=1),m>1&&(m-=1),m<.16666666666666666?f+(l-f)*6*m:m<.5?l:m<.6666666666666666?f+(l-f)*(.6666666666666666-m)*6:f),a=n<.5?n*(1+e):n+e-n*e,M=2*n-a;o=x(M,a,r+1/3),i=x(M,a,r),s=x(M,a,r-1/3)}let c=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${c(o)}${c(i)}${c(s)}`},ue=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=_(e,360)),[e,t[1],t[2]]},xe=(t,r=10)=>{let e=t[2];return e+=r,e>100&&(e=100),e<0&&(e+=100),[t[0],t[1],e]},ae=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]},tt=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),it=(t,r,e,n=void 0,o=void 0,i=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(i=i===void 0?tt(t,r,e):i,(i<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),T=t=>(t*=60,t<0&&(t+=360),t*100/360),st=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:o===t?T((r-e)/(o-n)):o===r?T(2+(e-t)/(o-n)):o===e?T(4+(t-r)/(o-n)):0);export{ot as circleMovement,kr as circleMovementAfterMouse,P as convertRange,ht as degreesToRadians,Rr as doRangesOverlap,Jr as ellipseMovement,qr as equationSystem2,Gr as equationSystem3,Fr as equationSystemN,st as getHue,tt as getLuminance,p as getRandom,Sr as getRandomBoolean,ne as getRandomGrayscaleHSLColor,Pr as getRandomHSLColor,te as getRandomHSLColorWithHue,ee as getRandomHSLColorWithLightness,re as getRandomHSLColorWithSaturation,oe as getRandomHSLColorWithinRanges,nt as getRandomInt,wr as getRandomItemFromArray,it as getSaturation,ue as getShiftedHue,xe as getShiftedLightness,ae as getShiftedSaturation,g as getV2Angle,Mt as getV2AngleBetween,lt as getV3AngleBetween,z as getVNAngleBetween,ce as hslToHex,se as hslToRgb,tr as identity2,rr as identity3,er as identity4,nr as identityN,Dr as isNumber,vr as isSingularMatrix,Ur as lissajousCurve,U as m2Adjugate,cr as m2AppendRow,$ as m2DeepCopy,K as m2Determinant,rt as m2DivideScalar,Y as m2Inverse,Qt as m2MulScalar,ar as m2PrependRow,Ut as m2Reset,Wt as m2Sub,Gt as m2Sum,Jt as m2Transpose,Yt as m2x2,yr as m3Adjugate,ur as m3AppendRow,Q as m3DeepCopy,gr as m3Determinant,kt as m3DivideScalar,Z as m3Inverse,Ot as m3MulScalar,pr as m3PrependRow,Xt as m3Reset,$t as m3Sub,Ft as m3Sum,Kt as m3Transpose,Zt as m3x3,_t as m4x4,X as mAdjugate,or as mAppendCol,sr as mAppendRow,h as mDeepCopy,hr as mDelFirstColumn,fr as mDelFirstRow,O as mDelLastColumn,mr as mDelLastRow,L as mDeterminant,D as mDivideScalar,Vr as mEqual,lr as mGetColumn,Mr as mGetFirstColumn,k as mGetLastColumn,H as mInverse,J as mMinor,br as mMul,F as mMulScalar,w as mMulVector,Pt as mNxM,ir as mPrependCol,xr as mPrependRow,W as mReset,G as mSub,q as mSum,S as mTranspose,_ as mod,ft as radiansToDegrees,ie as rgbToHsl,u as setDecimalPlaces,mt as setV2Angle,Kr as sineWaveMovement,Cr as stringToNumber,At as v2,Ar as v2CubicBezierCurve,wt as v2DivideScalar,Tt as v2DotProduct,A as v2Length,dt as v2MulScalar,Ht as v2Normalize,Er as v2QuadraticBezierCurve,Dt as v2SetLength,j as v2Sub,yt as v2Sum,jt as v3,zt as v3CrossProduct,jr as v3CubicBezierCurve,Lt as v3DivideScalar,Et as v3DotProduct,Rt as v3Length,St as v3MulScalar,Ct as v3Normalize,zr as v3QuadraticBezierCurve,It as v3Sub,vt as v3Sum,Nt as v4,d as vDivideScalar,b as vDotProduct,B as vEqual,R as vLength,I as vMulScalar,N as vN,V as vNormalize,v as vSub,y as vSum};
//# sourceMappingURL=tc-math.esm.js.map
