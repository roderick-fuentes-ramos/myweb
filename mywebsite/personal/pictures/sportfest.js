
var photos=new Array()
var which=0
var max=51


/*Change the below variables to reference your own images. You may have as many images in the slider as you wish*/

function initialize(Direction){
  for(var i = 1; i<=51; i++) {
           photos[i]="../pictures/" + i + ".jpg"
       }
  if (Direction == "backward"){
      which=photos.length
  }
  if (Direction == "forward"){
      which=1
  }
}

function backward(){
if (which>1){
window.status=''
which--
document.images.photoslider.src=photos[which]
}
else
which=photos.length-1
document.images.photoslider.src=photos[which]
}

function forward(){
if (which<photos.length-1){
which++
document.images.photoslider.src=photos[which]
}
else if (which==photos.length-1)
which=1
document.images.photoslider.src=photos[which]
}