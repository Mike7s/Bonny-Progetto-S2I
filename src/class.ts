import { ICittadino, IIncentivo, IStartup } from "./interface";
export class Startup implements IStartup {
  nome: string;
  settore: string;
  descrizione: string;
  prodottiEServizi: string[];
  constructor(
    nome: string,
    settore: string,
    descrizione: string,
    prodottiEServizi: string[]
  ) {
    this.nome = nome;
    this.settore = settore;
    this.descrizione = descrizione;
    this.prodottiEServizi = prodottiEServizi;
  }
  riceviIncentivo(incentivo: IIncentivo): void {
    console.log(
      `La startup ${this.nome} ha ricevuto un incentivo: ${incentivo.descrizione}`
    );
  }
}

export class Incentivo implements IIncentivo {
  codiceIdentificativo: string;
  descrizione: string;
  valoreIncentivo: string;
  criteriElegibilita: string;
  constructor(
    codiceIdentificativo: string,
    descrizione: string,
    valoreIncentivo: string,
    criteriElegibilità: string
  ) {
    this.codiceIdentificativo = codiceIdentificativo;
    this.descrizione = descrizione;
    this.valoreIncentivo = valoreIncentivo;
    this.criteriElegibilita = criteriElegibilità;
  }

  assegnaAStartup(Startup: IStartup): void {
    if (this.criteriElegibilita.includes(Startup.settore)) {
      Startup.riceviIncentivo(this);
      console.log(
        `Incentivo ${this.codiceIdentificativo} è assegnato a ${Startup.nome}`
      );
    } else {
      console.log(
        `La startup ${Startup.nome} non soddisfa i criteri di elegibilità`
      );
    }
  }
}

export class Cittadino implements ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string[];
  constructor(
    nome: string,
    cognome: string,
    eta: number,
    interessiSportivi: string[]
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.interessiSportivi = interessiSportivi;
  }
  partecipaAttività(Startup: IStartup): void {
    console.log(
      `${this.nome} ${this.cognome} sta partecipando alle attività promosse da ${Startup.nome}`
    );
  }
}
