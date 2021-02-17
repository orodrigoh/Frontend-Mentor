
function criaNota() {
    addStickSalvos()
    
    const btnCria = document.querySelector('.criar-nota');

    btnCria.addEventListener('click', (e) => {
        e.preventDefault();

        if(document.querySelectorAll('.stick').length < 18) {
            criaStick();
            delStick()
            salvarSticks();
            dragItem();
        }    
    
    });
    
}

function criaStick(x, y, txt) {
    const content = document.querySelector('.content');

    const divStick = document.createElement('div');
    divStick.classList.add('stick');
    divStick.style.left = x || '50px';
    divStick.style.top = y || '150px';

    const divTop = document.createElement('div');
    divTop.classList.add('top-stick');

    const divText = document.createElement('div');
    divText.contentEditable = "true";
    divText.classList.add('divText')
    divText.innerText = txt || '';

    const btnDel = document.createElement('a');
    btnDel.classList.add('delete');

    divTop.appendChild(btnDel);
    divStick.appendChild(divTop);
    divStick.appendChild(divText);

    content.appendChild(divStick);
    
}

function delStick() {
const deleta = document.querySelectorAll('.delete');

    deleta.forEach((del)=> {
        del.addEventListener('click', (e)=> {
            e.target.parentElement.parentElement.remove()
            salvarSticks();        
        });      
    });
}

function dragItem() {

    const stickers = document.querySelectorAll('.stick')

    stickers.forEach((target) => {

     function arrastar(e) {
      let originalStyles = window.getComputedStyle(target)

      target.style.left = parseInt(originalStyles.left) + e.movementX + 'px'
      target.style.top = parseInt(originalStyles.top) + e.movementY + 'px'
    }
    
    function soltar() {
      document.removeEventListener('mousemove', arrastar)
      document.removeEventListener('mouseup', soltar)
      salvarSticks()

    }
    
    function mousePress() {
      document.addEventListener('mousemove', arrastar)
      document.addEventListener('mouseup', soltar)
      
    }
    
    target.addEventListener('mousedown', mousePress)
    });

}


function salvarSticks() {
    const allSticks = document.querySelectorAll('.stick'); //Pega todos os li na Nodelist
    const listaSticks = []; //Cria array
    
    for (let stick of allSticks) { 
    
      const txt = stick.querySelector('.divText').innerText;
      const x =  stick.style.left;
      const y =  stick.style.top;

      const obj = {
          txt: txt,
          x: x,
          y: y
        }
        listaSticks.push(obj); 
    }
  
    const stickJSON = JSON.stringify(listaSticks); //Transforma a array em uma string
    localStorage.setItem('sticks', stickJSON); //Guarda a string na memoria do navegador
  }
  
  function addStickSalvos() {
      if (localStorage.sticks) {
        const stick = localStorage.getItem('sticks'); //Pega os itens da memoria
        const listaSticks = JSON.parse(stick); //Converte novamente para array
         
        listaSticks.forEach((e)=> {
            const x = e.x;
            const y = e.y;
            const txt = e.txt;
            criaStick(x, y, txt) 
        })
         
      }
      dragItem()
     
      delStick()
      salvarSticks();
    
  }
 

  document.addEventListener('keypress', ()=> {
    salvarSticks();

  });

  criaNota()
  
  