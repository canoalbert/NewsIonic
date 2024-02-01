import { Component, OnInit, AfterViewInit } from '@angular/core';
import { News } from "../interface/news.interface";
import { ActivatedRoute } from "@angular/router";
import { NewsService } from "../services/news.service";
import { Swiper } from 'swiper';
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {
  news!: News;
  swiper!: Swiper;
  accordionExpanded: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    const _id = this.route.snapshot.paramMap.get('_id');
    if (_id) {
      this.newsService.findById(_id).subscribe(
        news => {
          this.news = news;
        },
        error => {
          console.error('Error al obtener la noticia:', error);
          console.log('Código de estado:', error.status);
        }
      );
    }

  }

  toggleAccordion() {
    this.accordionExpanded = !this.accordionExpanded;
  }
}
