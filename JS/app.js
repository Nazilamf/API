

function Getproducts() {

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            let x = ''
            json.forEach(element => {
                console.log(element);
                x += `
                <div class="col-lg-3">
                <div class="card" >
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p> ${element.description}</p>
                  <a href="#" class="btn btn-primary">BUY</a>
                </div>
              </div>
                </div>
                `



            });
            document.getElementById('list').innerHTML = x

        })


}

Getproducts()





