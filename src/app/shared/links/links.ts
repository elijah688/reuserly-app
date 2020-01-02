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
      'color': '#9FB540'
    },
    {
      'title': 'Protectors',
      'icon': 'phone-portrait',
      'link' : '/protectors',
      'color': '#83796C'
    },
    {
      'title': 'Flutes',
      'icon': 'wine',
      'link' : '/flutes',
      'color': '#A1888A'
    },
    {
      'title': 'Reuserly Books',
      'icon': 'book',
      'link' : '/books',
      'color': '#6E858B'
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
