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
  verses: Verse[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if(propName === "poem") {
        this.reloadVerses();
      }
    }
  }

  reloadVerses() {
    this.verses = [];
    for (var verseId in this.poem.verses) {
      if (this.poem.verses.hasOwnProperty(verseId)) {
        this.verses.push(this.poem.verses[verseId]);
      }
    }
  }

}
