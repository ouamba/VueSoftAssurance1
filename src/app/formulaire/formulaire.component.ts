import { Component, OnInit } from '@angular/core';

export  class Client {
  nometprenom: string;
  telephone: string;
  profession: string;
  zone: string;
}

export class Vehicule {
  datePmc: string;
  immatriculation: string;
  chassis: string;
  marque: string;
  type: string;
  carosserie: string;
  sourceEnergie: string;
  puissance: number;
  nombrePlace: string;
  poidesAvide: number;
  chargeUtile: number;
  valeurANeuf: number;
  categorie: string;
}

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  client: Client = new Client();
  zones = ['Bafang', 'Douala', 'Yaoundé', 'Dschang', 'Melong', 'Maroua', 'Limbé', 'Bamenda']
  constructor() { }

  ngOnInit() {
  }
  afficheclient(nometprenom, telephone, profession, zone) {
    let cl: Client = new Client();
    cl.nometprenom = nometprenom.value;
    cl.telephone = telephone.value;
    cl.zone = zone.value;
    cl.profession = profession.value;
    console.log(cl);

  }
  affichevehicule(datePmc,
                  immatriculation, chassis, marque, type, carosserie, sourceEnergie, puissance, nombrePlace, poidesAvide, chargeUtile,
                  valeurANeuf, categorie){
    let veh: Vehicule = new Vehicule();
    veh.datePmc = datePmc.value;
    veh.immatriculation = immatriculation.value;
    veh.chassis = chassis.value;
    veh.marque = marque.value;
    veh.type = type.value;
    veh.carosserie = carosserie.value;
    veh.sourceEnergie = sourceEnergie.value;
    veh.puissance = puissance.value;
    veh.nombrePlace = nombrePlace.value;
    veh.poidesAvide = poidesAvide.value;
    veh.chargeUtile = chargeUtile.value;
    veh.valeurANeuf = valeurANeuf.value;
    veh.categorie = categorie.value;
    console.log(veh);
  }

}
