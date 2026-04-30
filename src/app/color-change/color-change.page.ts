import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.page.html',
  styleUrls: ['./color-change.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class ColorChangePage {

  r = 0;
  g = 0;
  b = 0;

  btnColor = 'rgb(0,0,0)';
  bgColor = '#ffffff';

  mudarBotao() {
    this.btnColor = `rgb(${this.r},${this.g},${this.b})`;
  }

  mudarFundo() {
    this.bgColor = `rgb(${this.r},${this.g},${this.b})`;
  }

}