import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss'],
})
export class TeamPageComponent implements OnInit {
  majorFive;

  constructor(
    private transferService: TransferService,
  ) { }

  ngOnInit() {
    this.majorFive = this.transferService.majorFive;
  }

}
