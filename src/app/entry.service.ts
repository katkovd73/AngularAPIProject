import { Injectable } from '@angular/core';
  
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

baseUrl: string = 'https://localhost:44372/api/entries/'

constructor(private http: HttpClient) { }

getEntry(id: any){
  return this.http.get(this.baseUrl+id);
}

getAll(){
  return this.http.get(this.baseUrl);
}

createEntry(entry: any){
  return this.http.post(this.baseUrl, entry);
}

updateEntry(id: number, entry: any){
  console.log("Id: " + id + ", Value: " + entry);
  console.log(this.baseUrl+'/'+id,entry);
  return this.http.put(this.baseUrl+id,entry);
}

deleteEntry(id:any){
  return this.http.delete(this.baseUrl+id);
}

}
