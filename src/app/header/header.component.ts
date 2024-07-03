import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeTab: string = "translate";
  constructor() {
    // Initialize properties if needed
  }

  ngOnInit(): void {
    // Initialization logic here
    console.log('HeaderComponent initialized', this.activeTab);
  }

  changeTab(event: Event, tabKind: string): void {
    event.preventDefault(); // Prevent the default anchor behavior
    this.activeTab = tabKind;
  }
}
