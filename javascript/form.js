
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
      else if(element.id === "dec" && count > 2) count --
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


  const formInputs = document.querySelectorAll('input');

  [...formInputs].forEach(input => {
    if (input.value === "") {
      if(input.id === "email" || input.id === "name") {
        input.classList.add("error");
        input.insertAdjacentHTML('afterend', `<p class="error_message">This field is required.</p>`);
      }
      else {
        input.parentNode.classList.add("error");
        console.log(input.parentNode.querySelector('legend'));
        input.parentNode.querySelector('legend').insertAdjacentHTML('beforeend', `<p class="error_message">This field is required.</p>`);
      }
    }
  })

});