/*let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '=')
       {

        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML== 'C'){
      
        string = "";
        document.querySelector('input').value=string;
        }
    
    
    else{
        console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector('input').value=string;
    }
    
    })
    
});*/
let string = "";
let s=0;
let f=120;
let cal=0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }/*
    else if(e.target.innerHTML == '!')
    {
      s=parseInt(string.substring(0,string.indexOf('!')));
      for(let i=1;i<=s;i++){
        f=f*i;
      }
      document.querySelector('input').value = f;

    }
    else if(e.target.innerHTML == '^'){
      s=parseInt(string.substring(0,string.indexOf('^')));
      s1=parseInt(string.substring(string.indexOf('^')));
      cal=Math.pow(s,s1);
      document.querySelector('input').value = pow;
    
    }*/
    else if(e.target.innerHTML == 'S'){
      var back=document.querySelector('input').value;
      document.querySelector('input').value = back.substring(0,back.length-1);
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})