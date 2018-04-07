import { Verse } from './verse';

export class Poem {
  id: number;
  name: string;
  verses: Verse[];
}

export class PoemsSearchResult {
  totalItems: number;
  items: Poem[];
}
