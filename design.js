var c = "";
var d = "";
var count = 0;
var total2 = 0;
var total = 0;
var tea1;
var tea2;
function img1(){
   var sel = 1;
   localStorage.setItem("select1",sel);
   document.getElementById("dc1").style.border = "10px solid greenyellow";
   tea1="DC";
   localStorage.setItem("tname1",tea1);
}
function img2(){
    var sel = 2;
    localStorage.setItem("select1",sel);
    document.getElementById("pbks1").style.border = "10px solid greenyellow";
    tea1="RR";
    localStorage.setItem("tname1",tea1);
 }
function img3(){
    var sel = 3;
    localStorage.setItem("select1",sel);
    document.getElementById("srh1").style.border = "10px solid greenyellow";
    tea1="SRH";
    localStorage.setItem("tname1",tea1);
}
function img4(){
    var sel = 4;
    localStorage.setItem("select1",sel);
    document.getElementById("gt1").style.border = "10px solid greenyellow";
    tea1="GT";
    localStorage.setItem("tname1",tea1);
 }
 function img5(){
    var sel = 5;
    localStorage.setItem("select1",sel);
    document.getElementById("mi1").style.border = "10px solid greenyellow";
    tea1="MI";
    localStorage.setItem("tname1",tea1);
 }
 function img6(){
    var sel = 6;
    localStorage.setItem("select1",sel);
    document.getElementById("csk1").style.border = "10px solid greenyellow";
    tea1="CSK";
    localStorage.setItem("tname1",tea1);
 }
 function img7(){
    var sel = 7;
    localStorage.setItem("select1",sel);
    document.getElementById("rcb1").style.border = "10px solid greenyellow";
    tea1="RCB";
    localStorage.setItem("tname1",tea1);
 }
 function imge1(){
    var se = 1;
    localStorage.setItem("select2",se);
    document.getElementById("dc2").style.border = "10px solid red";
    tea2="DC";
    localStorage.setItem("tname2",tea2);
 }
 function imge2(){
     var se = 2;
     localStorage.setItem("select2",se);
    document.getElementById("pbks2").style.border = "10px solid red";
    tea2="RR";
    localStorage.setItem("tname2",tea2);


  }
 function imge3(){
     var se = 3;
     localStorage.setItem("select2",se);
    document.getElementById("srh2").style.border = "10px solid red";
    tea2="SRH";
    localStorage.setItem("tname2",tea2);


 }
 function imge4(){
     var se = 4;
     localStorage.setItem("select2",se);
    document.getElementById("gt2").style.border = "10px solid red";
    tea2="GT";
    localStorage.setItem("tname2",tea2);


  }
  function imge5(){
     var se = 5;
     localStorage.setItem("select2",se);
    document.getElementById("mi2").style.border = "10px solid red";
    tea2="MI";
    localStorage.setItem("tname2",tea2);


  }
  function imge6(){
     var se = 6;
     localStorage.setItem("select2",se);
    document.getElementById("csk2").style.border = "10px solid red";
    tea2="CSK";
    localStorage.setItem("tname2",tea2);


  }
  function imge7(){
     var se = 7;
     localStorage.setItem("select2",se);
    document.getElementById("rcb2").style.border = "10px solid red";
    tea2="RCB";
    localStorage.setItem("tname2",tea2);


  }
//function assign(){
   var t=localStorage.getItem("select1");
   var u = localStorage.getItem("select2");
   var  x = new Image();
   document.getElementById("team1").textContent="";
   document.getElementById("team1").style.border ="5px solid transparent";
   x.setAttribute("width","200");
   x.setAttribute("height","200");
   var  y = new Image();
   document.getElementById("team2").textContent="";
   document.getElementById("team2").style.border ="5px solid transparent";
   y.setAttribute("width","200");
   y.setAttribute("height","200");
   if( t == 1)
   {
   x.setAttribute("src","https://hindi.insidesport.in/wp-content/uploads/2022/02/de.jpg?w=400");
}
else if(t == 2)
   {
    x.setAttribute("src","https://static.toiimg.com/thumb/msid-77990255,width-400,resizemode-4/77990255.jpg");
}
else if(t == 3)
   {
    x.setAttribute("src","srh.png");
}
else if(t == 4)
   {
    x.setAttribute("src","https://c.ndtvimg.com/2022-02/4ts1faoo_gujarat-titans-logo-facebook_625x300_20_February_22.jpg");
}
else if(t == 5)
   {
    x.setAttribute("src","https://hindi.insidesport.in/wp-content/uploads/2022/02/mum.jpg");
}
else if(t == 6)
   {
    x.setAttribute("src","https://pixlok.com/wp-content/uploads/2021/01/CSK_Logo_with_satin_flag.jpg");
}
else if(t == 7)
   {
    x.setAttribute("src","https://wallpaperaccess.com/full/2009369.jpg");
}

    document.getElementById("team1").appendChild(x);
    if( u == 1)
   {
   y.setAttribute("src","https://hindi.insidesport.in/wp-content/uploads/2022/02/de.jpg?w=400");
}
else if(u == 2)
   {
    y.setAttribute("src","https://static.toiimg.com/thumb/msid-77990255,width-400,resizemode-4/77990255.jpg");
}
else if(u == 3)
   {
    y.setAttribute("src","srh.png");
}
else if(u == 4)
   {
    y.setAttribute("src","https://c.ndtvimg.com/2022-02/4ts1faoo_gujarat-titans-logo-facebook_625x300_20_February_22.jpg");
}
else if(u == 5)
   {
    y.setAttribute("src","https://hindi.insidesport.in/wp-content/uploads/2022/02/mum.jpg");
}
else if(u == 6)
   {
    y.setAttribute("src","https://pixlok.com/wp-content/uploads/2021/01/CSK_Logo_with_satin_flag.jpg");
}
else if(u == 7)
   {
    y.setAttribute("src","https://wallpaperaccess.com/full/2009369.jpg");
}

    document.getElementById("team2").appendChild(y);
    tea1=localStorage.getItem("tname1");
    tea2=localStorage.getItem("tname2");
    document.getElementById("tn1").textContent =localStorage.getItem("tname1");
    document.getElementById("tn2").textContent = localStorage.getItem("tname2");


   //}

function score(){
    var a = Math.ceil((Math.random()*5)+1);
    var b = "W";
    
   if(count<6)
   { 
    if(a == 5)
    {
        c=c+" "+b;
        document.getElementById("det").textContent = c;
        total = total + 0;
        document.getElementById("tot").textContent = total;
        count++;
    }
    else{
        c=c+" "+a;
        document.getElementById("det").textContent = c;
        total = total + a;
        document.getElementById("tot").textContent = total;
        count++;
    }
}
    else if(count<12)
  {
    if(a == 5)
    {
        d=d+" "+b;
        document.getElementById("det2").textContent = d;
        total2 = total2 + 0;
        document.getElementById("tot2").textContent = total2;
        count++;
    }
    else{
        d=d+" "+a;
        document.getElementById("det2").textContent = d;
        total2 = total2 + a;
        document.getElementById("tot2").textContent = total2;
        count++;
        if(total < total2)
        {
            document.getElementById("wins").textContent = tea2+ " won the match";
            document.getElementById("wins").style.backgroundColor =  "red";
            count=12;
            
        }
    }  
}
   else
   {
     if(total > total2)
    {
        document.getElementById("wins").textContent = tea1+" won the match";
        document.getElementById("wins").style.backgroundColor = "green";
    }
    else if (total == total2){
        document.getElementById("wins").textContent = "Match Tie";
    }
   }
}
