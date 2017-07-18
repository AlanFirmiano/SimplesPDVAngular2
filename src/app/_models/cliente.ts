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
  nascimento: Date;
  nomePai: string;
  nomeMae: string;
  endereco: Endereco;
  contato: Contato;
}
