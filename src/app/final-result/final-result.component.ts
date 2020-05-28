import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Complete } from '../complete';

@Component({
  selector: 'app-final-result',
  templateUrl: './final-result.component.html',
  styleUrls: ['./final-result.component.css']
})
export class FinalResultComponent implements OnInit {
  id: number;
  private sub: any;
  completes:Complete[];

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
   });

   this.getApi();
  }
  getApi(): void {
    this.dataService.getCompletes().subscribe(temp => { 
      this.completes = temp.filter((team) => (team.hteamid === this.id || team.ateamid === this.id));

    }); 
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
