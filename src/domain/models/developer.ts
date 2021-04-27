export enum SexoModel {
  MASCULINO = 'M',
  FEMININO = 'F'
}

export type DeveloperModel = {
  id: string
  nome: string
  sexo: SexoModel
  idade: number
  hobby: string
  datanascimento: Date
}
