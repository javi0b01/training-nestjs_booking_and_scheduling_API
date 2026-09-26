import { Injectable } from '@nestjs/common';

@Injectable()
export class ReservationsService {
  findAll(): string {
    return 'Lista de todas las reservas';
  }
  findOne(id: string): string {
    return `Retornando la reserva con ID: ${id}`;
  }
}
