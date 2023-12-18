export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(`Você depositou R$${value}`);
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance >= value) {
      this.balance -= value;
      console.log(`Você sacou R$${value}`);
    } else if (this.balance < value) {
      console.log(`Valor insuficiente! Tente um valor menor.`);
    }
  }

  get getBalance(): number {
    return this.balance;
  }
  set setBalance(value: number) {
    this.balance = value;
  }
  get getStatus(): boolean {
    return this.status;
  }
  set setStatus(b: boolean) {
    this.status = b;
  }

  validateStatus = (): boolean => {
    const result = this.getStatus;
    if (result) {
      return result;
    }

    throw new Error('Conta inválida')
  }
}
