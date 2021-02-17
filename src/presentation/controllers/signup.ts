import { MissingParamError } from '../errors/missing-params-error'
import { badRequest } from '../helper/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { Controller } from '../protocols/controller'
export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredField = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredField) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
