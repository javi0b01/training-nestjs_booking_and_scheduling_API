import { IsString, IsNotEmpty } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  guestName: string;

  @IsString()
  @IsNotEmpty()
  reservationDate: string;
}
