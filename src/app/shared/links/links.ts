export interface StoreLink {
    title:string
    icon:string
    link:string
    color:string
}

export interface SocialLink {
    icon:string
    link:string
}

export const links: {stores:StoreLink[],socials:SocialLink[]} =  {
    stores : [
    {
      'title': 'Straws',
      'icon': 'color-wand',
      'link' : '/straws',
      'color': '#E63135'
    },
    {
      'title': 'Protectors',
      'icon': 'phone-portrait',
      'link' : '/protectors',
      'color': '#0CA9EA'
    },
    {
      'title': 'Flutes',
      'icon': 'wine',
      'link' : '/flutes',
      'color': '#b76e79'
    },
    {
      'title': 'Reuserly Books',
      'icon': 'book',
      'link' : '/books',
      'color': '#F46529'
    },
    ],
    socials : [
    {
      'icon': 'logo-twitter',
      'link' : 'https://mobile.twitter.com/reuserly',
    },
    {
      'icon': 'logo-instagram',
      'link' : 'https://www.instagram.com/reuserly/?hl=en',
    },
    {
      'icon': 'logo-facebook',
      'link' : 'https://www.facebook.com/Reuserly/',
    },
    {
      'icon': 'cart',
      'link' : 'https://www.amazon.co.uk/s?i=merchant-items&me=AXZZLUOFE5VAI&dc&qid=1577594775&ref=sr_nr_p_4_1',
    },
    ]
}
