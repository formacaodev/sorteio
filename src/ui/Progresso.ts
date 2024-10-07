import terminal from './terminal'

export default class Progresso {
    private barra: any

    constructor(private total: number) {
        this.barra = terminal.progressBar({
            width: 200,
            title: 'Progresso:',
            eta: true,
            percent: true,
            syncMode: true,
            items: this.total,
        })
        this.barra.update(0)
    }

    atualizar(qtde: number): void {
        this.barra.update(qtde / this.total)
    }
}
