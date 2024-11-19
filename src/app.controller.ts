import { Controller, Delete, Get, Post, Query, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

class User
{
  id: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  getHello2() {
    return 'Hello world too!';
  }

  @Get('data')
  getProfileData() {
    return {
      name: 'admin',
      age: 145,
      regDate: new Date(),
    }
  }

  @Get('profile')
  @Render('profile')
  getProfile(@Query() query: User) {
    switch(parseInt(query.id))
    {
      case 1:
        return {
          user: {
            name: 'admin',
            age: 65,
            hobbies: [
              'fishing',
              'programming',
              'chess',
            ],
            pic: '/profile.png'
          }
        }
      case 2:
        return {
          user: {
            name: 'admin',
            age: 65,
            hobbies: [
              'fishing',
              'programming',
              'chess',
            ],
            pic: '/profile.png'
          }
        }
    }
    return {
      user: {
        name: 'none',
        age: 0,
        hobbies: [],
        pic: '/profile.png'
      }
    }
  }

  @Get('profile/5')
  @Render('profile')
  getProfileForUser() {
    return {
      user: {
        name: '<b>Me</b>',
        age: 80,
        hobbies: []
      }
    }
  }

  @Get('users')
  listUsers() {

  }

  @Post('users')
  newUser() {
    
  }

  @Delete('users/:id')
  deleteUser() {

  }
  @Get("redblue")
  @Render("redblue")
  getRedBlue()
  {
    let color : string = Math.round(Math.random()) == 1 ? "red" : "blue";
    return {
      color: color
    }
  }
}
