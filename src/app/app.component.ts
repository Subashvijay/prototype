import { Component, HostListener, OnInit } from '@angular/core';
import { Cell } from './models/Cell.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //rows: Cell[] = Array(50).fill({ isWall:false, isAgv:false} as Cell);
  cell: Cell = { isWall: false, isAgv: false };
  title = 'prototype';
  columns: Cell[][] = [];
  agv_X_pos = 25;
  agv_Y_pos = 25;

@HostListener('window:keydown.ArrowLeft')
handleArrowLeft(){
  this.btnClick('left')
}

@HostListener('window:keydown.ArrowRight')
handleArrowRight(){
  this.btnClick('right')
}

@HostListener('window:keydown.ArrowUp')
handleArrowUp(){
  this.btnClick('up')
}

@HostListener('window:keydown.ArrowDown')
handleArrowDown(){
  this.btnClick('down')
}

  ngOnInit(): void {

    for (let index = 0; index <= 30; index++) {
      let row = [];
      for (let j = 0; j <= 100; j++) {
        
        if(index == 0 || index == 30 || j == 0 || j == 100)
        {
          row.push({ isWall: true, isAgv: false } as Cell);
        }
        else
        {
          row.push({ isWall: false, isAgv: false } as Cell);
        }
      }
      this.columns.push(row)
    }
    console.log(this.columns)
    this.updateAGV();
  }

  btnClick(dir: 'right' | 'left' | 'down' | 'up') {
    this.resetAGV();
    switch (dir) {
      case 'right':
        if(!this.isWall(this.agv_X_pos,this.agv_Y_pos+1)){
        this.agv_Y_pos++;
        }
        break;
      case 'left':
        if(!this.isWall(this.agv_X_pos,this.agv_Y_pos-1)){
        this.agv_Y_pos--;
        }
        break;
      case 'up':
        if(!this.isWall(this.agv_X_pos-1,this.agv_Y_pos)){
        this.agv_X_pos--;
        }
        break;
      case 'down':
        if(!this.isWall(this.agv_X_pos+1,this.agv_Y_pos)){
        this.agv_X_pos++;
        }
        break;

      default:
        break;
    }
    this.updateAGV();
  }

  updateAGV() {
    this.columns[this.agv_X_pos][this.agv_Y_pos].isAgv = true;
  }

  resetAGV() {
    this.columns[this.agv_X_pos][this.agv_Y_pos].isAgv = false;
  }

  isWall(x:number,y:number){
return this.columns[x][y].isWall;
  }

}
