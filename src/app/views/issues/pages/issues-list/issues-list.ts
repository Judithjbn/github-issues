import { Component, inject } from '@angular/core';
import { Header } from "@shared/components/header/header";
import { Button } from "@shared/components/button/button";
import { IssuesFacade } from '../../facades/issues.facade';
import { RouterLink } from "@angular/router";
import { Spinner } from "@/app/shared/components/spinner/spinner";
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-issues-list',
  imports: [Header, Button, RouterLink, Spinner, NgStyle],
  templateUrl: './issues-list.html',
  styleUrl: './issues-list.css',
})
export class IssuesList {
  public readonly _issuesFacade = inject(IssuesFacade);
}
