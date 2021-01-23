export class User {

     id: number;
     userName: string;
     passWord: string;
     firstName: string;
     lastName: string;
     phonenumber: string;
     email: string;
     reviewer: boolean;
     admin: boolean;

     constructor(id: number = 0, userName: string = '', passWord: string = '', firstName: string = '', lastName: string = '', phoneNumber: string = '', email: string = '', reviewer: boolean = false, admin: boolean = false) {
          this.id = id;
          this.userName = userName;
          this.passWord = passWord;
          this.firstName = firstName;
          this.lastName = lastName;
          this.phonenumber = phoneNumber;
          this.email = email;
          this.reviewer = reviewer;
          this.admin = admin;

     }



}
