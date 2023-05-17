import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserDetailComponent } from './user-detail.component';
import { UserService } from '../../services/user.service';
import { UserModule } from '../../user.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

const mockUser = {
  id: 0,
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@email.com',
  gender: 'male',
  birthday: '15/12/1988',
};

class MockUserService {
  get(id: number) {
    return new Promise((resolve) => {
      resolve(mockUser);
    });
  }
}

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      imports: [HttpClientTestingModule, UserModule, RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: 1 }) } },
        { provide: UserService, useValue: new MockUserService() },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user info', () => {
    fixture.detectChanges();
    expect(Object.keys(component.userInfo ?? {}).length).toBeGreaterThan(3);
  });

  it(`should render firstName ${mockUser.firstName}`, () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.firstName').textContent).toBe(mockUser.firstName);
  });

  it(`should render lastName ${mockUser.lastName}`, () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.lastName').textContent).toBe(mockUser.lastName);
  });

  it(`should render gender ${mockUser.gender}`, () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.gender').textContent).toBe(mockUser.gender);
  });

  it(`should render gender ${mockUser.birthday}`, () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.birthday').textContent).toBe(mockUser.birthday);
  });

  it(`should render gender ${mockUser.email}`, () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.email').textContent).toBe(mockUser.email);
  });
});
