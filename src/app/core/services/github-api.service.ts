import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { environment } from '@environments/environment.development';
import { GitHubLabel } from '@models/github-label.model';
import { GitHubIssue } from '@models/github-issue.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class GithubApiService {
    private readonly _http = inject (HttpClient);
    private readonly _baseUrl = environment.API_BASE_URL + 'angular/angular';

    public getLabels() {
        Observable<readonly GitHubLabel[]>
        {
            return this._http.get<readonly GitHubLabel[]>(`${this._baseUrl}/labels`);
        }
    }
    public getIssues() {
        Observable<readonly GitHubIssue[]>
        {
            return this._http.get<readonly GitHubIssue[]>(`${this._baseUrl}/issues`)
        }
    }

}
