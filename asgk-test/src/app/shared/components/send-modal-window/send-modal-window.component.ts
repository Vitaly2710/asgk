import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-send-modal-window',
  templateUrl: './send-modal-window.component.html',
  styleUrls: ['./send-modal-window.component.scss']
})
export class SendModalWindowComponent implements OnChanges{
  @Input() params: any;

  @Input() showWindow = false;

  @Output() changeModalView = new EventEmitter<boolean>()

  ngOnChanges(changes: SimpleChanges) {
    if(changes) {
      console.log(this.params?.split(''))
    }
  }
}
