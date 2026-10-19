import { Service, computed, signal } from '@angular/core';

@Service()
export class LoadingService {
  private readonly pending = signal(0); // requêtes en cours
  readonly isLoading = computed(() => this.pending() > 0);

  start(): void {
    this.pending.update((count) => count + 1);
  }

  stop(): void {
    this.pending.update((count) => count - 1);
  }
}
