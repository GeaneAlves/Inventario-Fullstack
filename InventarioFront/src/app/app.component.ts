import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <--- 1. ADICIONE ESSA LINHA
import { EquipamentoService } from './services/equipamento.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // <--- 2. ADICIONE AQUI TAMBÉM
  templateUrl: './app.component.html', // Ele vai procurar o arquivo que criamos no passo 1
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InventarioFront';

 // Lista que aparece na tela
  equipamentos: any[] = [];
  
 // --- NOVO: Objeto que guarda os dados do formulário ---
  novoEquipamento = {
    id: 0,
    nome: '',
    categoria: '',
    status: 'Disponível'
  };

  constructor(private service: EquipamentoService) {
    this.obterEquipamentos();
  }

  obterEquipamentos() {
    this.service.listar().subscribe({
      // AQUI ESTAVA O ERRO: Adicionamos ": any" para o Angular parar de reclamar
      next: (dados: any) => { 
        this.equipamentos = dados;
        console.log('Sucesso!', dados);
      },
      error: (erro: any) => { // E aqui também
        console.error('Erro ao buscar:', erro);
      }
    });
  }

  // ... código anterior ...

  // NOVO: Pega o item da lista e joga no formulário lá em cima
  aoClicarEmEditar(item: any) {
    // Usamos { ...item } para criar uma cópia e não mexer na lista direto
    this.novoEquipamento = { ...item };
  }

  // ATUALIZADO: Decide se cria ou edita
  salvar() {
    if (!this.novoEquipamento.nome) return;

    // Se o item JÁ TEM um ID, é uma EDIÇÃO
    if (this.novoEquipamento.id) {
      this.service.editar(this.novoEquipamento).subscribe({
        next: () => {
          this.obterEquipamentos();
          this.limparFormulario(); // Limpa depois de editar
        },
        error: (erro: any) => console.error('Erro ao editar:', erro)
      });
    } 
    // Se NÃO TEM ID, é um NOVO CADASTRO
    else {
      this.service.cadastrar(this.novoEquipamento).subscribe({
        next: () => {
          this.obterEquipamentos();
          this.limparFormulario();
        },
        error: (erro: any) => console.error('Erro ao cadastrar:', erro)
      });
    }
  }

  // Função auxiliar para limpar o formulário
  limparFormulario() {
    this.novoEquipamento = { id: 0, nome: '', categoria: '', status: 'Disponível' };
  }

  // --- NOVO: Função para apagar um equipamento ---
  remover(id: number) {
    console.log('Tentando excluir o ID:', id); // <--- Adicione isso para vermos no F12
    // Chama o serviço de excluir
    this.service.excluir(id).subscribe({
      next: () => {
        // Se deu certo, recarrega a lista para o item sumir da tela
        this.obterEquipamentos();
      },
      error: (erro: any) => console.error('Erro ao excluir:', erro)
    });
  }
}