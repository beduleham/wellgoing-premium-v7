/* WELLGOING V8 — keyboard, focus and contact experience */
(()=>{'use strict';
const $=(q,b=document)=>b.querySelector(q),$$=(q,b=document)=>Array.from(b.querySelectorAll(q));
const menu=$('#mobileNav'),toggle=$('#navToggle');
function closeMenu(refocus=false){if(!menu||!toggle||menu.hidden)return;menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','메뉴 열기');document.body.classList.remove('menu-open');if(refocus)toggle.focus()}
if(menu&&toggle){
 toggle.addEventListener('click',()=>{if(!menu.hidden)$('a',menu)?.focus()});
 document.addEventListener('pointerdown',e=>{if(!menu.hidden&&!menu.contains(e.target)&&!toggle.contains(e.target))closeMenu()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){e.preventDefault();closeMenu(true)}});
 window.addEventListener('resize',()=>{if(innerWidth>850)closeMenu()},{passive:true});
 menu.addEventListener('keydown',e=>{if(e.key!=='Tab'||menu.hidden)return;const links=$$('a[href]',menu);if(!links.length)return;if(e.shiftKey&&document.activeElement===links[0]||!e.shiftKey&&document.activeElement===links[links.length-1]){e.preventDefault();toggle.focus()}});
}
const dialog=$('#productModal');let opener=null;
if(dialog){$$('[data-modal]').forEach(b=>b.addEventListener('click',()=>{opener=b}));dialog.addEventListener('close',()=>{if(opener?.isConnected)opener.focus();opener=null})}
const tabs=$$('[role="tab"][data-step]');
if(tabs.length){
 const panel=$('.mock-panel')||$('#aiMockTitle')?.parentElement;
 if(panel){panel.id=panel.id||'wg-care-step-panel';panel.setAttribute('role','tabpanel');panel.setAttribute('tabindex','0')}
 tabs.forEach((tab,i)=>{
  tab.id=tab.id||'wg-care-tab-'+(i+1);tab.setAttribute('tabindex',tab.classList.contains('active')?'0':'-1');
  if(panel)tab.setAttribute('aria-controls',panel.id);
  tab.addEventListener('click',()=>{tabs.forEach(x=>x.setAttribute('tabindex',x===tab?'0':'-1'));if(panel)panel.setAttribute('aria-labelledby',tab.id)});
  tab.addEventListener('keydown',e=>{let to=i;if(e.key==='ArrowDown'||e.key==='ArrowRight')to=(i+1)%tabs.length;else if(e.key==='ArrowUp'||e.key==='ArrowLeft')to=(i-1+tabs.length)%tabs.length;else if(e.key==='Home')to=0;else if(e.key==='End')to=tabs.length-1;else return;e.preventDefault();tabs[to].focus();tabs[to].click()});
 });
 const active=tabs.find(x=>x.getAttribute('aria-selected')==='true');if(active&&panel)panel.setAttribute('aria-labelledby',active.id);
}
const thumbs=$$('.gallery-thumb[data-gallery-image]');
thumbs.forEach((btn,i)=>{const img=$('img',btn);btn.type='button';btn.setAttribute('aria-label',(img?.alt||'제품 이미지 '+(i+1))+' 보기');btn.setAttribute('aria-pressed',btn.classList.contains('active')?'true':'false');btn.addEventListener('click',()=>thumbs.forEach(x=>x.setAttribute('aria-pressed',String(x===btn))))});
const form=$('#inquiryForm');
if(form){
 const feedback=$('#formFeedback'),submit=$('button[type="submit"]',form);
 if(submit)submit.textContent='이메일 앱에서 문의 작성하기 ↗';
 const note=document.createElement('p');note.className='wg-mail-note';note.textContent='이 사이트는 문의를 접수·저장하지 않습니다. 버튼을 누르면 이메일 작성 앱이 열리며, 앱에서 직접 보내기를 눌러야 전달됩니다.';submit?.before(note);
 const actions=document.createElement('div');actions.className='wg-mail-actions';
 const copy=document.createElement('button');copy.className='wg-copy-address';copy.type='button';copy.textContent='이메일 주소 복사';
 const status=document.createElement('span');status.className='wg-mail-status';status.setAttribute('role','status');
 actions.append(copy,status);submit?.after(actions);
 copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('wellgoing@wellgoing.kr');status.textContent='이메일 주소를 복사했습니다.'}catch{status.textContent='복사할 수 없다면 주소를 직접 선택해 주세요: wellgoing@wellgoing.kr'}});
 form.addEventListener('submit',()=>{if(feedback)feedback.textContent='이메일 앱이 열리면 내용을 확인하고 직접 보내기를 눌러주세요. 이메일 작성 화면이 나타나지 않으면 주소를 복사해 직접 발송해 주세요.'});
}
})();
