import fs from 'fs'
import Aluno from '../model/Aluno'

export default function carregarAlunos(arquivo: string): Aluno[] {
    const conteudo = fs.readFileSync(arquivo, 'utf8')
    const linhas = conteudo.split('\n')

    const alunos = linhas
        .filter((l) => l.trim().length > 0)
        .map((linha: any) => {
            return new Aluno(linha.split(';')[0], linha.split(';')[1])
        })

    return alunos
}
