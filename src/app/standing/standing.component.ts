import { Component, OnInit } from '@angular/core';
import { Standing } from '../standings';
import { DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})
export class StandingComponent implements OnInit {

  standing: Standing[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getStanding();
  }
  getStanding(): void{
    this.dataService.getStanding().subscribe(temp =>{this.standing = temp;});
  }
}
