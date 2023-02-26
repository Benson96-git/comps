import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
@Output()
  closeModal = new EventEmitter();
  showModal: boolean = true;
  
  constructor(private el: ElementRef){
    console.log(this.el.nativeElement)
;
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }


  ngOnDestroy(){
    this.el.nativeElement.remove()
  }

  close(){
this.closeModal.emit(!this.showModal  )
  }
}
