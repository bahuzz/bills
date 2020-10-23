import { Component, OnInit } from '@angular/core';
import { Months } from '../../months';
import { Bill } from '../../interfaces/bill';
import { BillService } from '../../services/bill.service';

@Component({
  selector: 'app-bills-table',
  templateUrl: './bills-table.component.html',
  styleUrls: ['./bills-table.component.scss']
})
export class BillsTableComponent implements OnInit {

  bills: Bill[];
  bill: Bill;
  total: number = 0;
  months = Months;

  constructor(private billService: BillService) { }

  ngOnInit(): void {
    this.getBills();
    this.total = this.getTotal(this.bills,this.total);
  }

  getBills() {
    this.billService.getBills()
      .subscribe(bills => this.bills = bills)
  }

  // Calculate the total after checkbox clicked
  onCheck(e,id:number,month:number) {
    this.getBill(id);
    this.total = this.changeTotal(this.total,this.bill.price,e.target.checked);
    this.updateMonths(e.target.checked,id,month)
  }

  // Update months list of current bill
  updateMonths(checked:boolean,id:number,month:number) {
    this.billService.updateBillMonths(checked,id,month)
  }

  getBill(id:number) {
    this.billService.getBill(id)
      .subscribe(bill => this.bill = bill)
  }

  // Calculate the total of all bills

  getTotal(bills: Bill[],total:number) {
    const arr = bills.filter(item => item.months.length);
    if(arr.length) {
      return total = arr.map(item => { return this.getBillTotal(item.price,item.months)})
                      .reduce((sum,cur) => sum+cur);
    }
  }

  getBillTotal(price: number,months: Array<number>) {
    return price * months.length
  }

  changeTotal(total:number,price:number,op:boolean) {
    if(op) {
      return total += price
    } else {
      return total -= price
    }
  }

  isMonthChecked(months: Array<number>, element: number) {
    return months.includes(element)
  }

  onDelete(id:number) {
    this.getBill(id);
    this.total -= this.getBillTotal(this.bill.price,this.bill.months);
    this.billService.deleteBill(id);
    this.getBills()
  }
}
