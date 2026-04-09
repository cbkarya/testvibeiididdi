export type UserAccessState = {
  isSubscribed: boolean;
  hasAccount: boolean;
  isLoggedIn: boolean;
};

export const defaultAccessState: UserAccessState = {
  isSubscribed: false,
  hasAccount: false,
  isLoggedIn: false,
};

const STORAGE_KEY = "amfprep_access_state";

export function getAccessState(): UserAccessState {
  if (typeof window === "undefined") return defaultAccessState;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultAccessState;

  try {
    return { ...defaultAccessState, ...JSON.parse(raw) };
  } catch {
    return defaultAccessState;
  }
}

export function setAccessState(nextState: Partial<UserAccessState>) {
  const current = getAccessState();
  const merged = { ...current, ...nextState };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  window.dispatchEvent(new Event("amfprep-auth-change"));
  return merged;
}

export function clearAccessState() {
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event("amfprep-auth-change"));
}
