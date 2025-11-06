# Arquitetura do Projeto EcoColeta (N708)
## 1. Visão Geral da Arquitetura

Para este projeto, decidimos usar uma arquitetura de três camadas, que é um padrão muito comum para aplicações web e mobile. Isso separa nosso projeto em três partes principais que conversam entre si:

1.  **Frontend:**
    * São as telas que o usuário vê.
    * Estamos usando **React** para a versão Web e **React Native** para a versão Mobile, como planejado na N705.

2.  **Backend:**
    * Estamos usando **Node.js** com o framework **Express** para criar uma API. É ele quem vai buscar e salvar informações no banco de dados.

3.  **Database:**
    * Aqui é onde guardamos a lista de Ecopontos e os dados sobre os Materiais (degradação, etc.).
    * Para esta camada, escolhemos usar o **PostgreSQL**, conforme será explicado abaixo.

## 2. Diagrama da Arquitetura
Abaixo está uma representação visual simples da nossa arquitetura de três camadas, mostrando como os componentes se comunicam.

```text
+------------------+         +------------------+         +----------------+
|                  |         |                  |         |                |
|  Frontend (Web)  |         |                  |         |  Banco de Dados|
|     (React)      |--(1)--> |   Backend (API)  | --(2)-->|  (PostgreSQL)  |
|                  |         |    (Node.js)     |         |                |
+------------------+         |                  |         +----------------+
                             |                  |
+------------------+         |                  |
|                  |         |                  |
| Frontend (Mobile)|         |                  |
|  (React Native)  |--(1)--> |                  |
|                  |         |                  |
+------------------+         +------------------+

## 3. Justificativa da Mudança no Banco de Dados (N705 -> N708)

No planejamento da Etapa 1 (N705), nós citamos duas opções de banco de dados: MongoDB (NoSQL) e PostgreSQL (Relacional).

Para a implementação da Etapa 2 (N708), nós, como grupo, decidimos usar o **PostgreSQL**. O motivo dessa mudança foi baseado em duas razões práticas:

1.  **Os Dados se Encaixam Melhor:** Nossos dados são bem estruturados. Temos uma tabela clara de `Ecopontos` e uma tabela de `Materiais`. Um banco de dados relacional como o PostgreSQL será ótimo para organizar esse tipo de informação de forma lógica.

2.  **Aderência aos Requisitos da Proposta (N708):** A proposta de trabalho da disciplina N708 especifica, na estrutura de repositório obrigatória, a entrega do artefato database/schema.sql. Este arquivo é o padrão para definir esquemas em bancos de dados relacionais (SQL), como o PostgreSQL. A opção pelo MongoDB (NoSQL) nos impediria de atender a este requisito técnico da forma esperada. Portanto, a escolha pelo PostgreSQL garante nossa total aderência à estrutura de entrega exigida pela disciplina.