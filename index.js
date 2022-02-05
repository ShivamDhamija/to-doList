var ip=document.getElementById("ip");
var diva=document.getElementById("div1");
let local_stor=localStorage.getItem("todoso");
var array=[];

if(local_stor)
{
  //getting local_stor value 
  array=JSON.parse(local_stor);
}
array.forEach(function(todo)
  {
    add_delete(todo);
  }
);

ip.addEventListener("keyup",function(event)
{
  var value=ip.value;
  console.log(value);
  if(value && event.keyCode === 13)
  {

    //adding into array in local_stor
    array.push(value);
    localStorage.setItem("todoso",JSON.stringify(array));

    //simple add delete and tick function
    add_delete(value);

      ip.value="";
  }
});

function add_delete(value)
{
  var divb=document.createElement("div");
  var del=document.createElement("button");
  var click=document.createElement("button");

  divb.innerHTML=value;
  del.innerHTML="X";
  click.innerHTML="[ ]"

  divb.appendChild(click);
  divb.appendChild(del);
  diva.appendChild(divb);
  //delete function
  del.addEventListener("click",function(event){
      event.target.parentNode.parentNode.removeChild(event.target.parentNode);
      //delete from array
      var index=array.indexOf(value);
      array.splice(index,1);
      localStorage.setItem("todoso",JSON.stringify(array));
  });
  //tick function
  click.addEventListener("click",function(event){
      event.target.parentNode.style.textDecoration = "line-through";
  });
}
