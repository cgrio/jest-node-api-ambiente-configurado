import { AuthenticationError } from '@/main/config/domain/errors'
import { FacebookAuthentication } from '@/main/config/domain/features'
import { LoadFacebookUserApi } from '@/data/contracts/apis'

class FacebookAuthenticationService {
  constructor (private readonly loadFacebookByTokenApi: LoadFacebookUserApi) {}
  async perform (params: FacebookAuthentication.Params): Promise<AuthenticationError> {
    await this.loadFacebookByTokenApi.loadUser(params)
    return new AuthenticationError()
  }
}

class LoadFacebookUserApiSpy implements LoadFacebookUserApi {
  token?: string
  result = undefined

  async loadUser (params: LoadFacebookUserApi.Params): Promise<LoadFacebookUserApi.Result> {
    this.token = params.token
    return this.result
  }
}

describe('FacebookAuthenticationService (Use Case)', () => {
  it('Deve chamar LoadUserFacebookApi com parametro correto', async () => {
    const loadFacebookUserApi = new LoadFacebookUserApiSpy()
    const sut = new FacebookAuthenticationService(loadFacebookUserApi)
    await sut.perform({ token: 'any_token' })
    expect(loadFacebookUserApi.token).toBe('any_token')
  })

  it('Deve Retornar AuthenticationError quando LoadUserFacebookApi retorna undefined', async () => {
    const loadFacebookUserApi = new LoadFacebookUserApiSpy()
    loadFacebookUserApi.result = undefined
    const sut = new FacebookAuthenticationService(loadFacebookUserApi)
    const authResult = await sut.perform({ token: 'any_token' })
    expect(authResult).toEqual(new AuthenticationError())
  })
})
