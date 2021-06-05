const Contato =  require('../model/ContatoModel');

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos();
    res.render('index', { contatos });
};

/*  reiniciar servidor
 eval $(ssh-agent)    ssh-add ~/.ssh/id_rsa     ssh  e o IP da maquina
*/

