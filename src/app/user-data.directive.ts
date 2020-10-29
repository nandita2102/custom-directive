import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[user-data]'
})
export class UserDataDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }

  @Input() title: string;
  @Input() list: [];

  ngOnInit(): void {
    console.log("user data : ", this.title, this.list);
  }
}
