/*
export interface SearchResponse {
    Message: string,
    Status: string,
    PostOffice: SearchDetails[];
}
*/

// {"type":"general","setup":"What’s the advantage of living in Switzerland?","punchline":"Well, the flag is a big plus.","id":283}
export interface SearchResponse {
    type: string,
    setup: string,
    punchline: string,
    id: number
}

export interface AIResponse {
    text: string,
    score: number
}
