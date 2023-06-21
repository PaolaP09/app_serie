import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MomentosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
