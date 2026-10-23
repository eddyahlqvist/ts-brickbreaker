import type p5 from 'p5';

export class Ball {
    private x: number;
    private y: number;
    private r: number;

    constructor(x: number, y: number, r: number) {
        this.x = x;
        this.y = y; 
        this.r = r;
    }

    update(): void{
        this.y += 5;
    }
    
    display(p: p5): void {
        p.circle(this.x, this.y, this.r);
    }
}