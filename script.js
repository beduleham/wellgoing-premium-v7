(()=>{
 'use strict';
 const $=(q,el=document)=>el.querySelector(q);
 const $$=(q,el=document)=>Array.from(el.querySelectorAll(q));
 const content=window.WELLGOING_CONTENT||{};
 // Editable copy strings
 $$('[data-copy]').forEach(el=>{
   const raw=content[el.dataset.copy];if(typeof raw==='string'){
     el.textContent=raw;el.style.whiteSpace='pre-line';
   }
 });
 // Mobile menu
 const toggle=$('#navToggle'),mobile=$('#mobileNav');
 function navClose(){if(!toggle||!mobile)return;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','메뉴 열기');mobile.hidden=true;document.body.classList.remove('menu-open');}
 if(toggle&&mobile){toggle.addEventListener('click',()=>{
   const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');mobile.hidden=!open;document.body.classList.toggle('menu-open',open);
 });$$('a',mobile).forEach(a=>a.addEventListener('click',navClose));document.addEventListener('keydown',e=>{if(e.key==='Escape')navClose()});}
 // Scroll appearance
 if('IntersectionObserver' in window){let obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');obs.unobserve(e.target)}})},{threshold:.11,rootMargin:'0px 0px 30px 0px'});$$('.appear').forEach(el=>obs.observe(el));}
 else $$('.appear').forEach(el=>el.classList.add('in-view'));
 // The AI step examples are explanatory, not a real product screenshot.
 const steps=content.aiSteps||[];
 $$('[data-step]').forEach(button=>button.addEventListener('click',()=>{
   const i=Number(button.dataset.step),step=steps[i];if(!step)return;
   $$('[data-step]').forEach(b=>{let yes=b===button;b.classList.toggle('active',yes);b.setAttribute('aria-selected',String(yes))});
   $('#aiMockNo').textContent=`STEP ${String(i+1).padStart(2,'0')} / 05`;
   $('#aiMockTitle').textContent=step.title;$('#aiMockText').textContent=step.description;
 }));
 // Accessible product detail dialog
 const modal=$('#productModal'),close=$('#modalClose');
 const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function showProduct(type){const data=content.products?.[type];if(!data||!modal)return;
   $('#modalTitle').textContent=data.title;$('#modalKicker').textContent=data.kicker;$('#modalDescription').textContent=data.description;
   $('#modalVisual').innerHTML=`<img src="${esc(data.image)}" alt="${esc(data.imageAlt)}" />`;
   $('#modalSpecs').innerHTML=data.specs.map(([k,v])=>`<li><span>${esc(k)}</span><strong>${esc(v)}</strong></li>`).join('');
   $('#modalDisclaimer').textContent=data.note;
   const action=$('#modalAction');action.href=data.href;action.textContent=data.action;
   if(data.href.startsWith('https:')){action.target='_blank';action.rel='noopener noreferrer'}else{action.removeAttribute('target');action.removeAttribute('rel')}
   if(typeof modal.showModal==='function')modal.showModal();else modal.setAttribute('open','');
 }
 $$('[data-modal]').forEach(b=>b.addEventListener('click',()=>showProduct(b.dataset.modal)));
 if(close)close.addEventListener('click',()=>modal.close());
 if(modal)modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
 // Active menu link state (not affecting links)
 const navLinks=$$('.desktop-nav a');
 if('IntersectionObserver' in window){const sectionObs=new IntersectionObserver(entries=>entries.forEach(e=>{
   if(e.isIntersecting)navLinks.forEach(a=>a.classList.toggle('current',a.hash==='#'+e.target.id));
 }),{rootMargin:'-28% 0px -65% 0px'});
 ['brand','products','ai-care','partnership'].forEach(id=>{const el=document.getElementById(id);if(el)sectionObs.observe(el)});}
})();
