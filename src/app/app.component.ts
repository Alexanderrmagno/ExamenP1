import { Component, OnInit } from '@angular/core';
import { ExamenService } from './services/examen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: any;
  loading = false;
  error = '';

  constructor(private examenService: ExamenService) { }

  ngOnInit(): void {
    this.getQuote();
  }

  getQuote(): void {
    this.loading = true;
    this.examenService.getRandomQuote()
      .subscribe({
        next: (data) => {
          this.quote = data[0];
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error al cargar la cita';
          this.loading = false;
          console.error('Error:', error);
        }
      });
  }
}

export class AppComponent {
  title = 'angular-testing';
}