import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ListTeamComponent} from './list-team/list-team.component';
import{ParentDetailComponent} from './team/parent-detail/parent-detail.component';
import{HomeComponent} from './home/home.component';
import{ResultComponent} from './result/result.component';
import{Next5GameComponent} from './next5-game/next5-game.component';
import{FinalResultComponent} from './final-result/final-result.component';
import{HeadTeamComponent} from './head-team/head-team.component';
import{HeadToHeadComponent} from './head-to-head/head-to-head.component';
import{LadderComponent} from './ladder/ladder.component';
import{SourceComponent} from './source/source.component';
import{StandingComponent} from './standing/standing.component';



const routes: Routes = [
  {path: 'teams', component: ListTeamComponent},
  {path: 'teams/:id', component: ParentDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: 'teams/:id/results', component: ResultComponent},
  {path: 'teams/:id/next5-game', component: Next5GameComponent},
  {path: 'teams/:id/finalResult', component: FinalResultComponent},
  {path: 'teams/:id/headTeam', component: HeadTeamComponent},
  {path: 'teams/:id/headTeam/:hId', component: HeadToHeadComponent},
  {path: 'ladders', component: LadderComponent},
  {path: 'source', component: SourceComponent},
  {path: 'standing', component: StandingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
