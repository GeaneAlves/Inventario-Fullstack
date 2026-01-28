# 📦 Sistema de Controle de Estoque (Fullstack)

Sistema de gerenciamento de inventário desenvolvido para demonstrar operações de **CRUD completo** (Create, Read, Update, Delete) utilizando arquitetura moderna com separação entre Backend e Frontend.

## 🚀 Tecnologias Utilizadas

### Backend (API)
- **.NET 9** (C#)
- **Entity Framework Core** (In-Memory Database para testes rápidos)
- **Swagger** (Documentação da API)
- **RESTful API** (Verbos GET, POST, PUT, DELETE)

### Frontend (Interface)
- **Angular 19**
- **TypeScript**
- **HTML5 & CSS3**
- **Integração via HttpClient**

---

## ✨ Funcionalidades

- ✅ **Listar:** Visualização de todos os equipamentos cadastrados.
- ✅ **Cadastrar:** Adição de novos itens com validação básica.
- ✅ **Editar:** Atualização de dados de um item existente (preenchimento automático do formulário).
- ✅ **Excluir:** Remoção de itens do banco de dados.
- ✅ **Status:** Controle visual de disponibilidade (Disponível/Indisponível).

---

## ⚙️ Como Rodar o Projeto

Este projeto é dividido em duas partes. Siga os passos abaixo para iniciar cada uma em terminais separados.

### 1. Rodar a API (Backend)
```bash
cd InventarioAPI
dotnet run
# O servidor iniciará em: http://localhost:5028

cd InventarioFront
ng serve -o
# O site abrirá automaticamente em: http://localhost:4200


🔍 Endpoints da API
GET /api/Equipamento - Lista todos os itens.

GET /api/Equipamento/{id} - Busca um item específico.

POST /api/Equipamento - Cria um novo item.

PUT /api/Equipamento/{id} - Atualiza um item existente.

DELETE /api/Equipamento/{id} - Remove um item.

Desenvolvido como projeto de estudo Fullstack.




