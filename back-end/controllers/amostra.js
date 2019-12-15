const Amostra = require('../models/Amostra')(/* construtor */);

const controller = {}; // Objeto vazio


controller.novo = function(req, res) {
   
   Amostra.create(req.body).then(
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

   Amostra.find().populate('equipamento').populate('analista').populate({ 
      path: 'padrao',
      populate: [{
        path: 'padrao',
        model: 'Padrao'
      }, {
         path: 'equipamento',
         model: 'Equipamento',
       }]
   }).exec().then(
      // Callback do bem
      function(amostra) { 
         // Retorna o vetor encontrado
         res.json(amostra).end();
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

   Amostra.findById(id).exec().then(
      // Callback do bem
      function(amostra) {  
         if(amostra) {   
            res.json(amostra).end();
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

   Amostra.findOneAndUpdate({_id: id}, req.body).exec().then(
      // Callback do bem
      function(amostra) {
         if(amostra) { // Encontrou e atualizou
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

   Amostra.findOneAndDelete({_id: id}).exec().then(
      // Callback do bem
      function(amostra) {     
         if(amostra) { // Encontrou e excluiu
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