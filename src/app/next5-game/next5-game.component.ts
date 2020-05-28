import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataServiceService } from '../data-service.service';
import { NonComplete } from '../nonComplete';

@Component({
  selector: 'app-next5-game',
  templateUrl: './next5-game.component.html',
  styleUrls: ['./next5-game.component.css']
})
export class Next5GameComponent implements OnInit {
  id: number;
  private sub: any;
  nonCompletes:NonComplete[];

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }
  getApi(): void {
    this.dataService.getNonCompletes().subscribe(temp => { 
      this.nonCompletes = temp.filter((team) => (team.hteamid === this.id || team.ateamid === this.id)).slice(0,5);

    }); 
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });

  this.getApi();

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
