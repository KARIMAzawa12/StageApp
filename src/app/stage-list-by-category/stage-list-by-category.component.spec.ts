import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageListByCategoryComponent } from './stage-list-by-category.component';

describe('StageListByCategoryComponent', () => {
  let component: StageListByCategoryComponent;
  let fixture: ComponentFixture<StageListByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StageListByCategoryComponent]
    });
    fixture = TestBed.createComponent(StageListByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
