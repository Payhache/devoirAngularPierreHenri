import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcAddComponent } from './pc-add.component';

describe('PcAddComponent', () => {
  let component: PcAddComponent;
  let fixture: ComponentFixture<PcAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
