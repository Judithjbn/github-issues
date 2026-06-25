export interface GitHubLabel {
  readonly id: number;
  readonly name: string;
  readonly color: string;
  readonly description: string | null;
}