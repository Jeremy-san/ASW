import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, SwPlayerService } from '../services/sw-player.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  results: Observable<any>;
  searchTerm = ''; 
  type: SearchType = SearchType.all;

  constructor(private playerService: SwPlayerService ) {

  }

  ngOnInit() {
    
  }

  searchChanged() {
    this.results= this.playerService.searchData(this.searchTerm, this.type);

    
  }

}