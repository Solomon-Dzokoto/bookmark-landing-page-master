const openNav=document.querySelector('.open__nav');
const closeNav=document.querySelector('.close__nav');
const navItem=document.querySelector('.nav__item');



openNav.addEventListener('click',()=>{
  navItem.style.display="block";
})

closeNav.addEventListener('click',()=>{
  navItem.style.display="none";
})

const titles = document.querySelectorAll('.bottom .heading .title');
const details = document.querySelectorAll('.bottom .details');



titles.forEach(title => {
  title.addEventListener('click', () => {
    const targetDetail = title.dataset.target; // Get the target detail ID
    const activeDetail = document.querySelector('.bottom .details.active');

    // 
   

    // Remove active class from previous detail
    if (activeDetail) {
      activeDetail.classList.remove('active');
      activeDetail.style.display = 'none';
    }

    // Add active class to the clicked detail
    const newDetail = document.getElementById(targetDetail);
    newDetail.classList.add('active');
    newDetail.style.display = 'block';

    // Update active title
    titles.forEach(t => t.classList.remove('active'));
    title.classList.add('active');
  });
});

const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const targetAnswerId = question.dataset.focus; // Get the answer ID from 'data-focus'
    const targetAnswer = document.getElementById(targetAnswerId); // Get the answer element
    const arrowDown = question.querySelector('.ri-arrow-drop-down-line'); 
    const arrowUp = question.querySelector('.ri-arrow-drop-up-line'); 

    // Toggle display of the answer and update arrow icons
    if (targetAnswer.style.display === 'flex') { 
      targetAnswer.style.display = 'none';
      arrowDown.style.display = 'flex';
      arrowUp.style.display = 'none';
    } else {
      targetAnswer.style.display = 'flex';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'flex'; 
      arrowUp.style.color = '#ff0000'; 
    }
  });
});
