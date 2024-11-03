import{S as We,i as Be,s as Fe,k as o,q as n,a as f,l as a,m as r,r as m,h as t,c as p,J as _e,n as u,b as l,C as s,B as we}from"./index-fd23df92.js";function Ge(Ce){let h,Y,C,g,ee,S,b,te,U,d,ie,W,I,E,le,D,v,z,se,oe,A,y,ge,B,P,ae,F,k,re,G,H,ne,j,c,fe,_,me,pe,$,L,x,be,J,O,ue,Z,M,he,K,w,Se=`<code class="language-make">
extract: clean
	# Remove the first 4 bytes (apparently checksum?)
	dd if=op1_243.op1 of=staging/truncated.bin bs=1 skip=4

	# Use the decompressor from here (https://github.com/frizb/FirmwareReverseEngineering/blob/master/LZMADecompress.py) to convert the lzma compressed data to a tar archive
	python3 decomp.py -input staging/truncated.bin -output staging/tar.bin

	# Untar the archive
	cd extractedfs &amp;&amp; cp ../staging/tar.bin ./tar.bin &amp;&amp; tar xvf ./tar.bin &amp;&amp; rm ./tar.bin &amp;&amp; cd ..

clean:
	-rm -r staging/*
	-sudo rm -r extractedfs/*</code>`,N,R,ce,Q,T,q,de;return{c(){h=o("h2"),Y=n("> DISCLAIMER"),C=f(),g=o("p"),ee=n("I don\u2019t mean to cause any trouble with teenage engineering. I do not work for them and I have nothing to do with them other than that I think they make cool musical instruments."),S=f(),b=o("h2"),te=n("> TL;DR"),U=f(),d=o("p"),ie=n("This is just a WIP that i\u2019ll update periodically on my findings from reverse engineering the teenage engineering op-1"),W=f(),I=o("ul"),E=o("li"),le=n("How does it work"),D=o("ul"),v=o("li"),z=o("p"),se=n("The OP1 uses sqlite at it\u2019s core!"),oe=f(),A=o("p"),y=o("img"),B=f(),P=o("h2"),ae=n("How I got started"),F=f(),k=o("p"),re=n("I got interested coz I want an OP1 but it costs a lot of money and the firmware is not open source."),G=f(),H=o("h3"),ne=n("> Building the toolchain"),j=f(),c=o("p"),fe=n("When you go to "),_=o("a"),me=n("eenage engineering\u2019s op1 firmware download page"),pe=n(" it looks like this:"),$=f(),L=o("p"),x=o("img"),J=f(),O=o("p"),ue=n("It only gives you instructions on how to flash the firmware to the OP1 and no clues as to how the image is built."),Z=f(),M=o("h3"),he=n("$ Final toolchain"),K=f(),w=o("pre"),N=f(),R=o("h3"),ce=n("> random interesting things"),Q=f(),T=o("p"),q=o("img"),this.h()},l(e){h=a(e,"H2",{});var i=r(h);Y=m(i,"> DISCLAIMER"),i.forEach(t),C=p(e),g=a(e,"P",{});var Ie=r(g);ee=m(Ie,"I don\u2019t mean to cause any trouble with teenage engineering. I do not work for them and I have nothing to do with them other than that I think they make cool musical instruments."),Ie.forEach(t),S=p(e),b=a(e,"H2",{});var Ee=r(b);te=m(Ee,"> TL;DR"),Ee.forEach(t),U=p(e),d=a(e,"P",{});var ye=r(d);ie=m(ye,"This is just a WIP that i\u2019ll update periodically on my findings from reverse engineering the teenage engineering op-1"),ye.forEach(t),W=p(e),I=a(e,"UL",{});var Pe=r(I);E=a(Pe,"LI",{});var ve=r(E);le=m(ve,"How does it work"),D=a(ve,"UL",{});var ke=r(D);v=a(ke,"LI",{});var V=r(v);z=a(V,"P",{});var He=r(z);se=m(He,"The OP1 uses sqlite at it\u2019s core!"),He.forEach(t),oe=p(V),A=a(V,"P",{});var Le=r(A);y=a(Le,"IMG",{src:!0,alt:!0}),Le.forEach(t),V.forEach(t),ke.forEach(t),ve.forEach(t),Pe.forEach(t),B=p(e),P=a(e,"H2",{});var xe=r(P);ae=m(xe,"How I got started"),xe.forEach(t),F=p(e),k=a(e,"P",{});var Oe=r(k);re=m(Oe,"I got interested coz I want an OP1 but it costs a lot of money and the firmware is not open source."),Oe.forEach(t),G=p(e),H=a(e,"H3",{});var Me=r(H);ne=m(Me,"> Building the toolchain"),Me.forEach(t),j=p(e),c=a(e,"P",{});var X=r(c);fe=m(X,"When you go to "),_=a(X,"A",{href:!0,rel:!0});var Re=r(_);me=m(Re,"eenage engineering\u2019s op1 firmware download page"),Re.forEach(t),pe=m(X," it looks like this:"),X.forEach(t),$=p(e),L=a(e,"P",{});var Te=r(L);x=a(Te,"IMG",{src:!0,alt:!0}),Te.forEach(t),J=p(e),O=a(e,"P",{});var qe=r(O);ue=m(qe,"It only gives you instructions on how to flash the firmware to the OP1 and no clues as to how the image is built."),qe.forEach(t),Z=p(e),M=a(e,"H3",{});var De=r(M);he=m(De,"$ Final toolchain"),De.forEach(t),K=p(e),w=a(e,"PRE",{class:!0});var Ue=r(w);Ue.forEach(t),N=p(e),R=a(e,"H3",{});var ze=r(R);ce=m(ze,"> random interesting things"),ze.forEach(t),Q=p(e),T=a(e,"P",{});var Ae=r(T);q=a(Ae,"IMG",{src:!0,alt:!0}),Ae.forEach(t),this.h()},h(){_e(y.src,ge="https://user-images.githubusercontent.com/42625905/164894645-f9d8b06e-ca27-412a-8076-1cba98923270.png")||u(y,"src",ge),u(y,"alt","sql commands seen in a firmware binary"),u(_,"href","https://teenage.engineering/downloads/op-1"),u(_,"rel","nofollow"),_e(x.src,be="https://user-images.githubusercontent.com/42625905/164894773-97804b46-4299-4666-8c19-8721e968e58c.png")||u(x,"src",be),u(x,"alt","image"),u(w,"class","language-make"),_e(q.src,de="https://user-images.githubusercontent.com/42625905/164894849-186ef591-d035-4079-84c4-d75308b8cb21.png")||u(q,"src",de),u(q,"alt","image")},m(e,i){l(e,h,i),s(h,Y),l(e,C,i),l(e,g,i),s(g,ee),l(e,S,i),l(e,b,i),s(b,te),l(e,U,i),l(e,d,i),s(d,ie),l(e,W,i),l(e,I,i),s(I,E),s(E,le),s(E,D),s(D,v),s(v,z),s(z,se),s(v,oe),s(v,A),s(A,y),l(e,B,i),l(e,P,i),s(P,ae),l(e,F,i),l(e,k,i),s(k,re),l(e,G,i),l(e,H,i),s(H,ne),l(e,j,i),l(e,c,i),s(c,fe),s(c,_),s(_,me),s(c,pe),l(e,$,i),l(e,L,i),s(L,x),l(e,J,i),l(e,O,i),s(O,ue),l(e,Z,i),l(e,M,i),s(M,he),l(e,K,i),l(e,w,i),w.innerHTML=Se,l(e,N,i),l(e,R,i),s(R,ce),l(e,Q,i),l(e,T,i),s(T,q)},p:we,i:we,o:we,d(e){e&&t(h),e&&t(C),e&&t(g),e&&t(S),e&&t(b),e&&t(U),e&&t(d),e&&t(W),e&&t(I),e&&t(B),e&&t(P),e&&t(F),e&&t(k),e&&t(G),e&&t(H),e&&t(j),e&&t(c),e&&t($),e&&t(L),e&&t(J),e&&t(O),e&&t(Z),e&&t(M),e&&t(K),e&&t(w),e&&t(N),e&&t(R),e&&t(Q),e&&t(T)}}}const $e={title:"OP1 firmware reverse engineering",date:"sometime"};class Je extends We{constructor(h){super(),Be(this,h,null,Ge,Fe,{})}}export{Je as default,$e as metadata};