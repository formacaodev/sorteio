import Aluno from '../model/Aluno'

export default async function sortearAzarado(params: {
    alunos: Aluno[]
    duracaoEmSegundos: number
    progressoMudou?: (qtde: number) => void
}): Promise<Aluno> {
    const { alunos, duracaoEmSegundos, progressoMudou } = params

    let restantes = [...alunos]

    const tempoDeEspera = (duracaoEmSegundos / alunos.length) * 1000
    for (let i = 0; i < alunos.length; i++) {
        restantes = await todosMenosUm(restantes, tempoDeEspera)
        progressoMudou?.(i + 1)
    }

    return restantes[0]
}

async function todosMenosUm(alunos: Aluno[], tempoDeEspera: number): Promise<Aluno[]> {
    await esperar(tempoDeEspera ?? 0)
    if (alunos.length === 1) return alunos

    const sorteado = Math.floor(Math.random() * alunos.length)
    return alunos.splice(sorteado, 1)
}

function esperar(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}
