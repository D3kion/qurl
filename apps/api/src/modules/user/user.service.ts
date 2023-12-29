import { Injectable } from '@nestjs/common';
import { DB, User } from '@qurl/datacloud';
import { DatacloudService } from 'src/providers/prisma/datacloud.service';

@Injectable()
export class UserService {
  constructor(private db: DatacloudService) {}

  async create(data: DB.UserCreateInput): Promise<User> {
    return this.db.user.create({
      data,
    });
  }

  async findOne(
    userWhereUniqueInput: DB.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.db.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: DB.UserWhereUniqueInput;
    where?: DB.UserWhereInput;
    orderBy?: DB.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.db.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async update(params: {
    where: DB.UserWhereUniqueInput;
    data: DB.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.db.user.update({
      data,
      where,
    });
  }

  async remove(where: DB.UserWhereUniqueInput): Promise<User> {
    return this.db.user.delete({
      where,
    });
  }
}
