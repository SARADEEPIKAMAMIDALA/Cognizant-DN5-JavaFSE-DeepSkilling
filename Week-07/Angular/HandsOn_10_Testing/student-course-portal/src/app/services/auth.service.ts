import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Hardcoded for now - Hands-On 7 wires this into a real AuthGuard.
  isLoggedIn = true;
}
