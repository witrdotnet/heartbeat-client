import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Poem } from '../hb-classes/poem';
import { Verse } from '../hb-classes/verse';

@Component({
  selector: 'hb-poem',
  templateUrl: './poem.component.html',
  styles: []
})
export class PoemComponent implements OnChanges {

  @Input() poem: Poem;
  @Input() poet: Poet;
  versesRows: Verse[][] = [];
  direction: string = "ltr";

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if(propName === "poem") {
        this.direction = this.poet.lang.toUpperCase() === "AR" ? "rtl" : "ltr";
        this.reloadVerses();
      }
    }
  }

  reloadVerses() {
    var index:number = 1;
    var colsCount:number = this.poem.displayModeDetails.columnCount;
    var verses: Verse[] = [];
    this.versesRows = [];

    for (var verseId in this.poem.verses) {
      if (this.poem.verses.hasOwnProperty(verseId)) {
        verses.push(this.poem.verses[verseId]);
        if (index%colsCount == 0) {
          this.versesRows.push(verses);
          verses = [];
        }
        index++;
      }
    }
  }

}
