
----



``` json
{ 
  tarefa: 
  {
    tabela: 'Documento',
    CampoNoBanco: 'Titulo Tela',
    id: '',
    Observacao: 'Assunto',
    ObservacaoInterna: 'Solicitação',
    DescricaoProduto: 'Classificação',
    CodigoProduto: 'Codigo Produto',
    Prioridade: 'Prioridade',

    CodigoContatoComprador: 'Solicitante',
    DescricaoSolicitante: 'Solicitante',

    CodigoContatoResponsavel: 'Responsável',
    DescricaoResponsavel: 'Responsável',

    NumeroDocumentoNacionalcliente: '',
    CodigoContato: 'Cliente',
    DescricaoContato: 'Cliente',

    CodigoEmpresa: 'CodigoEmpresa',
    DescricaoEmpresa: 'Empresa',
    
    TelefoneContato: 'Telefone',
    EmailContato: 'Email',
    
    OperacaoProduto: 'Operação',

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