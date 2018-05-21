export class Poet {
  poetId: number;
  name: string;
  poemsPublishedCount: number;
}

export class PoetsSearchResult {
  totalItems: number;
  items: Poet[];
}
