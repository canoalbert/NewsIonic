import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../services/news.service";
import {News} from "../interface/news.interface";
import {IonInfiniteScroll} from "@ionic/angular";

@Component({
  selector: 'app-section',
  templateUrl: './section.page.html',
  styleUrls: ['./section.page.scss'],
})
export class SectionPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll | undefined;
  sectionName!: string;
  sectionNews!: News[];
  allNewsLoaded: boolean = false;
  currentIndex = 0;
  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sectionName = params['sectionName'];
      this.loadInitialNews();
    });
  }

  loadInitialNews() {
    this.newsService.getNewsBySection(this.sectionName).subscribe(news => {
      const initialNews = news.slice(0, 5);
      this.sectionNews = initialNews;
      this.currentIndex = 5;
    });
  }

  loadMoreNews($event: any) {
    this.newsService.getNewsBySection(this.sectionName).subscribe(news => {
      if (news.length > 0) {
        const additionalNews = news.slice(this.currentIndex, this.currentIndex + 5);
        setTimeout(() => {
          if (additionalNews.length > 0) {
            this.sectionNews = [...this.sectionNews, ...additionalNews];
            this.currentIndex += additionalNews.length;
          } else {
            this.allNewsLoaded = true;
          }
          if (this.infiniteScroll) {
            this.infiniteScroll.complete();
            if (this.allNewsLoaded) {
              this.infiniteScroll.disabled = true;
            }
          }
        }, 1000);
      }
    });
  }

}
