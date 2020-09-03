import { Component, OnInit } from '@angular/core';
import { PcsService } from 'src/app/services/pcs.service';
import { Router } from '@angular/router';
import { Pc } from 'src/app/models/pc';
import { Marque } from 'src/app/models/marque';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-pc-add',
  templateUrl: './pc-add.component.html',
  styleUrls: ['./pc-add.component.css']
})
export class PcAddComponent implements OnInit {
  
isLoading: boolean;
pc = new Pc();
types = ["Portable","Fixe","Tablette hybride"];
categories = ["Gaming", "Bureautique","Premier Prix"];
marques:Marque[];

  constructor(public pcService:PcsService, public router:Router, public marqueService:MarqueService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.marqueService.getAllMarque().subscribe((data) => {
      this.marques = data['hydra:member'];
      this.isLoading = false; 
    })
  }
  submitPc(): void {
    // APPEL DE LA FONCTION addPC du PC service
    this.pcService.addPc(this.pc).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }

}
