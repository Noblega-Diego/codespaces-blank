import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

export interface ClientQuery {
  page?: number;
  limit?: number;
  search?: string;
}

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateClientDto) {
    return this.prisma.client.create({ data });
  }

  async findAll(query: ClientQuery = {}) {
    const { page = 1, limit = 10, search } = query;
    const skip = (page - 1) * limit;
    const where: any = { deleted: false };
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
        { address: { contains: search, mode: 'insensitive' } },
      ];
    }
    const [items, total] = await Promise.all([
      this.prisma.client.findMany({
        where,
        include: { pets: true, appointments: true },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.client.count({ where }),
    ]);
    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: number) {
    const client = await this.prisma.client.findUnique({ where: { id, deleted: false }, include: { pets: true, appointments: true } });
    if (!client) throw new NotFoundException('Cliente no encontrado');
    return client;
  }

  async update(id: number, data: UpdateClientDto) {
    await this.findOne(id);
    return this.prisma.client.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.client.update({ where: { id }, data: { deleted: true } });
  }
}
