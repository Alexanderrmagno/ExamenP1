import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface GapiResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private apiUrl = 'https://gapi.vercel.app/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<GapiResponse[]> {
    return this.http.get<GapiResponse[]>(this.apiUrl);
  }
}