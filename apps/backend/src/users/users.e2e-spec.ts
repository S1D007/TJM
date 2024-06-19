import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/users (POST) - create user', async () => {
    const createUserDto: CreateUserDto = {
      name: 'Test User',
      email: 'test@maily.com',
      password: 'testpassword',
      username: 'testuser_123',
    };

    const response = await request(app.getHttpServer())
      .post('/users')
      .send(createUserDto)
      .expect(201);

    expect(response.body).toMatchObject({
      name: 'Test User',
      email: 'test@maily.com',
    });

    await request(app.getHttpServer())
      .delete(`/users/${response.body._id}`)
      .expect(200);
  });

  it('/users (GET) - find all users', async () => {
    const response = await request(app.getHttpServer())
      .get('/users')
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

  it('/users/:id (GET) - find one user', async () => {
    const createUserDto: CreateUserDto = {
      name: 'Find User',
      email: 'find@example.com',
      password: 'findpassword',
      username: 'finduser123',
    };

    const createdUserResponse = await request(app.getHttpServer())
      .post('/users')
      .send(createUserDto)
      .expect(201);

    const userId = createdUserResponse.body._id;

    const response = await request(app.getHttpServer())
      .get(`/users/${userId}`)
      .expect(200);

    expect(response.body).toMatchObject({
      name: 'Find User',
      email: 'find@example.com',
    });

    await request(app.getHttpServer()).delete(`/users/${userId}`).expect(200);
  });

  it('/users/:id (PATCH) - update user', async () => {
    const createUserDto: CreateUserDto = {
      name: 'Update User',
      email: 'update@example.com',
      password: 'updatepassword',
      username: 'updateuser123',
    };

    const createdUserResponse = await request(app.getHttpServer())
      .post('/users')
      .send(createUserDto)
      .expect(201);

    const userId = createdUserResponse.body._id;

    const updateUserDto: UpdateUserDto = {
      name: 'Updated User',
    };

    const response = await request(app.getHttpServer())
      .patch(`/users/${userId}`)
      .send(updateUserDto)
      .expect(200);

    expect(response.body).toMatchObject({
      name: 'Updated User',
      email: 'update@example.com',
    });

    await request(app.getHttpServer()).delete(`/users/${userId}`).expect(200);
  });

  it('/users/:id (DELETE) - delete user', async () => {
    const createUserDto: CreateUserDto = {
      name: 'Delete User',
      email: 'delete@example.com',
      password: 'deletepassword',
      username: 'deleteuser123',
    };

    const createdUserResponse = await request(app.getHttpServer())
      .post('/users')
      .send(createUserDto)
      .expect(201);

    const userId = createdUserResponse.body._id;

    await request(app.getHttpServer()).delete(`/users/${userId}`).expect(200);
  });
});
