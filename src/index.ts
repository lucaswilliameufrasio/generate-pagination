export type Params = {
  selectedPage?: number
  totalOfPages: number
}
export type Result = Array<number | typeof rest>

const rest = '...'

const generateNthLastPages = (
  numberOfPages: number,
  withRest = true,
): Result => {
  const firstNthPagesWithoutRest = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1,
  ) as Result

  const lastPages = withRest
    ? firstNthPagesWithoutRest.concat(rest)
    : firstNthPagesWithoutRest
  return lastPages
}

const isTheSelectedPageBeforeTheLastNthOne = (
  selectedPage: number,
  lastNthPage: number,
) => selectedPage < lastNthPage

export const buildPagination = (params: Params): Result => {
  if (!params.selectedPage) {
    params.selectedPage = 1
  }

  const { selectedPage, totalOfPages } = params

  const lastFivePages: Result = Array.from(
    { length: 5 },
    (_, index) => totalOfPages - index,
  ).reverse()

  const lastThreePages: Result = Array.from(
    { length: 3 },
    (_, index) => totalOfPages - index,
  ).reverse()

  const lastTwoPages: Result = Array.from(
    { length: 2 },
    (_, index) => totalOfPages - index,
  ).reverse()

  const middlePages: Result = [
    selectedPage - 1,
    selectedPage,
    selectedPage + 1,
    rest,
  ]

  if (selectedPage === totalOfPages) {
    return generateNthLastPages(2).concat(lastThreePages)
  }

  if (totalOfPages <= 10) {
    return Array.from({ length: totalOfPages }, (_, index) => index + 1)
  }

  if (selectedPage === 1) {
    return generateNthLastPages(3).concat(lastTwoPages)
  }

  if (selectedPage <= 3) {
    return generateNthLastPages(5).concat(lastTwoPages)
  }

  if (selectedPage < 5) {
    return generateNthLastPages(2, false)
      .concat(middlePages)
      .concat(lastTwoPages)
  }

  if (
    selectedPage > 5 &&
    isTheSelectedPageBeforeTheLastNthOne(selectedPage, totalOfPages - 3)
  ) {
    return generateNthLastPages(2).concat(middlePages).concat(lastTwoPages)
  }

  if (
    selectedPage >= 5 &&
    isTheSelectedPageBeforeTheLastNthOne(selectedPage, totalOfPages - 5)
  ) {
    return generateNthLastPages(2).concat(middlePages).concat(lastTwoPages)
  }

  const isAPageBetweenLastTwoPages = selectedPage > totalOfPages - 2

  if (isAPageBetweenLastTwoPages) {
    return generateNthLastPages(2).concat(lastThreePages)
  }

  return generateNthLastPages(2).concat(lastFivePages)
}
