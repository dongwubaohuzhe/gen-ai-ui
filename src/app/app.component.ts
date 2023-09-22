import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from './search.service';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {ThemePalette} from '@angular/material/core';

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
  keyModel: string = '';
  errorMessage: string;
  searchType: string = 'text';

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  onSearch() {
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

  doTextSearch(){
    this.searchType = 'text';
    this.onSearch();
  }

  doImageSearch(){
    this.searchType = 'image';
    this.onSearch();
  }

  doAudioSearch(){
    this.searchType = 'audio';
    this.onSearch();
  }

  doVideoSearch(){
    this.searchType = 'video';
    this.onSearch();
  }

}
