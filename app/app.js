const header =document.querySelector('#header');
const hero= document.querySelector('#hero');
const homeLi=document.querySelector('#homeLi');
const contactLi=document.querySelector('#contactLi')
const aboutLi=document.querySelector('#aboutLi')
const tContainer=document.querySelector('#tContainer')

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

      }else{
        header.classList.add('bg-gray-800','text-blue-50')
        header.classList.remove('bg-gray-300','text-black')
        homeLi.classList.add('hover:text-blue-600')
        homeLi.classList.remove('hover:text-white')
        contactLi.classList.add('hover:text-blue-600')
        contactLi.classList.remove('hover:text-white')
        aboutLi.classList.add('hover:text-blue-600')
        aboutLi.classList.remove('hover:text-white') 
      }
    });
  };
  
  const observer = new IntersectionObserver(callback);
  
  observer.observe(hero);

  const text1=`Hello world <br>
  Im José Antonio Román Moreno a FullStack Developer. <br>
  Nice to meet you!`
  
  const text2=`You are completely free to take a look around my website.
  <br /> <br /> And browse my social media and Github!!!`

  const text3='I made this website using JS and Tailwind.'


  let carousel = [text1, text2, text3];

  tContainer.innerHTML = `${carousel[0]}`;

  
  document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    setInterval(() => {
      currentIndex = currentIndex === carousel.length - 1 ? 0 : currentIndex + 1;
      tContainer.innerHTML = `${carousel[currentIndex]}`;
    }, 4500);
  });
  
  
  