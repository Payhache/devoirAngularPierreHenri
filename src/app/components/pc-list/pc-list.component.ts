import { Component, OnInit, TemplateRef  } from '@angular/core';
import { PcsService } from 'src/app/services/pcs.service';
import { Pc } from 'src/app/models/pc';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css']
})
export class PcListComponent implements OnInit {
  pcs:Pc[];
  isLoading: boolean;
  nbrePc:number;
  modalRef: BsModalRef;
  message: string;

  
  constructor(private pcService:PcsService, private modalService: BsModalService) { }

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
    this.pcService.getAllPc().subscribe((data) => {
      this.pcs = data;
      this.nbrePc = this.pcs.length
      this.isLoading = false; 
    });

  }
  askDeletePc(id:number) {
    this.pcService.deletePc(id).subscribe(then => {
      this.pcService.getAllPc().subscribe((data: Pc[]) => {
        this.pcs = data;
        this.nbrePc = this.pcs.length
        this.modalRef.hide();
        this.isLoading = false;
      });
    });
  }

}
