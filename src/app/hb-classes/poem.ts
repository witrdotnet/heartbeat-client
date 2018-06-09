import { Verse } from './verse';
import { DisplayMode } from './displayMode';

export class Poem {
  poemId: number;
  title: string;
  versesCount: number;
  verses: Verse[];
  displayModeDetails: DisplayMode;
}

export class PoemsSearchResult {
  totalItems: number;
  items: Poem[];
}
