export class AuthenticationError extends Error {
  constructor () {
    super('Autenticação Falhou')
    this.name = 'AuthenticationError'
  }
}
