const openNav=document.querySelector('.open__nav');
const closeNav=document.querySelector('.close__nav');
const navItem=document.querySelector('.nav__item');

openNav.addEventListener('click',()=>{
  navItem.style.display="block";
})

closeNav.addEventListener('click',()=>{
  navItem.style.display="none";
})