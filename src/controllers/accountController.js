import { AccountModel } from '../models/accountModel.js';

export class AccountController {
    static getAccounts(req, res) {
        const accounts = AccountModel.getAll();
        return res.status(200).json(accounts);
    }
}