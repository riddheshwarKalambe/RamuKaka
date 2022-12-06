import { LightningElement } from 'lwc';

export default class singleField extends LightningElement {
    name

    showName(){
      this.name =  this.template.querySelector('lightning-input').value
    }


}