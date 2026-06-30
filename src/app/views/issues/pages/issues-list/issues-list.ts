import { Component, inject } from '@angular/core';
import { Header } from "@shared/components/header/header";
import { Button } from "@shared/components/button/button";
import { IssuesFacade } from '../../facades/issues.facade';
import { RouterLink } from "@angular/router";
import { Spinner } from "@/app/shared/components/spinner/spinner";

@Component({
  selector: 'app-issues-list',
  imports: [Header, Button, RouterLink, Spinner],
  templateUrl: './issues-list.html',
  styleUrl: './issues-list.css',
})
export class IssuesList {
  public readonly _issuesFacade = inject(IssuesFacade);
}
