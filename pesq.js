

async function deletaAluno (){
    const newReq =  new Request('http://localhost:3001/aluno/3',{
        method:"delete",
    }) 
    const resposta = await fetch(newReq);
    
            if(resposta.status == 200){
                let area = document.getElementById('texto')
                area.value = resposta.json()
                //return resposta.json()

            } else{
                console.log("deu erro")   
            }
}

async function salvaAluno(){
    const newReq =  new Request('http://localhost:3001/aluno',{
        method:"post",
        body:{
            id:document.getElementById('id').value,
            nome:document.getElementById('nome').value
        }
    }) 
    const resposta = await fetch(newReq);
    
            if(resposta.status == 201){
                let area = document.getElementById('texto')
                area.value = resposta.json()
                //return resposta.json()

            } else{
                console.log("deu erro")   
            }
}




