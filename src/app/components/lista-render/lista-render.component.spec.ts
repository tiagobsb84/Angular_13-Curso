import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRenderComponent } from './lista-render.component';

describe('ListaRenderComponent', () => {
  let component: ListaRenderComponent;
  let fixture: ComponentFixture<ListaRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
