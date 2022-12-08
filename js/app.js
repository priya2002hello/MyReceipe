const getElement=(selector)=>{
  const element=document.querySelector(selector);

  if(element)return element

  throw Error(`Please provide valid class name, there is no ${selector}`);
}

const links=getElement(' .nav-links');
const navBtnDOM=getElement('.nav-btn');
const date=getElement('#date');

navBtnDOM.addEventListener('click',()=>{

  //classList -> returns css class names of an element
  //toggle -> used to add or remove a class name from the element
  links.classList.toggle('show-links');
})

const currentYear=new Date().getFullYear();
date.textContent=currentYear;

const submitBtnDOM=getElement('.btn-contact-submit');
const emailDOM=getElement('#email');
const formAlertDOM=getElement('.form-alert')

submitBtnDOM.addEventListener('click',()=>{
 
  if(emailDOM.value=='')
  {
    formAlertDOM.classList.add('show-form-alert')
  }
  else{
    formAlertDOM.classList.remove('show-form-alert');
  }
})