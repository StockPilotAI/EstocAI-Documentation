---
title: Introspection
---

## Introdução

Quando falamos em técnicas de elicitação, de acordo com Goguen (1994), a técnica de introspecção é uma das mais utilizadas, já que depende apenas do avaliador. A introspecção é uma técnica na qual a atividade é baseada em "imaginar" como o sistema deve ser e se comportar para solucionar um determinado problema do usuário.

Como foi dito, esta técnica é realizada pelo próprio avaliador, levando em consideração um ponto de vista particular. Isso nos traz benefícios e vantagens ao utilizar esta técnica, que são:

**Vantagens**: Dá a oportunidade para o avaliador conseguir ter uma concepção de como o sistema funciona e se comporta rapidamente, especialmente quando está utilizando uma certa "encenação" de um usuário imaginário.

**Desvantagens**: O avaliador pode estar fortemente vinculado ao uso do sistema, o que pode dificultar a visão na perspectiva de algum outro tipo de usuário.

## Metodologia

Para a preparação da técnica, foi necessário elaborar mentalmente um cenário de como o sistema deve ser para um usuário que busca resolver um determinado problema.

O cenário imaginário elaborado foi: "Um gerente de uma empresa pretende usar o sistema de gestão de estoques EstocAI para gerenciar os produtos que existem na empresa, conseguir consultar previsões sobre a entrada e saída de produtos, detectar possíveis erros dentro do seu gerenciamento, analisar métricas e verificar informações sobre os produtos cadastrados."

## Requisitos Elicitados

Após o exercício mental de utilizar o software do EstocAI para solucionar o problema de um usuário imaginário, conseguimos eliciar os requisitos apresentados na Tabela 1. Identificamos cada requisito por uma sigla formada por "ITP" + um número. Para representar o tipo do requisito, serão usadas as siglas "RF" ou "RNF", que representam o tipo do requisito funcional ou não funcional.

<center>

<p align="center"><b>Tabela 01</b> - Requisitos elicitados </p>

| **Identificador** | **Requisitos** | **Tipo** |
|--------------|-------------|-----|
|ITP01 |Login pela UI ou por serviço de terceiros    |RF |  
|ITP02 |Sistema permite criar, listar, deletar e atualizar os produtos        |RF   |   |
|ITP03 |Sistema possui interface simples              |RNF        |
|ITP04 |Sistema deve evitar erros e telas brancas durante o uso        |RNF  |
|ITP05 |Sistema possui modo escuro/claro                |RNF  |
|ITP06 |Sistema permite buscar, filtrar, ordernar os produtos |RF   |  
|ITP07 |Sistema permite consultar os dados específicos de um determinado produto |RF   |
|ITP08 |Sistema permite criar e consultar métricas através de gráficos |RF  |
|ITP09 |Sistema permite realizar perguntas via prompt para entender previsões sobre determinado produto |RF  |
|ITP10 |Sistema deve retornar respostas feitas via prompt com informações no qual estão no nível de permissão do usuário |RNF  |
|ITP11 |Sistema deve validar o cadastro dos produtos   |RNF   |  
|ITP12 |Sistema permite uma modo de visualização (preview) ao usuário |RF   |
|ITP13 |Sistema permite um gerenciamento sobre as permissões dos usuários |RF  |
|ITP14 |Sistema permite consultar os possíveis erros encontrados pela inteligência artificial |RF  |

Fonte: [Luis Miranda](https://github.com/LuisMiranda10) e [Vinícius Mendes](https://github.com/yabamiah)

</center>

## Bibliografia
>
> Elicitação de Requisitos, PUC-Rio. Disponível em: [https://www.maxwell.vrac.puc-rio.br/15760/15760_3.PDF](https://www.maxwell.vrac.puc-rio.br/15760/15760_3.PDF).<br>
> Luiz Eduardo Galvão Martins. Uma Metodologia de Elicitação de Requisitos de Software Baseada na Teoria da Atividade. Unicamp, 2001. <br>
> Marcelo Medeiros Eler. Aula 5 - Requisitos de Software - Conceitos e Técnicas de Elicitação. Universidade de São Paulo, 2006. Disponível em: [https://edisciplinas.usp.br/pluginfile.php/7993139](https://edisciplinas.usp.br/pluginfile.php/7993139/mod_resource/content/1/05%20-%20Requisitos%20de%20Software%20-%20Conceitos%20e%20T%C3%A9cnicas%20de%20Elicita%C3%A7%C3%A3o.PDF).<br>

| Versão | Data       | Descrição                                               | Autores                        | Revisores |
| ------ | ---------- | ------------------------------------------------------- | ------------------------------ | --------- |
| 1.0    | 31/10/2025 | Criação do documento |  [Luis Miranda](https://github.com/LuisMiranda10) |  [Vinícius Mendes](https://github.com/yabamiah)    |
