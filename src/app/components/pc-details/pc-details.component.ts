import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PcsService } from 'src/app/services/pcs.service';
import { Pc } from 'src/app/models/pc';

@Component({
  selector: 'app-pc-details',
  templateUrl: './pc-details.component.html',
  styleUrls: ['./pc-details.component.css']
})
export class PcDetailsComponent implements OnInit {
  isLoading: boolean;
  pc:Pc;

  constructor(    private route: ActivatedRoute,
    private pcService:PcsService,
    private router: Router,
) { }

  ngOnInit(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.pcService.getOnePc(id).subscribe((data) => {
      this.pc = data;
      console.log(this.pc);
      
      this.isLoading = false;
    });

  }

}
