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

  }
  search() {
    if (this.searchQuery.trim() !== '') {
      this.newsService.findByTitleOrAuthor(this.searchQuery).subscribe(results => {
        this.searchResults = results;
      });
    }
  }

}
