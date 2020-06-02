import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../team';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-head-team',
  templateUrl: './head-team.component.html',
  styleUrls: ['./head-team.component.css']
})
export class HeadTeamComponent implements OnInit {
  id: number;
  private sub: any;
  teams: Team[];

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit() {
    //tranfer string ID to number
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.getTeams();
  }
  //Collect the ID from dataservice 
  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp.filter((team) => team.id !== this.id); });
  }

}
