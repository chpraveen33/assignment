import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RegisterService {
    constructor(
        private http: HttpClient
    ) { }
    submitdetails(userdetails) {
        return this.http.post("http://localhost:3001/v1/register/hospital", userdetails)
    }
}