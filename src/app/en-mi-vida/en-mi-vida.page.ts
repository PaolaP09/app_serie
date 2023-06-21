import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-en-mi-vida',
  templateUrl: './en-mi-vida.page.html',
  styleUrls: ['./en-mi-vida.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EnMiVidaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
