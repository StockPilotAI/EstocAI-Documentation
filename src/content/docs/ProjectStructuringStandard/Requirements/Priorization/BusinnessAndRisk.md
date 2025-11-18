---
title: Business x Risk
---

## Introdução

A priorização de requisitos é uma atividade essencial no desenvolvimento de software, pois auxilia na tomada de decisões sobre quais funcionalidades devem ser implementadas primeiro. A técnica de Valor de Negócio x Risco permite avaliar os requisitos considerando duas dimensões fundamentais: o valor que cada requisito agrega ao negócio e o risco associado à sua implementação.

Esta abordagem utiliza uma matriz 2x2 que classifica os requisitos em quatro quadrantes, proporcionando uma visualização clara das prioridades e auxiliando a equipe de desenvolvimento a tomar decisões estratégicas sobre a ordem de implementação das funcionalidades.

## Metodologia

A metodologia de priorização por Valor de Negócio x Risco consiste em avaliar cada requisito em duas dimensões:

- **Valor de Negócio**: Representa o quanto aquele requisito contribui para os objetivos do negócio, impacto no usuário final, diferencial competitivo e retorno sobre o investimento. É classificado como Alto ou Baixo.

- **Risco**: Representa a complexidade técnica, incertezas na implementação, dependências externas, impacto em outros sistemas e probabilidade de problemas durante o desenvolvimento. É classificado como Alto ou Baixo.

Com base nessas dimensões, os requisitos são distribuídos em quatro quadrantes:

1. **Faça Primeiro** (Alto Valor + Baixo Risco): Requisitos que agregam muito valor ao negócio e possuem baixa complexidade ou risco de implementação. Devem ser priorizados no desenvolvimento.

2. **Evite Fazer** (Alto Valor + Alto Risco): Requisitos que, apesar de terem alto valor de negócio, apresentam riscos significativos. Requerem análise cuidadosa e planejamento detalhado antes da implementação.

3. **Faça em Seguida** (Baixo Valor + Baixo Risco): Requisitos que agregam valor moderado e são relativamente simples de implementar. Devem ser desenvolvidos após os requisitos de alta prioridade.

4. **Faça por Último** (Baixo Valor + Alto Risco): Requisitos que agregam pouco valor ao negócio e ainda apresentam alta complexidade ou risco. Devem ser implementados apenas se houver tempo e recursos disponíveis.

A análise foi realizada em conjunto com a equipe de desenvolvimento e stakeholders, considerando os objetivos estratégicos do projeto EstocAI.

## Requisitos Priorizados

### Faça Primeiro (Alto Valor + Baixo Risco) 🟢

Estes requisitos devem ser implementados com prioridade máxima, pois oferecem alto valor de negócio com riscos controlados:

| ID | Requisito | Justificativa |
|----|-----------|---------------|
| RF-01 | CRUD de transação monetária | Funcionalidade essencial para o controle financeiro do estoque, com complexidade técnica moderada |
| RF-02 | Módulo de gestão de inventário | Core do sistema, fundamental para o gerenciamento de estoque |
| RF-09 | CRUD de produtos | Funcionalidade básica e essencial para cadastro e gestão dos produtos |
| RF-07 | Relatório de reposição de estoque | Alto valor para tomada de decisões, implementação direta |
| RF-15 | Sistema permite consultar métricas através de gráficos | Visualização de dados essencial para gestão, tecnologias maduras disponíveis |
| RF-16 | Sistema permite consultar métricas através de gráficos | Visualização de dados essencial para gestão, tecnologias maduras disponíveis |
| RF-21 | Sistema permite cadastrar possíveis informações da embalagem/aria no estoque | Informação importante para rastreabilidade, implementação simples |
| RF-26 | Sistema permite consultar possíveis erros encontrados pela inteligência artificial | Diferencial do sistema, aproveitamento dos recursos de IA com baixa complexidade de consulta |

### Evite Fazer (Alto Valor + Alto Risco) 🔴

Estes requisitos possuem alto valor mas apresentam riscos significativos. Devem ser cuidadosamente planejados:

| ID | Requisito | Justificativa |
|----|-----------|---------------|
| RF-03 | Módulo de integração (Marketplace) | Alto valor para expansão do negócio, mas envolve integrações complexas com sistemas externos |
| RF-11 | Visualização de estoque (para marketing) | Importante para estratégias de marketing, porém requer desenvolvimento de funcionalidades específicas e possível exposição de dados sensíveis |

### Faça em Seguida (Baixo Valor + Baixo Risco) 🟡

Estes requisitos podem ser implementados após as funcionalidades prioritárias:

| ID | Requisito | Justificativa |
|----|-----------|---------------|
| RF-04 | Módulo de relatórios | Complementar aos relatórios essenciais, implementação direta |
| RF-12 | Login pela UI ou por serviço de terceiros | Funcionalidade de autenticação com soluções prontas disponíveis |
| RF-23 | Sistema permite alertas sobre quantidade de estoque através de validações funcionais | Funcionalidade útil mas não crítica, implementação simples |
| RF-24 | Sistema deve permitir acesso a informações essenciais sobre fornecedores | Informação complementar ao sistema principal |
| RNF-01 | Sistema deve evitar erros e telas brancas durante o uso | Requisito de qualidade importante mas gerenciável com boas práticas |
| RNF-12 | Sistema possui validações durante as interações feitas | Melhoria de experiência do usuário, implementação incremental |
| RNF-13 | Sistema deve garantir a persistência e consistência dos dados | Requisito fundamental mas com soluções estabelecidas disponíveis |

### Faça por Último (Baixo Valor + Alto Risco) 🟠

Estes requisitos devem ser implementados apenas se houver tempo e recursos disponíveis:

| ID | Requisito | Justificativa |
|----|-----------|---------------|
| RF-06 | Definição de nível mínimo de estoque | Funcionalidade complementar com complexidade de regras de negócio |
| RF-14 | Sistema permite um modo de visualização do dashboard (preview) no desktop | Funcionalidade adicional que requer desenvolvimento específico |
| RF-18 | Sistema permite um gerenciamento sobre as permissões dos usuários | Sistema de permissões complexo para valor agregado moderado |
| RF-22 | Sistema permite gerenciar relatórios que sejam baseados em inteligência artificial | Envolve complexidade de IA com retorno incerto |
| RNF-08 | Sistema possui modo escuro/claro | Funcionalidade de interface adicional, não essencial |
| RNF-09 | Sistema deve permitir exibir erros via prompt com duas linhas via prompt com 255 caracteres no máximo | Requisito muito específico com complexidade de implementação para valor limitado |

## Referências Bibliográficas

> WIEGERS, Karl; BEATTY, Joy. Software Requirements. 3. ed. Microsoft Press, 2013.

> PRESSMAN, Roger S.; MAXIM, Bruce R. Engenharia de Software: Uma Abordagem Profissional. 8. ed. AMGH, 2016.

### Histórico de Versão

| Versão | Data       | Descrição                                               | Autores                        | Revisores |
| ------ | ---------- | ------------------------------------------------------- | ------------------------------ | --------- |
| 1.0    | 17/11/2025 | Criação do documento |  [Luis Miranda](https://github.com/LuisMiranda10)  | [Vinícius Mendes](https://github.com/yabamiah)    |
