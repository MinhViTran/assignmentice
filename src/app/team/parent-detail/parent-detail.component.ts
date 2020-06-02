import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../../team';
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-parent-detail',
  templateUrl: './parent-detail.component.html',
  styleUrls: ['./parent-detail.component.css']
})
export class ParentDetailComponent implements OnInit {

  id: number;
  private sub: any;
  team: Team;

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  //tranfer string ID to number
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getAFLTeam();
  }
  //get Api of team from dataService
  getAFLTeam(): void {
    this.dataService.getTeams().subscribe(temp => {
      this.team = temp.find((team) => team.id === this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
