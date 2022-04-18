export function kFormatNumber(n: number, minDigits = 2) {
  const base = 1000
  if (n < base) return n

  const quotient = n / base
  const nIntegralDigits = parseInt(Math.log10(quotient).toString())

  const res = nIntegralDigits >= minDigits ? Math.floor(quotient) : quotient.toPrecision(minDigits)

  return res + 'k'
}

export function spaceFormatNumber(n: number) {
  const base = 1000
  if (n < base) return n

  return n.toLocaleString('en-us')
}
