import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RiderService } from './rider.service';
import { CreateRiderDto } from './dto/create-rider.dto';
import { UpdateRiderDto } from './dto/update-rider.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import { CreateLocationDto } from './dto/create-location.dto';

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
  @ApiResponse({
    status: 404,
    description: 'Riders not found',
  })
  findAll() {
    return this.riderService.findAll();
  }

  @Get('/search')
  @ApiOperation({ summary: 'Get riders in distance 5km' })
  @ApiQuery({
    name: 'latitude',
    type: Number,
    description: 'Latitude of the location to search within a 5km radius',
  })
  @ApiQuery({
    name: 'longitude',
    type: Number,
    description: 'Longitude of the location to search within a 5km radius',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved riders in distance 5km.',
  })
  @ApiResponse({
    status: 404,
    description: 'Rider not found',
  })
  async findRidersWithinRadius(
    @Query('latitude') latitude: number, 
    @Query('longitude') longitude: number,
  ) {
    return this.riderService.findRidersWithinRadius(latitude, longitude);
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

  
  @Get(':riderId/locations')
  @ApiParam({
    name: 'riderId',
    type: Number,
    description: 'The unique ID of the rider',
    example: 123, 
  })
  @ApiOperation({ summary: 'Get location of rider' })
  findRiderLocation(@Param('riderId') riderId: string) {
    return this.riderService.findRiderLocation(+riderId);
  }


  @Post(':riderId/locations')
  @ApiOperation({ summary: 'Create location of rider' })
  @ApiParam({
    name: 'riderId',
    type: Number,
    description: 'The unique ID of the rider',
    example: 123, 
  }) 
  CreateRiderLocation(
    @Param('riderId') riderId: string, 
    @Body() @Body() createLocationDto: CreateLocationDto,
  ) {
    return this.riderService.CreateRiderLocation(+riderId, createLocationDto);
  }

}
