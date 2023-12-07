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
    // for(let i=0;i<types.length;i++){
    //     list=list+"<li>"+types[i]+"</li>";
    // }
    //array.map() function
    types.map(function(obj,i){
        list=list+"<li>"+obj+"</li>";
    })
    document.getElementById('eventTypes').innerHTML=list;
    console.log(list);
}

displayEventTypes();

function m1(name,myFun){
    alert('Hai');
    myFun();//callback function
    alert(name);
}
function m2(){
    alert('welcome');
}
//m1('Raj',m2)

//array.filter()
var values=[10,30,8,37,23,56];

// function getValue(number){
//     return number+10;
// }
// var result=getValue(200);
// document.write(result);

var output=values.filter(function(obj,i){
    //logic
    return obj%2==0;
});
//document.write(output);

//array.slice(),array.splice()

//syntax:
//slice(optional start index, optional end index)
var items=["Mi","Nokia","Sony","IPhone"]
// var result=items.slice(1,3);
// document.write(result);
//syntax:
//splice(start, delete count, items to add)
// document.write(items.splice(1,0,"samsung"))
// document.write("<br />")
items.splice(1,0,"samsung");
console.log(items);
// document.write("<br />")
// document.write(items.splice(2,2,"samsung"))
// document.write("<br />")
// document.write(items.splice(3,1,"samsung","S2"))


Javascript











