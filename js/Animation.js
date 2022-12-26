
window.onload = function(){
	var btn = document.getElementById("minibutton") == 0;
	var btnSleft = document.getElementById("Sleft");
	var inconfont_text = document.getElementsByClassName("Sleft_menu");
	function Telescoping(){
		if(btn==0){
			btnSleft.style.transition = "width 2s"
			btnSleft.style.width = "100px";
			btnSleft.style.overflow = "hidden";
			// inconfont_text.style.background = "red";
			return btn=true;
		}
		else{
			btnSleft.style.transition = "width 2s"
			btnSleft.style.width = "300px";
			return btn=false;
				}
			}
 }