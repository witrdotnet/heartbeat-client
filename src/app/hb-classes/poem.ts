import { Verse } from './verse';

export class Poem {
  poemId: number;
  title: string;
  verses: Verse[];
}

export class PoemsSearchResult {
  totalItems: number;
  items: Poem[];
}
