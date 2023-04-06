export interface Stats {
  playlistId: string;
  user: string;
  bestScore: number;
};

export interface StatsSummary {
  correct: number;
  wrong: number;
  percentage: number;
}
