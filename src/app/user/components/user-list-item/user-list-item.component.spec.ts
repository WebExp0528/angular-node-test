import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListItemComponent } from './user-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserListItemComponent', () => {
  let component: UserListItemComponent;
  let fixture: ComponentFixture<UserListItemComponent>;

  const mockUser = {
    id: 0,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@email.com',
    gender: 'male',
    birthday: '15/12/1988',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListItemComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(UserListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`FirstName should  be ${mockUser.firstName}`, () => {
    component.user = mockUser;
    fixture.detectChanges();
    const firstNameEl = fixture.nativeElement.querySelector('.firstName');
    expect(firstNameEl.textContent).toBe(mockUser.firstName);
  });

  it(`LastName should  be ${mockUser.lastName}`, () => {
    component.user = mockUser;
    fixture.detectChanges();
    const lastNameEl = fixture.nativeElement.querySelector('.lastName');
    expect(lastNameEl.textContent).toBe(mockUser.lastName);
  });

  it(`Email should  be ${mockUser.email}`, () => {
    component.user = mockUser;
    fixture.detectChanges();
    const emailEl = fixture.nativeElement.querySelector('.email');
    expect(emailEl.textContent).toBe(mockUser.email);
  });
});
