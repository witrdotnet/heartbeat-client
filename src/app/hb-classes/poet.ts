export class Poet {
  poetId: number;
  name: string;
  poemsCount: number;
  lang: string;
}

export class PoetsSearchResult {
  totalItems: number;
  items: Poet[];
}
