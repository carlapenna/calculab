import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  // Injetando a dependência HttpClient
  // no parâmetro do construtor
  constructor(private http: HttpClient) { }

  novo(equipamento: any) {
    return this.http.post('http://localhost:3000/equipamento', equipamento);
  }

  listar() {
    return this.http.get('http://localhost:3000/equipamento');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/equipamento/${id}`);
  }

  atualizar(equipamento: any) {
    return this.http.patch('http://localhost:3000/equipamento', equipamento);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/equipamento/${id}`);
  }

}
