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
  teams:Team[];

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
   });

   this.getTeams();
  }
  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp.filter((team) => team.id !== this.id); });
  }

}
