import { Component, inject } from '@angular/core';
import { Header } from "@shared/components/header/header";
import { Button } from "@shared/components/button/button";
import { IssuesFacade } from '../../facades/issues.facade';
import { Router, RouterLink } from "@angular/router";
import { Spinner } from "@/app/shared/components/spinner/spinner";
import { NgStyle } from "@angular/common";
import { Card } from '@/app/shared/components/card/card';

@Component({
  selector: 'app-issues-list',
  imports: [ Card, Button, RouterLink, Spinner, NgStyle],
  templateUrl: './issues-list.html',
  styleUrl: './issues-list.css',
})
export class IssuesList {
  public readonly issuesFacade = inject(IssuesFacade);
  private readonly _router = inject(Router);

  public goToDetail(issueNumber: number): void{
    this._router.navigate(['/issues-detail', issueNumber]);
  }
}
