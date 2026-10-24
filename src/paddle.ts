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
        p.rect(this.x, this.y, this.width, this.height);
    }

    get top(): number {
        return this.y;
    }

    get bottom(): number {
        return this.y + this.height;
    }

    get left(): number {
        return this.x;
    }

    get right(): number {
        return this.x + this.width;
    }    
}