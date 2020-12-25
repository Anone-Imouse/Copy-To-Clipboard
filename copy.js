$(document).ready(function(){
  $('button').click(function(){
var inp=document.querySelector('input');
    
    // console.log(inp)
    
    inp.select();
    
    document.execCommand('Copy');
    
    setTimeout(alerting,1500);
    
    function alerting(){
      alert('The text has succesfully been copied');
    }
  });
})
