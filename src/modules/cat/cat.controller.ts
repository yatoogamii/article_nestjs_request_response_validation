import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ResponseValidationInterceptor } from 'src/shared/response-validation.interceptor';
import { CreateCatDto, GetCatDto } from './cat.dto';

@Controller('cat')
export class CatController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);

    return 'create cat';
  }

  @Get()
  @UseInterceptors(new ResponseValidationInterceptor(GetCatDto))
  findAll(): GetCatDto {
    // This will trigger a validation error because age is a string
    const wrongCat = {
      name: 'wrongCat',
      age: '1', // Should be a number according to our DTO
    } as unknown as GetCatDto;

    return wrongCat;
  }
}
