/*abre e fecha o menu quando clicar no ícone hamburguer*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

//para cada elemento recebido no 'toggle' ele vai executar a função
for(const element of toggle){
  //executa uma função quando o elemento for clicado
  element.addEventListener('click', function(){
    //fazer uma troca de classe, se já existir ele remove, caso não exista ele adiciona
    nav.classList.toggle('show')
  })
}

/*quando clicar em um item do menu o mesmo deve ser fechado*/
const links = document.querySelectorAll('nav ul li a')

//para cada elemento recebido no 'links' ele vai executar a função
for(const link of links){
  //executa uma função quando o elemento for clicado
  link.addEventListener('click', function(){
    //remove a classe ao executar a função
    nav.classList.remove('show')
  })
}

//------------------------------------------------------------------------------------------------
/*mudar o header da página quando der o scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight /*verifica o deslocamento do header*/

function changeHeaderWhenScroll(){
  if(window.scrollY >= navHeight){
    //se o scroll for maior ou igual ao tamanho do header ele adiciona a classe 'scroll'
    header.classList.add('scroll')
  }else{
    //se não ele remove a classe 'scroll'
    header.classList.remove('scroll')
  }
}

//------------------------------------------------------------------------------------------------

//https://swiperjs.com/
/*Testimonials carousel-slider swiper*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints:{
    767:{
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

//------------------------------------------------------------------------------------------------

//https://scrollrevealjs.org/
/*ScrollReview - mostrar elementos com efeito ao dar scroll na página*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800,
  reset: true
})


scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `, 
  { interval: 100 }
)

//------------------------------------------------------------------------------------------------
const backToTopButton = document.querySelector('.back-to-top')

function backToTop(){
  if(window.scrollY >= 640){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}

//------------------------------------------------------------------------------------------------

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]') // dentro do main, pegar todas as tags 'section' que contém o atributo 'id'

function ativateMenuAtCurrentSection(){

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 //divide o tamanho da tela em 8 pedaços, e pege 4 desses pedaços e soma com o deslocamento do Y da página

  for(const section of sections){
    const sectionTop = section.offsetTop //pega o deslocamento do topo da seção
    const sectionHeight = section.offsetHeight //pega o tamanho da seção
    const sectionId = section.getAttribute('id') //pega o atributo 'id' da seção

    const checkpointStart = checkpoint >= sectionTop //verifica se o checkpoint é maior ou igual ao topo da seção
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight //verifica se o checkpoint é menor ou igual ao topo da seção + o tamanho da seção (tamanho total da seção)

    if(checkpointStart && checkpointEnd){ //enquanto estiver dentro de uma seção
      document
        .querySelector('nav ul li a[href*=' +sectionId+']')
        .classList.add('active')
    }else{
      document
        .querySelector('nav ul li a[href*=' +sectionId+']')
        .classList.remove('active')
    }
  }
}

//------------------------------------------------------------------------------------------------

/*When scroll*/
window.addEventListener('scroll', function(){
  backToTop()
  changeHeaderWhenScroll()
  ativateMenuAtCurrentSection()
})
