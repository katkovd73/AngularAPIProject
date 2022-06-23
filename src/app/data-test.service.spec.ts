import { TestBed } from '@angular/core/testing';
//import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClientModule } from '@angular/common/http';
import { DataTestService } from './data-test.service';
//import { stringify } from 'querystring';
import { Post } from './models/post.models';

describe('DataTestService', () => {
  let service: DataTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule ]
    });
    service = TestBed.inject(DataTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve posts from API via GET', () => {   
   let posts: any = [];

    service.getPosts().subscribe(res => { 
      console.log(res);      
      //posts = JSON.parse(JSON.stringify(res)); 
      posts = res;  
      setTimeout(() => expect(posts.length).toBe(100), 10000); 
      console.log(posts);  
    }) 
    
    
    
  });
});
