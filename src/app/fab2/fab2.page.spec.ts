import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fab2Page } from './fab2.page';

describe('Fab2Page', () => {
  let component: Fab2Page;
  let fixture: ComponentFixture<Fab2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Fab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
