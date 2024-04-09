async function getData(){
    let response = await fetch("./JSON.json")
    let data = await response.json()

    let veteranos = data[0]
    let novatos = data[1]

    let usuarios = document.querySelector(".usuarios") //ponto mostra que é uma classe
    usuarios.classList.remove("escondido")    //classList já está informando que é uma classe, então não precisa do ponto.
                                            //remove a classe escondida, ou seja, mostra os dados

    let veteranosLista = document.querySelector(".veteranos")
    let novatosLista = document.querySelector(".novatos")
    veteranosLista.innerHTML = ""
    novatosLista.innerHTML = ""  //limpar a lista

    let veteranosTitulo = document.createElement("p")               //querySelector captura elementos
    veteranosTitulo.innerHTML = veteranos.title
    veteranosTitulo.classList.add("titulo")
    veteranosLista.appendChild(veteranosTitulo)         //insere a informação 

    let novatosTitulo = document.createElement("p")
    novatosTitulo.innerHTML = novatos.title
    novatosTitulo.classList.add("titulo")
    novatosLista.appendChild(novatosTitulo) 

    let veteranosUsuarios = veteranos.userName

    for (let i = 0; i < veteranosUsuarios.length; i++){
        let elemento = document.createElement("p")
        elemento.classList.add("usuario")
        elemento.innerHTML = veteranosUsuarios[i]
        veteranosLista.insertAdjacentElement("afterbegin", elemento)
    }

    let novatosUsuarios = novatos.userName

    for (let i = 0; i < novatosUsuarios.length; i++){
        let elemento = document.createElement("p")
        elemento.classList.add("usuario")
        elemento.innerHTML = novatosUsuarios[i]
        novatosLista.insertAdjacentElement("afterbegin", elemento)
    }
}
