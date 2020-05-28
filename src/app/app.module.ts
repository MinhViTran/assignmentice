import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DataServiceService } from './data-service.service';
import { DetailTeamComponent } from './team/detail-team/detail-team.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { ParentDetailComponent } from './team/parent-detail/parent-detail.component';
import { Next5GameComponent } from './next5-game/next5-game.component';
import { FinalResultComponent } from './final-result/final-result.component';
import { HeadTeamComponent } from './head-team/head-team.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
import { LadderComponent } from './ladder/ladder.component';
import { SourceComponent } from './source/source.component';
import { StandingComponent } from './standing/standing.component';
import { SponsorComponent } from './sponsor/sponsor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTeamComponent,
    NavBarComponent,
    DetailTeamComponent,
    FooterComponent,
    HomeComponent,
    ResultComponent,
    ParentDetailComponent,
    Next5GameComponent,
    FinalResultComponent,
    HeadTeamComponent,
    HeadToHeadComponent,
    LadderComponent,
    SourceComponent,
    StandingComponent,
    SponsorComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
 
    

  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
