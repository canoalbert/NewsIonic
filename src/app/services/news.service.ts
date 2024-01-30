import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Section} from "../interface/section.interface";
import {News} from "../interface/news.interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:3000/news';
  private apiUrl2 = 'http://localhost:3000/';
  private currentIndex = 0;

  constructor(private http: HttpClient, private router: Router) {}

  getAllNews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAllSections(): Observable<Section[]> {
    return this.http.get<Section[]>(`${this.apiUrl2}sections`);
  }


  getNewsBySection(sectionName: string): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/section/${sectionName}`).pipe(
      map(news => {
        return news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      })
    );
  }


  getAllNewsOrder(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`).pipe(
      map(news => {
        news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        return news;
      })
    );
  }

  findById(_id: string): Observable<News> {
    return this.http.get<News>(`${this.apiUrl}/${_id}`);
  }



  findByTitleOrAuthor(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search/${query}`);
  }

  formatDate(date: Date): string {
    const dia = date.getDate().toString().padStart(2, "0");
    const mes = (date.getMonth() + 1).toString().padStart(2, "0");
    const año = date.getFullYear();
    const hora = date.getHours().toString().padStart(2, "0");
    const minutos = date.getMinutes().toString().padStart(2, "0");

    return `${dia}/${mes}/${año}  ${hora}:${minutos}`;
  }


}
