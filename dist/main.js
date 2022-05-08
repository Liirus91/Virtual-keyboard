(()=>{"use strict";let e=(e,t,s)=>{var a,c,r=e.value,o=e.ownerDocument;"number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd?(a=e.selectionEnd,e.value=r.slice(0,a)+t+r.slice(a),e.selectionStart=e.selectionEnd=a+t.length+(s||0)):"undefined"!=o.selection&&o.selection.createRange&&(e.focus(),(c=o.selection.createRange()).collapse(!1),c.text=t,c.select())},t=(e,t)=>{var s,a,c=e.value,r=e.ownerDocument;"number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd?(s=e.selectionEnd,e.value=c.slice(0,s-1)+c.slice(s),e.selectionStart=e.selectionEnd=s-1+(t||0)):"undefined"!=r.selection&&r.selection.createRange&&(e.focus(),(a=r.selection.createRange()).collapse(!1),a.select())},s=e=>{for(let t=0;t<e.length;t++){const s=e[t].innerText;"Tab"==s||"Caps Lock"==s||"Shift"==s||"Ctrl"==s||"Alt"==s||"Win"==s||" "==s||"Backspace"==s||"Enter"==s||"Del"==s?e[t].setAttribute("upperCaseName",e[t].innerText):"`"==s?e[t].setAttribute("upperCaseName","~"):"1"==s?e[t].setAttribute("upperCaseName","!"):"2"==s?e[t].setAttribute("upperCaseName","@"):"3"==s?e[t].setAttribute("upperCaseName","#"):"4"==s?e[t].setAttribute("upperCaseName","$"):"5"==s?e[t].setAttribute("upperCaseName","%"):"6"==s?e[t].setAttribute("upperCaseName","^"):"7"==s?e[t].setAttribute("upperCaseName","&"):"8"==s?e[t].setAttribute("upperCaseName","*"):"9"==s?e[t].setAttribute("upperCaseName","("):"0"==s?e[t].setAttribute("upperCaseName",")"):"-"==s?e[t].setAttribute("upperCaseName","_"):"="==s?e[t].setAttribute("upperCaseName","+"):"["==s?e[t].setAttribute("upperCaseName","{"):"]"==s?e[t].setAttribute("upperCaseName","}"):";"==s?e[t].setAttribute("upperCaseName",":"):"'"==s?e[t].setAttribute("upperCaseName",'"'):"\\"==s?e[t].setAttribute("upperCaseName","|"):","==s?e[t].setAttribute("upperCaseName","<"):"."==s?e[t].setAttribute("upperCaseName",">"):"/"==s?e[t].setAttribute("upperCaseName","?"):e[t].setAttribute("upperCaseName",e[t].innerText.toUpperCase()),e[t].setAttribute("keyname",e[t].innerText)}};const a=()=>"ru"===localStorage.getItem("language")?["ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"]:["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],c=()=>"ru"===localStorage.getItem("language")?["Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","Del"]:["Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Del"],r=()=>"ru"===localStorage.getItem("language")?["Caps Lock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter"]:["Caps Lock","a","s","d","f","g","h","j","k","l",";","'","Enter"],o=()=>"ru"===localStorage.getItem("language")?["Shift","я","ч","с","м","и","т","ь","б","ю",".","▲","Shift"]:["Shift","z","x","c","v","b","n","m",",",".","/","▲","Shift"],i=["Ctrl","Win","Alt"," ","Alt","◄","▼","►","Ctrl"];let l=a(),n=c(),m=r(),d=o();const u=document.createElement("div");u.className="container",document.body.append(u);const v=document.createElement("textarea");v.className="text",u.append(v);const p=document.createElement("div");p.className="keyboard_wrapp",u.append(p);const y=document.createElement("div");y.className="keyboard_keys",p.append(y);const k=document.createElement("p");k.className="description",u.append(k),k.innerText="Клавиатура создана в операционной системе Windows";const L=document.createElement("p");L.className="language",u.append(L),L.innerText="Для переключения языка комбинация: левыe ctrl + alt";const g=document.createElement("div");g.className="row",y.append(g);for(let e=0;e<l.length;e++){const t=document.createElement("div");"Backspace"==l[e]?t.className="keys backspace_key":t.className="keys",t.innerHTML=`${l[e]}`,g.append(t)}const A=document.createElement("div");A.className="row",y.append(A);for(let e=0;e<n.length;e++){const t=document.createElement("div");"Tab"==n[e]?t.className="keys tab_key":"\\"==n[e]?t.className="keys slash_key":"Del"==n[e]?t.className="keys del_key":t.className="keys",t.innerHTML=`${n[e]}`,A.append(t)}const f=document.createElement("div");f.className="row",y.append(f);for(let e=0;e<m.length;e++){const t=document.createElement("div");"Caps Lock"==m[e]?t.className="keys capsLock_key":"Enter"==m[e]?t.className="keys enter_key":t.className="keys",t.innerHTML=`${m[e]}`,f.append(t)}const h=document.createElement("div");h.className="row",y.append(h);for(let e=0;e<d.length;e++){const t=document.createElement("div");"Shift"==d[e]&&0===e?t.className="keys shift_key left_shift_key":"Shift"==d[e]&&0!==e?t.className="keys shift_key right_shift_key":"▲"==d[e]?t.className="keys up_arrow_key":t.className="keys",t.innerHTML=`${d[e]}`,h.append(t)}const b=document.createElement("div");b.className="row",y.append(b);for(let e=0;e<i.length;e++){const t=document.createElement("div");t.className="Ctrl"==i[e]&&0===e?"keys сtrl_key left_ctrl_key":"Ctrl"==i[e]&&0!==e?"keys сtrl_key right_ctrl_key":"Win"==i[e]?"keys win_key":" "==i[e]?"keys spacebar_key":"Alt"==i[e]&&2===e?"keys alt_key left_alt_key":"Alt"==i[e]&&2!==e?"keys alt_key right_alt_key":"◄"==i[e]?"keys left_arrow_key":"▼"==i[e]?"keys down_arrow_key":"►"==i[e]?"keys right_arrow_key":"keys",t.innerHTML=`${i[e]}`,b.append(t)}let _=document.querySelectorAll(".keys"),S=document.querySelector(".spacebar_key"),N=document.querySelector(".left_shift_key"),C=document.querySelector(".right_shift_key"),E=document.querySelector(".capsLock_key"),w=document.querySelector(".tab_key"),T=document.querySelector(".left_ctrl_key"),q=document.querySelector(".right_ctrl_key"),x=document.querySelector(".left_alt_key"),R=document.querySelector(".right_alt_key"),D=document.querySelector(".win_key"),I=document.querySelector(".del_key"),M=document.querySelector(".left_arrow_key"),W=document.querySelector(".right_arrow_key"),$=document.querySelector(".up_arrow_key"),B=document.querySelector(".down_arrow_key");s(_),window.addEventListener("keydown",(e=>{for(let t=0;t<_.length;t++)v.focus(),e.key!=_[t].getAttribute("keyname")&&e.key!=_[t].getAttribute("upperCaseName")||_[t].classList.add("active"),"Space"==e.code&&S.classList.add("active"),"ShiftLeft"==e.code&&C.classList.remove("active"),"ShiftRight"==e.code&&N.classList.remove("active"),"CapsLock"===e.code&&"Caps Lock"==_[t].getAttribute("keyname")&&E.classList.toggle("active"),"Tab"==e.code&&(w.classList.add("active"),w.classList.remove("active"),w.classList.add("remove"),setTimeout((()=>w.classList.remove("remove")),200)),"ControlLeft"==e.code&&"Ctrl"==_[t].getAttribute("keyname")&&(_[t].classList.add("active"),q.classList.remove("active")),"ControlRight"==e.code&&"Ctrl"==_[t].getAttribute("keyname")&&(_[t].classList.add("active"),T.classList.remove("active")),"AltLeft"==e.code&&"Alt"==_[t].getAttribute("keyname")&&(_[t].classList.add("active"),R.classList.remove("active")),"AltRight"==e.code&&"Alt"==_[t].getAttribute("keyname")&&(_[t].classList.add("active"),x.classList.remove("active")),"MetaLeft"==e.code&&"Win"==_[t].getAttribute("keyname")&&(D.classList.add("active"),D.classList.remove("active"),D.classList.add("remove"),setTimeout((()=>D.classList.remove("remove")),200)),"Delete"==e.code&&I.classList.add("active"),"ArrowDown"==e.code&&B.classList.add("active"),"ArrowUp"==e.code&&$.classList.add("active"),"ArrowRight"==e.code&&W.classList.add("active"),"ArrowLeft"==e.code&&M.classList.add("active");if((e.shiftKey&&N.classList.contains("active")||e.shiftKey&&C.classList.contains("active")||E.classList.contains("active"))&&_.forEach((e=>e.innerText=e.getAttribute("uppercasename")?e.getAttribute("uppercasename"):e.getAttribute("keyname"))),e.ctrlKey&&e.altKey){"ru"!=localStorage.getItem("language")?localStorage.setItem("language","ru"):localStorage.setItem("language","en"),l=a();const e=document.querySelectorAll(".row:nth-child(1) > div");e.forEach((t=>t.innerText=l[Array.from(e).indexOf(t)])),n=c();const t=document.querySelectorAll(".row:nth-child(2) > div");t.forEach((e=>e.innerText=n[Array.from(t).indexOf(e)])),m=r();const i=document.querySelectorAll(".row:nth-child(3) > div");i.forEach((e=>e.innerText=m[Array.from(i).indexOf(e)])),d=o();const u=document.querySelectorAll(".row:nth-child(4) > div");u.forEach((e=>e.innerText=d[Array.from(u).indexOf(e)])),s(_)}})),window.addEventListener("keyup",(e=>{for(let t=0;t<_.length;t++)e.key!=_[t].getAttribute("keyname")&&e.key!=_[t].getAttribute("upperCaseName")||(_[t].classList.remove("active"),_[t].classList.add("remove")),"Space"==e.code&&(S.classList.remove("active"),S.classList.add("remove")),"ShiftLeft"==e.code&&(C.classList.remove("active"),C.classList.remove("remove")),"ShiftRight"==e.code&&(N.classList.remove("active"),N.classList.remove("remove")),"Tab"==e.code&&(w.classList.remove("active"),w.classList.add("remove")),"ControlLeft"==e.code&&(T.classList.remove("active"),q.classList.remove("remove")),"ControlRight"==e.code&&(q.classList.remove("active"),T.classList.remove("remove")),"AltLeft"==e.code&&(x.classList.remove("active"),R.classList.remove("remove")),"AltRight"==e.code&&(R.classList.remove("active"),x.classList.remove("remove")),"Delete"==e.code&&(I.classList.remove("active"),I.classList.add("remove")),"ArrowDown"==e.code&&(B.classList.remove("active"),B.classList.add("remove")),"ArrowUp"==e.code&&($.classList.remove("active"),$.classList.add("remove")),"ArrowRight"==e.code&&(W.classList.remove("active"),W.classList.add("remove")),"ArrowLeft"==e.code&&(M.classList.remove("active"),M.classList.add("remove")),(N.classList.contains("remove")||C.classList.contains("remove")||!E.classList.contains("active"))&&document.querySelectorAll(".keys").forEach((e=>e.innerText=e.getAttribute("keyname"))),setTimeout((()=>_[t].classList.remove("remove")),200)}));for(let s=0;s<_.length;s++){const a=_[s].getAttribute("keyname");_[s].addEventListener("mousedown",(c=>{""==a?e(v," "):"Tab"==a||"Caps Lock"==a||"Shift"==a||"Ctrl"==a||"Win"==a||"Alt"==a||"▲"==a||"▼"==a?e(v,""):"Backspace"==a?t(v):"Enter"==a?v.value+="\n":"◄"==a?(v.selectionStart=v.selectionStart-1,v.selectionEnd=v.selectionEnd-1):"►"==a?(v.selectionStart=v.selectionStart+1,v.selectionEnd=v.selectionEnd+1):"Del"==a?v.selectionStart!==v.value.length?(v.selectionStart+=1,t(v)):e(v,""):e(v,c.target.innerText),"Caps Lock"==a?_[s].classList.toggle("active"):_[s].classList.add("active"),(N.classList.contains("active")||C.classList.contains("active")||E.classList.contains("active"))&&_.forEach((e=>e.innerText=e.getAttribute("uppercasename")?e.getAttribute("uppercasename"):e.getAttribute("keyname")))})),_[s].addEventListener("mouseup",(e=>{"Caps Lock"!=a&&(_[s].classList.remove("active"),_[s].classList.add("remove")),(N.classList.contains("remove")||C.classList.contains("remove")||!E.classList.contains("active"))&&document.querySelectorAll(".keys").forEach((e=>e.innerText=e.getAttribute("keyname"))),setTimeout((()=>_[s].classList.remove("remove")),200)}))}})();
//# sourceMappingURL=main.js.map