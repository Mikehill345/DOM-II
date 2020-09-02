// Your code goes here
const logo = document.querySelector('.logo-heading')
const body = document.querySelector('body')
const header = document.querySelector('header')
const topImg = document.querySelector('header img')
const h2s = document.querySelector('h2')
const bodyImg = document.querySelector('.img-content')
const textChange = document.querySelector('.text-content p')
const footer = document.querySelector('footer')
const botPic = document.querySelector('.content-destination img')
const button = document.querySelector('.destination h4')

document.addEventListener('keydown', function(event){
    if (event.key === 'Escape')
    body.style.backgroundColor = 'yellow'
    body.style.color = 'black'
})

topImg.addEventListener('mouseover', function (event){
    event.target.style.width = '20%'
    event.target.style.height = 'auto'
    event.target.style.margin = '0 auto'
})


topImg.addEventListener('mouseout',function(event){
    event.target.style.width = ''
    event.target.style.height = ''
    event.target.style.justifyContent = ''
})

h2s.addEventListener('dblclick', function(){
    h2s.style.fontSize = '6rem'
})



bodyImg.addEventListener('wheel', function(event){
    let scale = 0;
    event.preventDefault();
    scale += event.deltaY * -0.01
    scale = Math.min(Math.max(.125, scale), 4);
    bodyImg.style.transform = `scale(${scale})`
})


window.addEventListener('load', function(){
 textChange.textContent = 'This is different text!'
});



logo.addEventListener('click', function(){
    logo.style.color = 'yellow'
    header.style.backgroundColor = 'black'

})

Array.from(document.links).forEach(link => {
    link.addEventListener('click', function(event){
     event.preventDefault()
    })
});

window.addEventListener("resize", function(){console.log('resize!')});

document.addEventListener('keypress', function(event){
    if (event.key === '1')
    footer.style.backgroundColor = 'blue'
    botPic.style.opacity = '0.2'
})

const dropLocation = document.querySelector('.droptarget')
dropLocation.style.width = '100%'
dropLocation.style.height = 'auto'
dropLocation.style.margin = '15px'
dropLocation.style.padding = '10px'
dropLocation.style.border = '1px solid red'

document.addEventListener("dragstart", function(event) {
    console.log(event.target.id)
    event.dataTransfer.setData("Text", event.target.id);
  
  
    event.target.style.opacity = "0.4";
  });
  
  document.addEventListener("drag", function() {
            button.style.color = "red";
  });
  
  document.addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
  });

  document.addEventListener("dragenter", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "3px dotted red";
    }
  });
  
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  document.addEventListener("dragleave", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "";
    }
  });
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
      button.style.color = "";
      event.target.style.border = "";
      let data = event.dataTransfer.getData('text');
      console.log(data)
      console.log(document.querySelector('#drag'))
      event.target.appendChild(document.querySelector(`#${data}`));
      
    }
  });