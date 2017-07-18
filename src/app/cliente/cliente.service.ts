import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cliente } from 'app/_models/cliente';

@Injectable()
export class ClienteService {

  constructor(private http: Http) {}
  public salvar(cliente: Cliente) : Observable<string>{
    return this.http.post('http://localhost:8080/clientes/',cliente).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }

  public remover(cliente: Cliente) : Observable<string>{
    return this.http.delete('http://localhost:8080/clientes/'+cliente.id).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }

    public lista () : Observable<any>{
      return this.http.get('http://localhost:8080/clientes').map(
        (res) => res.json()
        ,
        function(err){

        }
      );
    }


}
