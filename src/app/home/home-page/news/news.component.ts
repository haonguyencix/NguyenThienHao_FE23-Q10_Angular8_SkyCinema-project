import { Component, OnInit } from '@angular/core';

export interface NewsArr {
  poster: string;
  title: string;
  text?: string;
  link?: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  pageIndex: number = 1;

  constructor() { }

  ngOnInit() {
  }

  newsArray1: NewsArr[] = [
    {
      poster: "./assets/images/news/Avengers-Endgame-Art-Cropped-Captain-America.jpg",
      title: "Avengers: Endgame Captain America Ass Comment Almost Didn't Happen",
      text: "Marvel Studios president Kevin Feige revealed that the Avengers: Endgame line about Captain America's ass almost didn't make it in the movie.",
      link: "https://screenrant.com/avengers-endgame-captain-america-ass-comment-almost-didnt-happen/"
    },
    {
      poster: "./assets/images/news/Dwayne-Johnson-and-Jason-Statham-from-Hobbs-and-Shaw.jpg",
      title: "Hobbs & Shaw Director Reveals How The Ending Changed",
      text: "Fast & Furious Presents: Hobbs & Shaw director David Leitch reveals how he made a major change to the ending of Dwayne Johnson's spinoff movie.",
      link: "https://screenrant.com/hobbs-shaw-fast-furious-ending-changed/"
    },
    {
      poster: "./assets/images/news/Avengers-Endgame-Iron-Man-Tony-Stark-Death-Robert-Downey-Jr.jpg",
      title: "Fan Edit Sets Tony Stark's Avengers: Endgame Snap to Black Sabbath's Iron Man",
      text: "Tony Stark's emotional, climactic moment in Marvel's Avengers: Endgame gets a fitting Black Sabbath upgrade courtesy of a Reddit user.",
      link: "https://screenrant.com/avengers-endgame-tony-stark-snap-black-sabbath-iron-man/"
    },
    {
      poster: "./assets/images/news/Dwayne-Johnson-and-Jason-Statham-in-Hobbs-Shaw.jpg",
      title: "Hobbs & Shaw Has Worst Fast & Furious Box Office Opening Since 2009",
      text: "Hobbs and Shaw won the box office during its opening weekend, but ended up with the lowest Fast and Furious debut since the 2009 film.",
      link: "https://screenrant.com/hobbs-shaw-box-office-opening-weekend/"
    }
  ]

  newsArray2: NewsArr[] = [
    {
      poster: "./assets/images/news/Black-Panther-Namor.jpg",
      title: "Black Panther 2 Fan Poster Teases The Arrival Of Namor",
      text: "A fan-created poster for Ryan Coogler's Black Panther 2 teases the potential arrival of Namor the Submariner in the Marvel Cinematic Universe.",
      link: "https://screenrant.com/black-panther-2-fan-poster-namor/"
    },
    {
      poster: "./assets/images/news/Thanos-Avengers-Endgame-Sword-Weapon-Hot-Toys.jpg",
      title: "Thanos' Sword In Avengers: Endgame May Have Been Created By Eitri",
      text: "Avengers: Endgame co-director Joe Russo teases that Thanos' incredibly powerful sword may be another creation of Eitri and Nidavllir in the MCU.",
      link: "https://screenrant.com/avengers-endgame-thanos-sword-origin-eitri/"
    },
    {
      poster: "./assets/images/news/Mufasa-and-Baby-Simba-in-The-Lion-King-2019.jpg",
      title: "How Virtual Reality Aided The Lion King 2019's Visual Effects",
      text: "During our set visit to The Lion King, we saw how virtual reality technology aided the special effects team while working on the film.",
      link: "https://screenrant.com/lion-king-2019-visual-effects-virtual-reality/"
    },
    {
      poster: "./assets/images/news/Kevin-Smith-Justice-League-DCEU.jpg",
      title: "Justice League: Kevin Smith Says Snyder Cut Exists, Should Be Released",
      text: "Writer and director Kevin Smith confirms the existence of the 'Snyder Cut' of Justice League and thinks Warner Bros. should definitely release it.",
      link: "https://screenrant.com/justice-league-kevin-smith-says-snyder-cut-exists-released/"
    }
  ]

  newsArray3: NewsArr[] = [
    {
      poster: "./assets/images/news/aef01b7f8d8e8107b400d324c9bbcf81.jpg",
      title: "Yeti snowmen have never been so cute in Everest: Little Snowman"
    },
    {
      poster: "./assets/images/news/godzilla-va-nhung-dieu-ban-chua-biet-p2-15590181141619.jpg",
      title: "Godzilla and things you don't know (P2)"
    },
    {
      poster: "./assets/images/news/95a0cbe382a73d39bb99d63dff5a7d7f.jpg",
      title: "Which four names will surprise the audience 'chatter' in the second half of 2019?"
    },
    {
      poster: "./assets/images/news/co-nang-cu-ta-se-lam-gi-de-ngan-chan-nan-phat-tan-clip-nong-trong-phi-vu-nu-quyen-15585224669624.jpg",
      title: "What will 'weightlifting girl' do to prevent the release of 'hot' clips in the Feminist Service?"
    },
    {
      poster: "./assets/images/news/ky-sinh-trung-dinh-cao-cua-dien-anh-han-quoc-15612022989767.jpg",
      title: "Parasite - The pinnacle of Korean cinema"
    },
    {
      poster: "./assets/images/news/toy-story-4-ca-bau-troi-ki-uc-tuoi-tho-bong-choc-thu-be-lai-bang-mot-bo-phim-15612011818168.jpg",
      title: "Toy Story 4 - The whole sky childhood memories suddenly shrink by a movie"
    },
    {
      poster: "./assets/images/news/review-men-in-black-international-chan-bao-ve-asgard-thor-cung-valkyrie-quay-tung-to-chuc-ao-den-15607741149123.jpg",
      title: "Men in Black: International - Bored of Asgard protection, Thor and Valkyrie 'bounce off' organizing black shirts"
    },
    {
      poster: "./assets/images/news/review-godzilla-king-of-the-monsters-kong-co-the-la-vua-nhung-godzilla-thi-la-chua-15607733208484.jpg",
      title: "Godzilla: King of the Monsters - Kong may be King but Godzilla is 'God'"
    }
  ]

}
