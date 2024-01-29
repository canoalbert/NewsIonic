import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../services/news.service';
import { IonContent, IonInfiniteScroll } from "@ionic/angular";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
})
export class NavbarPage implements OnInit {
  @ViewChild(IonContent) content: IonContent | undefined;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll | undefined;
  newsList: any[] = [];
  allNewsLoaded: boolean = false;
  totalNewsCount: number = 0;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();
    this.getTotalNewsCount();
  }

  loadNews() {
    this.newsService.getAllNewsOrder().subscribe(news => {
      this.newsList = news;
      console.log(this.newsList)
      if (this.newsList.length >= this.totalNewsCount) {
        this.allNewsLoaded = true;
      }
    });
  }


  loadMoreNews(event: any) {
    this.newsService.getMoreNews().subscribe(moreNews => {
      if (moreNews.length > 0) {
        // Solo agrega las noticias adicionales si hay más por cargar
        const additionalNews = moreNews.slice(0, 5);
        this.newsList = [...this.newsList, ...additionalNews];
        if (this.newsList.length >= this.totalNewsCount) {
          this.allNewsLoaded = true;
        }
      } else {
        this.allNewsLoaded = true;

      }
      if (this.infiniteScroll) {
        this.infiniteScroll.complete();
        if (this.allNewsLoaded) {
          this.infiniteScroll.disabled = true;
        }
      }
    });
  }



  getTotalNewsCount() {
    this.newsService.getTotalNewsCount().subscribe(count => {
      this.totalNewsCount = count;
      console.log('En total hay '+this.totalNewsCount+' elementos.');
    });
  }


}
