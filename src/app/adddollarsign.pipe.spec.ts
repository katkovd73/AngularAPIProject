import { AdddollarsignPipe } from './adddollarsign.pipe';

describe('AddDollarsignPipe', () => {

  it('create an instance', () => {
    const pipe = new AdddollarsignPipe();
    expect(pipe).toBeTruthy();
  });

  it('dollar sign added', () => {
    const pipe = new AdddollarsignPipe();
    let testVariable: number = 22.55;
    expect(pipe.transform(testVariable)).toBe('$22.55');    
  });
  
});
