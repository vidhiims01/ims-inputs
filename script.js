(function(){
const root=document.documentElement,btns=document.querySelectorAll('.theme button');
function setTheme(t){root.dataset.theme=t;btns.forEach(b=>b.setAttribute('aria-pressed',b.dataset.theme===t))}
setTheme(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
btns.forEach(b=>b.addEventListener('click',()=>setTheme(b.dataset.theme)));
document.querySelectorAll('[data-pw]').forEach(b=>b.addEventListener('click',()=>{
 const i=document.getElementById(b.dataset.pw),show=i.type==='password';
 i.type=show?'text':'password';b.textContent=show?'Hide':'Show';b.setAttribute('aria-label',show?'Hide password':'Show password')}));
const s=document.getElementById('search'),c=document.getElementById('clear');
s.addEventListener('input',()=>c.hidden=!s.value);
c.addEventListener('click',()=>{s.value='';c.hidden=true;s.focus()});
const n=document.getElementById('num');
document.querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',()=>{
 n.value=Math.max(0,(+n.value||0)+ +b.dataset.step)}));
const t=document.getElementById('bio'),k=document.getElementById('count');
t.addEventListener('input',()=>k.textContent=t.value.length+' / 200');
const e=document.getElementById('email'),h=document.getElementById('email-help'),ctl=e.parentElement;
function check(){
 const v=e.value.trim(),ok=/^\S+@\S+\.\S+$/.test(v);
 ctl.classList.toggle('is-error',!!v&&!ok);ctl.classList.toggle('is-success',ok);
 e.setAttribute('aria-invalid',!!v&&!ok);
 h.querySelector('use').setAttribute('href',!v?'#i-info':ok?'#i-check':'#i-alert');
 h.className='helper'+(!v?'':ok?' suc':' err');
 h.lastChild.textContent=!v?'We will send the interview invite here.':ok?'Looks good.':'Enter an email like name@company.com.'}
e.addEventListener('input',check);
document.querySelectorAll('[data-indeterminate]').forEach(i=>i.indeterminate=true);
})();
