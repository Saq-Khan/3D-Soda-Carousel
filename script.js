const imgSlider = document.querySelector('.img-slider');
const imgFruits = document.querySelectorAll('.img-item.fruit');
const infoSlider = document.querySelector('.info-slider');
const infoBox = document.querySelector('.info-box');
const bg = document.querySelectorAll('.bg');

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let indexSlider = 0;
let index = 0;
let indexInfo;

nextBtn.addEventListener('click', () => {
    indexSlider++;
    imgSlider.style.transform = `rotate(${indexSlider * -90}deg)`;

    index++;
    if(index > imgFruits.length - 1){
        index = 0;
    }
    document.querySelector('.fruit.active').classList.remove('active');
    imgFruits[index].classList.add('active');

    document.querySelector('.bg.active').classList.remove('active');
    bg[index].classList.add('active');

    if(indexInfo == 1){
        infoSlider.prepend(infoSlider.lastElementChild)
    }
    indexInfo = -1;
    infoBox.style.justifyContent = 'flex-start'
    infoSlider.style.transform = 'translateY(-25%)';
})


prevBtn.addEventListener('click', () => {
    indexSlider--;
    imgSlider.style.transform = `rotate(${indexSlider * -90}deg)`;
    
    index--;
    if(index < 0){
        index = imgFruits.length - 1 ;
    }
    document.querySelector('.fruit.active').classList.remove('active');
    imgFruits[index].classList.add('active');
    
    document.querySelector('.bg.active').classList.remove('active');
    bg[index].classList.add('active');
    
    if(indexInfo == -1){
        infoSlider.appendChild(infoSlider.firstElementChild)
    }
    indexInfo = 1;
    infoBox.style.justifyContent = 'flex-end'
    infoSlider.style.transform = 'translateY(25%)';

})



infoSlider.addEventListener('transitionend', () => {
    if(indexInfo == -1){
        infoSlider.appendChild(infoSlider.firstElementChild)
    }
    else if(indexInfo == 1){
        infoSlider.prepend(infoSlider.lastElementChild)
    }
    
    infoSlider.style.transition = 'none';
    infoSlider.style.transform = 'translateY(0)';

    setTimeout(() => {
        infoSlider.style.transition = '0.5s cubic-bezier(0.645, 0.045, 0.355, 1)';
    });

});