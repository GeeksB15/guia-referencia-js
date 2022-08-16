
----



``` json
{ 
  tarefa: 
  {
    id: '',
    ordem: 0;
    tipo: '',
    assunto: 'texto' ? titulo,
    solicitacao: 'texto'  ? descricao,
    classificacao: '',
    idProduto: '',
    prioridade: '',
    dataHoraEmissao: 'aaaa-mm-dd hh:mm:ss',
    dataHoraFinalizado: 'aaaa-mm-dd hh:mm:ss',
    dataLimite: '',
    operacao: ,
    empresa: {
      id: '',
      cnpj: '',
      razaosocial: ''
    }
    solicitante: {
      id: '',
      cpf: '',
      nome: ''
    },
    responsavel:{
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
    }    
    convidados: {
      id: {
        nome:,
        email:
      }
    }
    anotacoes: {
      id: {
        dataHoraCriacao: '',
        usuario: ''
        texto: ''
      }
    },
    apontamentos: {
      id: {
        dataHoraInicio: '',
        dataHoraFim: '',
        cpfUsuario: ''
        Usuario: ''
      }

    }
    //arquivos anexos: 'em outra tabela'
  }
}
```

``` sql
select 
	DO.CodigoDocumento,
	Do.CodigoContato,
	Do.DescricaoContato,
	do.CodigoEmpresa,
	do.DescricaoEmpresa,
	do.CodigoContatoComprador,
	(select Nome from Contato where CodigoContato =  do.CodigoContatoDigitador) as DescricaoSolicitante,
	do.TelefoneContato,
	do.EmailContato,
	do.Observacao,
	do.ObservacaoInterna,
	it.CodigoItem as CodigoProduto,
	it.Descricao as DescricaoProduto,
	it.GRUPO AS Operacao, 
	it.SUBGRUPO AS Grupo,
	it.GarantiaDias,
	it.GarantiaDescricao as Prioridade,
	do.CodigoCOntatoResponsavel,
	(select Nome from Contato where CodigoContato =  do.CodigoContatoResponsavel) as DescricaoResponsavel
from 
documento do
inner join DocumentoItem DI on (DO.CodigoDocumento = DI.CodigoDocumento)
inner join DocumentoStatus DS on (DO.CodigoDocumento = DS.CodigoDocumento and DI.CodigoDocumentoItem = DS.CodigoDocumentoItem)
inner join item IT on (DI.CodigoItem = IT.CodigoItem)
WHERE do. tipo = 'Requisição'
```

``` js
console.log('a')
```