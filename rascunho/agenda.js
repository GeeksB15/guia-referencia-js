tarefa = {
  id: '',
  idPai: '',
  ordem: 0,
  tipo: '', //['visita externa', 'gps', '']
  titulo: 'texto',// ? assunto
  descricao: 'texto',// ? solicitacao
  iditem: 'id', //classificacao
  //prioridade: '', só mostra, vem do item
  dataHoraCriacao: 'aaaa-mm-dd hh:mm:ss',
  dataHoraFinalizado: 'aaaa-mm-dd hh:mm:ss',
  dataLimite: '',
  status: '',
  operacao: '',
  tags: {id:'texto',id:'texto'},
  empresa: {
    id: '',
    cnpj: '',
    razaosocial: ''
  },
  organizador: {
    id: '',
    cpf: '',
    nome: ''
  },
  responsavel: {
    id: '',
    cpf: '',
    nome: ''
  },
  cliente: {
    cpfcnpj: '',
    id: '',
    nome: ''
  },
  contato: {
    id: '',
    cpf: '',
    nome: '',
    telefone: '',
    email: ''
  },
  convidados: {
    id: {
      nome: '',
      email: '',
      observacaoes: '',
      tags: {id:'texto',id:'texto'},
    }
  },
  anotacoes: {
    id: {
      dataHoraCriacao: '',
      usuario: '',
      texto: ''
    }
  },
  apontamentos: {
    id: {
      dataHoraInicio: '',
      dataHoraFim: '',
      cpfUsuario: '',
      Usuario: '',
      tags: {id:'texto',id:'texto'},
    }
  }
  //arquivos anexos: 'em outra tabela'
}