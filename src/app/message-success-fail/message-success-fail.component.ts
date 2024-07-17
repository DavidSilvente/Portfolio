import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-success-fail',
  templateUrl: './message-success-fail.component.html',
  styleUrls: ['./message-success-fail.component.css']
})
export class MessageSuccessFailComponent {
  @Input() type: 'success' | 'error' = 'success';
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
