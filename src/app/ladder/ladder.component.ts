import { Component, OnInit } from '@angular/core';
import {Ladder} from '../ladder';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})
export class LadderComponent implements OnInit {

  ladder: Ladder[];


  constructor(private dataService: DataServiceService) {
   }

  ngOnInit() {
    this.getLadder();
  }
  // get API of ladder from dataservice
  getLadder(): void{
    this.dataService.getLadder().subscribe(temp =>{this.ladder = temp;});
   
  
  }

}
