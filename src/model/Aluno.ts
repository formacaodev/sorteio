export default class Aluno {
    constructor(readonly nome: string, readonly email: string) {}

    get emailMascarado(): string {
        return this.email.replace(/(.{1,3})(.*)(@.*)/, (_, a, b, c) => a + b.replace(/./g, '*') + c)
    }

    toString(): string {
        return `${this.nome} <${this.emailMascarado}>`
    }
}
