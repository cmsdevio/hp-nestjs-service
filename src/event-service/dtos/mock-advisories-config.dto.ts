import { IsInt, Max, Min } from 'class-validator';

export class MockAdvisoriesConfigDto {
  @IsInt()
  @Min(1)
  @Max(1000)
  count: number;
}
