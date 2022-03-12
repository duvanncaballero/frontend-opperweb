import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sin-registros',
  templateUrl: './sin-registros.component.html',
  styleUrls: ['./sin-registros.component.scss']
})
export class SinRegistrosComponent implements OnInit {

  @Input() title: string = '';
  @Input() message: string = '';
  @Input() path: string = '';
  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
