import { Cittadino, Incentivo, Startup } from "./class";

const sportTech = new Startup(
  "SportTech",
  "tecnologie",
  "Startup innovativa nel settore delle tecnologie sportTech per lo sport",
  ["Smartwatch per atleti", "sensori di performance"]
);

const fastShoes = new Startup(
  "fastShoes",
  "attrezzature sportive",
  "Produciamo attrezzature sportive innovative per migliorare le prestazioni degli atleti",
  ["scarpe da corsa tech", "calzini traspiranti"]
);

const FitnessAtHome = new Startup(
  "Fitness at home",
  "app per il fitness",
  "Sviluppiamo app per il fitness per gli utenti che vogliono allenarsi  da casa",
  [
    "App di allenamento personalizzato",
    "programma di allenamento personalizzato",
  ]
);

const incentivoFinanziario = new Incentivo(
  "INC123",
  "Finanziamento per ricerca e sviluppo",
  "100000 EUR",
  "tecnologie innovative"
);

const incentivoTecnico = new Incentivo(
  "INC503",
  "supporto tecnico per l'integrazione di nuove funzionalità",
  "5000 EUR",
  "app per il fitness"
);

const incentivoFiscale = new Incentivo(
  "INC429",
  "Innovazioni fiscali per l'innovazione nel settore sportivo",
  "7500 EUR",
  "attrezzature sportive innovative"
);

const cittadino1 = new Cittadino("Marco", "Rossi", 30, ["corsa", "fitness"]);
const cittadino2 = new Cittadino("Sara", "Galli", 23, ["calcio", "tecnologie"]);

incentivoFinanziario.assegnaAStartup(sportTech);
incentivoFiscale.assegnaAStartup(fastShoes);
incentivoTecnico.assegnaAStartup(FitnessAtHome);

cittadino1.partecipaAttività(fastShoes);
cittadino2.partecipaAttività(sportTech);
