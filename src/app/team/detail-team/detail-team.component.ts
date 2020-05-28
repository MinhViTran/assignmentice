import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../team';



@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.component.html',
  styleUrls: ['./detail-team.component.css']
})
export class DetailTeamComponent implements OnInit {
  @Input() team: Team;
  constructor() { }

  ngOnInit() {
  }
}
