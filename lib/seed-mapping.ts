export function mapOpportunityType(type?: string) {
  switch (type) {
    case "job":
      return "JOB";
    case "volunteer":
      return "VOLUNTEER";
    case "career_event":
      return "EVENT";
    case "resource":
    case "student_resource":
      return "STUDENT_RESOURCE";
    case "internship_program":
    default:
      return "INTERNSHIP";
  }
}

export function normalizeOpportunityType(type?: string, title?: string | null) {
  const mapped = mapOpportunityType(type);
  const lowerTitle = (title ?? "").trim().toLowerCase();
  if (lowerTitle === "program" || lowerTitle.endsWith(" program")) {
    return "PROGRAM";
  }
  return mapped;
}

export function mapVerificationStatus(status?: string, webStatus?: string) {
  if (webStatus === "verified_current_page" || status === "time_sensitive_2026_source") {
    return "ACTIVE_VERIFIED";
  }

  if (status === "inactive_or_closed_source_indicated") {
    return "ARCHIVED";
  }

  if (status === "likely_active_from_source") {
    return "NEEDS_REVIEW";
  }

  return "NEEDS_REVIEW";
}

export function isPaid(compensation?: string | null) {
  if (!compensation) return null;
  const text = compensation.toLowerCase();
  if (text.includes("unpaid") || text.includes("volunteer")) return false;
  if (text.includes("$") || text.includes("paid") || text.includes("stipend")) return true;
  return null;
}

export function findMinAge(eligibility?: string | null) {
  if (!eligibility) return null;
  const match = eligibility.match(/(?:age|ages|minimum age|at least)\D{0,12}(\d{2})/i);
  if (!match) return null;
  const age = Number(match[1]);
  return Number.isFinite(age) ? age : null;
}

export function workPermitLikely(type?: string, paid?: boolean | null, minAge?: number | null) {
  return type === "job" && paid === true && (!minAge || minAge < 18);
}
