import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListByCategoryComponent } from './job-list-by-category.component';

describe('JobListByCategoryComponent', () => {
  let component: JobListByCategoryComponent;
  let fixture: ComponentFixture<JobListByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobListByCategoryComponent]
    });
    fixture = TestBed.createComponent(JobListByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
