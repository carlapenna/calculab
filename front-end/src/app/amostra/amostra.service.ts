import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AmostraService {

  // Injetando a dependência HttpClient
  // no parâmetro do construtor
  constructor(private http: HttpClient) { }

  novo(amostra: any) {
    return this.http.post('http://localhost:3000/amostra', amostra);
  }

  listar() {
    return this.http.get('http://localhost:3000/amostra');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/amostra/${id}`);
  }

  atualizar(amostra: any) {
    return this.http.patch('http://localhost:3000/amostra', amostra);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/amostra/${id}`);
  }

}