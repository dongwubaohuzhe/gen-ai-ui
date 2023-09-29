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

export interface HybridResponse {
    document_id: string,
    score: string,
    source: string,
    type: string,
    link: string,
    filename: string,
    text: string
}

export const SearchTypes = {
    ALL: 'all',
    TEXT: 'text',
    IMAGE: 'image',
    AUDIO: 'audio',
    VIDEO: 'video'
}

export const SampleResponse =
    {
        "result":
            [
                {
                    document_id: 1121211,
                    score: "0.499900",
                    source: "Source1",
                    type: "text",
                    link: "https://www.shutterstock.com/shutterstock/photos/2129743415/display_1500/stock-photo-thinking-about-how-to-take-the-business-to-technological-heights-cropped-shot-of-an-attractive-2129743415.jpg",
                    filename: "filename1",
                    text:"1.Text messages have the benefit of instant communication with colleagues, customers, and clients. Sending a long text message is no different than a short message, except most text messaging services have a character limit that rivals a Tweet. When characters limit you, you may have to break up your texts or send a vague, confusing message. Textedly gives you the ability to communicate in a variety of text lengths."
                },
                {
                    document_id: 1121212,
                    score: "0.399900",
                    source: "Source2",
                    type: "image",
                    link: "https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg",
                    filename: "filename2",
                    text:"2.Text messages have the benefit of instant communication with colleagues, customers, and clients. Sending a long text message is no different than a short message, except most text messaging services have a character limit that rivals a Tweet. When characters limit you, you may have to break up your texts or send a vague, confusing message. Textedly gives you the ability to communicate in a variety of text lengths."
                },
                {
                    document_id: 1121213,
                    score: "0.299900",
                    source: "Source3",
                    type: "audio",
                    link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    filename: "filename3",
                    text:"3.Text messages have the benefit of instant communication with colleagues, customers, and clients. Sending a long text message is no different than a short message, except most text messaging services have a character limit that rivals a Tweet. When characters limit you, you may have to break up your texts or send a vague, confusing message. Textedly gives you the ability to communicate in a variety of text lengths."
                },
                {
                    document_id: 1121214,
                    score: "0.199900",
                    source: "Source4",
                    type: "video",
                    link: "https://download.samplelib.com/mp4/sample-5s.mp4",
                    filename: "filename4",
                    text:"4.Text messages have the benefit of instant communication with colleagues, customers, and clients. Sending a long text message is no different than a short message, except most text messaging services have a character limit that rivals a Tweet. When characters limit you, you may have to break up your texts or send a vague, confusing message. Textedly gives you the ability to communicate in a variety of text lengths."
                },
                {
                    document_id: 1121215,
                    score: "0.099900",
                    source: "Source5",
                    type: "text",
                    link: "https://images.pexels.com/photos/4763270/pexels-photo-4763270.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    filename: "filename5",
                    text:"5.Text messages have the benefit of instant communication with colleagues, customers, and clients. Sending a long text message is no different than a short message, except most text messaging services have a character limit that rivals a Tweet. When characters limit you, you may have to break up your texts or send a vague, confusing message. Textedly gives you the ability to communicate in a variety of text lengths."
                },
                {
                    document_id: 1121216,
                    score: "0.099900",
                    source: "Source6",
                    type: "text",
                    link: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/06/stock-photography-trends11.jpg",
                    filename: "filename6",
                    text:"6.Text messages have the benefit of instant communication with colleagues, customers, and clients. Sending a long text message is no different than a short message, except most text messaging services have a character limit that rivals a Tweet. When characters limit you, you may have to break up your texts or send a vague, confusing message. Textedly gives you the ability to communicate in a variety of text lengths."
                },
                {
                    document_id: 1121217,
                    score: "0.399900",
                    source: "Source7",
                    type: "audio",
                    link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
                    filename: "filename7",
                    text:"7.Text messages have the benefit of instant communication with colleagues, customers, and clients. Sending a long text message is no different than a short message, except most text messaging services have a character limit that rivals a Tweet. When characters limit you, you may have to break up your texts or send a vague, confusing message. Textedly gives you the ability to communicate in a variety of text lengths."
                },
                {
                    document_id: 1121218,
                    score: "0.499900",
                    source: "Source8",
                    type: "audio",
                    link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
                    filename: "filename8",
                    text:"8.Text messages have the benefit of instant communication with colleagues, customers, and clients. Sending a long text message is no different than a short message, except most text messaging services have a character limit that rivals a Tweet. When characters limit you, you may have to break up your texts or send a vague, confusing message. Textedly gives you the ability to communicate in a variety of text lengths."
                }
            ]
    };



