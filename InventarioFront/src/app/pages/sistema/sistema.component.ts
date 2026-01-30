import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventarioService, Equipamento } from '../../services/equipamento.service';

@Component({
  selector: 'app-sistema',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {
  
  equipamentos: Equipamento[] = [];

  // Variáveis do Dashboard
  totalGeral = 0;
  totalDisponiveis = 0;
  totalEmUso = 0;
  totalIndisponiveis = 0;

  novoEquipamento: Equipamento = {
    id: 0, nome: '', categoria: '', status: 'Disponível'
  };

  constructor(private service: InventarioService) {}

  ngOnInit(): void {
    this.carregarLista();
  }

  carregarLista() {
    this.service.listar().subscribe((dados: Equipamento[]) => {
      this.equipamentos = dados;
      this.atualizarDashboard();
    }, (erro: any) => {
      console.error('Erro ao listar:', erro);
    });
  }

  atualizarDashboard() {
    this.totalGeral = this.equipamentos.length;
    this.totalDisponiveis = this.equipamentos.filter(e => e.status === 'Disponível').length;
    this.totalEmUso = this.equipamentos.filter(e => e.status === 'Em Uso').length;
    this.totalIndisponiveis = this.equipamentos.filter(e => 
      e.status === 'Indisponível' || e.status === 'Em Manutenção'
    ).length;
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
      }, (erro: any) => {
        console.error(erro);
        alert('Erro ao editar!');
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
    this.novoEquipamento = { id: 0, nome: '', categoria: '', status: 'Disponível' };
  }
}