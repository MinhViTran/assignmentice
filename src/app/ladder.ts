export class Ladder {
    constructor(
        public sourceid: number,
        public mean_rank: DoubleRange,
        public year: string,
        public wins: DoubleRange,
        public swarms: Object,
        public rank: number,
        public team: string,
        public updated: string,
        public source: string,
        public round: number,
        public percentage: DoubleRange,
        public teamid: string     
       
        ) {}
}
