function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    });
}
const titulo = document.querySelector('#hello');
typeWrite(titulo);

/*-------card--------- */
function mudacard(){

    projetoJava = document.querySelector('.java');
    tiraWeb = document.getElementById("web");
    card = document.querySelector(".card");
      
      if(projetoJava.className == "web"){
          projetoJava.className = "java";
          
      }
      else{
          projetoJava.className = "web";
      }
      if(tiraWeb.className == "muda"){
        tiraWeb.className = "web";
    }
    else{
        tiraWeb.className = "muda";
    }
   
      
  }
    /* --------validações form ---------*/

  function validaForm(){
    var retorna = true;
    var insereHtml = document.querySelector("insereHtml");
    if(document.formContato.nome.value ==""){
        alert("O campo nome é obrigatorio!");
        retorna=false;
    }
    if(retorna == true){
        if(document.formContato.mensagem.value ==""){
            alert("Escreva sua mensagem!");
            retorna=false;
        }
  }
}

function mudaCardWeb(){
    tiraJava = document.getElementById("java");
    colocaWeb = document.getElementById("web");
    if(colocaWeb.className == "web"){
        colocaWeb.className = "muda";
    }
    else{
        colocaWeb.className = "web";
    }
    

    if(tiraJava.className == "web"){
        tiraJava.className = "java";
    }
    else{
        tiraJava.className = "web";
    }

}
/*-------------scroll suave) */
const btnH = document.querySelectorAll('.txt-apresent a[href^="#"]');

btnH.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
  })
  
  function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }
  
  function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 80;
    scrollToPosition(to);
  }
  
  function scrollToPosition(to) {

    smoothScrollTo(0, to);
  }
  

  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 900;
  
   
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };
  /*scroll suave menu header */
  const menu = document.querySelectorAll('.menu a[href^="#"]');

menu.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
  })
  
  function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }
  
  function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 80;
    scrollToPosition(to);
  }
  
  function scrollToPosition(to) {

    smoothScrollTo(0, to);
  }
  

  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 900;
  
   
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  }

  /*anima scroll*/
  const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight *3)/4);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 30));
  }