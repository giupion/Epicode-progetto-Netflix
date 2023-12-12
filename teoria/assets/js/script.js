document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#caricaimmagini').addEventListener('click', () => {
        fetch('https://api.pexels.com/v1/search?query=cat', {
            method: 'GET',
            headers: {
                Authorization: 'UExxqD6b4RT9YsM5yBGe8zz7VjYAa6HWOTFrI0naskFdwAhopQrTLmMD'
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            json.photos.forEach(element => {
                document.querySelectorAll('div.card').forEach(div => {
                    div.remove();
                })

               
            })})
        .catch(error => console.log(error))
})
})

   //sono gli oggetti richiamati da obj che saregbbe il server con le imamgini 
    obj.forEach(u => {
        let div = document.querySelector('#card');
        div.classList="row"
        let colonnacard=document.createElement('div')  
        colonnacard.classList="col-4" //3parent node
        div.appendChild(colonnacard)  //2 parent node div card
       colonnacard.innerHTML = `<div class="card m-2" style="width: 18rem; height:98%" > 
       <img class="card-img-top d-flex flex-column justify-content-between align-middle flex-end" src="${u.img}" alt="Card image cap">
       <div class="card-body d-flex flex-column align-middle">
         <h5 class="card-title">${u.title}</h5>
         <p class="card-text">${u.price} $</p>
         <button class="btn btn-primary">Comprami</button>
         <button class="btn btn-danger">Scarta</button>
         
       </div>
       </div>`

       
    });   
}
}
console.log(document.querySelector('#card'))

//e è il paramentro dove vado a cliccare per avere l'effetto di click
document.querySelector('#card').addEventListener('click', (e) => {
    if (e.target.className === 'btn btn-danger') {
        let btn = e.target.parentNode.parentNode.parentNode;
      console.dir(btn)
        btn.remove();
    }
})



    document.querySelector("#card").addEventListener("click", (e) =>{
        if(  e.target.className === "btn btn-primary"){
            let acquisto = e.target.parentNode.parentNode.parentNode;//seleziono la card acquistata
            
           let cartmodale=document.querySelector("#corpomodale")//
           //una volta selezionato il nodo, cioè il corpo del modal, aggiungo la card in particolare l'html al carrello modale
         
   //dentro al modal ,appendo la card
        cartmodale.appendChild(acquisto)
    
        
        }

        
        
    
    })


     
       
    //pulsante scarta da fare session storage metti nel carrello

    document.querySelector("#corpomodale").addEventListener("click", (e) =>{if(e.target.className === "btn btn-danger")
    {let rimuoviacquisto = e.target.parentNode;
    let corpo=document.querySelector("#corpomodale")
    corpo.removeChildChild(rimuoviacquisto)
}}) 

})
