import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, FormsModule]
})
export class HomePage {

  palavraChave = '';
  novaPalavra = '';

  constructor() {
    const salva = localStorage.getItem('palavra');

    if (salva) {
      this.palavraChave = salva;
    }
  }

  salvarPalavra() {
    this.palavraChave = this.novaPalavra;
    localStorage.setItem('palavra', this.novaPalavra);
    this.novaPalavra = '';
  }

}