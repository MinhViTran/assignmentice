import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataServiceService } from '../data-service.service';
import { NonComplete } from '../nonComplete';

@Component({
  selector: 'app-head-to-head',
  templateUrl: './head-to-head.component.html',
  styleUrls: ['./head-to-head.component.css']
})
export class HeadToHeadComponent implements OnInit {
  
  id: number;
  hId:number;
  private sub: any;
  dontMatch: string;
  nonCompletes:NonComplete[];
  
  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.hId = +params['hId']; 
   });

   this.getApi();

  }
  getApi(): void {
    this.dataService.getNonCompletes().subscribe(temp => { 
      this.nonCompletes = temp.filter((team) => ((team.hteamid === this.id && team.ateamid === this.hId) || (team.ateamid === this.id && team.hteamid === this.hId)));
      if(!this.nonCompletes.length) this.dontMatch = "Don't have match bettwen two team";
    }); 
  }


}
