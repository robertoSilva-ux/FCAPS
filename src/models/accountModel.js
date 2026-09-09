export class AccountModel {
    static getAll() {
        return [
            { id: 1, name: "Roberto Silva", cpf: "925.735.920-49", status: "active" },
            { id: 2, name: "Bruno Ribeiro", cpf: "329.629.340-05", status: "active" },
            { id: 3, name: "Jefferson Froes", cpf: "128.590.570-99", status: "inactive" }
        ];
    }
}