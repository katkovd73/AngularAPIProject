
import { VoteComponent } from "../vote.component";

describe('VoteComponent', () => {

    let component: VoteComponent;

    // it's reffered as "set up"
    beforeEach(() => {
        component = new VoteComponent(); // creating an object instance
    });

    // it's reffered as "tear down"
    afterEach(() => {

    });

    // other functions are:
    beforeAll(() => {}); // executed once before
    afterAll(() => {}); // executed once after    


    it('should increment totalVOtes when upvoted', () => {
        // Arrange
        // let component = new VoteComponent();
        
        // Act
        component.upVote();
        
        // Assert
        expect(component.totalVotes).toBe(1);
    })

    it('should decrement totalVOtes when downvoted', () => {
        // Arrange
        //let component = new VoteComponent();
        
        // Act
        component.downVote();
        
        // Assert
        expect(component.totalVotes).toBe(-1);
    })
})