

// function Getproducts() {

//     fetch('https://fakestoreapi.com/products')
//         .then(res => res.json())
//         .then(json => {
//             let x = ''
//             json.forEach(element => {
//                 console.log(element);
//                 x += `
//                 <div class="col-lg-3">
//                 <div class="card" >
//                 <img src="${element.image}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                   <h5 class="card-title">${element.title}</h5>
//                   <p> ${element.description}</p>
//                   <a href="#" class="btn btn-primary">Add to cart</a>
//                 </div>
//               </div>
//                 </div>
//                 `



//             });
//             document.getElementById('list').innerHTML = x

//         })


// }

// Getproducts() 


if (localStorage.getItem('products') === null) {
  localStorage.setItem('products',JSON.stringify([]));
}

let buttons = document.querySelectorAll('.btn');
console.log(buttons)



for(let btn of buttons) {
  btn.onclick = function (e) {
    e.preventDefault();
    let id = this.parentElement.parentElement.id
    let src = this.parentElement.parentElement.children[0].src
    let pr_name = this.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
    let title = this.previousElementSibling.previousElementSibling.innerHTML
    let price = this.previousElementSibling.innerHTML




    let products_list = JSON.parse(localStorage.getItem('products'))

    let existProduct = products_list.find(item =>item.Id === id)
    if(existProduct === undefined){
      products_list.push({
        Id: id,
        Image: src,
        Name: pr_name,
        Title: title,
        Price: price,
        Count: 1
      })

      document.querySelector('.alertbox').style.display = 'block';
      document.querySelector('.alertbox').innerHTML = 'Məhsul əlavə olundu';
    }
    else{
      existProduct.Count += 1;
      document.querySelector('.alertbox').style.display = 'block';
      document.querySelector('.alertbox').innerHTML = 'Məhsulun sayi artilirdi'
    }
    
    localStorage.setItem('products',JSON.stringify(products_list));
    setTimeout(() => {
    document.querySelector('.alertbox').style.display = 'none';
    },1000);
    ShowCount() 
  }

}

function ShowCount(){
  let products_list = JSON.parse(localStorage.getItem('products'))
document.querySelector('#count').innerHTML = products_list.length
}
ShowCount()