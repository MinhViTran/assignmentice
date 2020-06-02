import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataServiceService } from '../data-service.service';
import { NonComplete } from '../nonComplete';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }
  id: number;
  private sub: any;
  nonCompletes: NonComplete[];

  //get Api of nonCompletes from dataService
  getApi(): void {
    this.dataService.getNonCompletes().subscribe(temp => {
      this.nonCompletes = temp.filter((team) => (team.hteamid === this.id || team.ateamid === this.id));

    });
  }
  ngOnInit() {
    //tranfer string Id to number
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.getApi();

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
