function list (nome_id_div_pai, empresa, cargo, funcoes_cargo, nome_classe,){

    const div = document.createElement('div')
    const strong = document.createElement('strong')
    const span = document.createElement('span')
    const line = document.createElement('ul')
    const br = document.createElement('br')

    strong.innerHTML = empresa
    span.innerHTML = cargo

    nome_id_div_pai.appendChild(div)

    div.appendChild(strong)
    div.appendChild(br)
    div.appendChild(span)
    div.appendChild(line)

    div.setAttribute('class', nome_classe)

    for (var i = 0; i < funcoes_cargo.length; i++ ){
        const lilist = document.createElement('li')
        lilist.innerHTML = funcoes_cargo[i]
        line.appendChild(lilist)
    }
}