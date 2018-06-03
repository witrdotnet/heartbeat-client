export class Poet {
  poetId: number;
  name: string;
  poemsCount: number;
}

export class PoetsSearchResult {
  totalItems: number;
  items: Poet[];
}
