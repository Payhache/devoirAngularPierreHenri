import { Component, OnInit } from '@angular/core';
import { MarqueService } from 'src/app/services/marque.service';
import { Marque } from 'src/app/models/marque';

@Component({
  selector: 'app-marque-list',
  templateUrl: './marque-list.component.html',
  styleUrls: ['./marque-list.component.css']
})
export class MarqueListComponent implements OnInit {

  isLoading:boolean;
  marques:Marque[];
  constructor(private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.marqueService.getAllMarque().subscribe((data) => {
      this.marques = data['hydra:member'];
      this.isLoading = false;
    })
  }

}
