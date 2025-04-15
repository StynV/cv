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
