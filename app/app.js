const header =document.querySelector('#header');
const hero= document.querySelector('#hero');
const homeLi=document.querySelector('#homeLi');
const contactLi=document.querySelector('#contactLi')
const aboutLi=document.querySelector('#aboutLi')
const tContainer=document.querySelector('#tContainer')
const land=document.querySelector('#land');
const letterName=document.querySelector('#letterName');
const down=document.querySelector('#down');
const burguer=document.querySelector('#burguer')
const burguerMenu=document.querySelector('#burguerMenu')

const callback = (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        header.classList.add('bg-gray-300','text-black')
        header.classList.remove('bg-gray-800','text-blue-50')
        homeLi.classList.add('hover:text-white')
        homeLi.classList.remove('hover:text-blue-600')
        contactLi.classList.add('hover:text-white')
        contactLi.classList.remove('hover:text-blue-600')
        aboutLi.classList.add('hover:text-white')
        aboutLi.classList.remove('hover:text-blue-600')
        burguerMenu.classList.add('bg-gray-300','text-black')
        burguerMenu.classList.remove('bg-gray-800','text-blue-50')


      }else{
        header.classList.add('bg-gray-800','text-blue-50')
        header.classList.remove('bg-gray-300','text-black')
        homeLi.classList.add('hover:text-blue-600')
        homeLi.classList.remove('hover:text-white')
        contactLi.classList.add('hover:text-blue-600')
        contactLi.classList.remove('hover:text-white')
        aboutLi.classList.add('hover:text-blue-600')
        aboutLi.classList.remove('hover:text-white')
        burguerMenu.classList.add('bg-gray-800','text-blue-50')
        burguerMenu.classList.remove('bg-gray-300','text-black')



      }
    });
  };
  
  burguer.addEventListener('click',()=>{
    if(burguer.classList.contains('open')){
      burguer.classList.remove('open')
      burguerMenu.classList.remove('containerBurguer')
    }else{
      burguer.classList.add('open')
      burguerMenu.classList.add('containerBurguer')

    }
  })
  
  const observer = new IntersectionObserver(callback);
  
  observer.observe(hero);

  window.addEventListener('scroll',()=>{
  const position=hero.getBoundingClientRect().top;
  const height = 161.60000610351562;


  if (position>height){
    header.classList.remove('opacity-100');
    header.classList.add('opacity-0');
    
  }else{
    header.classList.add('opacity-100');
    header.classList.add('top-0');
    header.classList.remove('opacity-0');
  }
    
  })
  
  const text2=`You are completely free to take a look around my website.
  <br /> <br /> And browse my social media and Github!!!`

  const text3='I made this website using JavaScript, CSS and Tailwind.'


  let carousel = [text2, text3];

  tContainer.innerHTML = `${carousel[0]}`;

  
  document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    setInterval(() => {
      currentIndex = currentIndex === carousel.length - 1 ? 0 : currentIndex + 1;
      tContainer.innerHTML = `${carousel[currentIndex]}`;
    }, 3500);
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      letterName.style.border='none'
    }, 3000);
  });
  down.addEventListener('click',()=>{
    hero.scrollIntoView({
      behavior:"smooth"
  })
  })
  