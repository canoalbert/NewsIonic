import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchQuery: string = '';
  searchResults: any[] = [];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews()
    console.log(this.newsService.getAllNews())
    console.log("Pagina de busqueda")
  }
  search() {
    if (this.searchQuery.trim() !== '') {
      this.newsService.findByTitleOrAuthor(this.searchQuery).subscribe(results => {
        this.searchResults = results;
      });
    }
  }

  searchByAuthor() {
    if (this.searchQuery) {
      this.newsService.searchNewsByAuthor(this.searchQuery).subscribe(results => {
        this.searchResults = results;
      });
    }
  }

}
