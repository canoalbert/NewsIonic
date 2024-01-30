import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll} from "@ionic/angular";
import { NewsService } from "../services/news.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  @ViewChild(IonContent) content: IonContent | undefined;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll | undefined;
  newsList: any[] = [];
  allNewsLoaded: boolean = false;
  totalNewsCount: number = 0;
  currentIndex = 0;

  constructor(private newsService: NewsService, private router: Router) {
  }

  ngOnInit() {
    this.loadInitialNews();
    console.log('a')
  }

  loadInitialNews() {
    this.newsService.getAllNewsOrder().subscribe(news => {

      const initialNews = news.slice(0, 5);
      this.newsList = initialNews;
      this.currentIndex = 5; // Actualizamos el índice actual
      console.log(this.currentIndex)
    });
  }

  openNewsDetails(_id: any) {
    this.router.navigate(['/news-details', _id]);
  }

  loadMoreNews($event: any) {
    this.newsService.getAllNewsOrder().subscribe(news => {
      if (news.length > 0) {
        const additionalNews = news.slice(this.currentIndex, this.currentIndex + 5);
        setTimeout(() => {
          if (additionalNews.length > 0) {
            this.newsList = [...this.newsList, ...additionalNews];
            this.currentIndex += additionalNews.length;
            console.log(this.currentIndex)
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
