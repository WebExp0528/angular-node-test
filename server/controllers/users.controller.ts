import { Controller, Route, Get, SuccessResponse, Tags, Path } from 'tsoa';
import HttpStatus from 'http-status-codes';
import { IJsonResponseSuccess } from '../types/general';
import { IUserParam } from '../types/user';
import { User } from '../service/user';

@Tags('Users')
@Route('users')
export class UsersController extends Controller {
  UserService: User;
  constructor() {
    super();
    this.UserService = new User();
  }

  /**
   * Get all users
   */
  @Get('all')
  @SuccessResponse(HttpStatus.OK, 'Return array of users')
  async searchForms(): Promise<IJsonResponseSuccess<any>> {
    const users = this.UserService.getUsers();
    return this.renderResponse({ data: users });
  }

  /**
   * Get user by id
   * @path {number} id - Required
   */
  @Get('{id}')
  @SuccessResponse(HttpStatus.OK, 'Return user')
  async getForm(@Path('id') id: number): Promise<IJsonResponseSuccess<IUserParam>> {
    const result = await this.UserService.getUserById(id);
    if (result) {
      return this.renderResponse({ data: result });
    } else {
      return this.renderResponse({ status: 404, error: 'No user found' });
    }
  }

  /**
   * Success Response
   *
   * @param param0
   * @returns
   */
  renderResponse = <T = any>({
    status = HttpStatus.OK,
    message,
    data,
    error,
  }: {
    status?: number;
    message?: string;
    data?: T;
    error?: any;
  } = {}): IJsonResponseSuccess<T> => {
    return {
      status,
      ...(message ? { message } : {}),
      ...(data ? { data } : {}),
      ...(error ? { error } : {}),
    };
  };
}
