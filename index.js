const listaDeTarefas = []; // cria um array vazio para ser a lista de tarefas
let contador = 0; // inicia o contador em 0

function adicionarTarefa(nome){ // função para adicionar tarefa
    if(typeof nome !== 'string' || nome.length === 0){ // checa o tipo e o tamanho do nome
        return console.log('Nome Inválido') // retorna mensagem se o nome for inválido
    }
    contador++ // incrementa o contador para ser usado no id, tendo assim sempre um id único
    listaDeTarefas.push({
        id: contador,
        nome: nome,
        concluido: false,
    }) // adiciona um objeto com id, nome e concluido como chaves ao array

    return console.log(`Tarefa: ${nome} Adicionada!`) //retorna mensagem de sucesso
}

function listarTarefas(){ // função para listagem de ratefas
   return console.log(listaDeTarefas) // retorna o array de tarefas
}

function encontrarPorId(id){ // função para encontrar tarefa por ID
    
   const resultado = listaDeTarefas.find(item => item.id === id); // procura no array por um item com id igual ao id recebido na função

   if(!resultado){ // se não encontrar o item
    return console.log('Tarefa não encontrada!') // retorna a mensagem
   }
   return console.log(resultado) // se encontrar o item retorna o item
}

function atualizarTarefa(id, nome, concluido){ // função para atualizar tarefa

    if(nome?.length === 0){ // checa o tipo e o tamanho do nome
        return console.log('Nome Inválido') // retorna mensagem se o nome for inválido
    }
   const index = listaDeTarefas.findIndex(item => item.id === id) // procura no array o index do item onde o id dele é igual ao id recebido pela função

   if(index < 0){ // se não achar o index
    return console.log('Tarefa não encontrada') // retorna mensagem 
   }

   if(typeof concluido !== 'boolean'){ // checa o tipo de concluido
    return console.log('Concluido inválido') // retorna mensagem se concluido for inválido
   }
   listaDeTarefas[index] = {
    id: id,
    nome: nome ?? listaDeTarefas[index].nome,
    concluido: concluido ?? listaDeTarefas[index].concluido
   } // reatribui valores ao objeto encontrado, considerando o nome e o concluido, atualizando se o dado existir ou mantendo o antigo se o dado não existir

   console.log('Atividade atualizada com sucesso!') // retorna mensagem de sucesso
}

function deletarTarefa(id){ // função para deletar tarefa
    const index = listaDeTarefas.findIndex(item => item.id === id) // procura no array o index do item onde o id dele é igual ao id recebido pela função
    if(index < 0){ // se não achar o index
        return console.log('Tarefa não encontrada') // retorna mensagem 
       }
    listaDeTarefas.splice(index, 1) // remove o item encontrado do array

    console.log('Atividade deletada com sucesso!') // retorna mensagem de sucesso

}

listarTarefas() // deve mostrar a lista vazia

adicionarTarefa('Levar o lixo pra fora') // deve mostrar a mensagem de sucesso
adicionarTarefa('') // deve mostrar a mensa de erro, pois nome é inválido
adicionarTarefa(1) // deve mostrar a mensa de erro, pois nome é inválido
adicionarTarefa('Passear com o cachorro') // deve mostrar a mensagem de sucesso

listarTarefas() // deve mostrar a lista de tarefas, com 2 itens

encontrarPorId(1) // deve mostrar a mensagem de sucesso
encontrarPorId(2) // deve mostrar a mensagem de sucesso
encontrarPorId(99) // deve mostrar a mensagem de erro, pois não existem tarefa com esse id

atualizarTarefa(1, 'Caminhar na praia', true) // deve mostrar a mensagem de sucesso
atualizarTarefa(99, 'Caminhar na praia', true) // deve mostrar a mensagem de erro, pois o id não existe
atualizarTarefa(2, '', true) // deve mostrar a mensagem de erro, pois o nome é inválido
atualizarTarefa(2, 'Caminhar na praia', 'invalid') // deve mostrar a mensagem de erro, pois o concluido é inválido
atualizarTarefa(2, null, true) // deve mostrar a mensagem de sucesso, atualizando apenas o concluido

listarTarefas() // deve mostrar a lista de tarefas, com 2 itens

deletarTarefa(2) // deve mostrar a mensagem de sucesso
deletarTarefa(99) // deve mostrar a mensagem de erro, pois o id não existe

listarTarefas() // deve mostrar a lista de tarefas, com 1 item