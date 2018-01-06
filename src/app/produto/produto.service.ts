import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Produto } from 'app/_models/produto';

@Injectable()
export class ProdutoService {

  constructor(private http: Http) {}
  public salvar(produto: Produto): Observable<string>{
    return this.http.post('http://localhost:8080/produtos/', produto).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }

  public remover(produto: Produto): Observable<string>{
    return this.http.delete('http://localhost:8080/produtos/' + produto.id).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }

    public lista(): Observable<any>{
      return this.http.get('http://localhost:8080/produtos').map(
        (res) => res.json()
        ,
        function(err){

        }
      );
    }


}
