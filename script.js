
const titles = {
    info: "infos text ",
    success: "Success text ",
    warning: "Warning text ",
    danger: "Danger text alert!!"
}


let buttons = document.querySelectorAll('button');



buttons.forEach(button => {
    button.addEventListener('click', () => {
      const type = button.getAttribute('data-type');

      console.log(type);
      
     const  alert = document.createElement('div');

    //   alert.classList.add('alert');
      alert.classList.add(`${type}`);

      alert.innerHTML=`
                       <h1>${titles[type]}</h1>
                     
      `;



      document.body.before(alert);
      
    });
  });









