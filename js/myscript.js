function f1(){   //function definition
    //console.log('my script');
    //alert("Welcome");
    //document.write("welcome");
    let a=document.getElementById('txtvalue1').value;
    let b=document.getElementById('txtvalue2').value;
    if(a=='' || b=='')
        //alert('Value 1 or Value 2 cannot be empty!!!');
        document.getElementById('msg').innerHTML="<b style='color:red'>Value 1,Value 2 cannot be empty!!!</b>";
    else{
        let c=parseInt(a)+parseInt(b);
        //alert(c);
        document.getElementById('msg').innerHTML="<b style='color:green'>Result:"+c+"</b>";
    }
}
//f1(); //function calling

function displayEventTypes(){
    var types=["Music","Sports","Dance","Tech"]; //declare array
    var list="";
    for(let i=0;i<types.length;i++){
        list=list+"<li>"+types[i]+"</li>";
    }
    document.getElementById('eventTypes').innerHTML=list;
    console.log(list);
}

displayEventTypes();










