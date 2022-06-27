
const parent= document.querySelector('.img_sub_overfolw');
const arr_img= [...document.querySelectorAll('.div_bottom')];
if(parent){
    parent.style.width=arr_img.length * 200 + 'px';

}
