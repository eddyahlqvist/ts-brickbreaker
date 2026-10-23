import type p5 from 'p5';

export class Paddle {
    private x: number;
    private y: number;
    private width: number;
    private height: number;

    constructor(x: number, y: number, width: number, height: number){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    display(p: p5): void {
        p.rectMode(p.CENTER);
        p.rect(this.x, this.y, this.width, this.height);
    }
}