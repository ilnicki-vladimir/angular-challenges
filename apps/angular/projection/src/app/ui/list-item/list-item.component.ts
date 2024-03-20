import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: 'list-item.component.html',
  standalone: true,
})
export class ListItemComponent {
  @Output() deleteEvent = new EventEmitter<void>();

  delete() {
    this.deleteEvent.emit();
  }
}
