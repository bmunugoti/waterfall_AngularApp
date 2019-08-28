import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGroupingComponent } from './test-grouping.component';

describe('TestGroupingComponent', () => {
  let component: TestGroupingComponent;
  let fixture: ComponentFixture<TestGroupingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGroupingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
