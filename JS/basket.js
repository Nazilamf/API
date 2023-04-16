let products_list = JSON.parse(localStorage.getItem('products'))

if (products_list.length > 0) {
    document.querySelector('.alert').classList.add('d-none')
}
else {
    document.querySelector('.alert').classList.remove('d-none')
}

function GetProducts() {
    let products_list = JSON.parse(localStorage.getItem('products'))

    let x = ''
    products_list.forEach(item => {
        x += `
        <ol class="list-group list-group-numbered">
  <li id = ${item.Id} class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${item.Name}</div>
     ${item.Price}
     <input  class = "input_count" type="number" value = ${item.Count}>
    </div>
    <span class="badge bg-primary rounded-pill"></span>
    <a href="#" class="btn btn-danger">Delete</a>
  </li>
  </ol>
        `
    });

    document.querySelector('.rowlist').innerHTML = x

    let buttons = document.querySelectorAll('.btn');


    let input_count = document.querySelector('input_count')




    input_count.forEach(item => {
        item.addEventListener('change', item => {
            localStorage.setItem("input_count", document.querySelector(".input_count").Count);
              

            
        });

    });

    function Removeitem() {
        buttons.forEach(btn1 => {
           btn1.onclick = function () {
                const items = JSON.parse(localStorage.getItem('products_list'));
                const filtered = items.filter(item => item.Id !== btn.id );
                localStorage.setItem('products_list', JSON.stringify(filtered));
                location.reload();
            }

        });

    }
}

document.querySelector('#cnt').innerHTML = products_list.length
document.querySelector('#sum').innerHTML = products_list.forEach(item => {
    sum += (item.Count*item.Price)
    console.log(sum)
});
GetProducts()
