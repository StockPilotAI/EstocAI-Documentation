---
title: Interview
---

# Entrevista

## Introdução

A entrevista é uma das técnicas mais utilizadas de coleta de dados e levantamento de requisitos. Trata-se de uma conversa guiada por um roteiro de perguntas ou tópicos, na qual um entrevistador busca obter informação de um entrevistado (Seidman1, 1998). A entrevista permite uma interação direta com os usuários para compreender suas necessidades e expectativas em relação ao sistema.

## Metodologia

A metodologia adotada para a elaboração deste artefato de elicitação de requisitos envolveu uma combinação de questões com foco na experiência atual dos usuários com aplicativos de músicas, sendo os recursos mais utilizados, problemas, experiência e impacto deste tipo de aplicação no seu dia a dia.

As entrevistas foram realizadas no dia 06/04/2024 e contou com a participação de dois usuários de aplicativos de música, que foram entrevistado pelo Vinícius Mendes, acompanhado do escrivão Luis Miranda, onde ambos construíram o roteiro juntos. Na tabela 1 pode ser visto o cronograma executado das entrevistas e as informações sobre cada uma.

Antes do início da entrevista foi lido um termo de consentimento ao participante, para que assim possamos coletar os seus dados de forma ética e consentida, além de explicar também os motivos e objetivos da entrevista.

A entrevista foi projetada com um roteiro de 19 perguntas abertas e fechadas, sendo 4 delas para definição de perfil e 15 com foco em elicitar requisitos em relação a aplicativos de música, assim explorando a experiência dos usuários e suas necessidades. A plataforma utilizada foi o Teams para a gravação e condução da entrevista.

Após a coleta de dados das respostas dos participantes, foram transcritas e delas elicitamos requisitos para o projeto.

<center>

<p align="center"><b>Tabela 01</b> - Cronograma executado para a Entrevista (Elicitação de Requisitos) </p>

### Cronograma executado

| Data       | Horário       | Entrevistado         | Entrevistador   | Escrivão        | Entrevista                           |
| ---------- | ------------- | -------------------- | --------------- | --------------- | ------------------------------------ |
| 06/04/2024 | 11:40 - 11:55 |        | Luis Miranda | Vinícius Mendes    | [Link]() |
| 06/04/2024 | 13:00 - 13:15 |  | Luis Miranda | Vinícius Mendes | [Link]() |

Fonte: [Luis Miranda](https://github.com/LuisMiranda10) e [Vinícius Mendes](https://github.com/yabamiah)

### Perfil dos Entrevistados

A tabela 2 contém as informações dos entrevistados, que foram no geral homens jovens e estudantes.

<center>

<p align="center"><b>Tabela 02</b> - Informações dos perfis entrevistados. </p>

| Entrevistado | Gênero | Idade | Ocupação |
|--------------|--------|-------|----------|
| <Nome-do-Entrevistado> | Homem cis | 18 | Estudante |
| <Nome-do-Entrevistado> | Homem cis | 23 | Estudante e estágio na CAESB |

Fonte: [Luis Miranda](https://github.com/LuisMiranda10) e [Vinícius Mendes](https://github.com/yabamiah)

## Roteiro de Entrevista

### 1. Estrutura da Entrevista

A estrutura da entrevista será:

#### Apresentação (Aprox. 5 min)

- O entrevistador e o escrivão (anotador) se apresentam.
- Explicação dos objetivos da entrevista (entender a experiência e necessidades com gerenciamento de estoque).
- Leitura e aceite do termo de consentimento (informando sobre gravação, anonimato e uso dos dados).

#### Entrevista Principal (Aprox. 20-30 min)

- Perguntas focadas sobre a experiência, processos, desafios e necessidades do usuário em relação ao gerenciamento de estoque (requisitos funcionais e não-funcionais).

#### Comentários Finais (Aprox. 5 min)

- Espaço para o entrevistado adicionar qualquer informação que considere relevante e que não tenha sido perguntada.

#### Conclusão (Aprox. 2 min)

- Agradecimento pelo tempo e contribuição do entrevistado.
- Confirmação dos próximos passos (se houver) e encerramento da gravação.

---

### 2. Perguntas da Entrevista

Abaixo está a estrutura detalhada das perguntas para conduzir a entrevista.


<p align="center"><b>Tabela 03</b> - Perguntas da Entrevista. </p>

| Parte | Tópico | Perguntas |
|-------|--------|-----------|
| **Entrevista Principal** | **Requisitos Funcionais** | 1. O que você acha do seu software de gerenciar estoque atual? *(aberta)* |
| | | 2. Quais ferramentas você utiliza atualmente para gerenciar o estoque? *(aberta)* |
| | | 3. Quais hábitos você tem ao gerenciar o seu estoque? *(aberta)* |
| | | 4. Qual a sua maior dificuldade hoje em se planejar se baseando no seu estoque? *(aberta)* |
| | | 5. Quais problemas inesperados ocorrem com frequência em relação ao seu estoque? *(aberta)* |
| | | 6. Como você toma decisões atualmente sobre reposição ou descarte de produtos? *(fechada)* |
| | | 7. Que tipo de automação ou suporte você gostaria de ter no gerenciamento? *(fechada)* |
| | | 8. Quais funcionalidades de um gerenciador de estoque (software ou ferramenta pessoal) você não vive mais sem? *(aberta)* |
| | | 9. Como você se planeja para evitar rupturas ou excesso de estoque? *(fechada)* |
| | | 10. Como você acompanha a performance dos seus produtos? (por exemplo, se estão se esgotando, se estão com baixa rotatividade, etc.) *(fechada)* |
| | | 11. Quem mais interage com o sistema de estoque na sua empresa? *(aberta, identificar atores que participam no processo)* |
| | | 12. Que informações você precisa consultar com mais frequência? *(aberta)* |
| | | 13. Que integrações com outros sistemas você precisa? *(fechada)* |
| | **Requisitos Não Funcionais** | 1. Normalmente, qual é o volume máximo de produtos que você precisa gerenciar? |
| | | 2. Quem deve ter acesso a relatórios financeiros do estoque? |
| | | 3. Que tipos de dispositivos sua equipe utiliza no dia a dia? |
| | | 4. Você precisa acessar o sistema remotamente ou apenas localmente? |
| | | 5. Você tem conexão de internet estável no local de trabalho? |
| | | 6. Quais outros sistemas você utiliza que precisam trocar informações com o gerenciador de estoque? |
| | | 7. Você precisa importar ou exportar dados de outros sistemas? |
| **Comentários Finais** | **Fechamento** | 1. Você sentiu que deixamos de abordar alguma parte importante das suas experiências ou necessidades sobre esse tema? |
| | | 2. Há algo mais que você gostaria de adicionar? |

Fonte: [Luis Miranda](https://github.com/LuisMiranda10) e [Vinícius Mendes](https://github.com/yabamiah)

## Requisitos Elicitados

Após a realização da entrevista com os usuários de aplicativos de músicas, foi possível elicitar requisitos apresentados na Tabela 4. Onde cada requisito é classificado por uma sigla formada por "ENT" + um número, em que "ENT" é uma sigla para entrevista, e para representar o tipo de requisito, será usado as siglas "RF" ou "RNF" que representam os Requisitos Funcionais e Não Funcionais.

<p align="center"><b>Tabela 04</b> - Requisitos elicitados. </p>

| Identificador | Requisito | Tipo |
| ------------- | --------- | ---- |
| ENT01              | Disponibilizar música          |  RF    |
| ENT02              | Salvar música          | RF     |
| ENT03              | Criar uma PlayList de música          |  RF    |
| ENT04              | Baixar a música para ouvir offline          |  RF    |
| ENT05              | Buscar música          | RF     |
| ENT06              | Ver letra de determinada música          |  RF    |
| ENT07              | Editar PlayList          |  RF    |
| ENT08              | Deletar PlayList          | RF     |
| ENT09              | Compartilhar PlayList via link          | RF     |
| ENT10              | Pesquisar PlayList          |  RF    |
| ENT11              | Salvar PlayList          | RF     |
| ENT12              | Criar um usuário          | RF     |
| ENT13              | Editar usuário          | RF     |
| ENT14              | Deletar usuário          | RF     |
| ENT15              | Pesquisar artista          | RF     |
| ENT16              | Ver perfil de artista          | RF     |
| ENT17              | Pesquisar álbum de músicas          | RF     |
| ENT18              | Filtrar pesquisa por artista/álbum/música          |  RF    |
| ENT19              | Baixar PlayList para ouvir offline         | RF     |
| ENT20              | Deve conter as músicas mais ouvidas no seu país/mundo          | RFN     |
| ENT21              | Eficiência na busca e filtragem de músicas de acordo com as preferências do usuário          | RFN     |
| ENT22              | Garantir que as músicas/PlayLists baixadas estejam disponíveis         | RFN     |
| ENT23              | Interface intuitiva para busca/filtragem de música         | RFN     |

Fonte: [Luis Miranda](https://github.com/LuisMiranda10) e [Vinícius Mendes](https://github.com/yabamiah)

## Referênciaa Bibliográfica

> SEIDMAN, I. Interviewing as Qualitative Research: a guide for researchers in Education and the Social Sciences. New York, NY: Teachers College Press, 1998

### Histórico de Versão

| Versão | Data       | Descrição                                               | Autores                        | Revisores |
| ------ | ---------- | ------------------------------------------------------- | ------------------------------ | --------- |
| 1.0    | 07/11/2025 | Criação do documento | [Vinícius Mendes](https://github.com/yabamiah) |  [Luis Miranda](https://github.com/LuisMiranda10)    |