import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
  
})
export class Button {
  public readonly variant = input<'primary' | 'secondary'|'ghost'>('primary');
  public readonly variantClass = computed(() =>
     `btn-app-${this.variant()}`);
}
