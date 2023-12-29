import { User as UserModel } from '@qurl/datacloud';
import { Link } from './link.model';

export class User implements UserModel {
  id: string;
  email: string;
  name: string;
  emailVerified: Date;
  image: string;
  createdAt: Date;
  deletedAt: Date;

  links: Link[];
}
