export interface GitHubLabel {
  readonly id: number;
  readonly node_id: string;
  readonly url: string;
  readonly name: string;
  readonly color: string;
  readonly default: boolean;
  readonly description: string | null;
}