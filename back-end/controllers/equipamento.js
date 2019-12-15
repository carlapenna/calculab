const Equipamento = require('../models/Equipamento')(/* construtor */);

const controller = {}; // Objeto vazio


controller.novo = function(req, res) {
   
   Equipamento.create(req.body).then(
      // Callback se der certo
      function() {
         //res.send(null); // Resposta sem conteúdo
         // HTTP 201: Criado

         // Gambiarra para não dar erro no front-end
         res.send('');

         res.sendStatus(201).end();
      },
      // Callback se der errado
      function(erro) {
         console.error(erro); // Mostra o erro no terminal
         // HTTP 500: Erro interno do servidor
         res.sendStatus(500).end();
      }
   );
}


controller.listar = function(req, res) {

   Equipamento.find().exec().then(
      // Callback do bem
      function(equipamento) { 
         // Retorna o vetor encontrado
         res.json(equipamento).end();
      },
      // Callback do mal
      function(erro) {
         console.error(erro);
         res.sendStatus(500).end();
      }
   );
}


controller.obterUm = function(req, res) {
   
   const id = req.params.id;

   Equipamento.findById(id).exec().then(
      // Callback do bem
      function(equipamento) {  
         if(equipamento) {   
            res.json(equipamento).end();
         }
         else {          
            // HTTP 404: Não encontrado
            res.sendStatus(404).end();
         }
      },
      // Callback do mal
      function(erro) {
         console.error(erro);
         res.sendStatus(500).end();
      }
   );
}


controller.atualizar = function(req, res) {
   
   const id = req.body._id;

   Equipamento.findOneAndUpdate({_id: id}, req.body).exec().then(
      // Callback do bem
      function(equipamento) {
         if(equipamento) { // Encontrou e atualizou
            // HTTP 204: OK (sem conteúdo)
            res.sendStatus(204).end();
         }
         else { // Não encontrou (e não atualizou)
            res.sendStatus(404).end();
         }
      },
      // Callback do mal
      function(erro) {
         console.error(erro);
         res.sendStatus(500).end();
      }
   );
}


controller.excluir = function(req, res) {

   const id = req.params.id;

   Equipamento.findOneAndDelete({_id: id}).exec().then(
      // Callback do bem
      function(equipamento) {     
         if(equipamento) { // Encontrou e excluiu
            res.sendStatus(204).end();
         }
         else { // Não encontrou (e não excluiu)
            res.sendStatus(404).end();
         }
         
      },
      // Callback do mal
      function(erro) {
         console.error(erro);
         res.sendStatus(500).end();
      }
   );
}

module.exports = controller;