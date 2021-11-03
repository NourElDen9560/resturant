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
let  intro_sec = document.querySelector('.intro') , change_variable = new change(intro_sec) ; 
setInterval(() => {
    change_variable.change_background();
}, 2000);
// =================== change back ground =============================================
