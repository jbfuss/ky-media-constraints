import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  innerWidth;
  innerHeight;


  @HostListener('window:resize', [])
  public onResize(): void {
    this.updateMediaConstraints();
  }

  private updateMediaConstraints() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight - 130;
  }

  ngOnInit(): void {
    this.updateMediaConstraints();
  }
}
