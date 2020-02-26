export class IncomeRecord {
  // tslint:disable-next-line: variable-name
  _id?: string;
  receiptDate: string;
  paymentLocation: 'counter' | 'kkufmis';
  departmentName: string;
  receiptNumber: string;
  branchName: string;
  accountCode: string;
  incomeListKku: string;
  incomeCodeSc: string;
  incomeListSc: string;
  details: string;
  receivingType: 'check' | 'cash' | 'transfer' | 'deposit';
  dateDeposit: string;
  checkNumber: string;
  checkDate: string;
  amountOfMoney: number;
}
