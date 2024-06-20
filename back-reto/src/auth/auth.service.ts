import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt'; // JWT
import { JwtPayload } from './jwt-payload.interface'; // JWT
import { AuthCredentialsDto, AuthDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(authcredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authcredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.userRepository.create({
      username,
      password: hashedPassword,
    });

    try {
      await this.userRepository.save(user);
    } catch (error) {
      if (error.code === '23505') {
        // duplicate username
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signIn(authcredentialsDto: AuthCredentialsDto): Promise<AuthDto> {
    const { username, password } = authcredentialsDto;
    const user = await this.userRepository.findOne({
      select: ['id', 'username', 'password'],
      where: { username },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      // PREVIOUSLY HERE ONLY successful message
      // JWT TOKEN FOR SECURE
      const payload: JwtPayload = { username };
      const accessToken = this.jwtService.sign(payload);
      return { id: user.id, username: user.username, token: accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials.');
    }
  }

  async validate(accessToken: string): Promise<any> {
    try {
      this.jwtService.verify(accessToken);
      return { code: 200, message: 'Valid token' };
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
