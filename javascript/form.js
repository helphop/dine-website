
document.addEventListener("DOMContentLoaded", () => {

  //increases or decrease the number of people
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


//controls the checkmark next to the AM PM drop down list
  const ampmList = document.querySelector('.ampm__list');
  const ampmInput = document.getElementById('ampm_input');

  ampmList.addEventListener('click', (event) => {
    event.preventDefault();
    const element = event.target;
    [...ampmList.children].forEach(listItem => listItem.classList.remove('selected'))
    element.classList.add('selected')
    ampmInput.value = element.innerText;
  })


//Validates the form and adds error class to fields that are not complete
  const inputGroups = document.querySelectorAll('.input-group');
  const submit_btn = document.querySelector('button[type="submit"]');

  submit_btn.addEventListener('click', event => {
    event.preventDefault();
    [...inputGroups].forEach(inputGroup => {
      const inputValues = Array.from(inputGroup.querySelectorAll('input'), input => input.value);
      if (inputValues.includes(""))
        inputGroup.classList.add("error")
       else
        inputGroup.classList.remove("error")
    })
  })

});