import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  sections: any[] = [];
  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit() {
    console.log('Navbar Cargado')
    this.newsService.getAllSections().subscribe(sections => {
      this.sections = sections;
    })
  }


}
