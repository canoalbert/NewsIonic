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
export class NewsDetailsPage implements OnInit, AfterViewInit {
  news: News | undefined;
  swiper: Swiper | undefined;
  newsList: News[] = [];
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
    this.getAllNews();
  }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  getAllNews() {
    this.newsService.getAllNews().subscribe(
      data => {
        this.newsList = data.map(news => ({
          ...news,
          dateFormatted: this.newsService.formatDate(new Date(news.date))

        }));
      },
      error => {
        console.error('Error al obtener la lista de noticias:', error);
        console.log('Código de estado:', error.status);
      }
    );
  }

  toggleAccordion() {
    this.accordionExpanded = !this.accordionExpanded;
  }
}
