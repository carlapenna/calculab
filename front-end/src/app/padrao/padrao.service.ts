import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PadraoService {

  // Injetando a dependência HttpClient
  // no parâmetro do construtor
  constructor(private http: HttpClient) { }

  novo(padrao: any) {
    return this.http.post('http://localhost:3000/padrao', padrao);
  }

  listar() {
    return this.http.get('http://localhost:3000/padrao');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/padrao/${id}`);
  }

  atualizar(padrao: any) {
    return this.http.patch('http://localhost:3000/padrao', padrao);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/padrao/${id}`);
  }

}
