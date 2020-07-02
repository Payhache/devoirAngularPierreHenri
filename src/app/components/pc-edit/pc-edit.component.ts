import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PcsService } from 'src/app/services/pcs.service';
import { Pc } from 'src/app/models/pc';


@Component({
  selector: 'app-pc-edit',
  templateUrl: './pc-edit.component.html',
  styleUrls: ['./pc-edit.component.css'],
})
export class PcEditComponent implements OnInit {
  id: number;
  isLoading: boolean;
  pc:Pc;
  types = ["Portable","Fixe","Tablette hybride"];
categories = ["Gaming", "Bureautique","Premier Prix"];
marques = ["Dell","HP","Apple","Asus"];


  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public pcService: PcsService
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.isLoading = true;
    this.pcService.getOnePc(this.id).subscribe((data) => {
      this.pc = data;
      this.isLoading = false;
    });

  }
  editPc() {
    this.pcService.editPc(this.pc).subscribe((then) => {
      this.router.navigate(['/home']);
    });
  }

}
