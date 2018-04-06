export class Poet {
  id: number;
  name: string;
  poemsPublishedCount: number;
}

export class PoetsSearchResult {
  totalItems: number;
  items: Poet[];
}
