export interface IStartup {
  nome: string;
  settore: string;
  descrizione: string;
  prodottiEServizi: string[];
  riceviIncentivo(incentivo: IIncentivo): void;
}

export interface IIncentivo {
  codiceIdentificativo: string;
  descrizione: string;
  valoreIncentivo: string;
  criteriElegibilita: string;
  assegnaAStartup(startup: IStartup): void;
}

export interface ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string[];
  partecipaAttività(startup: IStartup): void;
}
