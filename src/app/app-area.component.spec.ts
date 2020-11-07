import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAreaComponent } from './app-area.component';

describe('AppAreaComponent', () => {
  let component: AppAreaComponent;
  let fixture: ComponentFixture<AppAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
