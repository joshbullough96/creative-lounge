/* Place your JavaScript in this file */       

document.querySelector('h1').addEventListener('mouseenter', function() {
    document.body.style.transform = 'rotateZ(360deg)';
});

document.querySelector('h1').addEventListener('mouseleave', function() {
    document.body.style.transform = 'rotateZ(0deg)';
});