import { Component, OnInit, TemplateRef  } from '@angular/core';
import { PcsService } from 'src/app/services/pcs.service';
import { Pc } from 'src/app/models/pc';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MarqueService } from 'src/app/services/marque.service';
import { Marque } from 'src/app/models/marque';


@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css']
})
export class PcListComponent implements OnInit {
  pcs:Pc[];
  marques:Marque[];
  isLoading: boolean;
  nbrePc:number;
  modalRef: BsModalRef;
  message: string;

  
  constructor(private pcService:PcsService, private modalService: BsModalService, public marqueService:MarqueService) { }

  // MODAL EXECUSION
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.message = 'Confirmed!';
    
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  
  ngOnInit(): void {
    this.isLoading = true;
    this.marqueService.getAllMarque().subscribe((data) => {
      this.marques = data['hydra:member'];
    })
    
    this.pcService.getAllPc().subscribe((data) => {
      this.pcs = data['hydra:member'];
      this.nbrePc = this.pcs.length
      console.log(this.pcs);
      
      this.isLoading = false; 
    });

  }
  askDeletePc(id:number) {
    this.pcService.deletePc(id).subscribe(then => {
      this.pcService.getAllPc().subscribe((data: Pc[]) => {
        this.pcs = data['hydra:member'];
        this.nbrePc = this.pcs.length
        this.modalRef.hide();
        this.isLoading = false;
      });
    });
  }

}
