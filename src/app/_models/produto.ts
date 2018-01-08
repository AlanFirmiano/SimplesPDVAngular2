import {Categoria} from "./categoria";
import {Fornecedor} from "./fornecedor";

export class Produto {
  id: number;
  codigo: string;
  nome: string;
  categoria: Categoria = new Categoria();
  fornecedor: Fornecedor = new Fornecedor();
  precoCompra: number;
  precoCusto: number;
  lucroEsperado: number;
  precoVenda: number;
  desconto: number;
  estoque: number;
  estoqueMinimo: number;
  vencimento: Date = new Date();
}
