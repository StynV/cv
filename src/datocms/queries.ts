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
    calqiTitle
    calqiPeriod(locale: ${lng})
    calqiText1(locale: ${lng})
    calqiText2(locale: ${lng})
    calqiText3(locale: ${lng})
    twoPointOTitle
    twoPointOPeriod(locale: ${lng})
    twoPointOBeatTitle
    twoPointOBeatDescription(locale: ${lng})
    twoPointOBeameryTitle
    twoPointOBeameryDescription(locale: ${lng})
    twoPointOTroubleshootingPageTitle
    twoPointOTroubleshootingPageDescription(locale: ${lng})
    twoPointOPocTitle
    twoPointOPocDescription(locale: ${lng})
    twoPointOText1(locale: ${lng})
    oddballTitle
    oddballPeriod(locale: ${lng})
    oddballText1(locale: ${lng})
    oddballText2(locale: ${lng})
    oddballKeyProjects(locale: ${lng})
    oddballTheValueChainTitle
    oddballTheValueChainDescription(locale: ${lng})
    oddballBrightestTitle
    oddballBrightestDescription(locale: ${lng})
    oddballLincTitle
    oddballLincDescription(locale: ${lng})
    dxcFdsTitle
    dxcFdsPeriod(locale: ${lng})
    dxcFdsText1(locale: ${lng})
    dxcFdsText2(locale: ${lng})
    dxcFdsText3
    internshipIcappsTitle(locale: ${lng})
    internshipIcappsPeriod(locale: ${lng})
    internshipIcappsText(locale: ${lng})
    internshipIcappsText2(locale: ${lng})
  }
}
`
