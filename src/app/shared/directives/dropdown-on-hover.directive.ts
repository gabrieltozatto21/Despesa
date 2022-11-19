import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, TemplateRef } from "@angular/core";

@Directive({
    selector: '[appDropdownOnHover]'
  })

export class DropdownOnHoverDirective implements OnInit{

    @Input() menu: HTMLUListElement;

    constructor(private element: ElementRef, private render: Renderer2) { }

    ngOnInit(): void {
    }

    @HostListener('mouseover')
    setOnMenu(){
        this.render.addClass(this.element.nativeElement, 'show')
        this.render.setAttribute(this.element.nativeElement, 'aria-expanded', 'true')
        this.render.setAttribute(this.menu, 'data-popper-placement', '"bottom-end"')
        this.render.addClass(this.menu, 'show')
        this.render.addClass(this.menu, 'dropdown-open')
    }

    @HostListener('mouseleave')
    setOffMenu(){
        this.render.removeClass(this.element.nativeElement, 'show')
        this.render.setAttribute(this.element.nativeElement, 'aria-expanded', 'false')

        this.menu.addEventListener("mouseleave", () => {
            this.render.removeClass(this.menu, 'show')
        });

    }


}
