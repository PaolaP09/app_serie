import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contratame',
  templateUrl: './contratame.page.html',
  styleUrls: ['./contratame.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContratamePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
