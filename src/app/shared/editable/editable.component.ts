import { Component, OnInit, ElementRef, Output, ContentChild, EventEmitter, OnDestroy } from '@angular/core';
import { ViewModeDirective } from './directive/view-mode.directive';
import { EditModeDirective } from './directive/edit-mode.directive';
import { Subject, fromEvent, Subscription } from 'rxjs';
import { take, filter, switchMapTo } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'editable',
  template: `<ng-container *ngTemplateOutlet="currentView"></ng-container>`,
})
export class EditableComponent implements OnInit {

  @Output() update = new EventEmitter();
  @ContentChild(ViewModeDirective, { static: false }) viewModeTpl: ViewModeDirective;
  @ContentChild(EditModeDirective, { static: false }) editModeTpl: EditModeDirective;

  mode: 'view' | 'edit' = 'view';

  editMode = new Subject();
  editMode$ = this.editMode.asObservable();

  viewSub: Subscription;
  editSub: Subscription;

  constructor(
    private host: ElementRef
  ) { }

  ngOnInit() {
    this.mode = 'view';
    this.viewModeHandler();
    this.editModeHandler();
  }

  get currentView() {
    // return this.viewModeTpl.tpl;
    return this.mode === 'view' ? this.viewModeTpl.tpl : this.editModeTpl.tpl;
  }

  private get element() {
    return this.host.nativeElement;
  }

  private viewModeHandler() {
    this.viewSub = fromEvent(this.element, 'click').pipe(
      // untilDestroyed(this)
    ).subscribe(() => {
      this.mode = 'edit';
      this.editMode.next(true);
    });
  }

  private editModeHandler() {
    const clickOutside$ = fromEvent(document, 'click').pipe(
      filter(({ target }) => this.element.contains(target) === false),
      take(1)
    );

    this.editMode$.pipe(
      switchMapTo(clickOutside$),
      // untilDestroyed(this)
    ).subscribe(event => {
      this.update.emit(null);
      this.mode = 'view';
    });
  }

}
