import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Quote {
  q: string; 
  a: string;  
  h: string;  
}

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private apiUrl = 'https://zenquotes.io/api/random';

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.apiUrl);
  }
}