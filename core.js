let proImg = document.getElementById('proImg');
let btn= document.getElementsByClassName('btn');

btn[0].onclick = function(){
    proImg.src="./photos/image1.png";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    proImg.src="./photos/image2.png";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
    
}
btn[2].onclick = function(){
    proImg.src="./photos/image3.png";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}