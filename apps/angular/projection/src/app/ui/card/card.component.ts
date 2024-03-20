import { CommonModule, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { Entity } from '../../model/entity.model';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  standalone: true,
  styleUrl: 'card.component.scss',
  imports: [NgIf, NgFor, ListItemComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Output() addNewItemEvent = new EventEmitter<void>();
  @Output() deleteEvent = new EventEmitter<Entity['id']>();

  @Input() list: Entity[] = [];
  @Input({ required: true }) entityRef!: TemplateRef<any>;

  addNewItem() {
    this.addNewItemEvent.emit();
  }

  delete(id: Entity['id']) {
    this.deleteEvent.emit(id);
  }
}
