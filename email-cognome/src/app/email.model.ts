export class Email {
    expanded: boolean = false;
    isSpecial: boolean = false;
  
    constructor(
      public to: string,
      public subject: string,
      public body: string
    ) {}
  }
  