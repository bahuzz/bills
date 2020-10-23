import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BillService } from '../../services/bill.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})

export class AddBillComponent implements OnInit {

  addBillForm = new FormGroup ({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('',[Validators.min(1),Validators.required])
  });

  constructor(private billService: BillService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.billService.createBill(this.addBillForm.value.name, this.addBillForm.value.price);
    this.addBillForm.reset();
  }

}
