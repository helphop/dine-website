
document.addEventListener("DOMContentLoaded", () => {
  const dec_btn = document.getElementById("dec");
  const inc_btn = document.getElementById("inc");
  const people_count = document.getElementById("people");
  let count = parseInt(people_count.value);

  dec_btn.addEventListener('click', (e)=> {
    e.preventDefault();
    if(count > 0) {
      count --;
      people_count.value = count;
    }
  })

  inc_btn.addEventListener('click', (e)=> {
    e.preventDefault();
    if(count < 20) {
      count ++;
      people_count.value = count;
    }
  })

});