import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  innerWidth = window.innerWidth;
  innerHeight = window.innerHeight;


  @HostListener('window:resize', [])
  public onResize(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

}
