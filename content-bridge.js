/* Public content + published site overrides + local preview draft. No remote backend. */
(function(){
 'use strict';
 const base=window.WELLGOING_CONTENT||{};
 function merge(a,b){if(!b||typeof b!=='object')return a;for(const [k,v] of Object.entries(b)){if(v&&typeof v==='object'){a[k]=merge(a[k]&&typeof a[k]==='object'?a[k]:(Array.isArray(v)?[]:{}),v)}else if(typeof v==='string'){a[k]=v}}return a}
 // 운영형 사이트에서는 사용자 브라우저의 임시 콘텐츠가 게시 내용보다 우선하지 않습니다.
 window.WELLGOING_CONTENT=merge(typeof structuredClone==='function'?structuredClone(base):JSON.parse(JSON.stringify(base)),window.WELLGOING_PUBLISHED_PATCH||{});
 function readPath(obj,path){return path.split('.').reduce((o,k)=>o&&o[k],obj)}

 const imagePatch=window.WELLGOING_CONTENT.images||{};
 if(imagePatch.body && window.WELLGOING_CONTENT.products?.body)window.WELLGOING_CONTENT.products.body.image=imagePatch.body;
 if(imagePatch.dent && window.WELLGOING_CONTENT.products?.dent)window.WELLGOING_CONTENT.products.dent.image=imagePatch.dent;
 document.addEventListener('DOMContentLoaded',()=>{
   document.querySelectorAll('img[data-asset-key]').forEach(el=>{const src=imagePatch[el.dataset.assetKey];if(typeof src==='string' && (src.startsWith('data:image/') || /^assets\/uploads\/[a-f0-9]{32}\.webp$/.test(src)))el.src=src});
 
   document.querySelectorAll('[data-edit]').forEach(el=>{const raw=readPath(window.WELLGOING_CONTENT,el.dataset.edit);if(typeof raw==='string'){el.textContent=raw;el.style.whiteSpace='pre-line'}})
   const mainHeadline=document.querySelector('#hero-title');
   if(mainHeadline && window.WELLGOING_PUBLISHED_PATCH?.heroLead){const lines=String(window.WELLGOING_CONTENT.heroLead||'').split('\n');mainHeadline.replaceChildren();lines.forEach((line,i)=>{if(i)mainHeadline.append(document.createElement('br'));if(i===1){const em=document.createElement('em');em.textContent=line;mainHeadline.append(em)}else mainHeadline.append(document.createTextNode(line))});}
   const primaryThumb=document.querySelector('.gallery-thumb[data-gallery-image="assets/body-sheet.webp"]');
   if(primaryThumb && imagePatch.body && /^assets\/uploads\/[a-f0-9]{32}\.webp$/.test(imagePatch.body)){ primaryThumb.dataset.galleryImage=imagePatch.body; const img=primaryThumb.querySelector('img');if(img)img.src=imagePatch.body; }
   const pic=document.querySelector('#body-gallery-image');
   document.querySelectorAll('[data-gallery-image]').forEach(b=>b.addEventListener('click',()=>{if(pic){pic.src=b.dataset.galleryImage;pic.alt=b.dataset.galleryAlt||'';}document.querySelectorAll('.gallery-thumb').forEach(e=>e.classList.toggle('active',e===b))}));
   const form=document.querySelector('#inquiryForm');if(form && !window.WELLGOING_INQUIRY_API){
     const preset=new URLSearchParams(location.search).get('type');if(preset && form.elements.type.querySelector('option[value="'+preset.replace(/[^a-z]/g,'')+'"]'))form.elements.type.value=preset;
     form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const d=new FormData(form);const kinds={product:'제품 문의',institution:'기관 공급',ai:'AI 케어',global:'해외 유통',partnership:'사업 제휴'};const tag=kinds[d.get('type')]||'기타 문의';const subject='[웰고잉] '+tag+' / '+d.get('name');const body=['문의 유형: '+tag,'성함: '+d.get('name'),'기관: '+(d.get('org')||'-'),'이메일: '+d.get('email'),'연락처: '+(d.get('phone')||'-'),'','문의 내용:',d.get('message')].join('\n');location.href='mailto:wellgoing@wellgoing.kr?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);document.querySelector('#formFeedback').textContent='이메일 작성 화면이 열리지 않으면 wellgoing@wellgoing.kr로 직접 보내주세요. 이 페이지는 문의 내용을 저장하지 않습니다.'})
   }
 })
})();
