import { Component, OnInit, ViewChild } from '@angular/core';
import {NewsService} from "../services/news.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
})
export class NavbarPage implements OnInit {
  sections: any[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    console.log('Navbar Cargado')
    this.newsService.getAllSections().subscribe(sections => {
      this.sections = sections;
    })
  }

}
