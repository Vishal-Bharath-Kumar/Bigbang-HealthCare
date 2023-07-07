import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocnavbarComponent } from './docnavbar.component';

describe('DocnavbarComponent', () => {
  let component: DocnavbarComponent;
  let fixture: ComponentFixture<DocnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocnavbarComponent]
    });
    fixture = TestBed.createComponent(DocnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
