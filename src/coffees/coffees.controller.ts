import {
  Get,
  Body,
  Post,
  Param,
  Patch,
  Delete,
  Controller,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery

    return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }
  
  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This action deletes #${id} coffee`;
  }
}
