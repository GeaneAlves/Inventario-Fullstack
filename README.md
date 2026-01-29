# 📦 Sistema de Controle de Estoque (Fullstack)

![.NET](https://img.shields.io/badge/.NET-8.0-purple)
![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-green)
![License](https://img.shields.io/badge/License-MIT-blue)


Sistema de gerenciamento de inventário desenvolvido para demonstrar operações de **CRUD completo** (Create, Read, Update, Delete) utilizando arquitetura moderna com separação entre Backend e Frontend.

## 🚀 Tecnologias Utilizadas

### Backend
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![Entity Framework](https://img.shields.io/badge/Entity%20Framework-512BD4?style=for-the-badge&logo=.net&logoColor=white)

### Frontend
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Ferramentas
![VS Code](https://img.shields.io/badge/VS%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

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
