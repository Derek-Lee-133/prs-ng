export class User {

     id: number;
     userName: string;
     passWord: string;
     firstName: string;
     lastName: string;
     phoneNumber: string;
     eamil: string;
     isReviewer: boolean;
     isAdmin: boolean;

     constructor(id: number = 0, userName: string = '', passWord: string = '', firstName: string = '', lastName: string = '', phoneNumber: string = '', email: string = '', isReviewer: boolean = false, isAdmin: boolean = false) {
          this.id = id;
          this.userName = userName;
          this.passWord = passWord;
          this.firstName = firstName;
          this.lastName = lastName;
          this.phoneNumber = phoneNumber;
          this.eamil = email;
          this.isReviewer = isReviewer;
          this.isAdmin = isAdmin;

     }



}
