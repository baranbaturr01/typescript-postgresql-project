import ICustomer from "../Interface/ICustomer";
import ICustomerRepo from "../Repository/ICustomerRepo";
import Customer from "../models/Customer";

export default class CustomerService implements ICustomerRepo {

    async getAll(): Promise<ICustomer[]> {
        return await Customer.findAll();
    }

    async create(customer: ICustomer | any): Promise<ICustomer> {
        return await Customer.create(customer);
    }

    async delete(id: number | any): Promise<void> {
        await Customer.destroy({where: {id}});
    }

    async getById(id: number): Promise<Promise<ICustomer> | any> {
        return await Customer.findOne({where: {id}});
    }

    update(id: number, customer: ICustomer): Promise<ICustomer> | any {
        return Customer.update(customer, {where: {id}});
    }
}