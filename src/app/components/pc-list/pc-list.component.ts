import { Component, OnInit } from '@angular/core';
import { PcsService } from 'src/app/services/pcs.service';
import { Pc } from 'src/app/models/pc';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css']
})
export class PcListComponent implements OnInit {
  pcs:Pc[];
  isLoading: boolean;
  
  constructor(private pcService:PcsService) { }
  
  ngOnInit(): void {
    this.isLoading = true;
    this.pcService.getAllPc().subscribe((data) => {
      this.pcs = data;
      this.isLoading = false; 
    });

  }
  askDeletePc(id:number) {
    this.pcService.deletePc(id).subscribe(then => {
      this.pcService.getAllPc().subscribe((data: Pc[]) => {
        this.pcs = data;
        this.isLoading = false;
      });
    });
  }

}
