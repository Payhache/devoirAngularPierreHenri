import { Component, OnInit } from '@angular/core';
import { PcsService } from 'src/app/services/pcs.service';
import { Router } from '@angular/router';
import { Pc } from 'src/app/models/pc';

@Component({
  selector: 'app-pc-add',
  templateUrl: './pc-add.component.html',
  styleUrls: ['./pc-add.component.css']
})
export class PcAddComponent implements OnInit {
pc = new Pc();
types = ["Portable","Fixe","Tablette hybride"];
categories = ["Gaming", "Bureautique","Premier Prix"];
marques = ["Dell","HP","Apple","Asus"];

  constructor(public pcService:PcsService, public router:Router) { }

  ngOnInit(): void {
  }
  submitPc(): void {
    // APPEL DE LA FONCTION addPC du PC service
    this.pcService.addPc(this.pc).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }

}
