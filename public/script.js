
/* jshint esversion: 6 */
const inputs = document.querySelectorAll('.in');
inputs.forEach(input => {
    input.addEventListener('focus', function(e){
        let parent=e.target.parentElement;
          if(!e.target.parentElement.classList.contains('focus')){
            parent.classList.add('focus');}
          });
    
    
    
    
});
