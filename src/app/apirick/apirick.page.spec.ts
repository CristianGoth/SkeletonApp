import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApirickPage } from './apirick.page';

describe('ApirickPage', () => {
  let component: ApirickPage;
  let fixture: ComponentFixture<ApirickPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApirickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
