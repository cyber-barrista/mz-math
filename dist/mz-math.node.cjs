/* 
mzMath v3.0.18
A collection of TypeScript-based math helpers.
https://github.com/mzusin/mz-math
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md       
Copyright (c) 2023-present, Miriam Zusin          
*/
var Q=Object.defineProperty;var rr=Object.getOwnPropertyDescriptor;var er=Object.getOwnPropertyNames;var nr=Object.prototype.hasOwnProperty;var V=Math.pow;var or=(t,r)=>{for(var e in r)Q(t,e,{get:r[e],enumerable:!0})},ir=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of er(r))!nr.call(t,o)&&o!==e&&Q(t,o,{get:()=>r[o],enumerable:!(n=rr(r,o))||n.enumerable});return t};var cr=t=>ir(Q({},"__esModule",{value:!0}),t);var uo={};or(uo,{animate:()=>ro,arithmeticSequenceSum:()=>so,circleCollide:()=>Pn,circleMovement:()=>Dt,circleMovementAfterMouse:()=>Ln,convertRange:()=>j,convexPolygonsCollide:()=>to,degreesToRadians:()=>mr,doRangesOverlap:()=>sr,dxArcCos:()=>yn,dxArcCot:()=>dn,dxArcSin:()=>Vn,dxArcTan:()=>In,dxCos:()=>Mn,dxCot:()=>hn,dxPolynomial:()=>fn,dxSin:()=>pn,dxTan:()=>bn,dxV2CubicBezierCurve:()=>ht,dxV2QuadraticBezierCurve:()=>Mt,dxV3CubicBezierCurve:()=>Vt,dxV3QuadraticBezierCurve:()=>bt,ellipseMovement:()=>Qt,ellipseMovementAfterMouse:()=>qn,getAnglesDistance:()=>Rt,getAnglesSub:()=>C,getCircleCircumference:()=>eo,getEllipseCircumference:()=>no,getLinearEquationBy2Points:()=>Sn,getRandom:()=>h,getRandomBoolean:()=>xn,getRandomGrayscaleHSLColor:()=>Gn,getRandomHSLColor:()=>lt,getRandomHSLColorWithHue:()=>On,getRandomHSLColorWithLightness:()=>Cn,getRandomHSLColorWithSaturation:()=>jn,getRandomHSLColorWithinRanges:()=>kn,getRandomHexColor:()=>Yn,getRandomInt:()=>Xt,getRandomItemFromArray:()=>an,getRandomRGBColor:()=>Xn,getShiftedHue:()=>Zn,getShiftedLightness:()=>Wn,getShiftedSaturation:()=>_n,getSquareInCircleSide:()=>io,getV2Angle:()=>T,getV2AngleBetween:()=>fr,getV2AngleInEllipse:()=>xr,getV3AngleBetween:()=>pr,getVNAngleBetween:()=>St,guid:()=>Jn,hslToHex:()=>Wt,hslToRgb:()=>Zt,identity2:()=>Zr,identity3:()=>Wr,identity4:()=>_r,identityN:()=>Jr,isAngleBetween:()=>Mr,isAngleInCircleArc:()=>oo,isClockwise:()=>Z,isNumber:()=>z,isSingularMatrix:()=>Me,linearEquation:()=>$,linearEquationSystem2:()=>ln,linearEquationSystem3:()=>vn,linearEquationSystemN:()=>gn,lissajousCurve:()=>Nn,m2Adjugate:()=>xt,m2AppendRow:()=>te,m2DeepCopy:()=>nt,m2Determinant:()=>ut,m2DivideScalar:()=>zt,m2Inverse:()=>mt,m2MulScalar:()=>Nr,m2PrependRow:()=>ne,m2ReflectionOrigin:()=>Qe,m2ReflectionOriginH:()=>Fe,m2ReflectionX:()=>Je,m2ReflectionXH:()=>Ke,m2ReflectionY:()=>Ue,m2ReflectionYH:()=>Pe,m2ReflectionYmX:()=>_e,m2Reset:()=>Cr,m2RotateAroundPointH:()=>ve,m2Rotation:()=>Ht,m2RotationAroundPointH:()=>Tt,m2RotationH:()=>pt,m2Scale:()=>qt,m2ScaleAtPointH:()=>Ee,m2ScaleAtPointHMatrix:()=>Lt,m2ScaleH:()=>At,m2ScaleX:()=>Ae,m2ScaleXH:()=>Ne,m2ScaleY:()=>ke,m2ScaleYH:()=>De,m2ShearingX:()=>un,m2ShearingY:()=>sn,m2Sub:()=>qr,m2Sum:()=>$r,m2ToCSS:()=>be,m2Translation:()=>Ie,m2TranslationH:()=>O,m2Transpose:()=>Or,m2hToCSS:()=>he,m2hToCSS3d:()=>Ve,m2x2:()=>kr,m3Adjugate:()=>pe,m3AppendRow:()=>re,m3DeepCopy:()=>ot,m3Determinant:()=>fe,m3DivideScalar:()=>Yr,m3Inverse:()=>ft,m3MulScalar:()=>Xr,m3PrependRow:()=>oe,m3ReflectionOrigin:()=>Ze,m3ReflectionOriginH:()=>We,m3ReflectionXY:()=>on,m3ReflectionXYH:()=>cn,m3ReflectionXZ:()=>en,m3ReflectionXZH:()=>nn,m3ReflectionYZ:()=>tn,m3ReflectionYZH:()=>rn,m3Reset:()=>Gr,m3RotationX:()=>Bt,m3RotationXH:()=>Re,m3RotationY:()=>Et,m3RotationYH:()=>ze,m3RotationZ:()=>$t,m3RotationZH:()=>Te,m3Scale:()=>Nt,m3ScaleH:()=>Le,m3ScaleX:()=>Xe,m3ScaleXH:()=>Ye,m3ScaleY:()=>Oe,m3ScaleYH:()=>je,m3ScaleZ:()=>Ce,m3ScaleZH:()=>Ge,m3Sub:()=>Ar,m3Sum:()=>Lr,m3Translation:()=>de,m3TranslationH:()=>le,m3Transpose:()=>jr,m3hToCSS3d:()=>ye,m3x3:()=>Dr,m4x4:()=>Qr,mAdjugate:()=>at,mAppendCol:()=>Kr,mAppendRow:()=>Pr,mDeepCopy:()=>I,mDelFirstColumn:()=>se,mDelFirstRow:()=>ce,mDelLastColumn:()=>it,mDelLastRow:()=>ie,mDeterminant:()=>Y,mDivideScalar:()=>k,mEqual:()=>ae,mGetColumn:()=>xe,mGetFirstColumn:()=>ue,mGetLastColumn:()=>ct,mInverse:()=>D,mMinor:()=>st,mMul:()=>E,mMulScalar:()=>rt,mMulVector:()=>b,mNxM:()=>Fr,mPrependCol:()=>Ur,mPrependRow:()=>ee,mReset:()=>et,mSub:()=>tt,mSum:()=>P,mTranspose:()=>X,mod:()=>y,naturalNumbersSequenceSum:()=>co,newId:()=>Kn,percentToAngle:()=>br,polarToCartesian:()=>ur,radiansToDegrees:()=>ar,rectCollide:()=>Un,rgbToHsl:()=>Fn,setDecimalPlaces:()=>c,setV2Angle:()=>F,sineWaveMovement:()=>An,stringToNumber:()=>mn,v2:()=>Hr,v2CubicBezierBBox:()=>$n,v2CubicBezierCurve:()=>Ot,v2CubicBezierCurveExtrema:()=>kt,v2CubicBezierCurveNormal:()=>Bn,v2CubicBezierCurveTangent:()=>Ct,v2Distance:()=>Sr,v2DivideScalar:()=>dr,v2DotProduct:()=>_,v2FromPolarCoords:()=>Er,v2GetNormal:()=>U,v2Length:()=>W,v2MulScalar:()=>Ir,v2Normalize:()=>B,v2QuadraticBezierBBox:()=>En,v2QuadraticBezierCurve:()=>Yt,v2QuadraticBezierCurveExtrema:()=>Gt,v2QuadraticBezierCurveNormal:()=>Tn,v2QuadraticBezierCurveTangent:()=>jt,v2Rotate:()=>ge,v2RotateH:()=>Se,v2Scale:()=>$e,v2SetLength:()=>wt,v2Sub:()=>S,v2Sum:()=>hr,v3:()=>Tr,v3CrossProduct:()=>zr,v3CubicBezierCurve:()=>wn,v3CubicBezierCurveTangent:()=>Hn,v3Distance:()=>Rr,v3DivideScalar:()=>lr,v3DotProduct:()=>wr,v3Length:()=>vr,v3MulScalar:()=>G,v3Normalize:()=>l,v3QuadraticBezierCurve:()=>Rn,v3QuadraticBezierCurveTangent:()=>zn,v3RotateX:()=>we,v3RotateY:()=>He,v3RotateZ:()=>Be,v3Scale:()=>qe,v3Sub:()=>yr,v3Sum:()=>Vr,v4:()=>Br,vDistance:()=>gr,vDivideScalar:()=>N,vDotProduct:()=>v,vEqual:()=>K,vLength:()=>R,vMulScalar:()=>A,vN:()=>J,vNormalize:()=>H,vSub:()=>d,vSum:()=>q});module.exports=cr(uo);var c=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=V(10,r);return Math.round(t*e)/e};var y=(t,r)=>(t%r+r)%r,j=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,sr=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),z=t=>!isNaN(parseFloat(t))&&isFinite(t),ur=(t,r,e,n=1/0)=>{let[o,i]=t,[s,u]=r;return[c(o+s*Math.cos(e),n),c(i+u*Math.sin(e),n)]};var T=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return c(e,r)},xr=(t,r,e=1/0)=>{let n=Math.atan2(t[1]/r[1],t[0]/r[0]);return c(n,e)},F=(t,r,e=1/0)=>{let n=W(t);return[c(Math.cos(r)*n,e),c(Math.sin(r)*n,e)]},ar=(t,r=1/0)=>{let e=t*(180/Math.PI);return c(e,r)},mr=(t,r=1/0)=>{let e=t*(Math.PI/180);return c(e,r)},St=(t,r,e=1/0)=>{let n=H(t),o=H(r),i=v(n,o),s=Math.acos(i);return c(s,e)},fr=(t,r,e=1/0)=>{let n=d(t,r),o=Math.atan2(n[1],n[0]);return c(o,e)},pr=(t,r,e=1/0)=>St(t,r,e),Mr=(t,r,e)=>{let n=C(r,e),o=C(r,t),i=C(e,t),s=o+i;return Math.abs(s-n)<=.001},Z=(t,r,e=0)=>(t=t%360,r=r%360,t<e&&(t+=360),r<e&&(r+=360),r>=t),C=(t,r,e=1/0)=>{let n=Math.abs(y(t,360)-y(r,360));return c(n<=180?n:360-n,e)},Rt=(t,r,e=0,n=1/0)=>(t=t%360,r=r%360,t<e&&(t+=360),r<e&&(r+=360),Z(t,r,e)?c((r-t+360)%360,n):c((t-r+360)%360,n)),br=(t,r,e,n=0)=>{t<0&&(t=0),t>100&&(t=100);let o=Rt(r,e,n);return Z(r,e,n)?y(n+t*o/100,360):y(n-t*o/100,360)};var q=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]+r[o],e));return n},hr=(t,r,e=1/0)=>q(t,r,e),Vr=(t,r,e=1/0)=>q(t,r,e),d=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]-r[o],e));return n},S=(t,r,e=1/0)=>d(t,r,e),yr=(t,r,e=1/0)=>d(t,r,e),A=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]*r,e));return n},Ir=(t,r,e=1/0)=>A(t,r,e),G=(t,r,e=1/0)=>A(t,r,e),N=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]/r,e));return n},dr=(t,r,e=1/0)=>N(t,r,e),lr=(t,r,e=1/0)=>N(t,r,e),R=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return c(Math.sqrt(e),r)},W=(t,r=1/0)=>R(t,r),vr=(t,r=1/0)=>R(t,r),wt=(t,r,e=1/0)=>{let n=T(t);return[c(Math.cos(n)*r,e),c(Math.sin(n)*r,e)]},gr=(t,r,e=1/0)=>{let n=d(t,r);return R(n,e)},Sr=(t,r,e=1/0)=>{let n=d(t,r);return R(n,e)},Rr=(t,r,e=1/0)=>{let n=d(t,r);return R(n,e)},H=(t,r=1/0)=>{let e=R(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:c(t[o]/e,r));return n},B=(t,r=1/0)=>H(t,r),l=(t,r=1/0)=>H(t,r),v=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return c(n,e)},_=(t,r,e=1/0)=>v(t,r,e),wr=(t,r,e=1/0)=>v(t,r,e),zr=(t,r,e=1/0)=>[c(t[1]*r[2]-t[2]*r[1],e),c(t[2]*r[0]-t[0]*r[2],e),c(t[0]*r[1]-t[1]*r[0],e)],Hr=(t=0)=>[t,t],Tr=(t=0)=>[t,t,t],Br=(t=0)=>[t,t,t,t],J=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},Er=(t,r)=>{let e=[0,0];return e=wt(e,t),F(e,r)},K=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0},U=(t,r,e=1/0)=>{let n=S(r,t);return[-c(n[1],e),c(n[0],e)]};var P=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(q(t[o],r[o],e));return n},$r=(t,r,e=1/0)=>P(t,r,e),Lr=(t,r,e=1/0)=>P(t,r,e),tt=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(d(t[o],r[o],e));return n},qr=(t,r,e=1/0)=>tt(t,r,e),Ar=(t,r,e=1/0)=>tt(t,r,e),rt=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(A(o,r,e));return n},Nr=(t,r,e=1/0)=>rt(t,r,e),Xr=(t,r,e=1/0)=>rt(t,r,e),k=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(N(o,r,e));return n},zt=(t,r,e=1/0)=>k(t,r,e),Yr=(t,r,e=1/0)=>k(t,r,e),X=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Or=t=>X(t),jr=t=>X(t),et=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let s=0;s<o;s++)i.push(r);e.push(i)}return e},Cr=(t,r=0)=>et(t,r),Gr=(t,r=0)=>et(t,r),kr=(t=0)=>[[t,t],[t,t]],Dr=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],Qr=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],Fr=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(J(r,e));return n},Zr=()=>[[1,0],[0,1]],Wr=()=>[[1,0,0],[0,1,0],[0,0,1]],_r=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Jr=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},I=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},nt=t=>I(t),ot=t=>I(t),Kr=(t,r)=>{if(t.length<=0)return[];let e=I(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},Ur=(t,r)=>{if(t.length<=0)return[];let e=I(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},Pr=(t,r)=>{let e=I(t);return e.push(r),e},te=(t,r)=>{let e=nt(t);return e.push(r),e},re=(t,r)=>{let e=ot(t);return e.push(r),e},ee=(t,r)=>{let e=I(t);return e.unshift(r),e},ne=(t,r)=>{let e=nt(t);return e.unshift(r),e},oe=(t,r)=>{let e=ot(t);return e.unshift(r),e},ie=t=>{if(t.length<=0)return[];let r=I(t);return r.pop(),r},ce=t=>{if(t.length<=0)return[];let r=I(t);return r.shift(),r},it=t=>{if(t.length<=0)return[];let r=I(t);for(let e=0;e<r.length;e++)r[e].pop();return r},se=t=>{if(t.length<=0)return[];let r=I(t);for(let e=0;e<r.length;e++)r[e].shift();return r},ue=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},ct=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},xe=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},E=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=X(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let u=0;u<o.length;u++){let x=o[u],a=v(s,x,e);n[i].push(a)}}return n},b=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=v(t[o],r,e);return n},ae=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!K(t[e],r[e]))return!1;return!0},me=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let s=[];for(let u=0;u<n;u++)u!==e&&s.push(t[i][u]);o.push(s)}return o},st=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=me(t,r,e);return Y(o)},Y=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return ut(t);let e=0;for(let n=0;n<r;n++){let o=st(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},ut=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},fe=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return Y(t)},xt=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},pe=t=>at(t),at=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return xt(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let s=st(t,n,i),u=Math.pow(-1,n+i);o.push(u*s)}e.push(o)}return X(e)},Me=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return Y(t)===0},mt=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=ut(t);if(e===0)return null;let n=xt(t);return n===null?null:zt(n,e,r)},ft=(t,r=1/0)=>D(t,r),D=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=Y(t),o=at(t);return o===null?null:k(o,n,r)};var be=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1];return`matrix(${r}, ${e}, ${n}, ${o}, 0, 0)`},he=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],i=t[0][2],s=t[1][2];return`matrix(${r}, ${e}, ${n}, ${o}, ${i}, ${s})`},Ve=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],i=t[0][2],s=t[1][2];return`matrix3d(${r}, ${e}, 0, 0, ${n}, ${o}, 0, 0, 0, 0, 1, 0, ${i}, ${s}, 0, 1)`},ye=t=>`matrix3d(
        ${t[0][0]}, ${t[0][1]}, ${t[0][2]}, ${t[0][3]},
        ${t[1][0]}, ${t[1][1]}, ${t[1][2]}, ${t[1][3]},
        ${t[2][0]}, ${t[2][1]}, ${t[2][2]}, ${t[2][3]},
        ${t[3][0]}, ${t[3][1]}, ${t[3][2]}, ${t[3][3]}
    )`,Ie=(t,r=1/0)=>[[1,0],[0,1],[c(t[0],r),c(t[1],r)]],de=(t,r=1/0)=>[[1,0,0],[0,1,0],[0,0,1],[c(t[0],r),c(t[1],r),c(t[2],r)]],O=(t,r=1/0)=>[[1,0,c(t[0],r)],[0,1,c(t[1],r)],[0,0,1]],le=(t,r=1/0)=>[[1,0,0,c(t[0],r)],[0,1,0,c(t[1],r)],[0,0,1,c(t[2],r)],[0,0,0,1]],Ht=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o],[o,n]]:[[n,o],[-o,n]]},pt=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},Tt=(t,r,e=!0,n=1/0)=>{let o=O(r,n),i=pt(t,e,n),s=O(G(r,-1),n),u=E(o,i);return E(u,s)},ve=(t,r,e,n=!0,o=1/0)=>{let i=Tt(t,r,n,o);return b(i,e)},ge=(t,r,e=!0,n=1/0)=>{let o=B(r);return b(Ht(t,e,n),o)},Se=(t,r,e=!0,n=1/0)=>{let o=l(r);return b(pt(t,e,n),o)},Bt=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[1,0,0],[0,n,-o],[0,o,n]]:[[1,0,0],[0,n,o],[0,-o,n]]},Re=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[1,0,0,0],[0,n,-o,0],[0,o,n,0],[0,0,0,1]]:[[1,0,0,0],[0,n,o,0],[0,-o,n,0],[0,0,0,1]]},we=(t,r,e=!0,n=1/0)=>{let o=l(r);return b(Bt(t,e,n),o)},Et=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,0,o],[0,1,0],[-o,0,n]]:[[n,0,-o],[0,1,0],[o,0,n]]},ze=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,0,o,0],[0,1,0,0],[-o,0,n,0],[0,0,0,1]]:[[n,0,-o,0],[0,1,0,0],[o,0,n,0],[0,0,0,1]]},He=(t,r,e=!0,n=1/0)=>{let o=l(r);return b(Et(t,e,n),o)},$t=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},Te=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0,0],[o,n,0,0],[0,0,1,0],[0,0,0,1]]:[[n,o,0,0],[-o,n,0,0],[0,0,1,0],[0,0,0,1]]},Be=(t,r,e=!0,n=1/0)=>{let o=l(r);return b($t(t,e,n),o)},Lt=(t,r,e=1/0)=>{let n=O(r,e),o=At(t),i=O(G(r,-1),e),s=E(n,o);return E(s,i)},Ee=(t,r,e,n=1/0)=>{let o=Lt(t,r,n);return b(o,e)},qt=t=>[[t[0],0],[0,t[1]]],$e=(t,r)=>b(qt(t),r),At=t=>[[t[0],0,0],[0,t[1],0],[0,0,1]],Nt=t=>[[t[0],0,0],[0,t[1],0],[0,0,t[2]]],Le=t=>[[t[0],0,0,0],[0,t[1],0,0],[0,0,t[2],0],[0,0,0,1]],qe=(t,r)=>b(Nt(t),r),Ae=t=>[[t,0],[0,1]],Ne=t=>[[t,0,0],[0,1,0],[0,0,1]],Xe=t=>[[t,0,0],[0,1,0],[0,0,1]],Ye=t=>[[t,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Oe=t=>[[1,0,0],[0,t,0],[0,0,1]],je=t=>[[1,0,0,0],[0,t,0,0],[0,0,1,0],[0,0,0,1]],Ce=t=>[[1,0,0],[0,1,0],[0,0,t]],Ge=t=>[[1,0,0,0],[0,1,0,0],[0,0,t,0],[0,0,0,1]],ke=t=>[[1,0],[0,t]],De=t=>[[1,0,0],[0,t,0],[0,0,1]],Qe=()=>[[-1,0],[0,-1]],Fe=()=>[[-1,0,0],[0,-1,0],[0,0,1]],Ze=()=>[[-1,0,0],[0,-1,0],[0,0,-1]],We=()=>[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],_e=()=>[[0,-1],[-1,0]],Je=()=>[[1,0],[0,-1]],Ke=()=>[[1,0,0],[0,-1,0],[0,0,1]],Ue=()=>[[-1,0],[0,1]],Pe=()=>[[-1,0,0],[0,1,0],[0,0,1]],tn=()=>[[-1,0,0],[0,1,0],[0,0,1]],rn=()=>[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],en=()=>[[1,0,0],[0,-1,0],[0,0,1]],nn=()=>[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],on=()=>[[1,0,0],[0,1,0],[0,0,-1]],cn=()=>[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],sn=t=>[[1,t],[0,1]],un=t=>[[1,0],[t,1]];var h=(t,r,e=1/0)=>c(Math.random()*(r-t)+t,e),Xt=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),xn=()=>Math.random()<.5,an=t=>{let r=Xt(0,t.length-1);return t[r]};var mn=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var fn=(t,r,e=1/0)=>{let n=0;for(let o of r){if(o.length!==2)return NaN;let i=o[0],s=o[1];n+=i*s*Math.pow(t,s-1)}return c(n,e)},Mt=(t,r,e,n,o=1/0)=>{let i=-2*(1-t),s=2-4*t,u=2*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o)]},bt=(t,r,e,n,o=1/0)=>{let i=-2*(1-t),s=2-4*t,u=2*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o),c(i*r[2]+s*e[2]+u*n[2],o)]},ht=(t,r,e,n,o,i=1/0)=>{let s=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i)]},Vt=(t,r,e,n,o,i=1/0)=>{let s=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i),c(s*r[2]+u*e[2]+x*n[2]+a*o[2],i)]},pn=(t,r=1/0)=>c(Math.cos(t),r),Mn=(t,r=1/0)=>c(-Math.sin(t),r),bn=(t,r=1/0)=>c(1/V(Math.cos(t),2),r),hn=(t,r=1/0)=>c(-1/V(Math.sin(t),2),r),Vn=(t,r=1/0)=>c(1/Math.sqrt(1-V(t,2)),r),yn=(t,r=1/0)=>c(-1/Math.sqrt(1-V(t,2)),r),In=(t,r=1/0)=>c(1/(1+V(t,2)),r),dn=(t,r=1/0)=>c(-1/(1+V(t,2)),r);var $=(t,r=1/0)=>{let e=t[0],n=t[1],i=t[2]-n;return e===0&&i===0?1/0:e===0?NaN:c(i/e,r)},ln=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=mt(n);if(o===null)return null;let i=[t[2],r[2]];return b(o,i,e)},vn=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=ft(o);if(i===null)return null;let s=[t[3],r[3],e[3]];return b(i,s,n)},gn=(t,r=1/0)=>{if(t.length<=0)return null;let e=it(t),n=D(e);if(n===null)return null;let o=ct(t);return b(n,o,r)},Sn=(t,r)=>{let[e,n]=S(r,t),[o,i]=t;if(e===0)return{slope:void 0,xIntercept:o,yIntercept:void 0,formula:`x = ${o}`};let s=n/e,u=i-s*o,x="";return s===0?x=`y = ${u}`:(x=`y = ${s===1?"":s}x`,u!==0&&(x+=` ${u<0?"-":"+"} ${Math.abs(u)}`)),{slope:s,xIntercept:void 0,yIntercept:u,formula:x}};var yt=(t,r=1/0)=>{let e=t[0],n=t[1],o=t[2],i=t[3];if(e===0){let M=$([n,o,i],r);return z(M)?[M]:[]}let s=o-i,u=n*n-4*e*s;if(u<0)return[];if(u===0)return[c(-n/(2*e),r)];let x=2*e,a=Math.sqrt(u);return[c((-n+a)/x,r),c((-n-a)/x,r)]};var Yt=(t,r,e,n,o=1/0)=>{let i=Math.pow(1-t,2),s=(1-t)*2*t,u=t*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o)]},Rn=(t,r,e,n,o=1/0)=>{let i=Math.pow(1-t,2),s=(1-t)*2*t,u=t*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o),c(i*r[2]+s*e[2]+u*n[2],o)]},Ot=(t,r,e,n,o,i=1/0)=>{let s=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i)]},wn=(t,r,e,n,o,i=1/0)=>{let s=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i),c(s*r[2]+u*e[2]+x*n[2]+a*o[2],i)]},jt=(t,r,e,n,o=1/0)=>{let i=Mt(t,r,e,n);return B(i,o)},zn=(t,r,e,n,o=1/0)=>{let i=bt(t,r,e,n);return l(i,o)},Ct=(t,r,e,n,o,i=1/0)=>{let s=ht(t,r,e,n,o);return B(s,i)},Hn=(t,r,e,n,o,i=1/0)=>{let s=Vt(t,r,e,n,o);return l(s,i)},Tn=(t,r,e,n,o=1/0)=>{let i=jt(t,r,e,n,o);return[-i[1],i[0]]},Bn=(t,r,e,n,o,i=1/0)=>{let s=Ct(t,r,e,n,o,i);return[-s[1],s[0]]},Gt=(t,r,e,n=1/0)=>{let o=2*t[0]-4*r[0]+2*e[0],i=-2*t[0]+2*r[0],u=$([o,i,0],n),x=2*t[1]-4*r[1]+2*e[1],a=-2*t[1]+2*r[1],p=$([x,a,0],n),m=[];return z(u)&&m.push(u),z(p)&&m.push(p),m},kt=(t,r,e,n,o=1/0)=>{let i=-3*t[0]+9*r[0]-9*e[0]+3*n[0],s=6*t[0]-12*r[0]+6*e[0],u=-3*t[0]+3*r[0],x=[i,s,u,0],a=-3*t[1]+9*r[1]-9*e[1]+3*n[1],M=6*t[1]-12*r[1]+6*e[1],p=-3*t[1]+3*r[1],m=[a,M,p,0],f=yt(x,o).filter(g=>g>=0&&g<=1),L=yt(m,o).filter(g=>g>=0&&g<=1);return[...f,...L].length===2?[...f,...L]:null},En=(t,r,e,n=1/0)=>{let o=Gt(t,r,e),i=1/0,s=1/0,u=-1/0,x=-1/0;for(let a of o){let M=Yt(a,t,r,e),p=M[0],m=M[1];i=Math.min(i,p),u=Math.max(u,p),s=Math.min(s,m),x=Math.max(x,m)}return i=c(Math.min(i,t[0],e[0]),n),u=c(Math.max(u,t[0],e[0]),n),s=c(Math.min(s,t[1],e[1]),n),x=c(Math.max(x,t[1],e[1]),n),{x:i,y:s,w:Math.abs(u-i),h:Math.abs(x-s),x2:u,y2:x}},$n=(t,r,e,n,o=1/0)=>{let i=kt(t,r,e,n)||[],s=1/0,u=1/0,x=-1/0,a=-1/0;for(let M of i){let p=Ot(M,t,r,e,n),m=p[0],f=p[1];s=Math.min(s,m!=null?m:1/0),x=Math.max(x,m!=null?m:-1/0),u=Math.min(u,f!=null?f:1/0),a=Math.max(a,f!=null?f:-1/0)}return s=c(Math.min(s,t[0],n[0]),o),x=c(Math.max(x,t[0],n[0]),o),u=c(Math.min(u,t[1],n[1]),o),a=c(Math.max(a,t[1],n[1]),o),{x:s,y:u,w:Math.abs(x-s),h:Math.abs(a-u),x2:x,y2:a}};var Dt=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),Ln=(t,r,e)=>{let n=S(t,r),o=T(n);return o=j(o,0,Math.PI*2,0,Math.PI),Dt(r,o,e)},Qt=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),qn=(t,r,e)=>{let n=S(t,r),o=T(n);return o=j(o,0,Math.PI*2,0,Math.PI),Qt(r,o,e[0],e[1])},An=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},Nn=(t,r,e,n,o,i,s)=>[t*Math.cos(n*e-i),r*Math.cos(o*e-s)];var Xn=()=>{let t=lt();return Zt(t)},Yn=()=>{let t=lt();return Wt(t)},lt=()=>{let t=h(1,360),r=h(0,100),e=h(0,100);return[t,r,e]},On=t=>{let r=h(0,100),e=h(0,100);return[t,r,e]},jn=t=>{let r=h(1,360),e=h(0,100);return[r,t,e]},Cn=t=>{let r=h(1,360),e=h(0,100);return[r,e,t]},Gn=()=>[0,0,h(0,100)],kn=(t=1,r=360,e=0,n=100,o=0,i=100)=>{let s=h(t,r),u=h(e,n),x=h(o,i);return[s,u,x]},It=t=>(t*=60,t<0&&(t+=360),t*100/360),Dn=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:o===t?It((r-e)/(o-n)):o===r?It(2+(e-t)/(o-n)):o===e?It(4+(t-r)/(o-n)):0),Ft=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),Qn=(t,r,e,n=void 0,o=void 0,i=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(i=i===void 0?Ft(t,r,e):i,(i<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),Fn=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,i=Math.min(e,n,o),s=Math.max(e,n,o),u=Ft(e,n,o,i,s),x=Qn(e,n,o,i,s,u),a=Dn(e,n,o,i,s);return a>360||x>100||u>100?[0,0,100]:a<0||x<0||u<0?[0,0,0]:[c(a,r),c(x,r),c(u,r)]},dt=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),Zt=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let f=o*255;return[f,f,f]}let i=o<.5?o*(1+n):o+n-o*n,s=2*o-i,u=e+.333,x=e,a=e-.333,M=dt(i,s,u),p=dt(i,s,x),m=dt(i,s,a);return M*=255,p*=255,m*=255,M>255||p>255||m>255?[255,255,255]:M<0||p<0||m<0?[0,0,0]:[c(M,r),c(p,r),c(m,r)]},Wt=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,i,s;if(e===0)o=i=s=n;else{let x=(p,m,f)=>(f<0&&(f+=1),f>1&&(f-=1),f<.16666666666666666?p+(m-p)*6*f:f<.5?m:f<.6666666666666666?p+(m-p)*(.6666666666666666-f)*6:p),a=n<.5?n*(1+e):n+e-n*e,M=2*n-a;o=x(M,a,r+1/3),i=x(M,a,r),s=x(M,a,r-1/3)}let u=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${u(o)}${u(i)}${u(s)}`},Zn=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=y(e,360)),[e,t[1],t[2]]},Wn=(t,r=10)=>{let e=t[2];return e+=r,(e>100||e<0)&&(e=y(e,100)),[t[0],t[1],e]},_n=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]};var Jn=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=Math.random()*16|0;return(t=="x"?r:r&3|8).toString(16)}),Kn=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var Un=(t,r)=>t.x<=r.x+r.w&&t.x+t.w>=r.x&&t.y<=r.y+r.h&&t.h+t.y>=r.y,Pn=(t,r)=>{let e=Math.abs(t.cx-r.cx),n=Math.abs(t.cy-r.cy);return Math.sqrt(e*e+n*n)<=t.r+r.r},_t=t=>{let r=[];for(let e=0;e<t.length;e++){let n=y(e+1,t.length),o=[t[e],t[n]];r.push(o)}return r},to=(t,r)=>{let e=[];e.push(..._t(t)),e.push(..._t(r));for(let n of e){let o=U(n[0],n[1]),i=Jt(t,o),s=Jt(r,o);if(!(i.max>=s.min&&s.max>=i.min))return!1}return!0},Jt=(t,r)=>{let e=1/0,n=-1/0;for(let o of t){let i=_(o,r);e=Math.min(e,i),n=Math.max(n,i)}return{min:e,max:n}};var ro=t=>{let r=t.duration!==void 0?t.duration:1/0,e,n,o,i,s=!1,u,x=()=>{e=void 0,o=void 0,i=void 0,s=!1,n!==void 0&&window.cancelAnimationFrame(n)},a=()=>{x(),L()},M=()=>{s=!1},p=()=>{s=!0},m=w=>{e===void 0&&(e=w),o=w-e,s&&i!==w&&typeof t.callback=="function"&&t.callback(gt()),o<=r?(i=w,n=window.requestAnimationFrame(m)):x()},f=(w,tr)=>{a(),typeof t.resizeCallback=="function"&&t.resizeCallback(w,tr)},L=()=>{e=void 0,o=void 0,i=void 0,s=!0,t.restartOnResize&&window.ResizeObserver&&u===void 0?(u=new ResizeObserver(f),u.observe(document.body,{box:"border-box"})):n=window.requestAnimationFrame(m)},vt=()=>o,g=()=>s,Kt=()=>e,Ut=()=>{if(!(r===1/0||o===void 0))return o*100/r},Pt=()=>u,gt=()=>({start:L,stop:x,pause:M,resume:p,restart:a,isAnimating:g,getElapsedTime:vt,getStartTime:Kt,getPercent:Ut,getResizeObserver:Pt});return gt()};var eo=(t,r=1/0)=>c(2*Math.PI*t,r),no=(t,r,e=1/0)=>c(2*Math.PI*Math.sqrt((V(t,2)+V(r,2))/2),e),oo=(t,r,e)=>(t>r&&(r+=360),e>=t&&e<=r||e+360>=t&&e+360<=r),io=(t,r=1/0)=>c(t*2/Math.sqrt(2),r);var co=t=>t*(t+1)/2,so=(t,r,e)=>t/2*(2*r+(t-1)*e);0&&(module.exports={animate,arithmeticSequenceSum,circleCollide,circleMovement,circleMovementAfterMouse,convertRange,convexPolygonsCollide,degreesToRadians,doRangesOverlap,dxArcCos,dxArcCot,dxArcSin,dxArcTan,dxCos,dxCot,dxPolynomial,dxSin,dxTan,dxV2CubicBezierCurve,dxV2QuadraticBezierCurve,dxV3CubicBezierCurve,dxV3QuadraticBezierCurve,ellipseMovement,ellipseMovementAfterMouse,getAnglesDistance,getAnglesSub,getCircleCircumference,getEllipseCircumference,getLinearEquationBy2Points,getRandom,getRandomBoolean,getRandomGrayscaleHSLColor,getRandomHSLColor,getRandomHSLColorWithHue,getRandomHSLColorWithLightness,getRandomHSLColorWithSaturation,getRandomHSLColorWithinRanges,getRandomHexColor,getRandomInt,getRandomItemFromArray,getRandomRGBColor,getShiftedHue,getShiftedLightness,getShiftedSaturation,getSquareInCircleSide,getV2Angle,getV2AngleBetween,getV2AngleInEllipse,getV3AngleBetween,getVNAngleBetween,guid,hslToHex,hslToRgb,identity2,identity3,identity4,identityN,isAngleBetween,isAngleInCircleArc,isClockwise,isNumber,isSingularMatrix,linearEquation,linearEquationSystem2,linearEquationSystem3,linearEquationSystemN,lissajousCurve,m2Adjugate,m2AppendRow,m2DeepCopy,m2Determinant,m2DivideScalar,m2Inverse,m2MulScalar,m2PrependRow,m2ReflectionOrigin,m2ReflectionOriginH,m2ReflectionX,m2ReflectionXH,m2ReflectionY,m2ReflectionYH,m2ReflectionYmX,m2Reset,m2RotateAroundPointH,m2Rotation,m2RotationAroundPointH,m2RotationH,m2Scale,m2ScaleAtPointH,m2ScaleAtPointHMatrix,m2ScaleH,m2ScaleX,m2ScaleXH,m2ScaleY,m2ScaleYH,m2ShearingX,m2ShearingY,m2Sub,m2Sum,m2ToCSS,m2Translation,m2TranslationH,m2Transpose,m2hToCSS,m2hToCSS3d,m2x2,m3Adjugate,m3AppendRow,m3DeepCopy,m3Determinant,m3DivideScalar,m3Inverse,m3MulScalar,m3PrependRow,m3ReflectionOrigin,m3ReflectionOriginH,m3ReflectionXY,m3ReflectionXYH,m3ReflectionXZ,m3ReflectionXZH,m3ReflectionYZ,m3ReflectionYZH,m3Reset,m3RotationX,m3RotationXH,m3RotationY,m3RotationYH,m3RotationZ,m3RotationZH,m3Scale,m3ScaleH,m3ScaleX,m3ScaleXH,m3ScaleY,m3ScaleYH,m3ScaleZ,m3ScaleZH,m3Sub,m3Sum,m3Translation,m3TranslationH,m3Transpose,m3hToCSS3d,m3x3,m4x4,mAdjugate,mAppendCol,mAppendRow,mDeepCopy,mDelFirstColumn,mDelFirstRow,mDelLastColumn,mDelLastRow,mDeterminant,mDivideScalar,mEqual,mGetColumn,mGetFirstColumn,mGetLastColumn,mInverse,mMinor,mMul,mMulScalar,mMulVector,mNxM,mPrependCol,mPrependRow,mReset,mSub,mSum,mTranspose,mod,naturalNumbersSequenceSum,newId,percentToAngle,polarToCartesian,radiansToDegrees,rectCollide,rgbToHsl,setDecimalPlaces,setV2Angle,sineWaveMovement,stringToNumber,v2,v2CubicBezierBBox,v2CubicBezierCurve,v2CubicBezierCurveExtrema,v2CubicBezierCurveNormal,v2CubicBezierCurveTangent,v2Distance,v2DivideScalar,v2DotProduct,v2FromPolarCoords,v2GetNormal,v2Length,v2MulScalar,v2Normalize,v2QuadraticBezierBBox,v2QuadraticBezierCurve,v2QuadraticBezierCurveExtrema,v2QuadraticBezierCurveNormal,v2QuadraticBezierCurveTangent,v2Rotate,v2RotateH,v2Scale,v2SetLength,v2Sub,v2Sum,v3,v3CrossProduct,v3CubicBezierCurve,v3CubicBezierCurveTangent,v3Distance,v3DivideScalar,v3DotProduct,v3Length,v3MulScalar,v3Normalize,v3QuadraticBezierCurve,v3QuadraticBezierCurveTangent,v3RotateX,v3RotateY,v3RotateZ,v3Scale,v3Sub,v3Sum,v4,vDistance,vDivideScalar,vDotProduct,vEqual,vLength,vMulScalar,vN,vNormalize,vSub,vSum});
//# sourceMappingURL=mz-math.node.cjs.map
