/* WELLGOING V7 — progressive enhancement: motion never gates site functionality */
(()=>{
 'use strict';
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
 const progress=document.createElement('div');progress.className='wg-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
 let scheduled=false;
 const update=()=>{scheduled=false;const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);progress.style.width=Math.max(0,Math.min(100,scrollY/max*100))+'%';};
 const onScroll=()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update)}};
 window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll,{passive:true});onScroll();
 // Animate actual content once it becomes visible. If observing fails, leave it visible.
 if(!reduce.matches && 'IntersectionObserver' in window){
  const targets=[...document.querySelectorAll('.inner-page .pillar-grid article, .inner-page .credential-grid article, .inner-page .usage-cards article, .inner-page .structure-grid > *, .trust-list > div, .product-grid > article, .partner-card-grid > article')];
  const obs=new IntersectionObserver(items=>items.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('wg-visible');obs.unobserve(entry.target)}}),{threshold:0.04,rootMargin:'0px 0px 80px 0px'});
  for(const t of targets){t.classList.add('wg-reveal');obs.observe(t)}
  // Reveal immediately if reduced motion changes mid-session.
  const disable=()=>{if(reduce.matches){targets.forEach(t=>t.classList.add('wg-visible'));obs.disconnect();document.documentElement.classList.remove('wg-motion-ready')}};
  reduce.addEventListener?.('change',disable);
  document.documentElement.classList.add('wg-motion-ready');
 }
 // A subtle light-reflection follow effect; only on fine-pointer devices.
 if(window.matchMedia('(hover:hover) and (pointer:fine)').matches&&!reduce.matches){
  document.querySelectorAll('.product-editorial-image').forEach(el=>{
   el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.setProperty('--wg-mx',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');el.style.setProperty('--wg-my',((e.clientY-r.top)/r.height*100).toFixed(1)+'%')},{passive:true});
   el.addEventListener('pointerleave',()=>{el.style.setProperty('--wg-mx','50%');el.style.setProperty('--wg-my','50%')});
  });
 }
 // A compact marker that integrates visually without pretending to be a real video carousel.
 const cue=document.querySelector('.hero-v2');
 if(cue){let n=document.createElement('span');n.className='wg-scroll-cue';n.setAttribute('aria-hidden','true');cue.append(n)}
})();
