
document.addEventListener("DOMContentLoaded", () => {

  //need to make this a module Form that gets imported into the main js file

  const people_count = document.getElementById("people");
  const counter_container = document.querySelector('.counter');
  let count = parseInt(people_count.value);
  let updateCount = () => people_count.value = count;

  counter_container.addEventListener('click', event => {
    event.preventDefault();
    const element = event.target;
    if(element.nodeName === 'BUTTON') {
      if(element.id === "inc" && count < 20) count ++
      else if(element.id === "dec" && count > 0) count --
    }
    updateCount();
  })



  const ampmList = document.querySelector('.ampm__list');
  const ampmInput = document.getElementById('ampm_input');

  ampmList.addEventListener('click', (event) => {
    event.preventDefault();
    const element = event.target;
    [...ampmList.children].forEach(listItem => listItem.classList.remove('selected'))
    element.classList.add('selected')
    ampmInput.value = element.innerText;
  })

});