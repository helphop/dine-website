
document.addEventListener("DOMContentLoaded", () => {
  const people_count = document.getElementById("people");
  const counter_container = document.querySelector('.counter');
  let count = parseInt(people_count.value);
  let updateCount = () => people_count.value = count;

  counter_container.addEventListener('click', (event)=> {
    event.preventDefault();
    const element = event.target;
    if(element.nodeName === 'BUTTON') {
      if(element.id === "inc" && count < 20) count ++
      else if(element.id === "dec" && count > 0) count --
    }
    updateCount();
  })



});