import { Component, OnInit } from '@angular/core';
import {Team} from '../team';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {

  teams:Team[];
  constructor(
    private dataService: DataServiceService) { }

  ngOnInit() {
    this.getListTeams();
  }
  //get Api  of Team from dataService
  getListTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }

}
