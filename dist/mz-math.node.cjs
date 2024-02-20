/* 
mzMath v3.0.23
A collection of TypeScript-based math helpers.
https://github.com/mzusin/mz-math
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md       
Copyright (c) 2023-present, Miriam Zusin          
*/
var W=Object.defineProperty;var er=Object.getOwnPropertyDescriptor;var nr=Object.getOwnPropertyNames;var or=Object.prototype.hasOwnProperty;var V=Math.pow;var ir=(t,r)=>{for(var e in r)W(t,e,{get:r[e],enumerable:!0})},cr=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of nr(r))!or.call(t,o)&&o!==e&&W(t,o,{get:()=>r[o],enumerable:!(n=er(r,o))||n.enumerable});return t};var sr=t=>cr(W({},"__esModule",{value:!0}),t);var yo={};ir(yo,{animate:()=>so,arithmeticSequenceSum:()=>po,circleCollide:()=>io,circleMovement:()=>Qt,circleMovementAfterMouse:()=>qn,convertRange:()=>O,convexPolygonsCollide:()=>co,degreesToRadians:()=>fr,doRangesOverlap:()=>ur,dxArcCos:()=>yn,dxArcCot:()=>In,dxArcSin:()=>ln,dxArcTan:()=>dn,dxCos:()=>hn,dxCot:()=>Vn,dxPolynomial:()=>pn,dxSin:()=>Mn,dxTan:()=>bn,dxV2CubicBezierCurve:()=>yt,dxV2QuadraticBezierCurve:()=>Vt,dxV3CubicBezierCurve:()=>dt,dxV3QuadraticBezierCurve:()=>lt,ellipseMovement:()=>Zt,ellipseMovementAfterMouse:()=>An,getAnglesDistance:()=>zt,getAnglesSub:()=>j,getArithmeticMean:()=>Z,getCircleCircumference:()=>uo,getColorsDelta:()=>ro,getEllipseCircumference:()=>xo,getLinearEquationBy2Points:()=>wn,getMedian:()=>Mo,getMode:()=>ho,getRandom:()=>b,getRandomBoolean:()=>an,getRandomGrayscaleHSLColor:()=>jn,getRandomHSLColor:()=>St,getRandomHSLColorWithHue:()=>Dn,getRandomHSLColorWithLightness:()=>On,getRandomHSLColorWithSaturation:()=>Gn,getRandomHSLColorWithinRanges:()=>kn,getRandomHexColor:()=>Yn,getRandomInt:()=>Yt,getRandomItemFromArray:()=>mn,getRandomRGBColor:()=>Xn,getShiftedHue:()=>Un,getShiftedLightness:()=>Pn,getShiftedSaturation:()=>to,getSquareInCircleSide:()=>mo,getV2Angle:()=>T,getV2AngleBetween:()=>pr,getV2AngleInEllipse:()=>ar,getV3AngleBetween:()=>Mr,getVNAngleBetween:()=>Rt,getVariance:()=>bo,guid:()=>eo,hexToRgb:()=>Kn,hslToHex:()=>Kt,hslToRgb:()=>_t,identity2:()=>Wr,identity3:()=>_r,identity4:()=>Kr,identityN:()=>Jr,isAngleBetween:()=>hr,isAngleInCircleArc:()=>ao,isClockwise:()=>K,isNumber:()=>H,isSingularMatrix:()=>he,labToRgb:()=>Jn,linearEquation:()=>E,linearEquationSystem2:()=>vn,linearEquationSystem3:()=>gn,linearEquationSystemN:()=>Sn,lissajousCurve:()=>Cn,m2Adjugate:()=>ft,m2AppendRow:()=>re,m2DeepCopy:()=>ct,m2Determinant:()=>mt,m2DivideScalar:()=>Bt,m2Inverse:()=>Mt,m2MulScalar:()=>Cr,m2PrependRow:()=>oe,m2ReflectionOrigin:()=>Qe,m2ReflectionOriginH:()=>Ze,m2ReflectionX:()=>Je,m2ReflectionXH:()=>Ue,m2ReflectionY:()=>Pe,m2ReflectionYH:()=>tn,m2ReflectionYmX:()=>Ke,m2Reset:()=>Or,m2RotateAroundPointH:()=>ge,m2Rotation:()=>Tt,m2RotationAroundPointH:()=>Lt,m2RotationH:()=>bt,m2Scale:()=>Nt,m2ScaleAtPointH:()=>$e,m2ScaleAtPointHMatrix:()=>At,m2ScaleH:()=>Ct,m2ScaleX:()=>Ne,m2ScaleXH:()=>Ce,m2ScaleY:()=>ke,m2ScaleYH:()=>Fe,m2ShearingX:()=>xn,m2ShearingY:()=>un,m2Sub:()=>Ar,m2Sum:()=>Er,m2ToCSS:()=>be,m2Translation:()=>de,m2TranslationH:()=>D,m2Transpose:()=>Dr,m2hToCSS:()=>Ve,m2hToCSS3d:()=>le,m2x2:()=>kr,m3Adjugate:()=>Me,m3AppendRow:()=>ee,m3DeepCopy:()=>st,m3Determinant:()=>pe,m3DivideScalar:()=>Yr,m3Inverse:()=>ht,m3MulScalar:()=>Xr,m3PrependRow:()=>ie,m3ReflectionOrigin:()=>We,m3ReflectionOriginH:()=>_e,m3ReflectionXY:()=>cn,m3ReflectionXYH:()=>sn,m3ReflectionXZ:()=>nn,m3ReflectionXZH:()=>on,m3ReflectionYZ:()=>rn,m3ReflectionYZH:()=>en,m3Reset:()=>jr,m3RotationX:()=>$t,m3RotationXH:()=>Re,m3RotationY:()=>Et,m3RotationYH:()=>He,m3RotationZ:()=>qt,m3RotationZH:()=>Te,m3Scale:()=>Xt,m3ScaleH:()=>qe,m3ScaleX:()=>Xe,m3ScaleXH:()=>Ye,m3ScaleY:()=>De,m3ScaleYH:()=>Ge,m3ScaleZ:()=>Oe,m3ScaleZH:()=>je,m3Sub:()=>Nr,m3Sum:()=>qr,m3Translation:()=>Ie,m3TranslationH:()=>ve,m3Transpose:()=>Gr,m3hToCSS3d:()=>ye,m3x3:()=>Fr,m4x4:()=>Qr,mAdjugate:()=>pt,mAppendCol:()=>Ur,mAppendRow:()=>te,mDeepCopy:()=>y,mDelFirstColumn:()=>ue,mDelFirstRow:()=>se,mDelLastColumn:()=>ut,mDelLastRow:()=>ce,mDeterminant:()=>Y,mDivideScalar:()=>F,mEqual:()=>me,mGetColumn:()=>ae,mGetFirstColumn:()=>xe,mGetLastColumn:()=>xt,mInverse:()=>Q,mMinor:()=>at,mMul:()=>$,mMulScalar:()=>ot,mMulVector:()=>h,mNxM:()=>Zr,mPrependCol:()=>Pr,mPrependRow:()=>ne,mReset:()=>it,mSub:()=>nt,mSum:()=>et,mTranspose:()=>X,mlNormalize:()=>Vo,mlStandardize:()=>lo,mod:()=>l,naturalNumbersSequenceSum:()=>fo,newId:()=>no,percentToAngle:()=>br,polarToCartesian:()=>xr,radiansToDegrees:()=>mr,rectCollide:()=>oo,rgbToHex:()=>_n,rgbToHsl:()=>Wn,rgbToLab:()=>gt,setDecimalPlaces:()=>s,setV2Angle:()=>_,sineWaveMovement:()=>Nn,stringToNumber:()=>fn,v2:()=>Br,v2CubicBezierBBox:()=>En,v2CubicBezierCurve:()=>Gt,v2CubicBezierCurveExtrema:()=>Ft,v2CubicBezierCurveNormal:()=>Ln,v2CubicBezierCurveTangent:()=>jt,v2Distance:()=>wr,v2DivideScalar:()=>Ir,v2DotProduct:()=>U,v2FromPolarCoords:()=>$r,v2GetNormal:()=>rt,v2Length:()=>J,v2MulScalar:()=>dr,v2Normalize:()=>L,v2QuadraticBezierBBox:()=>$n,v2QuadraticBezierCurve:()=>Dt,v2QuadraticBezierCurveExtrema:()=>kt,v2QuadraticBezierCurveNormal:()=>Tn,v2QuadraticBezierCurveTangent:()=>Ot,v2Rotate:()=>Se,v2RotateH:()=>we,v2Scale:()=>Ee,v2SetLength:()=>Ht,v2Sub:()=>w,v2Sum:()=>Vr,v3:()=>Tr,v3CrossProduct:()=>Hr,v3CubicBezierCurve:()=>zn,v3CubicBezierCurveTangent:()=>Bn,v3Distance:()=>Rr,v3DivideScalar:()=>vr,v3DotProduct:()=>zr,v3Length:()=>gr,v3MulScalar:()=>k,v3Normalize:()=>v,v3QuadraticBezierCurve:()=>Rn,v3QuadraticBezierCurveTangent:()=>Hn,v3RotateX:()=>ze,v3RotateY:()=>Be,v3RotateZ:()=>Le,v3Scale:()=>Ae,v3Sub:()=>yr,v3Sum:()=>lr,v4:()=>Lr,vDistance:()=>Sr,vDivideScalar:()=>C,vDotProduct:()=>S,vEqual:()=>tt,vLength:()=>R,vMulScalar:()=>N,vN:()=>P,vNormalize:()=>B,vSub:()=>I,vSum:()=>A});module.exports=sr(yo);var s=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=V(10,r);return Math.round(t*e)/e};var l=(t,r)=>(t%r+r)%r,O=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,ur=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),H=t=>!isNaN(parseFloat(t))&&isFinite(t),xr=(t,r,e,n=1/0)=>{let[o,i]=t,[c,u]=r;return[s(o+c*Math.cos(e),n),s(i+u*Math.sin(e),n)]};var T=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return s(e,r)},ar=(t,r,e=1/0)=>{let n=Math.atan2(t[1]/r[1],t[0]/r[0]);return s(n,e)},_=(t,r,e=1/0)=>{let n=J(t);return[s(Math.cos(r)*n,e),s(Math.sin(r)*n,e)]},mr=(t,r=1/0)=>{let e=t*(180/Math.PI);return s(e,r)},fr=(t,r=1/0)=>{let e=t*(Math.PI/180);return s(e,r)},Rt=(t,r,e=1/0)=>{let n=B(t),o=B(r),i=S(n,o),c=Math.acos(i);return s(c,e)},pr=(t,r,e=1/0)=>{let n=I(t,r),o=Math.atan2(n[1],n[0]);return s(o,e)},Mr=(t,r,e=1/0)=>Rt(t,r,e),hr=(t,r,e)=>{let n=j(r,e),o=j(r,t),i=j(e,t),c=o+i;return Math.abs(c-n)<=.001},K=(t,r,e=0)=>(t=t%360,r=r%360,t<e&&(t+=360),r<e&&(r+=360),r>=t),j=(t,r,e=1/0)=>{let n=Math.abs(l(t,360)-l(r,360));return s(n<=180?n:360-n,e)},zt=(t,r,e=0,n=1/0)=>(t=t%360,r=r%360,t<e&&(t+=360),r<e&&(r+=360),K(t,r,e)?s((r-t+360)%360,n):s((t-r+360)%360,n)),br=(t,r,e,n=0)=>{t<0&&(t=0),t>100&&(t=100);let o=zt(r,e,n);return K(r,e,n)?l(n+t*o/100,360):l(n-t*o/100,360)};var A=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]+r[o],e));return n},Vr=(t,r,e=1/0)=>A(t,r,e),lr=(t,r,e=1/0)=>A(t,r,e),I=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]-r[o],e));return n},w=(t,r,e=1/0)=>I(t,r,e),yr=(t,r,e=1/0)=>I(t,r,e),N=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]*r,e));return n},dr=(t,r,e=1/0)=>N(t,r,e),k=(t,r,e=1/0)=>N(t,r,e),C=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]/r,e));return n},Ir=(t,r,e=1/0)=>C(t,r,e),vr=(t,r,e=1/0)=>C(t,r,e),R=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return s(Math.sqrt(e),r)},J=(t,r=1/0)=>R(t,r),gr=(t,r=1/0)=>R(t,r),Ht=(t,r,e=1/0)=>{let n=T(t);return[s(Math.cos(n)*r,e),s(Math.sin(n)*r,e)]},Sr=(t,r,e=1/0)=>{let n=I(t,r);return R(n,e)},wr=(t,r,e=1/0)=>{let n=I(t,r);return R(n,e)},Rr=(t,r,e=1/0)=>{let n=I(t,r);return R(n,e)},B=(t,r=1/0)=>{let e=R(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:s(t[o]/e,r));return n},L=(t,r=1/0)=>B(t,r),v=(t,r=1/0)=>B(t,r),S=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return s(n,e)},U=(t,r,e=1/0)=>S(t,r,e),zr=(t,r,e=1/0)=>S(t,r,e),Hr=(t,r,e=1/0)=>[s(t[1]*r[2]-t[2]*r[1],e),s(t[2]*r[0]-t[0]*r[2],e),s(t[0]*r[1]-t[1]*r[0],e)],Br=(t=0)=>[t,t],Tr=(t=0)=>[t,t,t],Lr=(t=0)=>[t,t,t,t],P=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},$r=(t,r)=>{let e=[0,0];return e=Ht(e,t),_(e,r)},tt=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0},rt=(t,r,e=1/0)=>{let n=w(r,t);return[-s(n[1],e),s(n[0],e)]};var et=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(A(t[o],r[o],e));return n},Er=(t,r,e=1/0)=>et(t,r,e),qr=(t,r,e=1/0)=>et(t,r,e),nt=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(I(t[o],r[o],e));return n},Ar=(t,r,e=1/0)=>nt(t,r,e),Nr=(t,r,e=1/0)=>nt(t,r,e),ot=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(N(o,r,e));return n},Cr=(t,r,e=1/0)=>ot(t,r,e),Xr=(t,r,e=1/0)=>ot(t,r,e),F=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(C(o,r,e));return n},Bt=(t,r,e=1/0)=>F(t,r,e),Yr=(t,r,e=1/0)=>F(t,r,e),X=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Dr=t=>X(t),Gr=t=>X(t),it=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let c=0;c<o;c++)i.push(r);e.push(i)}return e},Or=(t,r=0)=>it(t,r),jr=(t,r=0)=>it(t,r),kr=(t=0)=>[[t,t],[t,t]],Fr=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],Qr=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],Zr=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(P(r,e));return n},Wr=()=>[[1,0],[0,1]],_r=()=>[[1,0,0],[0,1,0],[0,0,1]],Kr=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Jr=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},y=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},ct=t=>y(t),st=t=>y(t),Ur=(t,r)=>{if(t.length<=0)return[];let e=y(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},Pr=(t,r)=>{if(t.length<=0)return[];let e=y(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},te=(t,r)=>{let e=y(t);return e.push(r),e},re=(t,r)=>{let e=ct(t);return e.push(r),e},ee=(t,r)=>{let e=st(t);return e.push(r),e},ne=(t,r)=>{let e=y(t);return e.unshift(r),e},oe=(t,r)=>{let e=ct(t);return e.unshift(r),e},ie=(t,r)=>{let e=st(t);return e.unshift(r),e},ce=t=>{if(t.length<=0)return[];let r=y(t);return r.pop(),r},se=t=>{if(t.length<=0)return[];let r=y(t);return r.shift(),r},ut=t=>{if(t.length<=0)return[];let r=y(t);for(let e=0;e<r.length;e++)r[e].pop();return r},ue=t=>{if(t.length<=0)return[];let r=y(t);for(let e=0;e<r.length;e++)r[e].shift();return r},xe=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},xt=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},ae=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},$=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=X(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let c=t[i];for(let u=0;u<o.length;u++){let x=o[u],a=S(c,x,e);n[i].push(a)}}return n},h=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=S(t[o],r,e);return n},me=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!tt(t[e],r[e]))return!1;return!0},fe=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let c=[];for(let u=0;u<n;u++)u!==e&&c.push(t[i][u]);o.push(c)}return o},at=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=fe(t,r,e);return Y(o)},Y=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return mt(t);let e=0;for(let n=0;n<r;n++){let o=at(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},mt=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},pe=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return Y(t)},ft=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},Me=t=>pt(t),pt=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return ft(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let c=at(t,n,i),u=Math.pow(-1,n+i);o.push(u*c)}e.push(o)}return X(e)},he=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return Y(t)===0},Mt=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=mt(t);if(e===0)return null;let n=ft(t);return n===null?null:Bt(n,e,r)},ht=(t,r=1/0)=>Q(t,r),Q=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=Y(t),o=pt(t);return o===null?null:F(o,n,r)};var be=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1];return`matrix(${r}, ${e}, ${n}, ${o}, 0, 0)`},Ve=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],i=t[0][2],c=t[1][2];return`matrix(${r}, ${e}, ${n}, ${o}, ${i}, ${c})`},le=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],i=t[0][2],c=t[1][2];return`matrix3d(${r}, ${e}, 0, 0, ${n}, ${o}, 0, 0, 0, 0, 1, 0, ${i}, ${c}, 0, 1)`},ye=t=>`matrix3d(
        ${t[0][0]}, ${t[0][1]}, ${t[0][2]}, ${t[0][3]},
        ${t[1][0]}, ${t[1][1]}, ${t[1][2]}, ${t[1][3]},
        ${t[2][0]}, ${t[2][1]}, ${t[2][2]}, ${t[2][3]},
        ${t[3][0]}, ${t[3][1]}, ${t[3][2]}, ${t[3][3]}
    )`,de=(t,r=1/0)=>[[1,0],[0,1],[s(t[0],r),s(t[1],r)]],Ie=(t,r=1/0)=>[[1,0,0],[0,1,0],[0,0,1],[s(t[0],r),s(t[1],r),s(t[2],r)]],D=(t,r=1/0)=>[[1,0,s(t[0],r)],[0,1,s(t[1],r)],[0,0,1]],ve=(t,r=1/0)=>[[1,0,0,s(t[0],r)],[0,1,0,s(t[1],r)],[0,0,1,s(t[2],r)],[0,0,0,1]],Tt=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[n,-o],[o,n]]:[[n,o],[-o,n]]},bt=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},Lt=(t,r,e=!0,n=1/0)=>{let o=D(r,n),i=bt(t,e,n),c=D(k(r,-1),n),u=$(o,i);return $(u,c)},ge=(t,r,e,n=!0,o=1/0)=>{let i=Lt(t,r,n,o);return h(i,e)},Se=(t,r,e=!0,n=1/0)=>{let o=L(r);return h(Tt(t,e,n),o)},we=(t,r,e=!0,n=1/0)=>{let o=v(r);return h(bt(t,e,n),o)},$t=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[1,0,0],[0,n,-o],[0,o,n]]:[[1,0,0],[0,n,o],[0,-o,n]]},Re=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[1,0,0,0],[0,n,-o,0],[0,o,n,0],[0,0,0,1]]:[[1,0,0,0],[0,n,o,0],[0,-o,n,0],[0,0,0,1]]},ze=(t,r,e=!0,n=1/0)=>{let o=v(r);return h($t(t,e,n),o)},Et=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[n,0,o],[0,1,0],[-o,0,n]]:[[n,0,-o],[0,1,0],[o,0,n]]},He=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[n,0,o,0],[0,1,0,0],[-o,0,n,0],[0,0,0,1]]:[[n,0,-o,0],[0,1,0,0],[o,0,n,0],[0,0,0,1]]},Be=(t,r,e=!0,n=1/0)=>{let o=v(r);return h(Et(t,e,n),o)},qt=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},Te=(t,r=!0,e=1/0)=>{let n=s(Math.cos(t),e),o=s(Math.sin(t),e);return r?[[n,-o,0,0],[o,n,0,0],[0,0,1,0],[0,0,0,1]]:[[n,o,0,0],[-o,n,0,0],[0,0,1,0],[0,0,0,1]]},Le=(t,r,e=!0,n=1/0)=>{let o=v(r);return h(qt(t,e,n),o)},At=(t,r,e=1/0)=>{let n=D(r,e),o=Ct(t),i=D(k(r,-1),e),c=$(n,o);return $(c,i)},$e=(t,r,e,n=1/0)=>{let o=At(t,r,n);return h(o,e)},Nt=t=>[[t[0],0],[0,t[1]]],Ee=(t,r)=>h(Nt(t),r),Ct=t=>[[t[0],0,0],[0,t[1],0],[0,0,1]],Xt=t=>[[t[0],0,0],[0,t[1],0],[0,0,t[2]]],qe=t=>[[t[0],0,0,0],[0,t[1],0,0],[0,0,t[2],0],[0,0,0,1]],Ae=(t,r)=>h(Xt(t),r),Ne=t=>[[t,0],[0,1]],Ce=t=>[[t,0,0],[0,1,0],[0,0,1]],Xe=t=>[[t,0,0],[0,1,0],[0,0,1]],Ye=t=>[[t,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],De=t=>[[1,0,0],[0,t,0],[0,0,1]],Ge=t=>[[1,0,0,0],[0,t,0,0],[0,0,1,0],[0,0,0,1]],Oe=t=>[[1,0,0],[0,1,0],[0,0,t]],je=t=>[[1,0,0,0],[0,1,0,0],[0,0,t,0],[0,0,0,1]],ke=t=>[[1,0],[0,t]],Fe=t=>[[1,0,0],[0,t,0],[0,0,1]],Qe=()=>[[-1,0],[0,-1]],Ze=()=>[[-1,0,0],[0,-1,0],[0,0,1]],We=()=>[[-1,0,0],[0,-1,0],[0,0,-1]],_e=()=>[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],Ke=()=>[[0,-1],[-1,0]],Je=()=>[[1,0],[0,-1]],Ue=()=>[[1,0,0],[0,-1,0],[0,0,1]],Pe=()=>[[-1,0],[0,1]],tn=()=>[[-1,0,0],[0,1,0],[0,0,1]],rn=()=>[[-1,0,0],[0,1,0],[0,0,1]],en=()=>[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],nn=()=>[[1,0,0],[0,-1,0],[0,0,1]],on=()=>[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],cn=()=>[[1,0,0],[0,1,0],[0,0,-1]],sn=()=>[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],un=t=>[[1,t],[0,1]],xn=t=>[[1,0],[t,1]];var b=(t,r,e=1/0)=>s(Math.random()*(r-t)+t,e),Yt=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),an=()=>Math.random()<.5,mn=t=>{let r=Yt(0,t.length-1);return t[r]};var fn=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var pn=(t,r,e=1/0)=>{let n=0;for(let o of r){if(o.length!==2)return NaN;let i=o[0],c=o[1];n+=i*c*Math.pow(t,c-1)}return s(n,e)},Vt=(t,r,e,n,o=1/0)=>{let i=-2*(1-t),c=2-4*t,u=2*t;return[s(i*r[0]+c*e[0]+u*n[0],o),s(i*r[1]+c*e[1]+u*n[1],o)]},lt=(t,r,e,n,o=1/0)=>{let i=-2*(1-t),c=2-4*t,u=2*t;return[s(i*r[0]+c*e[0]+u*n[0],o),s(i*r[1]+c*e[1]+u*n[1],o),s(i*r[2]+c*e[2]+u*n[2],o)]},yt=(t,r,e,n,o,i=1/0)=>{let c=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[s(c*r[0]+u*e[0]+x*n[0]+a*o[0],i),s(c*r[1]+u*e[1]+x*n[1]+a*o[1],i)]},dt=(t,r,e,n,o,i=1/0)=>{let c=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[s(c*r[0]+u*e[0]+x*n[0]+a*o[0],i),s(c*r[1]+u*e[1]+x*n[1]+a*o[1],i),s(c*r[2]+u*e[2]+x*n[2]+a*o[2],i)]},Mn=(t,r=1/0)=>s(Math.cos(t),r),hn=(t,r=1/0)=>s(-Math.sin(t),r),bn=(t,r=1/0)=>s(1/V(Math.cos(t),2),r),Vn=(t,r=1/0)=>s(-1/V(Math.sin(t),2),r),ln=(t,r=1/0)=>s(1/Math.sqrt(1-V(t,2)),r),yn=(t,r=1/0)=>s(-1/Math.sqrt(1-V(t,2)),r),dn=(t,r=1/0)=>s(1/(1+V(t,2)),r),In=(t,r=1/0)=>s(-1/(1+V(t,2)),r);var E=(t,r=1/0)=>{let e=t[0],n=t[1],i=t[2]-n;return e===0&&i===0?1/0:e===0?NaN:s(i/e,r)},vn=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=Mt(n);if(o===null)return null;let i=[t[2],r[2]];return h(o,i,e)},gn=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=ht(o);if(i===null)return null;let c=[t[3],r[3],e[3]];return h(i,c,n)},Sn=(t,r=1/0)=>{if(t.length<=0)return null;let e=ut(t),n=Q(e);if(n===null)return null;let o=xt(t);return h(n,o,r)},wn=(t,r)=>{let[e,n]=w(r,t),[o,i]=t;if(e===0)return{slope:void 0,xIntercept:o,yIntercept:void 0,formula:`x = ${o}`};let c=n/e,u=i-c*o,x="";return c===0?x=`y = ${u}`:(x=`y = ${c===1?"":c}x`,u!==0&&(x+=` ${u<0?"-":"+"} ${Math.abs(u)}`)),{slope:c,xIntercept:void 0,yIntercept:u,formula:x}};var It=(t,r=1/0)=>{let e=t[0],n=t[1],o=t[2],i=t[3];if(e===0){let f=E([n,o,i],r);return H(f)?[f]:[]}let c=o-i,u=n*n-4*e*c;if(u<0)return[];if(u===0)return[s(-n/(2*e),r)];let x=2*e,a=Math.sqrt(u);return[s((-n+a)/x,r),s((-n-a)/x,r)]};var Dt=(t,r,e,n,o=1/0)=>{let i=Math.pow(1-t,2),c=(1-t)*2*t,u=t*t;return[s(i*r[0]+c*e[0]+u*n[0],o),s(i*r[1]+c*e[1]+u*n[1],o)]},Rn=(t,r,e,n,o=1/0)=>{let i=Math.pow(1-t,2),c=(1-t)*2*t,u=t*t;return[s(i*r[0]+c*e[0]+u*n[0],o),s(i*r[1]+c*e[1]+u*n[1],o),s(i*r[2]+c*e[2]+u*n[2],o)]},Gt=(t,r,e,n,o,i=1/0)=>{let c=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[s(c*r[0]+u*e[0]+x*n[0]+a*o[0],i),s(c*r[1]+u*e[1]+x*n[1]+a*o[1],i)]},zn=(t,r,e,n,o,i=1/0)=>{let c=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[s(c*r[0]+u*e[0]+x*n[0]+a*o[0],i),s(c*r[1]+u*e[1]+x*n[1]+a*o[1],i),s(c*r[2]+u*e[2]+x*n[2]+a*o[2],i)]},Ot=(t,r,e,n,o=1/0)=>{let i=Vt(t,r,e,n);return L(i,o)},Hn=(t,r,e,n,o=1/0)=>{let i=lt(t,r,e,n);return v(i,o)},jt=(t,r,e,n,o,i=1/0)=>{let c=yt(t,r,e,n,o);return L(c,i)},Bn=(t,r,e,n,o,i=1/0)=>{let c=dt(t,r,e,n,o);return v(c,i)},Tn=(t,r,e,n,o=1/0)=>{let i=Ot(t,r,e,n,o);return[-i[1],i[0]]},Ln=(t,r,e,n,o,i=1/0)=>{let c=jt(t,r,e,n,o,i);return[-c[1],c[0]]},kt=(t,r,e,n=1/0)=>{let o=2*t[0]-4*r[0]+2*e[0],i=-2*t[0]+2*r[0],u=E([o,i,0],n),x=2*t[1]-4*r[1]+2*e[1],a=-2*t[1]+2*r[1],p=E([x,a,0],n),m=[];return H(u)&&m.push(u),H(p)&&m.push(p),m},Ft=(t,r,e,n,o=1/0)=>{let i=-3*t[0]+9*r[0]-9*e[0]+3*n[0],c=6*t[0]-12*r[0]+6*e[0],u=-3*t[0]+3*r[0],x=[i,c,u,0],a=-3*t[1]+9*r[1]-9*e[1]+3*n[1],f=6*t[1]-12*r[1]+6*e[1],p=-3*t[1]+3*r[1],m=[a,f,p,0],M=It(x,o).filter(d=>d>=0&&d<=1),g=It(m,o).filter(d=>d>=0&&d<=1);return[...M,...g].length===2?[...M,...g]:null},$n=(t,r,e,n=1/0)=>{let o=kt(t,r,e),i=1/0,c=1/0,u=-1/0,x=-1/0;for(let a of o){let f=Dt(a,t,r,e),p=f[0],m=f[1];i=Math.min(i,p),u=Math.max(u,p),c=Math.min(c,m),x=Math.max(x,m)}return i=s(Math.min(i,t[0],e[0]),n),u=s(Math.max(u,t[0],e[0]),n),c=s(Math.min(c,t[1],e[1]),n),x=s(Math.max(x,t[1],e[1]),n),{x:i,y:c,w:Math.abs(u-i),h:Math.abs(x-c),x2:u,y2:x}},En=(t,r,e,n,o=1/0)=>{let i=Ft(t,r,e,n)||[],c=1/0,u=1/0,x=-1/0,a=-1/0;for(let f of i){let p=Gt(f,t,r,e,n),m=p[0],M=p[1];c=Math.min(c,m!=null?m:1/0),x=Math.max(x,m!=null?m:-1/0),u=Math.min(u,M!=null?M:1/0),a=Math.max(a,M!=null?M:-1/0)}return c=s(Math.min(c,t[0],n[0]),o),x=s(Math.max(x,t[0],n[0]),o),u=s(Math.min(u,t[1],n[1]),o),a=s(Math.max(a,t[1],n[1]),o),{x:c,y:u,w:Math.abs(x-c),h:Math.abs(a-u),x2:x,y2:a}};var Qt=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),qn=(t,r,e)=>{let n=w(t,r),o=T(n);return o=O(o,0,Math.PI*2,0,Math.PI),Qt(r,o,e)},Zt=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),An=(t,r,e)=>{let n=w(t,r),o=T(n);return o=O(o,0,Math.PI*2,0,Math.PI),Zt(r,o,e[0],e[1])},Nn=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},Cn=(t,r,e,n,o,i,c)=>[t*Math.cos(n*e-i),r*Math.cos(o*e-c)];var Xn=()=>{let t=St();return _t(t)},Yn=()=>{let t=St();return Kt(t)},St=()=>{let t=b(1,360),r=b(0,100),e=b(0,100);return[t,r,e]},Dn=t=>{let r=b(0,100),e=b(0,100);return[t,r,e]},Gn=t=>{let r=b(1,360),e=b(0,100);return[r,t,e]},On=t=>{let r=b(1,360),e=b(0,100);return[r,e,t]},jn=()=>[0,0,b(0,100)],kn=(t=1,r=360,e=0,n=100,o=0,i=100)=>{let c=b(t,r),u=b(e,n),x=b(o,i);return[c,u,x]},Fn=t=>(t*=60,t<0&&(t+=360),t),Qn=(t,r,e,n=void 0,o=void 0)=>{if(n=n===void 0?Math.min(t,r,e):n,o=o===void 0?Math.max(t,r,e):o,n===o)return 0;let i=o-n,c=0;return o===t&&(c=(r-e)/i+(r<e?6:0)),o===r&&(c=2+(e-t)/i),o===e&&(c=4+(t-r)/i),Fn(c)},Wt=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),Zn=(t,r,e,n=void 0,o=void 0,i=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(i=i===void 0?Wt(t,r,e):i,(i<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),Wn=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,i=Math.min(e,n,o),c=Math.max(e,n,o),u=Wt(e,n,o,i,c),x=Zn(e,n,o,i,c,u),a=Qn(e,n,o,i,c);return a>360||x>100||u>100?[0,0,100]:a<0||x<0||u<0?[0,0,0]:[s(a,r),s(x,r),s(u,r)]},vt=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),_t=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let M=o*255;return[M,M,M]}let i=o<.5?o*(1+n):o+n-o*n,c=2*o-i,u=e+.333,x=e,a=e-.333,f=vt(i,c,u),p=vt(i,c,x),m=vt(i,c,a);return f*=255,p*=255,m*=255,f>255||p>255||m>255?[255,255,255]:f<0||p<0||m<0?[0,0,0]:[s(f,r),s(p,r),s(m,r)]},Kt=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,i,c;if(e===0)o=i=c=n;else{let x=(p,m,M)=>(M<0&&(M+=1),M>1&&(M-=1),M<.16666666666666666?p+(m-p)*6*M:M<.5?m:M<.6666666666666666?p+(m-p)*(.6666666666666666-M)*6:p),a=n<.5?n*(1+e):n+e-n*e,f=2*n-a;o=x(f,a,r+1/3),i=x(f,a,r),c=x(f,a,r-1/3)}let u=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${u(o)}${u(i)}${u(c)}`},_n=t=>{let[r,e,n]=t;return"#"+(1<<24|r<<16|e<<8|n).toString(16).slice(1)},Kn=t=>{let r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,e=t.replace(r,(u,x,a,f)=>x+x+a+a+f+f),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(!n)return null;let o=parseInt(n[1],16),i=parseInt(n[2],16),c=parseInt(n[3],16);return[o,i,c]},gt=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,o=o>.04045?Math.pow((o+.055)/1.055,2.4):o/12.92;let i=(e*.4124+n*.3576+o*.1805)/.95047,c=(e*.2126+n*.7152+o*.0722)/1,u=(e*.0193+n*.1192+o*.9505)/1.08883;return i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,c=c>.008856?Math.pow(c,1/3):7.787*c+16/116,u=u>.008856?Math.pow(u,1/3):7.787*u+16/116,[s(116*c-16,r),s(500*(i-c),r),s(200*(c-u),r)]},Jn=(t,r=1/0)=>{let e=(t[0]+16)/116,n=t[1]/500+e,o=e-t[2]/200;n=.95047*(n*n*n>.008856?n*n*n:(n-16/116)/7.787),e=1*(e*e*e>.008856?e*e*e:(e-16/116)/7.787),o=1.08883*(o*o*o>.008856?o*o*o:(o-16/116)/7.787);let i=n*3.2406+e*-1.5372+o*-.4986,c=n*-.9689+e*1.8758+o*.0415,u=n*.0557+e*-.204+o*1.057;return i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:12.92*i,c=c>.0031308?1.055*Math.pow(c,1/2.4)-.055:12.92*c,u=u>.0031308?1.055*Math.pow(u,1/2.4)-.055:12.92*u,[s(Math.max(0,Math.min(1,i))*255,r),s(Math.max(0,Math.min(1,c))*255,r),s(Math.max(0,Math.min(1,u))*255,r)]},Un=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=l(e,360)),[e,t[1],t[2]]},Pn=(t,r=10)=>{let e=t[2];return e+=r,(e>100||e<0)&&(e=l(e,100)),[t[0],t[1],e]},to=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]},ro=(t,r,e=1/0)=>{let n=gt(t,e),o=gt(r,e),i=n[0]-o[0],c=n[1]-o[1],u=n[2]-o[2],x=Math.sqrt(n[1]*n[1]+n[2]*n[2]),a=Math.sqrt(o[1]*o[1]+o[2]*o[2]),f=x-a,p=c*c+u*u-f*f;p=p<0?0:Math.sqrt(p);let m=1+.045*x,M=1+.015*x,g=i/1,q=f/m,d=p/M,G=g*g+q*q+d*d;return G<0?0:Math.sqrt(G)};var eo=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=Math.random()*16|0;return(t=="x"?r:r&3|8).toString(16)}),no=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var oo=(t,r)=>t.x<=r.x+r.w&&t.x+t.w>=r.x&&t.y<=r.y+r.h&&t.h+t.y>=r.y,io=(t,r)=>{let e=Math.abs(t.cx-r.cx),n=Math.abs(t.cy-r.cy);return Math.sqrt(e*e+n*n)<=t.r+r.r},Jt=t=>{let r=[];for(let e=0;e<t.length;e++){let n=l(e+1,t.length),o=[t[e],t[n]];r.push(o)}return r},co=(t,r)=>{let e=[];e.push(...Jt(t)),e.push(...Jt(r));for(let n of e){let o=rt(n[0],n[1]),i=Ut(t,o),c=Ut(r,o);if(!(i.max>=c.min&&c.max>=i.min))return!1}return!0},Ut=(t,r)=>{let e=1/0,n=-1/0;for(let o of t){let i=U(o,r);e=Math.min(e,i),n=Math.max(n,i)}return{min:e,max:n}};var so=t=>{let r=t.duration!==void 0?t.duration:1/0,e,n,o,i,c=!1,u,x=()=>{e=void 0,o=void 0,i=void 0,c=!1,n!==void 0&&window.cancelAnimationFrame(n)},a=()=>{x(),g()},f=()=>{c=!1},p=()=>{c=!0},m=z=>{e===void 0&&(e=z),o=z-e,c&&i!==z&&typeof t.callback=="function"&&t.callback(wt()),o<=r?(i=z,n=window.requestAnimationFrame(m)):x()},M=(z,rr)=>{a(),typeof t.resizeCallback=="function"&&t.resizeCallback(z,rr)},g=()=>{e=void 0,o=void 0,i=void 0,c=!0,t.restartOnResize&&window.ResizeObserver&&u===void 0?(u=new ResizeObserver(M),u.observe(document.body,{box:"border-box"})):n=window.requestAnimationFrame(m)},q=()=>o,d=()=>c,G=()=>e,Pt=()=>{if(!(r===1/0||o===void 0))return o*100/r},tr=()=>u,wt=()=>({start:g,stop:x,pause:f,resume:p,restart:a,isAnimating:d,getElapsedTime:q,getStartTime:G,getPercent:Pt,getResizeObserver:tr});return wt()};var uo=(t,r=1/0)=>s(2*Math.PI*t,r),xo=(t,r,e=1/0)=>s(2*Math.PI*Math.sqrt((V(t,2)+V(r,2))/2),e),ao=(t,r,e)=>(t>r&&(r+=360),e>=t&&e<=r||e+360>=t&&e+360<=r),mo=(t,r=1/0)=>s(t*2/Math.sqrt(2),r);var fo=t=>t*(t+1)/2,po=(t,r,e)=>t/2*(2*r+(t-1)*e);var Z=(t,r=1/0)=>{if(!t||t.length<=0)return;let e=t.reduce((n,o)=>n+o,0);return s(e/t.length,r)},Mo=(t,r=1/0)=>{if(!t||t.length<=0)return;let e=[...t].sort((o,i)=>o-i),n=Math.floor(e.length/2);return e.length%2===0?s((e[n]+e[n-1])/2,r):s(e[n],r)},ho=t=>{if(!t||t.length<=0)return;let r=new Map;for(let o of t)r.set(o,(r.get(o)||0)+1);let e=0,n=[];for(let[o,i]of r)i>e?(e=i,n=[o]):i===e&&n.push(o);if(n.length!==t.length)return n.length===1?[n[0]]:n},bo=(t,r=1/0)=>{if(!t||t.length<=0)return;let e=Z(t);if(e===void 0)return;let n=t.reduce((o,i)=>o+V(i-e,2),0);return s(n/t.length,r)};var Vo=(t,r=1/0)=>{let e=[...t],n=Math.min(...e),i=Math.max(...e)-n;if(i===0)return[0];for(let c=0;c<e.length;c++)e[c]=s((e[c]-n)/i,r);return e},lo=t=>{var i;let r=(i=Z(t))!=null?i:0,e=t.reduce((c,u)=>c+Math.pow(u-r,2),0)/t.length,n=Math.sqrt(e);return t.map(c=>(c-r)/n)};0&&(module.exports={animate,arithmeticSequenceSum,circleCollide,circleMovement,circleMovementAfterMouse,convertRange,convexPolygonsCollide,degreesToRadians,doRangesOverlap,dxArcCos,dxArcCot,dxArcSin,dxArcTan,dxCos,dxCot,dxPolynomial,dxSin,dxTan,dxV2CubicBezierCurve,dxV2QuadraticBezierCurve,dxV3CubicBezierCurve,dxV3QuadraticBezierCurve,ellipseMovement,ellipseMovementAfterMouse,getAnglesDistance,getAnglesSub,getArithmeticMean,getCircleCircumference,getColorsDelta,getEllipseCircumference,getLinearEquationBy2Points,getMedian,getMode,getRandom,getRandomBoolean,getRandomGrayscaleHSLColor,getRandomHSLColor,getRandomHSLColorWithHue,getRandomHSLColorWithLightness,getRandomHSLColorWithSaturation,getRandomHSLColorWithinRanges,getRandomHexColor,getRandomInt,getRandomItemFromArray,getRandomRGBColor,getShiftedHue,getShiftedLightness,getShiftedSaturation,getSquareInCircleSide,getV2Angle,getV2AngleBetween,getV2AngleInEllipse,getV3AngleBetween,getVNAngleBetween,getVariance,guid,hexToRgb,hslToHex,hslToRgb,identity2,identity3,identity4,identityN,isAngleBetween,isAngleInCircleArc,isClockwise,isNumber,isSingularMatrix,labToRgb,linearEquation,linearEquationSystem2,linearEquationSystem3,linearEquationSystemN,lissajousCurve,m2Adjugate,m2AppendRow,m2DeepCopy,m2Determinant,m2DivideScalar,m2Inverse,m2MulScalar,m2PrependRow,m2ReflectionOrigin,m2ReflectionOriginH,m2ReflectionX,m2ReflectionXH,m2ReflectionY,m2ReflectionYH,m2ReflectionYmX,m2Reset,m2RotateAroundPointH,m2Rotation,m2RotationAroundPointH,m2RotationH,m2Scale,m2ScaleAtPointH,m2ScaleAtPointHMatrix,m2ScaleH,m2ScaleX,m2ScaleXH,m2ScaleY,m2ScaleYH,m2ShearingX,m2ShearingY,m2Sub,m2Sum,m2ToCSS,m2Translation,m2TranslationH,m2Transpose,m2hToCSS,m2hToCSS3d,m2x2,m3Adjugate,m3AppendRow,m3DeepCopy,m3Determinant,m3DivideScalar,m3Inverse,m3MulScalar,m3PrependRow,m3ReflectionOrigin,m3ReflectionOriginH,m3ReflectionXY,m3ReflectionXYH,m3ReflectionXZ,m3ReflectionXZH,m3ReflectionYZ,m3ReflectionYZH,m3Reset,m3RotationX,m3RotationXH,m3RotationY,m3RotationYH,m3RotationZ,m3RotationZH,m3Scale,m3ScaleH,m3ScaleX,m3ScaleXH,m3ScaleY,m3ScaleYH,m3ScaleZ,m3ScaleZH,m3Sub,m3Sum,m3Translation,m3TranslationH,m3Transpose,m3hToCSS3d,m3x3,m4x4,mAdjugate,mAppendCol,mAppendRow,mDeepCopy,mDelFirstColumn,mDelFirstRow,mDelLastColumn,mDelLastRow,mDeterminant,mDivideScalar,mEqual,mGetColumn,mGetFirstColumn,mGetLastColumn,mInverse,mMinor,mMul,mMulScalar,mMulVector,mNxM,mPrependCol,mPrependRow,mReset,mSub,mSum,mTranspose,mlNormalize,mlStandardize,mod,naturalNumbersSequenceSum,newId,percentToAngle,polarToCartesian,radiansToDegrees,rectCollide,rgbToHex,rgbToHsl,rgbToLab,setDecimalPlaces,setV2Angle,sineWaveMovement,stringToNumber,v2,v2CubicBezierBBox,v2CubicBezierCurve,v2CubicBezierCurveExtrema,v2CubicBezierCurveNormal,v2CubicBezierCurveTangent,v2Distance,v2DivideScalar,v2DotProduct,v2FromPolarCoords,v2GetNormal,v2Length,v2MulScalar,v2Normalize,v2QuadraticBezierBBox,v2QuadraticBezierCurve,v2QuadraticBezierCurveExtrema,v2QuadraticBezierCurveNormal,v2QuadraticBezierCurveTangent,v2Rotate,v2RotateH,v2Scale,v2SetLength,v2Sub,v2Sum,v3,v3CrossProduct,v3CubicBezierCurve,v3CubicBezierCurveTangent,v3Distance,v3DivideScalar,v3DotProduct,v3Length,v3MulScalar,v3Normalize,v3QuadraticBezierCurve,v3QuadraticBezierCurveTangent,v3RotateX,v3RotateY,v3RotateZ,v3Scale,v3Sub,v3Sum,v4,vDistance,vDivideScalar,vDotProduct,vEqual,vLength,vMulScalar,vN,vNormalize,vSub,vSum});
//# sourceMappingURL=mz-math.node.cjs.map
