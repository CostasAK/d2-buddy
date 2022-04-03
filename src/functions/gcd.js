export default function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
}

export function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
