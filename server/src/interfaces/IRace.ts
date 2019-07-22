export interface IRace {
  _id: string;
  title: string;
  description: string;
  raceDate: string;
  place: string;
  category: string;
}

export interface IRaceInputDTO {
  title: string;
  description: string;
  raceDate: string;
  category: string;
  place: string;
}
