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

export const HOME_PAGE_EDUCATION_QUERY = (lng: string) => `
query MyQuery {
  page {
    kdgTitle
    kdgPeriod
    kdgText1(locale: ${lng})
    kdgText2(locale: ${lng})
    udemyTitle
    udemyText1(locale: ${lng})
    udemyCourses(locale: ${lng})
    udemyReactNative(locale: ${lng})
    udemyReact
    udemyVue(locale: ${lng})
    udemyAws(locale: ${lng})
  }  
}
`

export const HOME_PAGE_VOLUNTEER_WORK_QUERY = (lng: string) => `
query MyQuery {
  page {
    iamTitle
    iamPeriod(locale: ${lng})
    iamText(locale: ${lng})
    iamText2(locale: ${lng})
    iamText3(locale: ${lng})
    iamText4(locale: ${lng})
    iamText5(locale: ${lng})
    iamText6(locale: ${lng})
    iamText7(locale: ${lng})
    reactBrusselsTitle
    reactBrusselsText(locale: ${lng})
    reactBrusselsText2(locale: ${lng})
  }
}
`
