export function trackEvent(event: string, data: Record<string, string | number>) {
  if (process.env.NODE_ENV === "development") {
    console.log("[trackEvent]", event, data);
  }
}
