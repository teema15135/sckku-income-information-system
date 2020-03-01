import { Directive, TemplateRef } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Directive({
  selector: '[viewMode]',
})

export class ViewModeDirective {
  constructor(public tpl: TemplateRef<any>) {}
}
