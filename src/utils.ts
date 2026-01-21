export const STORAGE_KEY = 'stadtwerke_passkey_verified';
export const PASSKEY = import.meta.env.VITE_PASS_KEY || '';

/**
 * Storage utility that tries localStorage first, falls back to sessionStorage.
 * All operations are wrapped in try/catch to prevent page breakage.
 */
export const storage = {
  getItem(key: string): string | null {
    try {
      // Try localStorage first
      if (typeof localStorage !== 'undefined') {
        const value = localStorage.getItem(key);
        if (value !== null) return value;
      }
    } catch {
      // localStorage not available or blocked
    }

    try {
      // Fall back to sessionStorage
      if (typeof sessionStorage !== 'undefined') {
        return sessionStorage.getItem(key);
      }
    } catch {
      // sessionStorage not available or blocked
    }

    return null;
  },

  setItem(key: string, value: string): boolean {
    try {
      // Try localStorage first
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, value);
        return true;
      }
    } catch {
      // localStorage not available, blocked, or quota exceeded
    }

    try {
      // Fall back to sessionStorage
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem(key, value);
        return true;
      }
    } catch {
      // sessionStorage not available, blocked, or quota exceeded
    }

    return false;
  },
};
