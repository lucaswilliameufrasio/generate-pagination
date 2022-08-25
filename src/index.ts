export type Params = {
  selectedPage?: number
  totalOfPages: number
}
export type Result = Array<number | typeof rest>

const rest = '...'

const generateNthFirstPages = (
  numberOfPages: number,
  withRest = true,
): Result => {
  const firstNthPagesWithoutRest = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1,
  ) as Result

  const firstPages = withRest
    ? firstNthPagesWithoutRest.concat(rest)
    : firstNthPagesWithoutRest
  return firstPages
}

const generateLastNPages = (numberOfPages: number, totalOfPages: number): Result => Array.from(
  { length: numberOfPages },
  (_, index) => totalOfPages - index,
).reverse()

const isTheSelectedPageBeforeTheLastNthOne = (
  selectedPage: number,
  lastNthPage: number,
) => selectedPage < lastNthPage

export const buildPagination = (params: Params): Result => {
  if (!params.selectedPage) {
    params.selectedPage = 1
  }

  const { selectedPage, totalOfPages } = params

  const lastFivePages: Result = generateLastNPages(5, totalOfPages)

  const lastThreePages: Result = generateLastNPages(3, totalOfPages)

  const lastTwoPages: Result = generateLastNPages(2, totalOfPages)

  const middlePages: Result = [
    selectedPage - 1,
    selectedPage,
    selectedPage + 1,
    rest,
  ]

  if (totalOfPages <= 10) {
    return Array.from({ length: totalOfPages }, (_, index) => index + 1)
  }

  if (selectedPage === totalOfPages) {
    return generateNthFirstPages(2).concat(lastThreePages)
  }

  if (selectedPage === 1) {
    return generateNthFirstPages(3).concat(lastTwoPages)
  }

  if (selectedPage <= 3) {
    return generateNthFirstPages(selectedPage + 1).concat(lastTwoPages)
  }

  if (selectedPage < 5) {
    return generateNthFirstPages(2, false)
      .concat(middlePages)
      .concat(lastTwoPages)
  }

  if (
    selectedPage > 5 &&
    isTheSelectedPageBeforeTheLastNthOne(selectedPage, totalOfPages - 3)
  ) {
    return generateNthFirstPages(2).concat(middlePages).concat(lastTwoPages)
  }

  if (
    selectedPage >= 5 &&
    isTheSelectedPageBeforeTheLastNthOne(selectedPage, totalOfPages - 5)
  ) {
    return generateNthFirstPages(2).concat(middlePages).concat(lastTwoPages)
  }

  const isAPageBetweenLastTwoPages = selectedPage > totalOfPages - 2

  if (isAPageBetweenLastTwoPages) {
    return generateNthFirstPages(2).concat(lastThreePages)
  }

  return generateNthFirstPages(2).concat(lastFivePages)
}
