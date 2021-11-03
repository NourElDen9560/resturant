class change{
    constructor(div){
        this.div = div ; 
    }
    change_background(){
        let list_of_image = [
        'https://preview.colorlib.com/theme/meal2/images/xhero_bg.jpg.pagespeed.ic.08xBTGP0Gm.webp',
    'https://preview.colorlib.com/theme/tasteit/images/xbg_5.jpg.pagespeed.ic.Gns2DKGkM1.webp'  ], 
        randomnumber = Math.floor(Math.random() * list_of_image.length); 
        this.div.style.backgroundImage = 'url("'+list_of_image[randomnumber]+'")' ;   
    }
}

/*  ====================================== class cahnge background  ========================*/ 

/* =========================================== declarition scope =============================*/


let  intro_sec = document.querySelector('.intro') , change_variable = new change(intro_sec) , 
alldivs_categories =Array.from(document.querySelectorAll('.image_categoris .row'))  ,
image_categoris = document.querySelector('.image_categoris .container') ,
allbuttons = Array.from(document.querySelectorAll('#icons_cat li button')); 
setInterval(() => {
    change_variable.change_background();
}, 2000);


/* =====================================================================================*/


allbuttons.forEach((el)=>{
    el.addEventListener("click" , filtreation) ; 
})


/* ================================ filtration function =====================================================*/
function filtreation() {
for(let i = 0 ; i< alldivs_categories.length ; i++){
    alldivs_categories[i].style.display = "none"; 
}
let r = document.querySelector(`.${this.dataset.tec}`); 
image_categoris.appendChild(r) ;
r.style.display = "block" ; 
r.style.display = "flex" ; 
}
/*** return all categories ****/
let button_all_categories = document.getElementById('allcategories') ; 
button_all_categories.onclick = display_allcategoris;
function display_allcategoris() {
    for(let i = 0 ; i< alldivs_categories.length ; i++){
        image_categoris.appendChild(alldivs_categories[i]) ;
        alldivs_categories[i].style.display = "block"; 
        alldivs_categories[i].style.display = "flex"; 
        }
}