import { Component, OnInit } from '@angular/core';
import { faMagic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {
  public readonly faMagic = faMagic;
  constructor() { }

  ngOnInit(): void {
  }

}
