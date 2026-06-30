const adminCode = "Bloom";

export function isAdminCodeValid(code: string | string[] | undefined) {
  return code === adminCode;
}

export function getAdminCode() {
  return adminCode;
}
