import { Component } from '@angular/core';

interface MovieForm {
  movieName: string;
  releaseYear: string;
  producerName: string;
  productionHouse: string;
  mainActor: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  formData: MovieForm = {
    movieName: '',
    releaseYear: '',
    producerName: '',
    productionHouse: '',
    mainActor: ''
  };

  movies: MovieForm[] = [];
  errors: { [key: string]: string } = {};

  validateForm(): { [key: string]: string } {
    const newErrors: { [key: string]: string } = {};

    if (!this.formData.movieName.trim()) {
      newErrors['movieName'] = 'El nombre de la película es requerido';
    }
    if (!this.formData.releaseYear.trim()) {
      newErrors['releaseYear'] = 'El año de lanzamiento es requerido';
    }
    if (!this.formData.producerName.trim()) {
      newErrors['producerName'] = 'El nombre del productor es requerido';
    }
    if (!this.formData.productionHouse.trim()) {
      newErrors['productionHouse'] = 'La casa productora es requerida';
    }
    if (!this.formData.mainActor.trim()) {
      newErrors['mainActor'] = 'El protagonista es requerido';
    }

    return newErrors;
  }

  onSubmit(): void {
    const validationErrors = this.validateForm();

    if (Object.keys(validationErrors).length === 0) {
      this.movies.push({ ...this.formData });
      this.formData = {
        movieName: '',
        releaseYear: '',
        producerName: '',
        productionHouse: '',
        mainActor: ''
      };
      this.errors = {};
    } else {
      this.errors = validationErrors;
    }
  }
}