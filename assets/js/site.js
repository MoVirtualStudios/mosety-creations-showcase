const nav=document.querySelector('.mc-navbar');
const updateNav=()=>nav&&nav.classList.toggle('is-scrolled',window.scrollY>12);updateNav();window.addEventListener('scroll',updateNav,{passive:true});
const reveal=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');reveal.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
