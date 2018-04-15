import { Directive, ElementRef, OnInit, Input, Renderer } from '@angular/core';

@Directive({
	selector: '[focus]'
})
export class FocusDirective implements OnInit {
	@Input() focus: boolean;

	constructor(public el: ElementRef, public renderer: Renderer) {

	}

	ngOnInit() {
		console.log(this.focus)
		if(this.focus) 
			this.el.nativeElement.focus();
	}

}
