import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NecklaceDivComponent } from './necklace-div.component';

describe('NecklaceDivComponent', () => {
  let component: NecklaceDivComponent;
  let fixture: ComponentFixture<NecklaceDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecklaceDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NecklaceDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
