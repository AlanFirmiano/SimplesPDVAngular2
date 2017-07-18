import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClienteComponent } from './lista-cliente.component';

describe('ListaClienteComponent', () => {
  let component: ListaClienteComponent;
  let fixture: ComponentFixture<ListaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
