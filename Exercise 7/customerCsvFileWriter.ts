import { Customer } from "./customer";
import { IFileWriter } from "./fileWriter";

export class CustomerCsvFileWriter {
    constructor(private fileWriter: IFileWriter) {}

    writeCustomers(fileName: string, customers: Customer[]) 
    {
        customers.forEach(customer => {
            this.fileWriter.writeLine(fileName, `${customer.name}, ${customer.contactNumber}`);    

        });
    }
}
