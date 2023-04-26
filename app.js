const bodyElement = document.getElementById('full-page');
const divElement = document.getElementById('color-box');
const btnClick = document.querySelector('button');
//console.log(btnClick);
const colorArray =['red','blue','green','purple','black','yellow','orange','pink','brown','silver'];




btnClick.addEventListener('click', () => {
    
     let num = Math.floor(Math.random()*10);
     bodyElement.style.backgroundColor = colorArray[num];
     btnClick.style.backgroundColor = colorArray[num];
     divElement.innerHTML = `Background Color: #${colorArray[num]}`;
});

