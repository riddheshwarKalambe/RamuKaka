import { LightningElement } from 'lwc';

export default class MultipleFields extends LightningElement {
    textValue;
    firstName1
    lastName1
    dateOfBirth
    showName() {
        var inputFields=this.template.querySelectorAll("lightning-input");
  inputFields.forEach(element=>{
      if(element.name=='firstName'){
        this.firstName1 = element.value;
      }

      if(element.name=='lastName'){
        this.lastName1 = element.value;
      }

     
      if(element.name=='date'){
        this.dateOfBirth = element.value;
      }
  });

    }

    handleInputFocus(event) {
        // modify parent to properly highlight visually
        const classList = event.target.parentNode.classList;
        classList.add('lgc-highlight');
    }

    handleInputBlur(event) {
        // modify parent to properly remove highlight
        const classList = event.target.parentNode.classList;
        classList.remove('lgc-highlight');
    }

}