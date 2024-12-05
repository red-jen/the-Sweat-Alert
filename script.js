
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
        creatAlert(type);
   
     });
  });

  function creatAlert(type){
  

    console.log(type);
    
   const  alert = document.createElement('div');

  //   alert.classList.add('alert');
  setTimeout(function (){ 
    alert.classList.add(`${type}`);

    alert.innerHTML=`
                     <h1>${titles[type]}</h1>
                   
    `;
  }, 300)

  setTimeout(() => {
    alert.classList.add(`remove`);
    setTimeout(() => {
        alert.remove();
    }, 300);
    
  }, 3000);



    document.body.before(alert);
}







