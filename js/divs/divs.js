function div_pai(nome_id_div_pai, id){

    const div = document.createElement('div')
    nome_id_div_pai.appendChild(div)
    div.setAttribute('id', id)

    return(id)
    }

function div(nome_id_div_pai, titulo_secao, id){

    const div = document.createElement('div')
    const h2 = document.createElement('h2')

    h2.innerHTML = titulo_secao

    nome_id_div_pai.appendChild(div)
    div.appendChild(h2)

    div.setAttribute('id', id)

    return(id)
}