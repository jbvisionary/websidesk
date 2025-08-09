document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('homeLink').addEventListener('click', (e)=>{
  e.preventDefault();
  window.scrollTo({top:0,behavior:'smooth'});
});
document.getElementById('exploreBtn').addEventListener('click', ()=>{
  document.getElementById('products').scrollIntoView({behavior:'smooth'});
});
