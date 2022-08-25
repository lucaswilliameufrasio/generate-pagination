import { buildPagination } from '../src'

describe('buildPagination()', () => {
  const rest = '...'

  it('Should return correct list of pages even if no selected page was provided', function () {
    const pagination = buildPagination({
      totalOfPages: 9,
    })
    expect(pagination).toEqual(
      Array.from({ length: 9 }, (_, index) => index + 1),
    )
  })

  it('Should return an array with 2 items if there are a total of 2 pages', function () {
    const pagination = buildPagination({
      totalOfPages: 2,
      selectedPage: 1,
    })
    expect(pagination).toEqual(
      Array.from({ length: 2 }, (_, index) => index + 1),
    )
  })

  it('Should return an array with 10 items if there are a total of 10 pages', function () {
    const pagination = buildPagination({
      totalOfPages: 10,
      selectedPage: 1,
    })
    expect(pagination).toEqual(
      Array.from({ length: 10 }, (_, index) => index + 1),
    )
  })

  it('Should return an array with 5 pages and one "divider" if there are more than 10 pages and the select page is the first one', function () {
    const pagination = buildPagination({
      totalOfPages: 11,
      selectedPage: 1,
    })
    expect(pagination).toEqual([1, 2, 3, rest, 10, 11])
  })

  it('Should return an array with 5 pages and one "divider" if there are more than 10 pages and the select page is the last one', function () {
    const pagination = buildPagination({
      totalOfPages: 11,
      selectedPage: 11,
    })
    expect(pagination).toEqual([1, 2, rest, 9, 10, 11])
  })

  it('Should return an array with 5 pages and two "divider" if there are more than 10 pages and the select page is the sixth', function () {
    const pagination = buildPagination({
      totalOfPages: 11,
      selectedPage: 6,
    })
    expect(pagination).toEqual([1, 2, rest, 5, 6, 7, rest, 10, 11])
  })

  it('Should return an array with 5 pages and two "divider" if there are more than 10 pages and the select page is the seventh', function () {
    const pagination = buildPagination({
      totalOfPages: 11,
      selectedPage: 7,
    })
    expect(pagination).toEqual([1, 2, rest, 6, 7, 8, rest, 10, 11])
  })

  it('Should return an array with 7 pages and one "divider" if there are 28 pages and the select page is the fourth', function () {
    const pagination = buildPagination({
      totalOfPages: 28,
      selectedPage: 4,
    })
    expect(pagination).toEqual([1, 2, 3, 4, 5, rest, 27, 28])
  })

  it('Should return an array with 7 pages and two "divider" if there are 28 pages and the select page is the seventh', function () {
    const pagination = buildPagination({
      totalOfPages: 28,
      selectedPage: 7,
    })
    expect(pagination).toEqual([1, 2, rest, 6, 7, 8, rest, 27, 28])
  })

  it('Should return an array with 7 pages and two "divider" if there are 28 pages and the select page is the tenth', function () {
    const pagination = buildPagination({
      totalOfPages: 28,
      selectedPage: 10,
    })
    expect(pagination).toEqual([1, 2, rest, 9, 10, 11, rest, 27, 28])
  })

  it('Should return an array with 7 pages and one "divider" if there are 28 pages and the select page is the twentieth fifth', function () {
    const pagination = buildPagination({
      totalOfPages: 28,
      selectedPage: 25,
    })
    expect(pagination).toEqual([1, 2, rest, 24, 25, 26, 27, 28])
  })

  it('Should return an array with 7 pages and one "divider" if there are 28 pages and the select page is the twentieth seventh', function () {
    const pagination = buildPagination({
      totalOfPages: 28,
      selectedPage: 27,
    })
    expect(pagination).toEqual([1, 2, rest, 26, 27, 28])
  })

  it('Should return an array with 7 pages and one "divider" if there are 28 pages and the select page is the twentieth eighth', function () {
    const pagination = buildPagination({
      totalOfPages: 28,
      selectedPage: 28,
    })
    expect(pagination).toEqual([1, 2, rest, 26, 27, 28])
  })

  it('Should return an array with 7 pages and two "divider" if there are 31 pages and the select page is the tenth', function () {
    const pagination = buildPagination({
      totalOfPages: 31,
      selectedPage: 10,
    })
    expect(pagination).toEqual([1, 2, rest, 9, 10, 11, rest, 30, 31])
  })

  it('Should return an array with 7 pages and two "divider" if there are 31 pages and the select page is the third', function () {
    const pagination = buildPagination({
      totalOfPages: 31,
      selectedPage: 3,
    })
    expect(pagination).toEqual([1, 2, 3, 4, 5, rest, 30, 31])
  })

  it('Should return an array with 7 pages and two "divider" if there are 31 pages and the select page is the twentieth ninth', function () {
    const pagination = buildPagination({
      totalOfPages: 31,
      selectedPage: 29,
    })
    expect(pagination).toEqual([1, 2, rest, 27, 28, 29, 30, 31])
  })

  it('Should return an array with 7 pages and one "divider" if there are 31 pages and the select page is the twentieth eighth', function () {
    const pagination = buildPagination({
      totalOfPages: 31,
      selectedPage: 28,
    })
    expect(pagination).toEqual([1, 2, rest, 27, 28, 29, 30, 31])
  })

  it('Should return an array with 7 pages and one "divider" if there are 31 pages and the select page is the thirtieth', function () {
    const pagination = buildPagination({
      totalOfPages: 31,
      selectedPage: 30,
    })
    expect(pagination).toEqual([1, 2, rest, 29, 30, 31])
  })

  it('Should return an array with 7 pages and two "divider" if there are 31 pages and the select page is the twentieth seventh', function () {
    const pagination = buildPagination({
      totalOfPages: 31,
      selectedPage: 27,
    })
    expect(pagination).toEqual([1, 2, rest, 26, 27, 28, rest, 30, 31])
  })

  it('Should return an array with 7 pages and one "divider" if there are 31 pages and the select page is the fourth', function () {
    const pagination = buildPagination({
      totalOfPages: 31,
      selectedPage: 4,
    })
    expect(pagination).toEqual([1, 2, 3, 4, 5, rest, 30, 31])
  })

  it('Should return an array with 7 pages and two "divider" if there are 31 pages and the select page is the fifth', function () {
    const pagination = buildPagination({
      totalOfPages: 31,
      selectedPage: 5,
    })
    expect(pagination).toEqual([1, 2, rest, 4, 5, 6, rest, 30, 31])
  })

  it('Should return an array with 7 pages and two "divider" if there are 31 pages and the select page is the sixth', function () {
    const pagination = buildPagination({
      totalOfPages: 31,
      selectedPage: 6,
    })
    expect(pagination).toEqual([1, 2, rest, 5, 6, 7, rest, 30, 31])
  })

  it('Should return an array with 7 pages and two "divider" if there are 31 pages and the select page is the twentieth sixth', function () {
    const pagination = buildPagination({
      totalOfPages: 31,
      selectedPage: 26,
    })
    expect(pagination).toEqual([1, 2, rest, 25, 26, 27, rest, 30, 31])
  })

  it('Should return an array with 7 pages and two "divider" if there are 1000 pages and the select page is the twentieth sixth', function () {
    const pagination = buildPagination({
      totalOfPages: 1000,
      selectedPage: 26,
    })
    expect(pagination).toEqual([1, 2, rest, 25, 26, 27, rest, 999, 1000])
  })
})
