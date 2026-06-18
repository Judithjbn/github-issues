import { Component } from '@angular/core';
import { Header } from "../../../../shared/components/header/header";
import { Button } from "../../../../shared/components/button/button";

@Component({
  selector: 'app-issues-list',
  imports: [Header, Button],
  templateUrl: './issues-list.html',
  styleUrl: './issues-list.css',
})
export class IssuesList {}
