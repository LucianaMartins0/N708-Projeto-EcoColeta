# Requisitos do Sistema - Projeto EcoColeta

Este documento lista os requisitos funcionais e não-funcionais do sistema EcoColeta, definidos na Etapa 1 (N705) e refinados para a implementação na Etapa 2 (N708).

---

## 1. Requisitos Funcionais (RF)
O que o sistema deve fazer:

| ID | Nome | Descrição |
| :--- | :--- | :--- |
| **RF01** | Buscar Ecopontos | O usuário deve poder buscar ecopontos informando sua Cidade ou CEP. O sistema deve exibir os resultados como pinos em um mapa interativo. |
| **RF02** | Visualizar Detalhes do Ecoponto | Ao clicar em um pino no mapa, o sistema deve exibir o endereço completo do ecoponto e a lista de materiais que ele aceita. |
| **RF03** | Visualizar Degradação de Materiais | O sistema deve apresentar uma lista de materiais recicláveis comuns, informando para cada um: tempo de decomposição na natureza, uma curiosidade educativa e uma imagem ilustrativa. |
| **RF04** | Guia de Separação Correta | O sistema deve fornecer um guia educativo mostrando as cores padronizadas das lixeiras de coleta seletiva e exemplos de quais resíduos devem ser descartados em cada uma. |
| **RF05** | Menu de Navegação | O sistema deve possuir um menu lateral responsivo (Drawer) para permitir a navegação fácil entre as telas principais (Mapa, Degradação, Separação). |

---

## 2. Requisitos Não-Funcionais (RNF)
Como o sistema deve ser:

| ID | Categoria | Descrição |
| :--- | :--- | :--- |
| **RNF01** | Arquitetura | O sistema deve seguir uma arquitetura de três camadas (Frontend, Backend API, Banco de Dados). |
| **RNF02** | Tecnologia Frontend | As interfaces devem ser desenvolvidas utilizando **React** (para Web) e **React Native** (para Mobile). |
| **RNF03** | Tecnologia Backend | A API deve ser desenvolvida em **Node.js** com o framework **Express**. |
| **RNF04** | Banco de Dados | O sistema deve utilizar **PostgreSQL** como banco de dados relacional (ajuste em relação ao planejamento original N705). |
| **RNF05** | Usabilidade | A interface deve ser intuitiva e fácil de usar para cidadãos não-técnicos, com textos claros e elementos visuais (ícones, cores de lixeiras) que facilitem a compreensão. |
| **RNF06** | Responsividade | A versão web deve se adaptar a diferentes tamanhos de tela (desktop, tablet, celular). |