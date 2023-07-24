import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "CBS News",
      "title": "Here Comes the Sun: Actor Juliette Lewis and owls",
      "description": "\"Actor and singer Juliette Lewis sits down with Luke Burbank to discuss her role in “Yellowjackets,” her band “Juliette and the Licks” and her past acting experiences as a whole. Then, Conor Knighton travels to both Oregon and Indiana to learn more about owls…",
      "url": "https://www.cbsnews.com/video/here-comes-the-sun-actor-juliette-lewis-and-owls/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/07/23/8d3a5403-c7cc-4df5-851a-ac55ac1e2dfd/thumbnail/1200x630/f56dfb9d0d9b1dc86e683cf3bc37b108/0723-hcts-full-2142388-640x360.jpg?v=8be0a296491a12ce38351fd824e37a16",
      "publishedAt": "2023-07-23T15:31:01+00:00",
      "content": "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Kanishka Singh",
      "title": "US deeply concerned by India sexual assault case in viral videos",
      "description": "The United States said on Sunday it was deeply concerned by reports of <a href=\"https://reut.rs/4741rEv\" target=\"_blank\">viral videos</a> showing two women paraded naked in India's northeastern state of Manipur, a sexual assault case that enraged the country.",
      "url": "https://www.reuters.com/world/india/us-deeply-concerned-by-india-sexual-assault-case-viral-videos-2023-07-23/",
      "urlToImage": "https://www.reuters.com/resizer/42-fsSUEL0ws73hhCKlCpDYhrW4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4QQZ3P65IFP5PE7O7RM6YVZNYI.jpg",
      "publishedAt": "2023-07-23T15:24:53Z",
      "content": "WASHINGTON, July 23 (Reuters) - The United States said on Sunday it was deeply concerned by reports of viral videos showing two women paraded naked in India's northeastern state of Manipur, a sexual … [+1977 chars]"
    },
    {
      "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
      },
      "author": "Al Jazeera English",
      "title": "Rescuers recover 27 bodies in India landslide, many still missing - Al Jazeera English",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiXGh0dHBzOi8vd3d3LmFsamF6ZWVyYS5jb20vbmV3cy8yMDIzLzcvMjMvcmVzY3VlcnMtcmVjb3Zlci0yNy1kZWFkLWluLXdlc3Rlcm4taW5kaWEtbGFuZHNsaWRl0gFgaHR0cHM6Ly93d3cuYWxqYXplZXJhLmNvbS9hbXAvbmV3cy8yMDIzLzcvMjMvcmVzY3VlcnMtcmVjb3Zlci0yNy1kZWFkLWluLXdlc3Rlcm4taW5kaWEtbGFuZHNsaWRl?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-07-23T12:16:14+00:00",
      "content": null
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Rescuers recover 27 bodies in India landslide, many still missing",
      "description": "Seventy-eight people are still unaccounted for since the landslide hit Irshalwadi village on Wednesday night.",
      "url": "http://www.aljazeera.com/news/2023/7/23/rescuers-recover-27-dead-in-western-india-landslide",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/07/33PL47A-highres-1690108684.jpg?resize=1920%2C1440",
      "publishedAt": "2023-07-23T12:15:14Z",
      "content": "Hundreds of rescuers have recovered 27 dead bodies as they pushed on with a fourth day of searching for many people still missing after heavy monsoon rains triggered a massive landslide in a village … [+2369 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "ASHOK SHARMA",
      "title": "Indian rescuers recover 27 dead but no sign of dozens of missing villagers swamped by a landslide",
      "description": "NEW DELHI (AP) — Hundreds of rescuers ended a four-day search for scores of people still missing after heavy monsoon rains triggered a massive landslide in a village in western India, an official said Sunday.",
      "url": "https://apnews.com/7932d46079a105357469d1cbdfa3844d",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/d4a4a6b9b81d429da7ca4eb2da649391/3000.jpeg",
      "publishedAt": "2023-07-23T10:29:08Z",
      "content": "NEW DELHI (AP) — Hundreds of rescuers ended a four-day search for scores of people still missing after heavy monsoon rains triggered a massive landslide in a village in western India, an official sai… [+2306 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "The Associated Press",
      "title": "Indian rescuers recover 27 dead but no sign of dozens of missing villagers swamped by a landslide",
      "description": "Hundreds of rescuers in western India have recovered 27 dead as they pushed on with a fourth day of searching for scores of people still missing after heavy monsoon rains triggered a massive landslide",
      "url": "https://abcnews.go.com/International/wireStory/indian-rescuers-recover-27-dead-sign-dozens-missing-101586589",
      "urlToImage": "https://s.abcnews.com/images/International/wirestory_7932d46079a105357469d1cbdfa3844d_4x3_992.jpg",
      "publishedAt": "2023-07-23T10:28:56Z",
      "content": "NEW DELHI -- Hundreds of rescuers have recovered 27 dead as they pushed on with a fourth day of searching for scores of people still missing after heavy monsoon rains triggered a massive landslide in… [+1858 chars]"
    },
    {
      "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
      },
      "author": "The Indian Express",
      "title": "Amid BJP refrain on Opposition-led states, Chidambaram says: ‘Doesn’t excuse barbarism in Manipur’ - The Indian Express",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vaW5kaWFuZXhwcmVzcy5jb20vYXJ0aWNsZS9pbmRpYS9wLWNoaWRhbWJhcmFtLW1hbmlwdXItdmlvbGVuY2Utd29tZW4tb3RoZXItc3RhdGVzLTg4NTU1MDEv0gFnaHR0cHM6Ly9pbmRpYW5leHByZXNzLmNvbS9hcnRpY2xlL2luZGlhL3AtY2hpZGFtYmFyYW0tbWFuaXB1ci12aW9sZW5jZS13b21lbi1vdGhlci1zdGF0ZXMtODg1NTUwMS9saXRlLw?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-07-23T06:43:46+00:00",
      "content": null
    },
    {
      "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
      },
      "author": "Times of India",
      "title": "Rajyavardhan Singh Rathore takes a dig at Priyanka Gandhi over increasing rape cases in Rajasthan | City - Times of India Videos - Times of India",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMisAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS92aWRlb3MvY2l0eS9qYWlwdXIvcmFqeWF2YXJkaGFuLXNpbmdoLXJhdGhvcmUtdGFrZXMtYS1kaWctYXQtcHJpeWFua2EtZ2FuZGhpLW92ZXItaW5jcmVhc2luZy1yYXBlLWNhc2VzLWluLXJhamFzdGhhbi92aWRlb3Nob3cvMTAyMDUxMDc0LmNtc9IBAA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-07-23T05:12:42+00:00",
      "content": null
    },
    {
      "source": {
        "id": "le-monde",
        "name": "Le Monde"
      },
      "author": "Brieuc Beckers, Marceau Bretonnier, Elisa Bellanger et Adrien Sahli",
      "title": "Vidéo. De « Star Wars » à « Indiana Jones », la technique qui rend ces musiques de film inoubliables",
      "description": "Vidéo - A 91 ans, le compositeur John Williams signe la bande-son du dernier « Indiana Jones », en salles le 28 juin. Le service vidéo du « Monde » a tenté de percer ses secrets de fabrication, avec l’aide d’un jeune orchestre symphonique.",
      "url": "https://www.lemonde.fr/culture/video/2023/06/26/de-star-wars-a-indiana-jones-la-technique-qui-rend-ces-musiques-de-film-inoubliables_6179298_3246.html",
      "urlToImage": "https://img.lemde.fr/2023/06/21/0/131/1620/1080/1440/960/60/0/5eba91f_1687333721261-thumbnail-john-williams-site.png",
      "publishedAt": "2023-06-26T15:00:08Z",
      "content": "Êtes-vous capable de fredonner la musique des films Star Wars,Indiana Jones, Jurassic Park ou Harry Potter ? Derrière leur célébrité quasi universelle, ces thèmes musicaux partagent un point commun :… [+678 chars]"
    },
    {
      "source": {
        "id": "fortune",
        "name": "Fortune"
      },
      "author": "Emma Hinchliffe, Paige McGlauflin",
      "title": "Why a former SoftBank partner is tackling mid-career drop-off for working mothers",
      "description": "Former SoftBank partner and Facebook India director Kirthiga Reddy is the cofounder of Laddrr, a resource hub for working mothers aiming to prevent mid-career drop-off.",
      "url": "https://fortune.com/2022/06/01/former-softbank-partner-tackling-mid-career-drop-off-for-working-mothers/",
      "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/Kirthiga1.jpg?resize=1200,600",
      "publishedAt": "2022-06-01T13:22:34Z",
      "content": "Skip to Content"
    },
    {
      "source": {
        "id": "the-hindu",
        "name": "The Hindu"
      },
      "author": "Ananth Krishnan",
      "title": "Dalai Lama’s close aides targeted on Pegasus spyware list",
      "description": "‘Analysis indicates that the Indian govt. was selecting the potential targets’",
      "url": "https://www.thehindu.com/news/international/dalai-lamas-close-aides-targeted-on-pegasus-spyware-list/article35474285.ece",
      "urlToImage": "https://www.thehindu.com/news/international/dvshb0/article35474284.ece/ALTERNATES/LANDSCAPE_615/thjc-DalaiLama",
      "publishedAt": "2021-07-22T15:47:01Z",
      "content": "Several of the top India-based aides to the Tibetan spiritual leader, the Dalai Lama, figure on the list of potential targets for spying using the Pegasus spyware, according to a report on Thursday. … [+2399 chars]"
    },
    {
      "source": {
        "id": "rte",
        "name": "RTE"
      },
      "author": "RTÉ News",
      "title": "UK continues with reopening plan despite concerns",
      "description": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.",
      "url": "https://www.rte.ie/news/uk/2021/0515/1221764-uk-indian-variant/",
      "urlToImage": "https://img.rasset.ie/0016cb40-1600.jpg",
      "publishedAt": "2021-05-15T09:33:48Z",
      "content": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.\r\nPrim… [+5066 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Rajat Pandit",
      "title": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China",
      "description": "India News:  The Army is now exploring the possibility of procuring 350 light tanks, which can also be transported by air, to augment its firepower in high-altitu",
      "url": "http://timesofindia.indiatimes.com/india/army-explores-procurement-of-350-light-tanks-for-mountainous-terrain-after-border-standoff-with-china/articleshow/82217825.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82217908,width-1070,height-580,imgsize-264639,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T08:29:00Z",
      "content": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Army explores procurement of 350 light tanks for mou… [+58 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Times Of India",
      "title": "PBKS vs MI Live Score, IPL 2021: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways",
      "description": "IPL Live Score: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways. Stay with TOI to get IPL live score, playing 11, scorecard, highlights and ball by ball score updates of the 17th IPL match between Punjab Kings and Mumbai Indians.",
      "url": "http://timesofindia.indiatimes.com/sports/cricket/ipl/live-blog/punjab-kings-vs-mumbai-indians-pbks-vs-mi-live-score-ipl-2021-17th-match-chennai/liveblog/82214950.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82214950,width-1070,height-580,imgsize-157009,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T05:44:49Z",
      "content": "Ravi Bishnoi return on the cards?\r\nDeepak Hooda showed what he is capable of, but greater consistency would be needed from him if the team has to prosper. They bet on Australian pace imports Jhye Ric… [+3131 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "PTI",
      "title": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment",
      "description": "India News: Drug firm Zydus Cadila on Friday said it has received restricted emergency use approval from the Indian drug regulator for the use of Pegylated Interf",
      "url": "http://timesofindia.indiatimes.com/india/zydus-cadila-gets-dcgi-nod-for-hepatitis-drug-for-covid-19-treatment/articleshow/82214909.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82214921,width-1070,height-580,imgsize-98052,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T05:43:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Bloomberg",
      "title": "Even record death toll may hide extent of India’s Covid crisis",
      "description": "India News: Bodies piling up at crematoriums and burial grounds across India are sparking concerns that the death toll from a ferocious new Covid-19 wave may be m.",
      "url": "http://timesofindia.indiatimes.com/india/even-record-death-toll-may-hide-extent-of-indias-covid-crisis/articleshow/82213444.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82213819,width-1070,height-580,imgsize-232887,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T04:41:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Dipak K Dash",
      "title": "Government to provide 5 kg free food grains to poor for May & June",
      "description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
      "url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T04:23:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "'Inappropriate': PM Modi objects to 'protocol break' during meeting; Delhi CM expresses regret",
      "description": "India News: Delhi chief minister Arvind Kejriwal on Friday faced flak for sharing a live telecast of an \"in-house\" meeting with Prime Minister Narendra Modi where",
      "url": "http://timesofindia.indiatimes.com/india/delhi-cmo-expresses-regret-over-televised-address-during-meeting-with-pm-modi/articleshow/82213159.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82213159,width-1070,height-580,imgsize-134672,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T03:54:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Times Of India",
      "title": "Coronavirus in India live updates: Zydus' Virafin gets DCGI nod for Covid treatment",
      "description": "In yet another grim milestone, India recorded 3.3 lakh new Covid-19 cases, and 2,263 deaths in a day. Meanwhile, active cases crossed the 24-lakh mar",
      "url": "http://timesofindia.indiatimes.com/india/coronavirus-in-india-covid-19-vaccine-cases-lockdown-live-updates-23-april-2021/liveblog/82205841.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82205841,width-1070,height-580,imgsize-148788,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-22T16:20:06Z",
      "content": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment\r\nMake Covid-19 vaccination affordable, accessible through Jan Aushadi scheme: IMA\r\nThe IMA has demanded that the Covid-19 vaccine … [+4487 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "I'm fighting my own benchmarks - R Ashwin | ESPNcricinfo.com",
      "description": "India's No. 1 offspinner talks to Manjrekar on his form abroad, injuries and more | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29102228/fighting-my-own-benchmarks-r-ashwin",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219773_1296x729.jpg",
      "publishedAt": "2020-04-25T03:00:09Z",
      "content": "R Ashwin has said that he is \"fighting my own benchmarks\" because his Test performances overseas are being measured against his heroics in India. Despite being the country's best long-form spinner in… [+3347 chars]"
    }
  ]

  constructor(){
    super();
    console.log("This is a constructor");
    this.state = {
      articles : this.articles,
      loading : false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsPlanet - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myNews" description="myDesc" imageUrl="https://img.lemde.fr/2023/06/21/0/131/1620/1080/1440/960/60/0/5eba91f_1687333721261-thumbnail-john-williams-site.png" newsUrl="TODO"/>
          </div>

          <div className="col-md-4">
            <NewsItem title="myNews" description="myDesc"/>
          </div>

          <div className="col-md-4">
            <NewsItem title="myNews" description="myDesc"/>
          </div>

        </div>

        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myNews" description="myDesc"/>
          </div>

          <div className="col-md-4">
            <NewsItem title="myNews" description="myDesc"/>
          </div>

          <div className="col-md-4">
            <NewsItem title="myNews" description="myDesc"/>
          </div>

        </div>
        
      </div>
    )
  }
}

export default News