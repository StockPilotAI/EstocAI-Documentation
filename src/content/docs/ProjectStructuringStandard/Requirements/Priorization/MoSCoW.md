---
title: MoSCoW
---

# MoSCoW

## Introdução

A técnica MoSCoW é uma metodologia amplamente utilizada para priorização de requisitos em projetos de desenvolvimento de software. O nome MoSCoW é um acrônimo que representa quatro categorias de priorização: **M**ust have (Deve ter), **S**hould have (Deveria ter), **C**ould have (Poderia ter) e **W**on't have (Não terá neste momento).

Esta técnica permite que a equipe de desenvolvimento e stakeholders classifiquem os requisitos de acordo com sua criticidade e importância para o sucesso do projeto, facilitando a tomada de decisões sobre o escopo e a alocação de recursos. O método MoSCoW é particularmente útil quando há restrições de tempo e recursos, ajudando a garantir que as funcionalidades essenciais sejam entregues primeiro.

## Metodologia

A metodologia MoSCoW categoriza os requisitos em quatro grupos distintos:

### Must Have (Críticos) - M

Requisitos essenciais e indispensáveis para o funcionamento básico do sistema. São funcionalidades sem as quais o produto não pode ser considerado viável. Estes requisitos representam o **Mínimo Produto Viável (MVP)** e devem ser implementados na primeira versão do sistema.

**Características:**
- Fundamentais para o core business
- Sem eles, o sistema não funciona adequadamente
- Representam obrigações legais ou de conformidade
- Têm alto impacto se não forem implementados

### Should Have (Importantes) - S

Requisitos importantes que agregam valor significativo ao sistema, mas não são críticos para o lançamento inicial. Podem ser adiados para versões posteriores se necessário, embora sua ausência cause impacto negativo na experiência do usuário ou na eficiência operacional.

**Características:**
- Importantes para o negócio, mas existem alternativas temporárias
- Causam inconveniência se não implementados, mas não impedem o uso do sistema
- Geralmente implementados logo após os requisitos Must Have

### Could Have (Desejados) - C

Requisitos desejáveis que melhorariam a experiência do usuário ou agregariam valor adicional ao sistema, mas têm menor impacto se não forem implementados. São funcionalidades "boas de ter" que podem ser incluídas se houver tempo e recursos disponíveis.

**Características:**
- Melhoram a experiência do usuário
- Têm impacto pequeno se não forem implementados
- Podem ser facilmente removidos do escopo sem prejuízo significativo
- Geralmente implementados em versões futuras

### Won't Have (Talvez Depois) - W

Requisitos que foram identificados e documentados, mas que foram conscientemente excluídos do escopo atual do projeto. Podem ser considerados para implementação em versões futuras, mas não serão desenvolvidos no ciclo atual.

**Características:**
- Menos críticos ou estratégicos no momento atual
- Podem ser reconsiderados em futuras releases
- Ajudam a gerenciar expectativas dos stakeholders
- Evitam scope creep (aumento descontrolado do escopo)

A análise MoSCoW foi realizada considerando os objetivos estratégicos do projeto EstocAI, as necessidades dos usuários identificadas durante a elicitação de requisitos e as restrições de tempo e recursos disponíveis para o desenvolvimento.

## Requisitos Priorizados

### Must Have - Críticos (M) 🟡

Requisitos essenciais que devem ser implementados obrigatoriamente no MVP:

| ID | Requisito | Justificativa |
|----|-----------|---------------|
| RF-09 | CRUD de produtos | Funcionalidade core do sistema, sem ela não é possível gerenciar produtos |
| RF-02 | Módulo de gestão de inventário | Base fundamental para todo o sistema de controle de estoque |
| RF-01 | CRUD de transação monetária | Essencial para controle financeiro relacionado ao estoque |
| RF-15 | Sistema permite criar e consultar métricas através de gráficos | Visualização de dados crítica para tomada de decisões gerenciais |
| RNF-13 | Sistema deve garantir persistência e confiabilidade de dados | Requisito fundamental para integridade e segurança dos dados |
| RF-24 | Sistema deve permitir acesso a informações essenciais sobre fornecedores | Informação crítica para operação e reposição de estoque |
| RF-12 | Login pela UI ou por serviço de terceiros | Segurança e controle de acesso são obrigatórios |
| RNF-11 | Sistema possui interface simples e intuitiva | Interface adequada é essencial para adoção do sistema pelos usuários |
| RF-04 | Módulo de relatórios | Relatórios são essenciais para análise e gestão do negócio |

### Should Have - Importantes (S) 🔵

Requisitos importantes que devem ser implementados logo após os críticos:

| ID | Requisito | Justificativa |
|----|-----------|---------------|
| RF-21 | Sistema permite detectar possíveis anomalias da embalagem/área entradalizada no estoque | Importante para qualidade e controle, mas sistema funciona sem isso inicialmente |
| RF-20 | Sistema realiza a previsão inteligente sobre o estoque | Diferencial importante mas não crítico para operação básica |
| RNF-01 | Sistema deve evitar erros e telas brancas durante o uso | Importante para experiência do usuário, mas pode ser melhorado incrementalmente |
| RF-11 | Visualização de estoque (para marketing) | Agrega valor mas não é essencial para gestão operacional |
| RNF-09 | Sistema deve retornar respostas rápidas via prompt com informações no qual auxilia no nível de permissão do usuário | Melhora experiência mas não impede uso do sistema |
| RF-06 | Definição de nível mínimo de estoque | Importante para automação, mas pode ser gerenciado manualmente inicialmente |
| RF-22 | Sistema permite gerenciar relatórios que foram gerados pela inteligência artificial | Funcionalidade avançada importante mas não crítica |
| RF-14 | Sistema permite realizar perguntas via prompt para entender possíveis insights sobre o produto | Agrega inteligência ao sistema mas não é essencial no início |
| RF-23 | Sistema permite alertas sobre quantidade de estoque/mínima/máxima e validade de produtos | Muito útil para operação mas pode haver processos manuais temporários |
| RNF-12 | Sistema possui validações durante as interações feitas | Melhora qualidade mas pode ser implementado incrementalmente |
| RF-19 | Sistema permite consultar os possíveis erros encontrados pela inteligência artificial | Funcionalidade de suporte importante mas não bloqueante |
| RF-07 | Relatório de reposição de estoque | Importante para gestão mas pode ser feito com relatórios básicos inicialmente |
| RF-18 | Sistema permite um gerenciamento sobre as permissões dos usuários | Importante para segurança, mas pode haver modelo simples inicialmente |
| RF-13 | Sistema permite filtrar, ordenar os produtos | Melhora muito a usabilidade mas não impede uso básico do sistema |

### Could Have - Desejados (C) 🟠

Requisitos desejáveis que podem ser implementados se houver recursos:

| ID | Requisito | Justificativa |
|----|-----------|---------------|
| RNF-10 | Sistema deve validar o cadastro dos produtos | Funcionalidade que melhora a qualidade dos dados mas não é crítica |
| RF-16 | Sistema permite uma validação de visualização do dashboard (preview) no desktop | Feature adicional de visualização, baixa prioridade |

### Won't Have - Talvez Depois (W) 🔴

Requisitos que não serão implementados nesta versão:

| ID | Requisito | Justificativa |
|----|-----------|---------------|
| RF-03 | Módulo de integração (Marketplace) | Funcionalidade complexa que será considerada em versões futuras, após consolidação do sistema base |

## Resumo da Priorização

A distribuição dos requisitos na priorização MoSCoW ficou da seguinte forma:

| Categoria | Quantidade | Percentual |
|-----------|------------|------------|
| Must Have (M) | 9 | ~36% |
| Should Have (S) | 14 | ~56% |
| Could Have (C) | 2 | ~8% |
| Won't Have (W) | 1 | ~4% |

**Total de Requisitos Analisados:** 26

Esta distribuição demonstra que aproximadamente 36% dos requisitos são críticos para o MVP, enquanto 56% são importantes e devem ser implementados em seguida. Apenas 12% dos requisitos foram classificados como de baixa prioridade ou excluídos do escopo atual.

## Referências Bibliográficas

> CLEGG, Dai; BARKER, Richard. Case Method Fast-Track: A RAD Approach. Addison-Wesley, 1994.

> WIEGERS, Karl; BEATTY, Joy. Software Requirements. 3. ed. Microsoft Press, 2013.

> PRESSMAN, Roger S.; MAXIM, Bruce R. Engenharia de Software: Uma Abordagem Profissional. 8. ed. AMGH, 2016.

### Histórico de Versão

| Versão | Data       | Descrição                                               | Autores                        | Revisores |
| ------ | ---------- | ------------------------------------------------------- | ------------------------------ | --------- |
| 1.0    | 17/11/2025 | Criação do documento |  [Luis Miranda](https://github.com/LuisMiranda10) e [Vinícius Mendes](https://github.com/yabamiah) |     |
