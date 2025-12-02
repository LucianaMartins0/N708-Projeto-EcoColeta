# ♻️ EcoColeta - Plataforma de Apoio à Coleta Seletiva

> Projeto Aplicado Multiplataforma - Etapa 2 (N708)
> Vinculado ao ODS 11: Cidades e Comunidades Sustentáveis

O **EcoColeta** é uma solução tecnológica desenvolvida para facilitar o acesso à informação sobre coleta seletiva, ajudando cidadãos e pequenos comerciantes a localizar ecopontos e aprender sobre o descarte correto de resíduos.

---

## 🌐 Acesso ao Projeto

* **Frontend (Aplicação Web):** [https://n708-projeto-eco-coleta.vercel.app](https://n708-projeto-eco-coleta.vercel.app)
* **Backend (API):** [https://n708-projeto-ecocoleta.onrender.com](https://n708-projeto-ecocoleta.onrender.com)

*(O sistema é responsivo e pode ser acessado via celular ou computador).*

---

## 🚀 Funcionalidades Implementadas

1.  **🗺️ Mapa de Ecopontos:** Localização interativa de pontos de coleta em Fortaleza, com filtros por cidade e CEP.
2.  **ℹ️ Detalhes do Ponto:** Visualização de endereço, horário, telefone e quais materiais cada ecoponto aceita.
3.  **⏳ Degradação dos Materiais:** Cards educativos com o tempo de decomposição e impacto ambiental de cada resíduo.
4.  **🗑️ Guia de Separação:** Instruções visuais sobre as cores das lixeiras e exemplos práticos do que descartar em cada uma.

---

## 🛠️ Tecnologias Utilizadas

**Frontend:**
* **React (Vite):** Framework principal.
* **Tailwind CSS:** Estilização e design responsivo.
* **Leaflet / React-Leaflet:** Mapas interativos.
* **Lucide React:** Ícones.
* **Sonner:** Notificações (Toasts) para feedback ao usuário.

**Backend:**
* **Node.js + Express:** Servidor de API RESTful.
* **PostgreSQL (Supabase):** Banco de dados relacional na nuvem.
* **Jest + Supertest:** Testes automatizados de integração.

**Infraestrutura:**
* **Vercel:** Deploy do Frontend.
* **Render:** Deploy do Backend.
* **Supabase:** Hospedagem do Banco de Dados.

---

## 🧪 Como Rodar Localmente (Para Desenvolvedores)

Se desejar rodar o projeto na sua própria máquina:

### Pré-requisitos
* Node.js (v18+)
* Git

### 1. Clone o Repositório
```bash
git clone [https://github.com/LucianaMartins0/N708-Projeto-EcoColeta.git](https://github.com/LucianaMartins0/N708-Projeto-EcoColeta.git)
cd N708-Projeto-EcoColeta
```

### 2. Configurar e Rodar o Backend
```bash
cd backend
npm install
# Crie um arquivo .env com a DATABASE_URL do PostgreSQL
npm start

O servidor rodará em http://localhost:3000
```

### 3. Configurar e Rodar o Frontend
```bash
cd ../frontend/web
npm install
npm run dev

Acesse a aplicação em http://localhost:5173
```

### 4. Rodar Testes Automatizados
```bash
cd backend
npm test
```

🤝 Validação com Público-Alvo
O projeto foi validado com um público real para garantir sua utilidade.

* **Entidade:** Mercadinho PH (Pequeno comércio local)
* **Local:** Bairro Jardim América, Fortaleza - CE
* **Representante:** Sr. Paulo Henrique
* **Resultado:** Validado com sucesso. O usuário destacou a utilidade da geolocalização para descarte em trânsito e considerou a navegação fluida e intuitiva.

Para mais detalhes, consulte o Relatório de Validação.

👥 Equipe de Desenvolvimento

* **Alano Dantas Ximenes:** Arquitetura do sistema, modelagem do banco de dados (PostgreSQL) e configuração do Supabase.
* **Antônio Eduardo Dos Santos:** Desenvolvimento Backend (Node.js), implementação das rotas da API e deploy no Render.
* **Diego Bruno Rocha Silva:** Validação com público-alvo, realização de entrevistas e coleta de feedback (Mercadinho PH).
* **Kassan Nashville Mais:** Design de interface (UI/UX), prototipagem e implementação de estilos (Tailwind CSS).
* **Luciana Soares Martins:** Desenvolvimento Frontend (React), integração de APIs e gestão do repositório GitHub.
* **Vytorya Daysy Oliveira Pedrosa:** Documentação técnica, definição de requisitos e testes de qualidade (QA).