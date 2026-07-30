import { Injectable } from '@angular/core';

// Provided at COMPONENT level (see NotificationComponent) rather than root,
// so each component instance that provides it gets its own isolated state
// instead of sharing one app-wide singleton.
@Injectable()
export class NotificationService {
  private messages: string[] = [];

  push(message: string): void {
    this.messages.push(message);
  }

  getMessages(): string[] {
    return this.messages;
  }
}
