import { inject, Injectable } from '@angular/core';
import { GithubApiService } from '@services/github-api.service';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class IssuesFacade {
    private readonly _githubApiService = inject(GithubApiService);

    public readonly labelsQuery = injectQuery(() => ({
        queryKey: ['issues', 'labels'],
        queryFn: () => lastValueFrom(this._githubApiService.getLabels()), 
        staleTime: 1000*60*5 // =5min
    }));

    public readonly issuesQuery = injectQuery(() => ({
        queryKey: ['issues', 'list'],
        queryFn: () => lastValueFrom(this._githubApiService.getIssues()),
        staleTime: 1000*60 // =1min
    }))

}
