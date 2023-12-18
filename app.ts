import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { PremiumAccount } from "./class/PremiumAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Bruno', 10)
peopleAccount.deposit(20);
peopleAccount.withdraw(30);
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(50);
companyAccount.getLoan(40);
companyAccount.withdraw(30);
console.log(companyAccount);

const premiumAccount: PremiumAccount = new PremiumAccount('Premium', 5);
premiumAccount.deposit(90);
console.log(premiumAccount);