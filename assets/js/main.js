function createCalculate(){
  return{

    display: document.querySelector('.display'),


    //Methods 
    init ()  {
      this.clickButtons();
      this.clickEnter();
    },

    clickEnter(){
      this.display.addEventListener('keyup', e=>{
        if(e.keyCode === 13){
          this.makeCount();
        }
      });
    },

    clickButtons() {
      document.addEventListener('click',function(e){
        const element = e.target;

        if(element.classList.contains('btn-num')){
          this.buttonsDisplay(element.innerText);
        }

        if(element.classList.contains('btn-clear')){
          this.clearDisplay();
        }
        if(element.classList.contains('btn-del')){
          this.clearOne();
        }

        if(element.classList.contains('btn-equal')){
          this.makeCount();
        }

        //O document transforma o conceito do this em um conceito diferente o que não permite acessar os metodos da função principal por isso e necessario usar o bind, utilizando arrow functions o this não muda o conceito 
      }.bind(this));
    },

    clearOne(){
      this.display.value = this.display.value.slice(0,-1);
    },

    buttonsDisplay(value){
      this.display.value += value;
    },

    clearDisplay(){
      this.display.value = '';
    },
    
    makeCount() {
      let count = this.display.value;
      zeroDiv = count.slice(-2);

      if(zeroDiv === '/0' ){
        this.display.value = 'Impossivel dividir por 0';
        return;
      }

      try {
        count = eval(count);
        if(!count){
          this.display.value = '';
          this.display.innerHTML = 'Conta Invalida';
          return;
        }


        this.display.value = String(count);
      } catch (error) {
        alert('Conta Invalida');
        return;
      }
    },

  };

}

const calculadora = createCalculate();
calculadora.init();