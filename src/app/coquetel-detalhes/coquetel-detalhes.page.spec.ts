import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoquetelDetalhesPage } from './coquetel-detalhes.page';

describe('CoquetelDetalhesPage', () => {
  let component: CoquetelDetalhesPage;
  let fixture: ComponentFixture<CoquetelDetalhesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoquetelDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
