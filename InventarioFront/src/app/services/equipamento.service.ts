import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Equipamento {
  id: number;
  nome: string;
  categoria: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  // Ajuste a porta se necessário (geralmente é 5028 ou 5000)
  private apiUrl = 'http://localhost:5028/api/inventario';

  constructor(private http: HttpClient) { }

  // Buscar todos
  listar(): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.apiUrl);
  }

  // Criar novo (POST)
  criar(equipamento: Equipamento): Observable<Equipamento> {
    return this.http.post<Equipamento>(this.apiUrl, equipamento);
  }

  // --- NOVO MÉTODO: ATUALIZAR (PUT) ---
  editar(equipamento: Equipamento): Observable<Equipamento> {
    // A URL fica tipo: .../api/inventario/15
    return this.http.put<Equipamento>(`${this.apiUrl}/${equipamento.id}`, equipamento);
  }

  // Deletar
  remover(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}