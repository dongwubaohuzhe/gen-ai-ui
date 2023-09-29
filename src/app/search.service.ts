import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {SampleResponse, SearchResponse} from './types';
import {Observable, of} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  /*
  private _geturl: string = "https://official-joke-api.appspot.com/random_joke";
  //https://official-joke-api.appspot.com/random_joke
  //{"type":"general","setup":"What’s the advantage of living in Switzerland?","punchline":"Well, the flag is a big plus.","id":283}
  private _postReflectorUrl: string = "https://httpbin.org/post";
  */
  private _postAIUrl: string = "http://127.0.0.1:8000/search";

  constructor(private http: HttpClient) { }

  /*
  doGetSearch(keyString: any): any {
    //return this.http.get<SearchResponse>(this._url + keyString);
    return this.http.get<SearchResponse>(this._geturl);
  }
  */

  doPostAISearch(keyString: any, sType: string, top: number = 10, rerank: number = 5): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    /*
    return this.http.post(
      this._postAIUrl,
      {'query': keyString, 'search_type': sType, 'top_k': top, 'rerank_k': rerank},
      httpOptions
    );
    */
    return of(SampleResponse);
  }

  /*
  doPostSearch(keyString: any): any {
    return this.http.post<SearchResponse>(this._postReflectorUrl,
        {
            "result":
            [
                {
                    "score":"0.499900",
                    "text":"1.Text messages have the benefit of instant communication with colleagues, customers, and clients. Sending a long text message is no different than a short message, except most text messaging services have a character limit that rivals a Tweet. When characters limit you, you may have to break up your texts or send a vague, confusing message. Textedly gives you the ability to communicate in a variety of text lengths."
                },
                {
                    "score":"0.489900",
                    "text":"2. Text messages have the benefit of instant communication with colleagues, customers, and clients. Sending a long text message is no different than a short message, except most text messaging services have a character limit that rivals a Tweet. When characters limit you, you may have to break up your texts or send a vague, confusing message. Textedly gives you the ability to communicate in a variety of text lengths."
                },
                {
                    "score":"0.479900",
                    "text":"3. Text messages have the benefit of instant communication with colleagues, customers, and clients. Sending a long text message is no different than a short message, except most text messaging services have a character limit that rivals a Tweet. When characters limit you, you may have to break up your texts or send a vague, confusing message. Textedly gives you the ability to communicate in a variety of text lengths."
                },
                {
                    "score":"0.469900",
                    "text":"4. Text messages have the benefit of instant communication with colleagues, customers, and clients. Sending a long text message is no different than a short message, except most text messaging services have a character limit that rivals a Tweet. When characters limit you, you may have to break up your texts or send a vague, confusing message. Textedly gives you the ability to communicate in a variety of text lengths."
                },
                {
                    "score":"0.459900",
                    "text":"5. Text messages have the benefit of instant communication with colleagues, customers, and clients. Sending a long text message is no different than a short message, except most text messaging services have a character limit that rivals a Tweet. When characters limit you, you may have to break up your texts or send a vague, confusing message. Textedly gives you the ability to communicate in a variety of text lengths."
                }
            ]
        }
    );
  }
  */

}
