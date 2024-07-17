import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSuccessFailComponent } from './message-success-fail.component';

describe('MessageSuccessFailComponent', () => {
  let component: MessageSuccessFailComponent;
  let fixture: ComponentFixture<MessageSuccessFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageSuccessFailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageSuccessFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
