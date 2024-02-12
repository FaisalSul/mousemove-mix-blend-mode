var main = document.querySelector('.main');

var cursor = document.querySelector('.cursor')

main.addEventListener('mousemove', (mov)=>{
    
    var cursorWidth = cursor.offsetWidth;
    var cursorHeight = cursor.offsetHeight;
    var maxX = window.innerWidth - cursorWidth;
    var maxY = window.innerHeight - cursorHeight;
    
    var x = Math.min(Math.max(mov.x, 0), maxX);
    var y = Math.min(Math.max(mov.y, 0), maxY);
    cursor.style.left = x +'px';
    cursor.style.top = y +'px';
})