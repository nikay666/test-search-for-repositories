export const getPercent = (total: number, number: number): number => {
  return Math.floor((number / total) * 100)
}
