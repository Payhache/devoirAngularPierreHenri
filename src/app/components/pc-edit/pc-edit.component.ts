import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PcsService } from 'src/app/services/pcs.service';
import { Pc } from 'src/app/models/pc';
import { MarqueService } from 'src/app/services/marque.service';
import { Marque } from 'src/app/models/marque';


@Component({
  selector: 'app-pc-edit',
  templateUrl: './pc-edit.component.html',
  styleUrls: ['./pc-edit.component.css'],
})
export class PcEditComponent implements OnInit {
  id: number;
  isLoading: boolean;
  pc:Pc;
  marques:Marque[];
  types = ["Portable","Fixe","Tablette hybride"];
categories = ["Gaming", "Bureautique","Premier Prix"];



  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public pcService: PcsService,
    public marqueService: MarqueService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.marqueService.getAllMarque().subscribe((data) => {
      this.marques = data['hydra:member'];
      console.log(this.marques);
      
    })

    this.pcService.getOnePc(this.id).subscribe((data) => {
      this.pc = data;
      this.isLoading = false;
    });

  }
  editPc() {
    this.pc.prixAchat = +this.pc.prixAchat;
    this.pc.prixVente = +this.pc.prixVente;
    this.pcService.editPc(this.pc).subscribe((then) => {
      this.router.navigate(['/home']);
    });
  }

}
