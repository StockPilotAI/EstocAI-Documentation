---
title: Architecture Overview
---

# Representação da Arquitetura
O EstocAI segue uma arquitetura Cliente-Servidor como estilo arquitetural primário, dividido em dois sistemas principais: um Frontend (Cliente) e um Backend (Servidor), ambos integrados aos serviços da AWS. Essa estrutura garante a separação clara de responsabilidades e facilita a manutenção, escalabilidade e colaboração entre equipes de desenvolvimento.

## 1.1. Backend (Servidor)
O Servidor implementa uma arquitetura em camadas (Layered Architecture), sendo responsável pelos processos centrais da aplicação. As responsabilidades principais incluem:

* Fornecer uma API RESTful consumida pelo cliente, seguindo os princípios de API-first design;
* Executar processamento de dados e aplicar regras de negócio complexas; 
* Gerenciar a comunicação de alto desempenho com o banco de dados (operações de leitura e escrita);
* Orquestrar integrações com serviços externos da AWS.

A arquitetura em camadas garante o isolamento de responsabilidades, facilitando testes, manutenção e futuras modificações. Cada camada se comunica apenas com as camadas adjacentes, reduzindo o acoplamento:

* Repository: Camada de acesso a dados. Responsável pela comunicação direta com o banco de dados e abstrair as operações de persistência;
* Service: Camada de lógica de negócio. Implementa as regras de negócio, validações e coordenação entre operações;
* Controller: Camada de apresentação. Processa requisições HTTP, valida requisições e respostas, e traduz dados entre formatos de entrada/saída;
* Routes: Camada de definição. Define as rotas da aplicação e agrupa os controladores de forma organizada.

Essa organização segue o Princípio da Responsabilidade Única e promove loose coupling através de interfaces bem definidas.

## 1.2. Frontend (Cliente)
O Cliente implementa uma arquitetura baseada em componentes, sendo responsável pela interação completa do usuário com o sistema. As responsabilidades principais incluem:

* Consumir serviços da API do Backend de forma eficiente e confiável;
* Apresentar dados ao usuário de forma intuitiva, responsiva e performática;
* Coletar entradas do usuário e encaminhá-las ao Servidor para processamento.

A arquitetura baseada em componentes promove modularidade, reutilização de código e facilita testes isolados. Os componentes são divididos em pequenas unidades independentes e reutilizáveis, permitindo que múltiplas equipes trabalhem simultaneamente sem conflitos.​​

### 1.2.1. Padrão de Componentes Inteligentes e Apresentacionais
O projeto utiliza a separação entre Componentes Inteligentes (Smart/Container) e Componentes Apresentacionais (Dumb/Presentational) para melhor separação de responsabilidades:​

Componentes Inteligentes:

* Gerenciam estado da aplicação e efeitos colaterais;
* Realizam chamadas para APIs do Backend;
* Implementam regras de negócio e lógica de aplicação;
* Se comunicam com serviços e repositórios de dados;
* Passam dados para componentes apresentacionais via props.

Componentes Apresentacionais:

* Focam exclusivamente na estrutura visual e layout;
* Recebem dados apenas via props;
* Não gerenciam estado (exceto estado local de UI);
* Não contêm lógica de negócio;
* São altamente reutilizáveis e fáceis de testar.

Essa separação melhora a reutilização de componentes, facilita os testes unitários e permite que designers trabalhem com a biblioteca de componentes de forma independente.​

### 1.2.2. Organização de Componentes: Shared e UI

Os componentes reutilizáveis são organizados em duas categorias distintas:

UI Components (shadcn):

* Componentes básicos e atômicos de estrutura visual;
* Blocos de construção fundamentais (botões, inputs, cards, etc.);
* Sem lógica de negócio;
* Totalmente apresentacionais e altamente customizáveis;
* Vêm da biblioteca shadcn para garantir consistência visual.

Shared Components:

* Componentes inteligentes que combinam estrutura visual com lógica;
* Encapsulam regras de negócio e gerenciamento de dados;
* Se comunicam com APIs e serviços da aplicação;
* Reutilizáveis em múltiplas telas, mas específicos do domínio da aplicação;
* Exemplo: componentes de formulário com validação, cards com busca integrada, etc.

Essa organização promove coesão, reduz duplicação de código e facilita a manutenção centralizada de funcionalidades compartilhadas.​

### Histórico de Versão

| Versão | Data       | Descrição                                               | Autores                        | Revisores |
| ------ | ---------- | ------------------------------------------------------- | ------------------------------ | --------- |
| 1.0    | xx/xx/2025 | Criação do documento |  [Vinícius Mendes](https://github.com/yabamiah) | [Luis Miranda](https://github.com/LuisMiranda10)     |