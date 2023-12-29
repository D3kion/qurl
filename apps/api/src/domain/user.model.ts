import { User as UserModel } from '@prisma/client';
import { Link } from './link.model';

export class User implements UserModel {
  id: number;
  email: string;
  name: string;
  emailVerified: Date;
  image: string;
  createdAt: Date;
  deletedAt: Date;

  links: Link[];
}
