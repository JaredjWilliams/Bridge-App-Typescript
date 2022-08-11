import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private location: Location) { }

  goBackToPreviousPage() {
    this.location.back();
  }
  ngOnInit(): void {
  }

}
