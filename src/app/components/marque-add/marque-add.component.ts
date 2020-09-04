import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/models/marque';
import { MarqueService } from 'src/app/services/marque.service';
import { Router } from '@angular/router';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-marque-add',
  templateUrl: './marque-add.component.html',
  styleUrls: ['./marque-add.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class MarqueAddComponent implements OnInit {
isLoading: boolean;
marque = new Marque;

  constructor(private marqueService: MarqueService, private router:Router) { }

  ngOnInit(): void {
  }

  submitMarque(): void {
    this.marqueService.addMarque(this.marque).subscribe(data => {
      this.router.navigate(['/home']);
    })
  }
}
