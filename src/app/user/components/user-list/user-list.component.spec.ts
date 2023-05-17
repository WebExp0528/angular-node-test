import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserListComponent } from './user-list.component';
import { UsersService } from '../../services/users.service';
import { UserModule } from '../../user.module';
import { of } from 'rxjs';
import { UserRoutingModule } from '../../user-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

class MockUsersService {
  get() {
    return of({
      data: [
        {
          id: 0,
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@email.com',
          gender: 'male',
          birthday: '15/12/1988',
        },
        {
          id: 1,
          firstName: 'Hannah',
          lastName: 'Miller',
          email: 'hannah@email.com',
          gender: 'fmail',
          birthday: '05/01/1993',
        },
        {
          id: 3,
          firstName: 'Hannah',
          lastName: 'Miller',
          email: 'hannah@email.com',
          gender: 'fmail',
          birthday: '05/01/1993',
        },
      ],
    });
  }
}

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [HttpClientTestingModule, UserModule, UserRoutingModule, RouterTestingModule],
      providers: [{ provide: UsersService, useValue: new MockUsersService() }],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 user info', () => {
    expect(component.users.length).toBe(3);
  });

  it('should render 3 users', () => {
    expect(fixture.nativeElement.querySelectorAll('app-user-list-item').length).toBe(3);
  });
});
