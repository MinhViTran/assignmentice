import { Component, OnInit } from '@angular/core';
import { Source } from '../souce';
import { DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  source: Source[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getSource();
  }
  getSource(): void{
    this.dataService.getSource().subscribe(temp =>{this.source = temp;});
  }

}
