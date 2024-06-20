import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigService } from '../../env-config.service';
import { EnvConfigModule } from '../../env-config.module';
import { ConfigService } from '@nestjs/config';

describe('EnvConfigService', () => {
  let sut: EnvConfigService; //elemento principal de teste, system under testing para test unitario principalmente

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[EnvConfigModule.forRoot()],
      providers: [EnvConfigService], // ConfigService
    }).compile();

    sut = module.get<EnvConfigService>(EnvConfigService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });
  // em package.json, está definido no script start:dev sendo alterado a variable NODE_ENV para development
  it('should return the variable PORT', () => {
    expect(sut.getAppPort()).toBe(3000);
  });
// em package.json, está definido no script test sendo alterado a variable NODE_ENV para test (nao ha necessidade )
  it('should return the variable NODE_ENV', () => {
    expect(sut.getNodeEnv()).toBe('test');
  });
});
