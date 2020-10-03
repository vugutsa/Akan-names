let akanFemale=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
let akanMale=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

function akanNames() {
   century=parseInt(document.getElementById("century").value);
   year=parseInt(document.getElementById("year").value);
   month=parseInt(document.getElementById("month").value);
   dayofthemonth=parseInt(document.getElementById("day").value);

d = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7

CC=century
YY=year
MM=month
DD=day

if (CC < 1 || CC > 100){
   alert("invalid cc");
}
else if (YY < 1 || YY > 100){
   alert("invalid yy");
}
else if (MM ===< 1 || MM > 12){
   alert("invalid mm");
}
else if (DD ===< 1 || DD > 31) 
   alert("invalid dd");
}