import { AuthenticationError } from '@/main/config/domain/errors'
import { FacebookAuthentication } from '@/main/config/domain/features'
import { LoadFacebookUserApi } from '@/data/contracts/apis'

export class FacebookAuthenticationService {
  constructor (private readonly loadFacebookByTokenApi: LoadFacebookUserApi) {}
  async perform (params: FacebookAuthentication.Params): Promise<AuthenticationError> {
    await this.loadFacebookByTokenApi.loadUser(params)
    return new AuthenticationError()
  }
}
