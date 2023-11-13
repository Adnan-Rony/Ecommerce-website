

// //home
function redirectToAnotherPage() {
   
    var targetPageURL = 'index.html';
    
    
    window.location.href = targetPageURL;
}
function blogs() {
   
    var targetPageURL = 'blogs.html';
    
    
    window.location.href = targetPageURL;

}
function shop() {
   
    var targetPageURL = 'shop.html';
    
    
    window.location.href = targetPageURL;
}












   

    //shop.index right side
    let total=0;
    function ClickCard(data)
    {
        const NewElement=document.getElementById('container');

       

            
        // console.log(data.parentNode.childNodes[3].innerText);

        const ProductsName=data.parentNode.childNodes[3].innerText

        const li =document.createElement('li');

        li.innerText=ProductsName;
        NewElement.appendChild(li);

        //  console.log(data.parentNode.childNodes[5].innerText.split(" ")[0]);

        const prices=data.parentNode.childNodes[5].innerText.split(" ")[1]

        // console.log(data.parentNode.childNodes[5].innerText.split(" ")[1]);



         total=parseFloat(total) + parseFloat(prices);

         document.getElementById('Total-Prices').innerText=total;


    
    }

    
    //sweet toast
    // Your custom JavaScript code
function showToast() {
    Swal.fire({
        icon: 'success',
        title: 'PURCHASE DONE',
       
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000 // Time in milliseconds the toast will be displayed
    });
}




//login from




    
  
  


