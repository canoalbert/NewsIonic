import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:3000/news';
  private currentIndex = 0;

  constructor(private http: HttpClient) {}

  getAllNews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAllNewsOrder(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`).pipe(
      map(news => {
        news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        return news.slice(0, 5);
      })
    );
  }

  getMoreNews(): Observable<any[]> {
    const startIndex = this.currentIndex;
    const endIndex = startIndex + 5;
    this.currentIndex = endIndex;
    return this.http.get<any[]>(`${this.apiUrl}?startIndex=${startIndex}&endIndex=${endIndex}`);
  }


  getTotalNewsCount(): Observable<number> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(news => news.length)
    );
  }

  findByTitleOrAuthor(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search?query=${query}`);
  }

  searchNewsByAuthor(author: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search?author=${author}`);
  }

}
