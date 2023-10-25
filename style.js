

//home
function redirectToAnotherPage() {
    // Define the URL of the target page
    var targetPageURL = 'index.html';
    
    // Redirect the user to the target page
    window.location.href = targetPageURL;
}





    //blogs

    function blogs() {
       
        const targetPageURL = 'blogs.html';
       
        
       
        window.location.href = targetPageURL;
        // return false;
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




    
  
  


