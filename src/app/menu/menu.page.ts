import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NewsService} from "../services/news.service";

interface onInit {
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit{
  sections: any[] = [];
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    console.log('Navbar Cargado')
    this.newsService.getAllSections().subscribe(sections => {
      this.sections = sections;
    })
  }

}
