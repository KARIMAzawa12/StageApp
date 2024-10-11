import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
// Dans votre composant
categories = [
  { name: 'Digital et Intelligence Artificielle', imgSrc: '../../assets/img/digitaal.png', delay: '0.1s' },
  { name: 'BTP', imgSrc: '../../assets/img/Btpp.png', delay: '0.3s' },
  { name: 'Artisanat', imgSrc: '../../assets/img/pattern.png', delay: '0.5s' },
  { name: 'Industrie', imgSrc: '../../assets/img/infrastructure.png', delay: '0.7s' },
  { name: 'Pêche', imgSrc: '../../assets/img/sea.png', delay: '0.1s' },
  { name: 'Agriculture', imgSrc: '../../assets/img/sprout.png', delay: '0.3s' },
  { name: 'Gestion et Commerce', imgSrc: '../../assets/img/e-commerce.png', delay: '0.5s' },
  { name: 'Tourisme - Hôtellerie - Restauration', imgSrc: '../../assets/img/voyage-et-tourisme.png', delay: '0.7s' },
  { name: 'Agro-industrie', imgSrc: '../../assets/img/agriculture.png', delay: '0.7s' },
  { name: 'Arts et Industrie Graphique', imgSrc: '../../assets/img/ux.png', delay: '0.7s' },
  { name: 'Santé', imgSrc: '../../assets/img/heartt.png', delay: '0.7s' },
];

}
