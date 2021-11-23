var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;

var image1="images/dice"+randomnumber1+".png";
var image2="images/dice"+randomnumber2+".png";

document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);

var heading=document.querySelector("h1");
if(randomnumber1>randomnumber2){
  heading.innerHTML="Player 1 Wins!!🎉";
}
else if(randomnumber1<randomnumber2){
  heading.innerHTML="Player 2 Wins!!✨";
}
else{
  heading.innerHTML="Draw";
}
