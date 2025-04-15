export const SEO_QUERY = (lng: string) => `
query MyQuery {
  _site {
    globalSeo {
      fallbackSeo {
        description
        title
      }
    }
  }
  page {
    seoKeywords
  }
}
`

export const HOME_PAGE_HEADER_QUERY = (lng: string) => `
query MyQuery {
  page {
    headerImage {
      alt(locale: ${lng})
      url
    }
    name
    function
    mailLabel
    mailValue
    phoneLabel
    phoneValue
    linkedinLink
    city
    pdfLink(locale: ${lng})
  }
}
`
export const HOME_PAGE_INTRO_QUERY = (lng: string) => `
query MyQuery {
  page {
    intro1(locale: ${lng})
    intro2(locale: ${lng})
    intro3(locale: ${lng})
  }
}
`
