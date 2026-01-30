import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- IMPORTANTE: Para o *ngFor funcionar
import { FormsModule } from '@angular/forms';     // <--- IMPORTANTE: Para o [(ngModel)] funcionar
import { InventarioService, Equipamento } from './services/equipamento.service';

@Component({
  selector: 'app-root',
  standalone: true, // Garante que é um componente moderno
  imports: [CommonModule, FormsModule], // <--- AQUI ESTAVA FALTANDO AS FERRAMENTAS
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  equipamentos: Equipamento[] = [];

  novoEquipamento: Equipamento = {
    id: 0,
    nome: '',
    categoria: '',
    status: 'Disponível'
  };

  constructor(private service: InventarioService) {}

  ngOnInit(): void {
    this.carregarLista();
  }

  carregarLista() {
    this.service.listar().subscribe(dados => {
      this.equipamentos = dados;
    }, erro => {
      console.error('Erro ao listar:', erro);
    });
  }

  salvar() {
    if (!this.novoEquipamento.nome || !this.novoEquipamento.categoria) {
      alert('Preencha nome e categoria!');
      return;
    }

    if (this.novoEquipamento.id === 0) {
      this.service.criar(this.novoEquipamento).subscribe(() => {
        this.carregarLista();
        this.limparFormulario();
      });
    } else {
      this.service.editar(this.novoEquipamento).subscribe(() => {
        this.carregarLista();
        this.limparFormulario();
        alert('Item editado com sucesso!');
      }, erro => {
        console.error(erro);
        alert('Erro ao editar! Verifique se o Backend está rodando.');
      });
    }
  }

  aoClicarEmEditar(item: Equipamento) {
    this.novoEquipamento = { ...item };
  }

  remover(id: number) {
    if(confirm("Tem certeza que deseja excluir?")) {
      this.service.remover(id).subscribe(() => {
        this.carregarLista();
      });
    }
  }

  limparFormulario() {
    this.novoEquipamento = {
      id: 0, 
      nome: '', 
      categoria: '', 
      status: 'Disponível'
    };
  }
}