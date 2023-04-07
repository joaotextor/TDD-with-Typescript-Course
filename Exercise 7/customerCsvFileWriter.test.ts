import { Customer } from "./customer";
import { CustomerCsvFileWriter } from "./customerCsvFileWriter";
import { IFileWriter } from "./fileWriter";

describe("CustomerCsvFileWriter", () => {
    describe("one customer", () => {
        test.each([
            {customer: new Customer("Joao Textor", "12314124"), expected: "Joao Textor, 12314124"},
            {customer: new Customer("Philip Morris", "666"), expected: "Philip Morris, 666"},
    
        ])("customer: $expected", ({customer, expected}) => {
            const fileWriter: IFileWriter = {
                writeLine: jest.fn(),
            };
    
            const sut = new CustomerCsvFileWriter(fileWriter);
    
            sut.writeCustomers("customers.csv", [customer]);
    
            expect(fileWriter.writeLine).toHaveBeenCalledTimes(1);
            expect(fileWriter.writeLine).toHaveBeenCalledWith("customers.csv", expected);
        });
    });
});
