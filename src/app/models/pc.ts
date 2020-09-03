import { Marque } from './marque';

export class Pc {
  id: number;
  modele: string;
  marque: Marque;
  type: string;
  category: string;
  prixAchat: number;
  prixVente: number;
  dateEntreStock: Date;
  constructor(
    id: number = null,
    modele: string = null,
    marque: Marque = null,
    type: string = null,
    category: string = null,
    prixAchat: number = null,
    prixVente: number = null,
    dateEntreStock: Date = null
  ) {
    this.id = id;
    this.modele = modele;
    this.marque = marque;
    this.type = type;
    this.category = category;
    this.prixAchat = prixAchat;
    this.prixVente = prixVente;
    this.dateEntreStock = dateEntreStock;
  }
}
