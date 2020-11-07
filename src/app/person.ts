export class Person {
  firstName = '';
  lastName = '';
  phoneNumber = '';

  validate(): string[] {
    let validation: string[] = [];
    if (this.firstName === null || this.firstName.length <= 0) {
      validation.push('First Name is not set');
    }
    if (this.lastName === null || this.lastName.length <= 0) {
      validation.push('Last Name is not set');
    }
    if (this.phoneNumber !== null) {
      this.phoneNumber = this.phoneNumber.replace('-', '');
    }
    if (this.phoneNumber === null || this.phoneNumber.length !== 10) {
      validation.push('Enter a 10 digit phone number without dashes');
    }
    return validation;
  }
  getFormattedPhoneNumber(): string {
    console.log(this.phoneNumber);
    if(this.phoneNumber === null || this.phoneNumber.length === 0) {
      return '';
    }
    let formatted = '';
    if(this.phoneNumber.length === 10) {
      formatted = this.phoneNumber.substr(0,3) + '-' + this.phoneNumber.substr(3,3) + '-' + this.phoneNumber.substr(6,4);
    }
    return formatted;
  }
}

