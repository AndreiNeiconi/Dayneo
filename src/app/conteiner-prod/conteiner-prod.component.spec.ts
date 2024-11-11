import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteinerProdComponent } from './conteiner-prod.component';

describe('ConteinerProdComponent', () => {
  let component: ConteinerProdComponent;
  let fixture: ComponentFixture<ConteinerProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConteinerProdComponent]
    });
    fixture = TestBed.createComponent(ConteinerProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
