var cart = document.getElementById('cart');
var opencart1 = document.getElementById('opencart1');


// add a classe opencart ou retira do carrinho
cart.addEventListener('click',function () {
    opencart1.classList.toggle('opencart'); 

})

// slide fotos pequenas

var imgGrande = document.getElementById('imgGrande');
    var foto = document.getElementById('foto');
    var foto1 = document.getElementById('foto1');
    var foto2 = document.getElementById('foto2');
    var foto3 = document.getElementById('foto3');
    var imgfoco = imgGrande.getAttribute('src');
    foto.classList.add('focopequena')//adcionar class com desfoque e borda na imagens pequenas

    foto.addEventListener('click',function () {
        imgGrande.setAttribute('src','./images/image-product-1.jpg')
        foto.classList.add('focopequena')
        foto1.classList.remove('focopequena')//adcionar class com desfoque e borda na imagens pequenas
        foto2.classList.remove('focopequena')
        foto3.classList.remove('focopequena')
    })
    foto1.addEventListener('click',function () {
        imgGrande.setAttribute('src','./images/image-product-2.jpg')
        foto1.classList.add('focopequena')
        foto.classList.remove('focopequena')
        foto2.classList.remove('focopequena')//adcionar class com desfoque e borda na imagens pequenas
        foto3.classList.remove('focopequena')
    })
    foto2.addEventListener('click',function () {
        imgGrande.setAttribute('src','./images/image-product-3.jpg')
        foto2.classList.add('focopequena')
        foto.classList.remove('focopequena')//adcionar class com desfoque e borda na imagens pequenas
        foto1.classList.remove('focopequena')
        foto3.classList.remove('focopequena')
    })
    foto3.addEventListener('click',function () {
        imgGrande.setAttribute('src','./images/image-product-4.jpg')
        foto3.classList.add('focopequena')
        foto.classList.remove('focopequena')
        foto2.classList.remove('focopequena')//adcionar class com desfoque e borda na imagens pequenas
        foto1.classList.remove('focopequena')
    })

    //slick com position absolut

    var foto00 = document.getElementById('foto00');
    var foto11 = document.getElementById('foto11');
    var foto22 = document.getElementById('foto22');
    var foto33 = document.getElementById('foto33');

    var fechar = document.getElementById('fechar');
    var back = document.getElementById('back');
    var proximo = document.getElementById('proximoseta');
    var imgmain = document.getElementById('imgmain');
   var anterior = document.getElementById('anteriorseta');

    // abre o slick grande
    imgGrande.addEventListener('click',function () {
        back.style.display = 'inline'
    })
    fechar.addEventListener('click',function () {
        back.style.display = 'none'
    })
    
    // seta de proximo do slick
    foto00.classList.add('focopequena1')
    proximo.addEventListener('click',function () {
       let proximo1 = imgmain.getAttribute('src');
        if (proximo1 === './images/image-product-1.jpg') {
            imgmain.setAttribute('src','./images/image-product-2.jpg')
            foto00.classList.remove('focopequena1')
            foto11.classList.add('focopequena1')
        }
        if (proximo1 === './images/image-product-2.jpg') {
            imgmain.setAttribute('src','./images/image-product-3.jpg')
            foto11.classList.remove('focopequena1')
            foto22.classList.add('focopequena1')
        }
        if (proximo1 === './images/image-product-3.jpg') {
            imgmain.setAttribute('src','./images/image-product-4.jpg')
            foto22.classList.remove('focopequena1')
            foto33.classList.add('focopequena1')
        }
      
    })
    anterior.addEventListener('click',function () {
        let proximo1 = imgmain.getAttribute('src');
         if (proximo1 === './images/image-product-4.jpg') {
             imgmain.setAttribute('src','./images/image-product-3.jpg')
             foto22.classList.add('focopequena1')
             foto33.classList.remove('focopequena1')
         }
         if (proximo1 === './images/image-product-3.jpg') {
             imgmain.setAttribute('src','./images/image-product-2.jpg')
             foto11.classList.add('focopequena1')
             foto22.classList.remove('focopequena1')
         }
         if (proximo1 === './images/image-product-2.jpg') {
             imgmain.setAttribute('src','./images/image-product-1.jpg')
             foto00.classList.add('focopequena1')
             foto11.classList.remove('focopequena1')
         }
     })

  
    

    