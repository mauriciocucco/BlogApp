import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Articles',
        icon: 'pi pi-fw pi-folder',
        routerLink: ['/articles'],
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-comment',
        routerLink: ['/contact'],
      },
    ];
  }
}
