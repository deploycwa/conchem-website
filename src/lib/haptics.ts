/**
 * Triggers a subtle physical haptic vibration on supported mobile devices.
 * @param ms - Duration of vibration in milliseconds (default 12ms for crisp tap)
 */
export function triggerHaptic(ms: number = 12) {
  if (
    typeof window !== "undefined" &&
    typeof navigator !== "undefined" &&
    "vibrate" in navigator &&
    typeof navigator.vibrate === "function"
  ) {
    try {
      navigator.vibrate(ms);
    } catch {
      // Fallback silently if vibration is blocked by user OS preferences
    }
  }
}
