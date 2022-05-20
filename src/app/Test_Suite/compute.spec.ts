import { compute} from '../Test_Functions/compute';

describe('Compute', () => {
 
  it('should return 0 if input is negative', function() {
    const result = compute(-1);
    expect(result).toBe(0);
  })

  it('should return 5 if input is 4', () => {
    const result = compute(4);
    expect(result).toBe(5);
  })

});