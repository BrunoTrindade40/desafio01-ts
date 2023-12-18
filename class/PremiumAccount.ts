import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance = this.getBalance + value + 10;
      console.log(`Você depositou R$${value} e foi adicionado mais R$${10}`);
    }
  }
}