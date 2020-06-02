import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Team } from './team';

import { NonComplete } from './nonComplete';
import { Complete } from './complete';
import { Ladder } from './ladder';
import { Source } from './souce';
import { Standing } from './standings';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  ngOnInit() {

  }
  constructor(private http: HttpClient) { }
  // Collect the data of team from service squiggle api
  getTeams(): Observable<Team[]> {

    return this.http.get('https://api.squiggle.com.au/?q=teams').pipe(
      map((data: any) => data.teams.map((item: any) => new Team(
        item.logo,
        item.id,
        item.name,
        item.abbrev
      )))
    );
  }
  // Collect the ladder of team from service squiggle api
  getLadder(): Observable<Ladder[]> {

    return this.http.get('https://api.squiggle.com.au/?q=ladder').pipe(
      map((data: any) => data.ladder.map((item: any) => new Ladder(
        item.sourceid,
        item.mean_rank,
        item.year,
        item.wins,
        item.swarms,
        item.rank,
        item.team,
        item.updated,
        item.source,
        item.round,
        item.percentage,
        item.teamid,
      )))
    );
  }
  // Collect the non complete game of team from service squiggle api
  getNonCompletes(): Observable<NonComplete[]> {

    return this.http.get('https://api.squiggle.com.au/?q=tips;year=2020;complete=0;source=1').pipe(
      map((data: any) => data.tips.map((item: any) => new NonComplete(
        item.updated,
        item.date,
        item.correct,
        item.tipteamid,
        item.source,
        item.hteamid,
        item.sourceid,
        item.tip,
        item.confidence,
        item.year,
        item.ateamid,
        item.err,
        item.margin,
        item.gameid,
        item.hconfidence,
        item.ateam,
        item.venue,
        item.hteam,
        item.bits,
        item.round
      )))
    );

  }
  // Collect the complete game of team from service squiggle api
  getCompletes(): Observable<Complete[]> {

    return this.http.get('https://api.squiggle.com.au/?q=games;year=2019;complete=100').pipe(
      map((data: any) => data.games.map((item: any) => new Complete(
        item.complete,
        item.is_grand_final,
        item.tz,
        item.hbehinds,
        item.ateam,
        item.winnerteamid,
        item.hgoals,
        item.updated,
        item.round,
        item.is_final,
        item.hscore,
        item.abehinds,
        item.winner,
        item.ascore,
        item.hteam,
        item.ateamid,
        item.venue,
        item.hteamid,
        item.agoals,
        item.year,
        item.date,
        item.id
      )))
    );

  }

  getSource(): Observable<Source[]> {

    return this.http.get('https://api.squiggle.com.au/?q=sources').pipe(
      map((data: any) => data.sources.map((item: any) => new Source(
        item.id,
        item.name,
        item.url,
        item.icon
      )))
    );

  }
  getStanding(): Observable<Standing[]> {

    return this.http.get('https://api.squiggle.com.au/?q=standings').pipe(
      map((data: any) => data.standings.map((item: any) => new Standing(
        item.draws,
        item.wins,
        item.abc,
        item.losses,
        item.goals_for,
        item.against,
        item.percentage,
        item.rank,
        item.behinds_for,
        item.number,
        item.pts,
        item.id,
        item.name,
        item.played,
        item.goals_against,

      )))
    );

  }

}