import { Customer } from "./customer";
import { CustomerCsvFileWriter } from "./customerCsvFileWriter";
import { IFileWriter } from "./fileWriter";

describe("CustomerCsvFileWriter", () => {
    describe("one customer", () => {
        test.each([
            {customer: createCustomer("Joao Textor", "12314124")},
            {customer: createCustomer("Philip Morris", "666")},
    
        ])("customer: $expected", ({customer}) => {
            const fileWriter = createFileWriter();
            const fileName = "customers.csv";
    
            const sut = createCustomerCsvFileWriter(fileWriter);
    
            sut.writeCustomers(fileName, [customer]);
    
            expect(fileWriter.writeLine).toHaveBeenCalledTimes(1);
            assertCustomerWasWrittenToFile(fileWriter, fileName, customer);
        });
    });
    describe("multiple customers", () => {
        test("should write all customers", () => {
            const customers = [
                createCustomer("Joao Textor", "12314124"),
                createCustomer("Philip Morris", "666"),
                createCustomer("John Smith", "85123")
            ];
            const fileWriter = createFileWriter();
            const fileName = "customers.csv";
    
            const sut = createCustomerCsvFileWriter(fileWriter);
    
            sut.writeCustomers(fileName, customers);
    
            customers.map((customer) => assertCustomerWasWrittenToFile(fileWriter, fileName, customer));
        });
    });
});

function createFileWriter(): IFileWriter {
    return {
        writeLine: jest.fn()
    };
}

function createCustomerCsvFileWriter(fileWriter: IFileWriter) {
    return new  CustomerCsvFileWriter(fileWriter);
}

function createCustomer(name: string, contactNumber: string): Customer {
    return new Customer(name, contactNumber);
}

function assertCustomerWasWrittenToFile(fileWriter: IFileWriter, fileName: string, customer: Customer) {
    return expect(fileWriter.writeLine).toHaveBeenCalledWith(fileName, `${customer.name}, ${customer.contactNumber}`);
}