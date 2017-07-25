import { Endereco } from './endereco';
import { Contato } from './contato';

export class Cliente {
  id: number;
  razao: string;
  apelido: string;
  tipo: string;
  cpf: string;
  rg: string;
  sexo: string;
  nascimento: string;
  nomePai: string;
  nomeMae: string;
  endereco: Endereco = new Endereco();
  contato: Contato = new Contato();
}
