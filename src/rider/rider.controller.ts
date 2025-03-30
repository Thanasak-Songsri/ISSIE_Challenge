import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RiderService } from './rider.service';
import { CreateRiderDto } from './dto/create-rider.dto';
import { UpdateRiderDto } from './dto/update-rider.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('Riders') 
@Controller('riders')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Post('/')
  @ApiOperation({ summary: 'Create a new rider' })
  @ApiResponse({
    status: 201,
    description: 'The rider has been successfully created.',
  })
  create(@Body() createRiderDto: CreateRiderDto) {
    return this.riderService.create(createRiderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all riders' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all riders.',
  })
  findAll() {
    return this.riderService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a rider by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the rider to retrieve',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the rider.',
  })
  @ApiResponse({
    status: 404,
    description: 'Rider not found',
  })
  findOne(@Param('id') id: string) {
    return this.riderService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a rider by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the rider to update',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'The rider has been successfully updated.',
  })
  @ApiResponse({
    status: 404,
    description: 'Rider not found',
  })
  update(@Param('id') id: string, @Body() updateRiderDto: UpdateRiderDto) {
    return this.riderService.update(+id, updateRiderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a rider by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the rider to delete',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'The rider has been successfully deleted.',
  })
  @ApiResponse({
    status: 404,
    description: 'Rider not found',
  })
  remove(@Param('id') id: string) {
    return this.riderService.remove(+id);
  }
}
