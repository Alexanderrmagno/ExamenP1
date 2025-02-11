import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario.component';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form with empty fields', () => {
    const errors = component.validateForm();
    expect(Object.keys(errors).length).toBeGreaterThan(0);
  });

  it('should add movie when form is valid', () => {
    component.formData = {
      movieName: 'Test Movie',
      releaseYear: '2023',
      producerName: 'Test Producer',
      productionHouse: 'Test Studio',
      mainActor: 'Test Actor'
    };

    component.onSubmit();
    expect(component.movies.length).toBe(1);
  });
});