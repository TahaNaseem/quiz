
function result()
  {
      console.log(result)
     var q1=document.myform.q1.value;
     var q2=document.myform.q2.value;
     var q3=document.myform.q3.value;
     var q4=document.myform.q4.value;
     var q5=document.myform.q5.value;
     var count=0;
    
     if(q1=="b"){
         count++;
    }
    if(q2=="a"){
        count++;
    }
    if(q3=="c"){
        count++;
    }
    if(q4=="b"){
        count++;
    }
    if(q5=="c"){
        count++;
    }
    document.getElementById("name").innerHTML=count
   
     }
     