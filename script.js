function label_create(tagname,attrname,attrvalue,content){
  var ele = document.createElement(tagname);
  ele.setAttribute(attrname,attrvalue);
  ele.innerHTML=content;
  return ele;
}

function break_create(){
  var ele = document.createElement("br");
  return ele;
}

function input_create(tagname,attrname1,attrvalue1,attrname2,attrvalue2){
  var ele = document.createElement(tagname);
  ele.setAttribute(attrname1,attrvalue1);
  ele.setAttribute(attrname2,attrvalue2);
  return ele;
}

function button_create(tagname,attrname3,attrvalue3,attrname4,attrvalue4,content){
  var ele = document.createElement(tagname);
  ele.setAttribute(attrname3,attrvalue3);
  ele.setAttribute(attrname4,attrvalue4);
  ele.innerHTML = content;
  return ele;
}


var Firstname = label_create("label","for","Firstname","Firstname")
var break1 = break_create();
var Firstname_input = input_create("input","type","text","id","Firstname")

var break2 = break_create();

var Middlename = label_create("label","for","Middlename","Middlename")
var break3 = break_create();
var Middlename_input = input_create("input","type","text","id","Middlename")

var break4 = break_create();

var Lastname = label_create("label","for","Lastname","Lastname")
var break5 = break_create();
var Lastname_input = input_create("input","type","text","id","Lastname")

var break6 = break_create();

var email = label_create("label","for","email","email")
var break7 = break_create();
var email_input = input_create("input","type","email","id","email")

var break8 = break_create();

var Password = label_create("label","for","Password","Password")
var break9 = break_create();
var Password_input = input_create("input","type","text","id","Password")

var break10 = break_create();

var Button = button_create("button","type","button","onclick","foo()","Submit");

function foo(){
  var First = document.getElementById("Firstname").value;
  console.log(`Firstname:${First}`)
  var Middle = document.getElementById("Middlename").value;
  console.log(`Middlename:${Middle}`)
  var Last = document.getElementById("Lastname").value;
  console.log(`Lastname:${Last}`)
  var email = document.getElementById("email").value;
  console.log(`email:${email}`)
  var PWd = document.getElementById("Password").value;
  console.log(`Password:${PWd}`)
}
document.body.append(Firstname,break1,Firstname_input,break2,Middlename,break3,Middlename_input,break4,Lastname,break5,Lastname_input,break6,email,break7,email_input,break8,Password,break9,Password_input,break10,Button)
