export const SEO_QUERY = `
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

export const HOME_PAGE_WORK_EXPERIENCE_QUERY = (lng: string) => `
query MyQuery {
  page {
    calqiTitle(locale: ${lng})
    calqiPeriod(locale: ${lng})
    calqiText1(locale: ${lng})
    calqiText2(locale: ${lng})
    calqiText3(locale: ${lng})
    twoPointOTitle(locale: ${lng})
    twoPointOPeriod(locale: ${lng})
    twoPointOBeatTitle(locale: ${lng})
    twoPointOBeatDescription(locale: ${lng})
    twoPointOBeameryTitle(locale: ${lng})
    twoPointOBeameryDescription(locale: ${lng})
    twoPointOTroubleshootingPageTitle(locale: ${lng})
    twoPointOTroubleshootingPageDescription(locale: ${lng})
    twoPointOPocTitle(locale: ${lng})
    twoPointOPocDescription(locale: ${lng})
    twoPointOText1(locale: ${lng})
  }
}
`
