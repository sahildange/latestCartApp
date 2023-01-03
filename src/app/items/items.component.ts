import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import listData from '../../assets/db.json'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent {
  tableGroup!: FormGroup
  @Input() section: any;
  summary: any = {};
  listDatas: any = listData
  tableDetails:any =[];

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.summary = { total: 0, totalPrice: 0 }
  }

  createForm() {
    this.tableGroup = this.fb.group({
      id: ["", Validators.required],
      item: ["", Validators.required],
      count: ["", Validators.required],
      price: ["", Validators.required],
    })
  }

  addRow() {
    console.log('Add row')
    let rowValue = this.tableGroup.getRawValue();
    console.log('Row value', rowValue)
    const priceOFAddingItem = this.listDatas.filter((item: any) =>
      item.itemName === rowValue.item
    )
    console.log("priceOFAddingItem", priceOFAddingItem)
    rowValue.price = priceOFAddingItem[0].price
    console.log(rowValue.price, rowValue)
    this.tableDetails.push(rowValue);
    console.log('table details', this.tableDetails)
    this.calculateTotalPrice()
    this.tableGroup.reset();
    this.calculateAmount();
  }

  calculateTotalPrice() {
    this.tableDetails.forEach((element: { totalPrice: number; count: number; price: number; }) => {
      element.totalPrice = element.count * element.price
    })
  }

  deleteRow(i: any) {
    this.tableDetails.splice(i, 1);
    this.calculateAmount()
  }

  calculateAmount() {
    if (this.tableDetails.length > 0) {
      this.summary = { total: 0, totalPrice: 0 }
      this.tableDetails.forEach((element: any) => {
        this.summary.total += parseInt(element.count)
        this.summary.totalPrice += parseInt(element.totalPrice)
      });
    } 
    else {
      this.summary = {total: 0, totalPrice: 0}
    }
  }
}
