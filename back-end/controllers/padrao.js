const Padrao = require('../models/Padrao')(/* construtor */);

const controller = {}; // Objeto vazio


controller.novo = function(req, res) {
   
   Padrao.create(req.body).then(
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

   Padrao.find().populate('equipamento').exec().then(
      // Callback do bem
      function(padrao) { 
         // Retorna o vetor encontrado
         res.json(padrao).end();
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

   Padrao.findById(id).exec().then(
      // Callback do bem
      function(padrao) {  
         if(padrao) {   
            res.json(padrao).end();
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

   Padrao.findOneAndUpdate({_id: id}, req.body).exec().then(
      // Callback do bem
      function(padrao) {
         if(padrao) { // Encontrou e atualizou
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

   Padrao.findOneAndDelete({_id: id}).exec().then(
      // Callback do bem
      function(padrao) {     
         if(padrao) { // Encontrou e excluiu
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