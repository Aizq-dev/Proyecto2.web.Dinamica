
const products = [{
    name: 'Spartan-117',
    price: 45,
    seller: 'Halo-figures',
    type: 'figure',
    image: "./asset/FOTOS PRODUCTOS/halo/spartan-117.jpg" ,
},{
    name: 'Elite',
    price: 20,
    seller: 'Halo-figures',
    type: 'figure',
    image: "./asset/FOTOS PRODUCTOS/halo/Figura-elite.jpg",
},{
    name: 'Spartans',
    price: 30,
    seller: 'Halo-figures',
    type: 'figure',
    image: "./asset/FOTOS PRODUCTOS/halo/spartans.webp",
},{
    name: 'Spartan-Yoroy',
    price: 45,
    seller: 'Halo-figures',
    type: 'figure',
    image: "./asset/FOTOS PRODUCTOS/halo/spartan-yoroy.jpg",
},{
    name: 'Agumon' ,
    price: 15,
    seller: 'Digiworld',
    type: 'figure',
    image: "./asset/FOTOS PRODUCTOS/Digimon/figura-agumon.jpg",
},{
    name: 'Gabumon',
    price: 15,
    seller: 'Digiworld',
    type: 'figure',
    image: "./asset/FOTOS PRODUCTOS/Digimon/figura-gabumon.jpg",
},{
    name: 'Garurumon',
    price: 20,
    seller: 'Digiworld',
    type: 'figure',
    image:  "./asset/FOTOS PRODUCTOS/Digimon/figura-garurumon.jpg",
},{
    name: 'Wargreymon',
    price: 30,
    seller: 'Digiworld',
    type: 'figure',
    image:  "./asset/FOTOS PRODUCTOS/Digimon/figura-wargreymon.jpg",
},{
    name: 'Emily Button',
    price: 25,
    seller: 'TimBurton' ,
    type: 'figure',
    image:  "./asset/FOTOS PRODUCTOS/TimBurton/figura-emily-button.jpg",
},{
    name: 'Victor Vandor' ,
    price: 27.99,
    seller: 'TimBurton' ,
    type: 'figure',
    image: "./asset/FOTOS PRODUCTOS/TimBurton/figura-victor-vandor.jpg",
},{
    name: 'Funko Emily Button',
    price: 15,
    seller: 'FunkoToy',
    type: 'Funko',
    image: "./asset/FOTOS PRODUCTOS/TimBurton/funko-emily.webp",
},{
    name: 'Funko Victor Vandor',
    price: 12.99,
    seller: 'FunkoToy',
    type: 'Funko',
    image: "./asset/FOTOS PRODUCTOS/TimBurton/funko-victor.jpg" ,
},]
const todos = {seller: 'Todos'}

const cleaner = document.createElement('button')
cleaner.className = "cleanerFilters"
cleaner.innerText = "Limpiar filtros"
const filters = document.querySelector('.filters')
filters.appendChild(cleaner) 

const divForTemplates = document.querySelector('.products')

const wordInput = document.querySelector('.searcher-words')
const wordButton = document.querySelector('.button-search')

const inputPrice = document.querySelector('.searcher-price')
const PriceButton = document.querySelector('.button-search2')

const sellerFilter = document.querySelector('#seller')




const productTemplates =(product) => {
    const template =  ` <article class="product-container">
    <a href="#"><div><spna class="new">NUEVO</spna></div><figure><img src='${product.image}'/></figure>
    </a>
    <div class="name-product">
    <a href="#"><h5>${product.name}</h5></a>
    <div class="price"><span>${product.price} €</span></div>
    </div></article>
    `
    divForTemplates.innerHTML += template
}

const printProducts = (productChosed) =>{
     divForTemplates.innerHTML = null
    for(product of productChosed){
   
    productTemplates(product);
}}
const sellerTemplates = (seller) =>{
    const template = ` <option value="${seller.seller}">${seller.seller}</option>`
    sellerFilter.innerHTML += template
}

const printSellers =() =>{
   const printed = []
   sellerTemplates(todos)
for(seller of products){ 
    if(!printed.includes(seller.seller)){
        printed.push(seller.seller)
        sellerTemplates(seller)
   
    }
}
}




const filterFuntion = () =>{
    const finalFilter = []
    let resultfinded = false
    const words = wordInput.value
    const optionSelected = sellerFilter.value
    const pricemax = inputPrice.valueAsNumber
    console.log(words)
    for(product of products){
        if(product.name.toUpperCase().includes(words.toUpperCase())){
         if(  isNaN(pricemax)  || product.price <= pricemax ){
            if(optionSelected == "Todos" || product.seller === optionSelected && !finalFilter.includes(product)){
                resultfinded = true
                finalFilter.push(product)}}}}
         printProducts(finalFilter)
       if (!resultfinded){
        divForTemplates.innerHTML = `<h1>No se han encontrado resultados</h1>`}   

    }

const cleanfilter = ()=>{
    printProducts(products)
}

printSellers()
printProducts(products)

sellerFilter.addEventListener('change',filterFuntion)
PriceButton.addEventListener('click',filterFuntion)
cleaner.addEventListener('click',cleanfilter)
wordInput.addEventListener('change',filterFuntion)
