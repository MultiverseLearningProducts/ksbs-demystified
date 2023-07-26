import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: 'SWE KSBs',
  description: 'Find out about the requirements for the apprenticeship',
  theme: defaultTheme({
    logo: '/mv-symbol.png',
    logoDark: '/mv-symbol-dark.png',
    repo: 'MultiverseLearningProducts/ksbs-demystified',
    docsDir: '/src',
    navbar: [
      {
        text: 'Knowledge',
        children: [
          { text: 'K1', link: '/knowledge/k01' },
          { text: 'K2', link: '/knowledge/k02' },
          { text: 'K3', link: '/knowledge/k03' },
          { text: 'K4', link: '/knowledge/k04' },
          { text: 'K5', link: '/knowledge/k05' },
          { text: 'K6', link: '/knowledge/k06' },
          { text: 'K7', link: '/knowledge/k07' },
          { text: 'K8', link: '/knowledge/k08' },
          { text: 'K9', link: '/knowledge/k09' },
          { text: 'K10', link: '/knowledge/k10' },
          { text: 'K11', link: '/knowledge/k11' },
          { text: 'K12', link: '/knowledge/k12' }
        ]
      },
      {
        text: 'Skills',
        children: [
          { text: 'S1', link: '/skills/s01' },
          { text: 'S2', link: '/skills/s02' },
          { text: 'S3', link: '/skills/s03' },
          { text: 'S4', link: '/skills/s04' },
          { text: 'S5', link: '/skills/s05' },
          { text: 'S6', link: '/skills/s06' },
          { text: 'S7', link: '/skills/s07' },
          { text: 'S8', link: '/skills/s08' },
          { text: 'S9', link: '/skills/s09' },
          { text: 'S10', link: '/skills/s10' },
          { text: 'S11', link: '/skills/s11' },
          { text: 'S12', link: '/skills/s12' },
          { text: 'S13', link: '/skills/s13' },
          { text: 'S14', link: '/skills/s14' },
          { text: 'S15', link: '/skills/s15' },
          { text: 'S16', link: '/skills/s16' },
          { text: 'S17', link: '/skills/s17' }
        ]
      },
      {
        text: 'Behaviours',
        children: [
          { text: 'B1', link: '/behaviours/b01' },
          { text: 'B2', link: '/behaviours/b02' },
          { text: 'B3', link: '/behaviours/b03' },
          { text: 'B4', link: '/behaviours/b04' },
          { text: 'B5', link: '/behaviours/b05' },
          { text: 'B6', link: '/behaviours/b06' },
          { text: 'B7', link: '/behaviours/b07' },
          { text: 'B8', link: '/behaviours/b08' },
          { text: 'B9', link: '/behaviours/b09' }
        ]
      }
    ]
  })
})
