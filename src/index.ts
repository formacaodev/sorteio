import Progresso from './ui/Progresso'
import carregarAlunos from './function/carregarAlunos'
import sortearAzarado from './function/sortearAzarado'
import terminal from './ui/terminal'

async function realizarSorteio() {
    const alunos = carregarAlunos('src/data/dados.csv')

    const progresso = new Progresso(alunos.length)

    terminal.clear()
    terminal.gray('\n\nIniciando o Sorteio...\n\n')

    const azarado = await sortearAzarado({
        alunos,
        duracaoEmSegundos: 60,
        progressoMudou: (qtde) => {
            progresso.atualizar(qtde)
        },
    })

    terminal.white('\n\nO').brightRed(' AZARADO')
    terminal.bold.brightGreen(' MAIS SORTUDO').white(' é: \n')
    terminal.bold.brightYellow(azarado.toString())
    terminal('\n\n🎉🎉🎉🎉🎉🎉🎉🎉🎉')
    console.log()
}

realizarSorteio()
