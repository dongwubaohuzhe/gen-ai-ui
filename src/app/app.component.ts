import {Component, signal} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from './search.service';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {ThemePalette} from '@angular/material/core';
import {HybridResponse, SearchTypes} from "./types";
import {KeyValue} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Andes Mountains Search';
  requestFinished = false;
  requestValid = false;
  newForm = new FormGroup({
    keyWords: new FormControl()
  });

  public resp: any;
  errorMessage: string;
  searchType: string = SearchTypes.ALL;
  cards: HybridResponse[] = [];
  cardsRetrieved: HybridResponse[] = [];
  gridCols = 1;
  protected readonly Number = Number;
  imgSrc:string;
  fileSrc:string;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  invokeSearch() {
    let keyString: string = this.newForm.get('keyWords')?.value;
    //this.searchService.doGetSearch(keyString)
    if(keyString && keyString.trim() !== '') {
        this.searchService.doPostAISearch(keyString, this.searchType)
          .subscribe(
            data => {
              this.resp = data;
              if(!this.resp?.result){
                this.errorMessage = "Incorrect response format:" + JSON.stringify(this.resp);
                this.requestValid = false;
                console.log(this.errorMessage);
              } else {
                this.cards = this.resp.result;
                this.cardsRetrieved = JSON.parse(JSON.stringify(this.cards));
                this.onSearch(this.searchType);
                //this.searchType = SearchTypes.ALL;
                this.requestFinished = true;
                this.requestValid = true;
              }
            },
            error => {
              this.errorMessage = "Unexpected Error Occurred!";
              this.requestValid = false;
              console.log(this.errorMessage);
            }
          );
    }
    else {
      this.resp = {};
      this.requestValid = false;
      this.errorMessage = '';
    }
  }

  onSearch(typ?: string){
    if(typ){ //type selection only does filtering
      this.searchType = typ;
      if(typ === SearchTypes.ALL) {
        this.cards = this.cardsRetrieved;
      } else {
        this.cards = this.cardsRetrieved.filter(t=>t.type === typ);
      }
    } else {
      this.invokeSearch();
    }
  }

  protected readonly SearchTypes = SearchTypes;

  originalOrder = (a: KeyValue<string,string>, b: KeyValue<string,string>): number => {
    return 0;
  }

  setCols(cols: number) {
    const gridDiv = document.getElementById('gridDiv');
    if(gridDiv){
      if(cols === 0){
        gridDiv.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
      } else {
        gridDiv.style.gridTemplateColumns = 'repeat(' + cols +', 1fr)';
      }
    }
  }

  getGridStyle() {
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${this.gridCols}, 1fr)`,
      'justify-items': 'center',
    };
  }

  getPercentage(val: string){
    return Number(val) * 100;
  }

  /*
      gap: 24px;
    /*grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
   */

  onClick(event, filename){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.imgSrc = srcAttr.nodeValue;
    this.fileSrc = filename;
  }
}
