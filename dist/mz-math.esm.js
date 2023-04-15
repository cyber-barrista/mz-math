/* 
mzMath - a collection of TypeScript-based math helpers.
Version: 3.0.4
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-math
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var y=Math.pow;var i=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=y(10,r);return Math.round(t*e)/e};var D=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return i(e,r)},F=(t,r,e=1/0)=>{let n=W(t);return[i(Math.cos(r)*n,e),i(Math.sin(r)*n,e)]},Ct=(t,r=1/0)=>{let e=t*(180/Math.PI);return i(e,r)},Jt=(t,r=1/0)=>{let e=t*(Math.PI/180);return i(e,r)},bt=(t,r,e=1/0)=>{let n=w(t),o=w(r),c=v(n,o),s=Math.acos(c);return i(s,e)},Kt=(t,r,e=1/0)=>{let n=g(t,r),o=Math.atan2(n[1],n[0]);return i(o,e)},Ut=(t,r,e=1/0)=>bt(t,r,e);var T=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(i(t[o]+r[o],e));return n},rr=(t,r,e=1/0)=>T(t,r,e),er=(t,r,e=1/0)=>T(t,r,e),g=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(i(t[o]-r[o],e));return n},O=(t,r,e=1/0)=>g(t,r,e),nr=(t,r,e=1/0)=>g(t,r,e),z=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(i(t[o]*r,e));return n},or=(t,r,e=1/0)=>z(t,r,e),A=(t,r,e=1/0)=>z(t,r,e),L=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(i(t[o]/r,e));return n},cr=(t,r,e=1/0)=>L(t,r,e),ir=(t,r,e=1/0)=>L(t,r,e),l=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return i(Math.sqrt(e),r)},W=(t,r=1/0)=>l(t,r),sr=(t,r=1/0)=>l(t,r),yt=(t,r,e=1/0)=>{let n=D(t);return[i(Math.cos(n)*r,e),i(Math.sin(n)*r,e)]},ur=(t,r,e=1/0)=>{let n=g(t,r);return l(n,e)},xr=(t,r,e=1/0)=>{let n=g(t,r);return l(n,e)},ar=(t,r,e=1/0)=>{let n=g(t,r);return l(n,e)},w=(t,r=1/0)=>{let e=l(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:i(t[o]/e,r));return n},d=(t,r=1/0)=>w(t,r),I=(t,r=1/0)=>w(t,r),v=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return i(n,e)},mr=(t,r,e=1/0)=>v(t,r,e),pr=(t,r,e=1/0)=>v(t,r,e),fr=(t,r,e=1/0)=>[i(t[1]*r[2]-t[2]*r[1],e),i(t[2]*r[0]-t[0]*r[2],e),i(t[0]*r[1]-t[1]*r[0],e)],Mr=(t=0)=>[t,t],Vr=(t=0)=>[t,t,t],hr=(t=0)=>[t,t,t,t],k=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},br=(t,r)=>{let e=[0,0];return e=yt(e,t),F(e,r)},C=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var J=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(T(t[o],r[o],e));return n},Ir=(t,r,e=1/0)=>J(t,r,e),vr=(t,r,e=1/0)=>J(t,r,e),K=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(g(t[o],r[o],e));return n},lr=(t,r,e=1/0)=>K(t,r,e),Sr=(t,r,e=1/0)=>K(t,r,e),U=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(z(o,r,e));return n},wr=(t,r,e=1/0)=>U(t,r,e),dr=(t,r,e=1/0)=>U(t,r,e),q=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(L(o,r,e));return n},gt=(t,r,e=1/0)=>q(t,r,e),Rr=(t,r,e=1/0)=>q(t,r,e),$=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let c=0;c<e;c++)n[c].push(t[o][c]);return n},Hr=t=>$(t),Br=t=>$(t),_=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,c=[];for(let s=0;s<o;s++)c.push(r);e.push(c)}return e},Dr=(t,r=0)=>_(t,r),Tr=(t,r=0)=>_(t,r),zr=(t=0)=>[[t,t],[t,t]],Lr=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],$r=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],Er=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(k(r,e));return n},Nr=()=>[[1,0],[0,1]],Ar=()=>[[1,0,0],[0,1,0],[0,0,1]],qr=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Xr=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},b=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let c=0;c<n.length;c++)o.push(n[c]);r.push(o)}return r},P=t=>b(t),tt=t=>b(t),Yr=(t,r)=>{if(t.length<=0)return[];let e=b(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},jr=(t,r)=>{if(t.length<=0)return[];let e=b(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},Qr=(t,r)=>{let e=b(t);return e.push(r),e},Gr=(t,r)=>{let e=P(t);return e.push(r),e},Zr=(t,r)=>{let e=tt(t);return e.push(r),e},Fr=(t,r)=>{let e=b(t);return e.unshift(r),e},Wr=(t,r)=>{let e=P(t);return e.unshift(r),e},Or=(t,r)=>{let e=tt(t);return e.unshift(r),e},kr=t=>{if(t.length<=0)return[];let r=b(t);return r.pop(),r},Cr=t=>{if(t.length<=0)return[];let r=b(t);return r.shift(),r},rt=t=>{if(t.length<=0)return[];let r=b(t);for(let e=0;e<r.length;e++)r[e].pop();return r},Jr=t=>{if(t.length<=0)return[];let r=b(t);for(let e=0;e<r.length;e++)r[e].shift();return r},Kr=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},et=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},Ur=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},R=(t,r,e=1/0)=>{let n=[];for(let c=0;c<t.length;c++)n.push([]);let o=$(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let c=0;c<t.length;c++){let s=t[c];for(let u=0;u<o.length;u++){let x=o[u],a=v(s,x,e);n[c].push(a)}}return n},V=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=v(t[o],r,e);return n},_r=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!C(t[e],r[e]))return!1;return!0},It=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let c=0;c<n;c++){if(c===r)continue;let s=[];for(let u=0;u<n;u++)u!==e&&s.push(t[c][u]);o.push(s)}return o},nt=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=It(t,r,e);return E(o)},E=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return ot(t);let e=0;for(let n=0;n<r;n++){let o=nt(t,0,n),c=t[0][n];n%2!==0&&(c=-c),e+=o*c}return e},ot=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},Pr=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return E(t)},ct=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},te=t=>it(t),it=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return ct(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let c=0;c<r;c++){let s=nt(t,n,c),u=Math.pow(-1,n+c);o.push(u*s)}e.push(o)}return $(e)},re=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return E(t)===0},st=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=ot(t);if(e===0)return null;let n=ct(t);return n===null?null:gt(n,e,r)},ut=(t,r=1/0)=>X(t,r),X=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=E(t),o=it(t);return o===null?null:q(o,n,r)};var ie=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1];return`matrix(${r}, ${e}, ${n}, ${o}, 0, 0)`},se=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],c=t[0][2],s=t[1][2];return`matrix(${r}, ${e}, ${n}, ${o}, ${c}, ${s})`},ue=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],c=t[0][2],s=t[1][2];return`matrix3d(${r}, ${e}, 0, 0, ${n}, ${o}, 0, 0, 0, 0, 1, 0, ${c}, ${s}, 0, 1)`},xe=t=>`matrix3d(
        ${t[0][0]}, ${t[0][1]}, ${t[0][2]}, ${t[0][3]},
        ${t[1][0]}, ${t[1][1]}, ${t[1][2]}, ${t[1][3]},
        ${t[2][0]}, ${t[2][1]}, ${t[2][2]}, ${t[2][3]},
        ${t[3][0]}, ${t[3][1]}, ${t[3][2]}, ${t[3][3]}
    )`,ae=(t,r=1/0)=>[[1,0],[0,1],[i(t[0],r),i(t[1],r)]],me=(t,r=1/0)=>[[1,0,0],[0,1,0],[0,0,1],[i(t[0],r),i(t[1],r),i(t[2],r)]],N=(t,r=1/0)=>[[1,0,i(t[0],r)],[0,1,i(t[1],r)],[0,0,1]],pe=(t,r=1/0)=>[[1,0,0,i(t[0],r)],[0,1,0,i(t[1],r)],[0,0,1,i(t[2],r)],[0,0,0,1]],vt=(t,r=!0,e=1/0)=>{let n=i(Math.cos(t),e),o=i(Math.sin(t),e);return r?[[n,-o],[o,n]]:[[n,o],[-o,n]]},xt=(t,r=!0,e=1/0)=>{let n=i(Math.cos(t),e),o=i(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},lt=(t,r,e=!0,n=1/0)=>{let o=N(r,n),c=xt(t,e,n),s=N(A(r,-1),n),u=R(o,c);return R(u,s)},fe=(t,r,e,n=!0,o=1/0)=>{let c=lt(t,r,n,o);return V(c,e)},Me=(t,r,e=!0,n=1/0)=>{let o=d(r);return V(vt(t,e,n),o)},Ve=(t,r,e=!0,n=1/0)=>{let o=I(r);return V(xt(t,e,n),o)},St=(t,r=!0,e=1/0)=>{let n=i(Math.cos(t),e),o=i(Math.sin(t),e);return r?[[1,0,0],[0,n,-o],[0,o,n]]:[[1,0,0],[0,n,o],[0,-o,n]]},he=(t,r=!0,e=1/0)=>{let n=i(Math.cos(t),e),o=i(Math.sin(t),e);return r?[[1,0,0,0],[0,n,-o,0],[0,o,n,0],[0,0,0,1]]:[[1,0,0,0],[0,n,o,0],[0,-o,n,0],[0,0,0,1]]},be=(t,r,e=!0,n=1/0)=>{let o=I(r);return V(St(t,e,n),o)},wt=(t,r=!0,e=1/0)=>{let n=i(Math.cos(t),e),o=i(Math.sin(t),e);return r?[[n,0,o],[0,1,0],[-o,0,n]]:[[n,0,-o],[0,1,0],[o,0,n]]},ye=(t,r=!0,e=1/0)=>{let n=i(Math.cos(t),e),o=i(Math.sin(t),e);return r?[[n,0,o,0],[0,1,0,0],[-o,0,n,0],[0,0,0,1]]:[[n,0,-o,0],[0,1,0,0],[o,0,n,0],[0,0,0,1]]},ge=(t,r,e=!0,n=1/0)=>{let o=I(r);return V(wt(t,e,n),o)},dt=(t,r=!0,e=1/0)=>{let n=i(Math.cos(t),e),o=i(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},Ie=(t,r=!0,e=1/0)=>{let n=i(Math.cos(t),e),o=i(Math.sin(t),e);return r?[[n,-o,0,0],[o,n,0,0],[0,0,1,0],[0,0,0,1]]:[[n,o,0,0],[-o,n,0,0],[0,0,1,0],[0,0,0,1]]},ve=(t,r,e=!0,n=1/0)=>{let o=I(r);return V(dt(t,e,n),o)},Rt=(t,r,e=1/0)=>{let n=N(r,e),o=Bt(t),c=N(A(r,-1),e),s=R(n,o);return R(s,c)},le=(t,r,e,n=1/0)=>{let o=Rt(t,r,n);return V(o,e)},Ht=t=>[[t[0],0],[0,t[1]]],Se=(t,r)=>V(Ht(t),r),Bt=t=>[[t[0],0,0],[0,t[1],0],[0,0,1]],Dt=t=>[[t[0],0,0],[0,t[1],0],[0,0,t[2]]],we=t=>[[t[0],0,0,0],[0,t[1],0,0],[0,0,t[2],0],[0,0,0,1]],de=(t,r)=>V(Dt(t),r),Re=t=>[[t,0],[0,1]],He=t=>[[t,0,0],[0,1,0],[0,0,1]],Be=t=>[[t,0,0],[0,1,0],[0,0,1]],De=t=>[[t,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Te=t=>[[1,0,0],[0,t,0],[0,0,1]],ze=t=>[[1,0,0,0],[0,t,0,0],[0,0,1,0],[0,0,0,1]],Le=t=>[[1,0,0],[0,1,0],[0,0,t]],$e=t=>[[1,0,0,0],[0,1,0,0],[0,0,t,0],[0,0,0,1]],Ee=t=>[[1,0],[0,t]],Ne=t=>[[1,0,0],[0,t,0],[0,0,1]],Ae=()=>[[-1,0],[0,-1]],qe=()=>[[-1,0,0],[0,-1,0],[0,0,1]],Xe=()=>[[-1,0,0],[0,-1,0],[0,0,-1]],Ye=()=>[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],je=()=>[[0,-1],[-1,0]],Qe=()=>[[1,0],[0,-1]],Ge=()=>[[1,0,0],[0,-1,0],[0,0,1]],Ze=()=>[[-1,0],[0,1]],Fe=()=>[[-1,0,0],[0,1,0],[0,0,1]],We=()=>[[-1,0,0],[0,1,0],[0,0,1]],Oe=()=>[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],ke=()=>[[1,0,0],[0,-1,0],[0,0,1]],Ce=()=>[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],Je=()=>[[1,0,0],[0,1,0],[0,0,-1]],Ke=()=>[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],Ue=t=>[[1,t],[0,1]],_e=t=>[[1,0],[t,1]];var h=(t,r,e=1/0)=>i(Math.random()*(r-t)+t,e),Tt=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),rn=()=>Math.random()<.5,en=t=>{let r=Tt(0,t.length-1);return t[r]};var Y=(t,r)=>(t%r+r)%r,at=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,on=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),H=t=>!isNaN(parseFloat(t))&&isFinite(t);var sn=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var an=(t,r,e=1/0)=>{let n=0;for(let o of r){if(o.length!==2)return NaN;let c=o[0],s=o[1];n+=c*s*Math.pow(t,s-1)}return i(n,e)},mt=(t,r,e,n,o=1/0)=>{let c=-2*(1-t),s=2-4*t,u=2*t;return[i(c*r[0]+s*e[0]+u*n[0],o),i(c*r[1]+s*e[1]+u*n[1],o)]},pt=(t,r,e,n,o=1/0)=>{let c=-2*(1-t),s=2-4*t,u=2*t;return[i(c*r[0]+s*e[0]+u*n[0],o),i(c*r[1]+s*e[1]+u*n[1],o),i(c*r[2]+s*e[2]+u*n[2],o)]},ft=(t,r,e,n,o,c=1/0)=>{let s=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[i(s*r[0]+u*e[0]+x*n[0]+a*o[0],c),i(s*r[1]+u*e[1]+x*n[1]+a*o[1],c)]},Mt=(t,r,e,n,o,c=1/0)=>{let s=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[i(s*r[0]+u*e[0]+x*n[0]+a*o[0],c),i(s*r[1]+u*e[1]+x*n[1]+a*o[1],c),i(s*r[2]+u*e[2]+x*n[2]+a*o[2],c)]},mn=(t,r=1/0)=>i(Math.cos(t),r),pn=(t,r=1/0)=>i(-Math.sin(t),r),fn=(t,r=1/0)=>i(1/y(Math.cos(t),2),r),Mn=(t,r=1/0)=>i(-1/y(Math.sin(t),2),r),Vn=(t,r=1/0)=>i(1/Math.sqrt(1-y(t,2)),r),hn=(t,r=1/0)=>i(-1/Math.sqrt(1-y(t,2)),r),bn=(t,r=1/0)=>i(1/(1+y(t,2)),r),yn=(t,r=1/0)=>i(-1/(1+y(t,2)),r);var B=(t,r=1/0)=>{let e=t[0],n=t[1],c=t[2]-n;return e===0&&c===0?1/0:e===0?NaN:i(c/e,r)},Sn=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=st(n);if(o===null)return null;let c=[t[2],r[2]];return V(o,c,e)},wn=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],c=ut(o);if(c===null)return null;let s=[t[3],r[3],e[3]];return V(c,s,n)},dn=(t,r=1/0)=>{if(t.length<=0)return null;let e=rt(t),n=X(e);if(n===null)return null;let o=et(t);return V(n,o,r)};var j=(t,r=1/0)=>{let e=t[0],n=t[1],o=t[2],c=t[3];if(e===0){let M=B([n,o,c],r);return H(M)?[M]:[]}let s=o-c,u=n*n-4*e*s;if(u<0)return[];if(u===0)return[i(-n/(2*e),r)];let x=2*e,a=Math.sqrt(u);return[i((-n+a)/x,r),i((-n-a)/x,r)]};var zt=(t,r,e,n,o=1/0)=>{let c=Math.pow(1-t,2),s=(1-t)*2*t,u=t*t;return[i(c*r[0]+s*e[0]+u*n[0],o),i(c*r[1]+s*e[1]+u*n[1],o)]},qn=(t,r,e,n,o=1/0)=>{let c=Math.pow(1-t,2),s=(1-t)*2*t,u=t*t;return[i(c*r[0]+s*e[0]+u*n[0],o),i(c*r[1]+s*e[1]+u*n[1],o),i(c*r[2]+s*e[2]+u*n[2],o)]},Lt=(t,r,e,n,o,c=1/0)=>{let s=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[i(s*r[0]+u*e[0]+x*n[0]+a*o[0],c),i(s*r[1]+u*e[1]+x*n[1]+a*o[1],c)]},Xn=(t,r,e,n,o,c=1/0)=>{let s=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[i(s*r[0]+u*e[0]+x*n[0]+a*o[0],c),i(s*r[1]+u*e[1]+x*n[1]+a*o[1],c),i(s*r[2]+u*e[2]+x*n[2]+a*o[2],c)]},$t=(t,r,e,n,o=1/0)=>{let c=mt(t,r,e,n);return d(c,o)},Yn=(t,r,e,n,o=1/0)=>{let c=pt(t,r,e,n);return I(c,o)},Et=(t,r,e,n,o,c=1/0)=>{let s=ft(t,r,e,n,o);return d(s,c)},jn=(t,r,e,n,o,c=1/0)=>{let s=Mt(t,r,e,n,o);return I(s,c)},Qn=(t,r,e,n,o=1/0)=>{let c=$t(t,r,e,n,o);return[-c[1],c[0]]},Gn=(t,r,e,n,o,c=1/0)=>{let s=Et(t,r,e,n,o,c);return[-s[1],s[0]]},Nt=(t,r,e,n=1/0)=>{let o=2*t[0]-4*r[0]+2*e[0],c=-2*t[0]+2*r[0],u=B([o,c,0],n),x=2*t[1]-4*r[1]+2*e[1],a=-2*t[1]+2*r[1],f=B([x,a,0],n),m=[];return H(u)&&m.push(u),H(f)&&m.push(f),m},At=(t,r,e,n,o=1/0)=>{let c=-3*t[0]+9*r[0]-9*e[0]+3*n[0],s=6*t[0]-12*r[0]+6*e[0],u=-3*t[0]+3*r[0],x=[c,s,u,0],a=-3*t[1]+9*r[1]-9*e[1]+3*n[1],M=6*t[1]-12*r[1]+6*e[1],f=-3*t[1]+3*r[1],m=[a,M,f,0],p=j(x,o).filter(S=>S>=0&&S<=1),Z=j(m,o).filter(S=>S>=0&&S<=1);return[...p,...Z].length===2?[...p,...Z]:null},Zn=(t,r,e,n=1/0)=>{let o=Nt(t,r,e),c=1/0,s=1/0,u=-1/0,x=-1/0;for(let a of o){let M=zt(a,t,r,e),f=M[0],m=M[1];c=Math.min(c,f),u=Math.max(u,f),s=Math.min(s,m),x=Math.max(x,m)}return c=i(Math.min(c,t[0],e[0]),n),u=i(Math.max(u,t[0],e[0]),n),s=i(Math.min(s,t[1],e[1]),n),x=i(Math.max(x,t[1],e[1]),n),{x:c,y:s,w:Math.abs(u-c),h:Math.abs(x-s),x2:u,y2:x}},Fn=(t,r,e,n,o=1/0)=>{let c=At(t,r,e,n)||[],s=1/0,u=1/0,x=-1/0,a=-1/0;for(let M of c){let f=Lt(M,t,r,e,n),m=f[0],p=f[1];s=Math.min(s,m!=null?m:1/0),x=Math.max(x,m!=null?m:-1/0),u=Math.min(u,p!=null?p:1/0),a=Math.max(a,p!=null?p:-1/0)}return s=i(Math.min(s,t[0],n[0]),o),x=i(Math.max(x,t[0],n[0]),o),u=i(Math.min(u,t[1],n[1]),o),a=i(Math.max(a,t[1],n[1]),o),{x:s,y:u,w:Math.abs(x-s),h:Math.abs(a-u),x2:x,y2:a}};var qt=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),Jn=(t,r,e)=>{let n=O(t,r),o=D(n);return o=at(o,0,Math.PI*2,0,Math.PI),qt(r,o,e)},Kn=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),Un=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},_n=(t,r,e,n,o,c,s)=>[t*Math.cos(n*e-c),r*Math.cos(o*e-s)];var no=()=>{let t=Vt();return jt(t)},oo=()=>{let t=Vt();return Qt(t)},Vt=()=>{let t=h(1,360),r=h(0,100),e=h(0,100);return[t,r,e]},co=t=>{let r=h(0,100),e=h(0,100);return[t,r,e]},io=t=>{let r=h(1,360),e=h(0,100);return[r,t,e]},so=t=>{let r=h(1,360),e=h(0,100);return[r,e,t]},uo=()=>[0,0,h(0,100)],xo=(t=1,r=360,e=0,n=100,o=0,c=100)=>{let s=h(t,r),u=h(e,n),x=h(o,c);return[s,u,x]},Q=t=>(t*=60,t<0&&(t+=360),t*100/360),Xt=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:o===t?Q((r-e)/(o-n)):o===r?Q(2+(e-t)/(o-n)):o===e?Q(4+(t-r)/(o-n)):0),ht=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),Yt=(t,r,e,n=void 0,o=void 0,c=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(c=c===void 0?ht(t,r,e):c,(c<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),ao=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,c=Math.min(e,n,o),s=Math.max(e,n,o),u=ht(e,n,o,c,s),x=Yt(e,n,o,c,s,u),a=Xt(e,n,o,c,s);return a>360||x>100||u>100?[0,0,100]:a<0||x<0||u<0?[0,0,0]:[i(a,r),i(x,r),i(u,r)]},G=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),jt=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let p=o*255;return[p,p,p]}let c=o<.5?o*(1+n):o+n-o*n,s=2*o-c,u=e+.333,x=e,a=e-.333,M=G(c,s,u),f=G(c,s,x),m=G(c,s,a);return M*=255,f*=255,m*=255,M>255||f>255||m>255?[255,255,255]:M<0||f<0||m<0?[0,0,0]:[i(M,r),i(f,r),i(m,r)]},Qt=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,c,s;if(e===0)o=c=s=n;else{let x=(f,m,p)=>(p<0&&(p+=1),p>1&&(p-=1),p<.16666666666666666?f+(m-f)*6*p:p<.5?m:p<.6666666666666666?f+(m-f)*(.6666666666666666-p)*6:f),a=n<.5?n*(1+e):n+e-n*e,M=2*n-a;o=x(M,a,r+1/3),c=x(M,a,r),s=x(M,a,r-1/3)}let u=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${u(o)}${u(c)}${u(s)}`},mo=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=Y(e,360)),[e,t[1],t[2]]},po=(t,r=10)=>{let e=t[2];return e+=r,(e>100||e<0)&&(e=Y(e,100)),[t[0],t[1],e]},fo=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]};var Vo=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=Math.random()*16|0;return(t=="x"?r:r&3|8).toString(16)}),ho=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var go=(t,r=1/0)=>i(t*2/Math.sqrt(2),r);export{qt as circleMovement,Jn as circleMovementAfterMouse,at as convertRange,Jt as degreesToRadians,on as doRangesOverlap,hn as dxArcCos,yn as dxArcCot,Vn as dxArcSin,bn as dxArcTan,pn as dxCos,Mn as dxCot,an as dxPolynomial,mn as dxSin,fn as dxTan,ft as dxV2CubicBezierCurve,mt as dxV2QuadraticBezierCurve,Mt as dxV3CubicBezierCurve,pt as dxV3QuadraticBezierCurve,Kn as ellipseMovement,h as getRandom,rn as getRandomBoolean,uo as getRandomGrayscaleHSLColor,Vt as getRandomHSLColor,co as getRandomHSLColorWithHue,so as getRandomHSLColorWithLightness,io as getRandomHSLColorWithSaturation,xo as getRandomHSLColorWithinRanges,oo as getRandomHexColor,Tt as getRandomInt,en as getRandomItemFromArray,no as getRandomRGBColor,mo as getShiftedHue,po as getShiftedLightness,fo as getShiftedSaturation,go as getSquareInCircleSide,D as getV2Angle,Kt as getV2AngleBetween,Ut as getV3AngleBetween,bt as getVNAngleBetween,Vo as guid,Qt as hslToHex,jt as hslToRgb,Nr as identity2,Ar as identity3,qr as identity4,Xr as identityN,H as isNumber,re as isSingularMatrix,B as linearEquation,Sn as linearEquationSystem2,wn as linearEquationSystem3,dn as linearEquationSystemN,_n as lissajousCurve,ct as m2Adjugate,Gr as m2AppendRow,P as m2DeepCopy,ot as m2Determinant,gt as m2DivideScalar,st as m2Inverse,wr as m2MulScalar,Wr as m2PrependRow,Ae as m2ReflectionOrigin,qe as m2ReflectionOriginH,Qe as m2ReflectionX,Ge as m2ReflectionXH,Ze as m2ReflectionY,Fe as m2ReflectionYH,je as m2ReflectionYmX,Dr as m2Reset,fe as m2RotateAroundPointH,vt as m2Rotation,lt as m2RotationAroundPointH,xt as m2RotationH,Ht as m2Scale,le as m2ScaleAtPointH,Rt as m2ScaleAtPointHMatrix,Bt as m2ScaleH,Re as m2ScaleX,He as m2ScaleXH,Ee as m2ScaleY,Ne as m2ScaleYH,_e as m2ShearingX,Ue as m2ShearingY,lr as m2Sub,Ir as m2Sum,ie as m2ToCSS,ae as m2Translation,N as m2TranslationH,Hr as m2Transpose,se as m2hToCSS,ue as m2hToCSS3d,zr as m2x2,te as m3Adjugate,Zr as m3AppendRow,tt as m3DeepCopy,Pr as m3Determinant,Rr as m3DivideScalar,ut as m3Inverse,dr as m3MulScalar,Or as m3PrependRow,Xe as m3ReflectionOrigin,Ye as m3ReflectionOriginH,Je as m3ReflectionXY,Ke as m3ReflectionXYH,ke as m3ReflectionXZ,Ce as m3ReflectionXZH,We as m3ReflectionYZ,Oe as m3ReflectionYZH,Tr as m3Reset,St as m3RotationX,he as m3RotationXH,wt as m3RotationY,ye as m3RotationYH,dt as m3RotationZ,Ie as m3RotationZH,Dt as m3Scale,we as m3ScaleH,Be as m3ScaleX,De as m3ScaleXH,Te as m3ScaleY,ze as m3ScaleYH,Le as m3ScaleZ,$e as m3ScaleZH,Sr as m3Sub,vr as m3Sum,me as m3Translation,pe as m3TranslationH,Br as m3Transpose,xe as m3hToCSS3d,Lr as m3x3,$r as m4x4,it as mAdjugate,Yr as mAppendCol,Qr as mAppendRow,b as mDeepCopy,Jr as mDelFirstColumn,Cr as mDelFirstRow,rt as mDelLastColumn,kr as mDelLastRow,E as mDeterminant,q as mDivideScalar,_r as mEqual,Ur as mGetColumn,Kr as mGetFirstColumn,et as mGetLastColumn,X as mInverse,nt as mMinor,R as mMul,U as mMulScalar,V as mMulVector,Er as mNxM,jr as mPrependCol,Fr as mPrependRow,_ as mReset,K as mSub,J as mSum,$ as mTranspose,Y as mod,ho as newId,Ct as radiansToDegrees,ao as rgbToHsl,i as setDecimalPlaces,F as setV2Angle,Un as sineWaveMovement,sn as stringToNumber,Mr as v2,Fn as v2CubicBezierBBox,Lt as v2CubicBezierCurve,At as v2CubicBezierCurveExtrema,Gn as v2CubicBezierCurveNormal,Et as v2CubicBezierCurveTangent,xr as v2Distance,cr as v2DivideScalar,mr as v2DotProduct,br as v2FromPolarCoords,W as v2Length,or as v2MulScalar,d as v2Normalize,Zn as v2QuadraticBezierBBox,zt as v2QuadraticBezierCurve,Nt as v2QuadraticBezierCurveExtrema,Qn as v2QuadraticBezierCurveNormal,$t as v2QuadraticBezierCurveTangent,Me as v2Rotate,Ve as v2RotateH,Se as v2Scale,yt as v2SetLength,O as v2Sub,rr as v2Sum,Vr as v3,fr as v3CrossProduct,Xn as v3CubicBezierCurve,jn as v3CubicBezierCurveTangent,ar as v3Distance,ir as v3DivideScalar,pr as v3DotProduct,sr as v3Length,A as v3MulScalar,I as v3Normalize,qn as v3QuadraticBezierCurve,Yn as v3QuadraticBezierCurveTangent,be as v3RotateX,ge as v3RotateY,ve as v3RotateZ,de as v3Scale,nr as v3Sub,er as v3Sum,hr as v4,ur as vDistance,L as vDivideScalar,v as vDotProduct,C as vEqual,l as vLength,z as vMulScalar,k as vN,w as vNormalize,g as vSub,T as vSum};
//# sourceMappingURL=mz-math.esm.js.map
