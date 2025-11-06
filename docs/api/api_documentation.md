# Documentação da API RESTful - Projeto EcoColeta
Esta documentação define os contratos de interface para a API do Backend. O Frontend (Web e Mobile) deve utilizar estes endpoints para todas as operações de dados.

## Visão Geral
* **Base URL (Desenvolvimento):** `http://localhost:3000/api`
* **Formato de Dados:** JSON
* **Padrão de Erros:** Códigos HTTP padrão (200 para sucesso, 404 para não encontrado, 500 para erro de servidor).

---

## Recursos e Endpoints

### 1. Ecopontos (Mapa)

Recurso responsável por fornecer os dados para a funcionalidade "Mapa de Ecopontos".

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/ecopontos` | Retorna uma lista de todos os ecopontos cadastrados. Usado para plotar os pinos no mapa. |
| `GET` | `/ecopontos/:id` | Retorna os detalhes completos de um único ecoponto. Usado quando o usuário clica em um pino. |

#### Exemplo de Resposta: `GET /ecopontos`
```json
[
  {
    "id": 1,
    "nome": "Ecoponto Centro",
    "latitude": -3.73186,
    "longitude": -38.52179
  },
  {
    "id": 2,
    "nome": "Ecoponto Vila Madalena",
    "latitude": -3.743587,
    "longitude": -38.533267
  }
]

{
  "id": 1,
  "nome": "Ecoponto Centro",
  "endereco": "Rua 25 de Março, 123 - Centro",
  "latitude": -3.73186,
  "longitude": -38.52179,
  "materiais_aceitos": "Vidro, Papel, Plástico, Metal",
  "horario_funcionamento": "Seg-Sex: 8h às 17h"
}


---

### 2. Materiais (Educação Ambiental)

Recurso responsável por alimentar as telas "Degradação dos Materiais" e "Separação Correta".

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/materiais` | Retorna a lista de todos os materiais educativos com suas informações de descarte. |

#### Exemplo de Resposta: `GET /materiais`
```json
[
  {
    "id": 1,
    "nome": "Vidro",
    "cor_lixeira": "Verde",
    "tempo_degradacao": "Mais de 1 milhão de anos",
    "curiosidade": "O vidro é 100% reciclável, mas se descartado incorretamente pode levar mais de 1 milhão de anos para desaparecer.",
    "dica_descarte": "Retire tampas e rótulos, envolva em papel se estiver quebrado e deposite com cuidado na lixeira verde.",
    "exemplos": ["Garrafas de bebidas", "Potes de conserva", "Frascos de perfume"]
  },
  {
    "id": 2,
    "nome": "Papel",
    "cor_lixeira": "Azul",
    "tempo_degradacao": "3 a 6 meses",
    "curiosidade": "O papel se decompõe em 3 a 6 meses, mas quando reciclado, economiza milhares de litros de água e dezenas de árvores.",
    "dica_descarte": "Deve estar limpo e seco. Não amasse demais.",
    "exemplos": ["Jornais", "Revistas", "Caixas de papelão", "Folhas de caderno"]
  }
]