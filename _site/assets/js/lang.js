
function setLang(l){document.documentElement.setAttribute('lang',l);try{localStorage.setItem('lang',l);}catch(e){}}
document.addEventListener('DOMContentLoaded',function(){
  let l = 'zh'; try{ l = localStorage.getItem('lang') || 'zh'; }catch(e){}
  setLang(l);
  function bind(id,code){ var el=document.getElementById(id); if(el){ el.addEventListener('click',()=>setLang(code)); } }
  ['btn-ja','mbtn-ja'].forEach(id=>bind(id,'ja'));
  ['btn-zh','mbtn-zh'].forEach(id=>bind(id,'zh'));
  ['btn-en','mbtn-en'].forEach(id=>bind(id,'en'));
  var y=document.getElementById('year'); if(y){ y.textContent = new Date().getFullYear(); }
});
