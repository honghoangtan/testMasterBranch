
import {
    IoIosLogOut,
  } from "react-icons/io";
  import {
    FaChartBar,
    FaCalendarAlt,
    FaFacebookMessenger,
    FaUsersCog,
    FaListAlt,
  } from "react-icons/fa";

import dropbox from '../assets/dropbox.png'
import airbnb from '../assets/airbnb.png'
import playstation from '../assets/playstation.jpg'
import shopify from '../assets/shopify.jpg'
import spotify from '../assets/spotify.png'
import paypal from '../assets/paypal.jpg'

import chartApple from '../assets/chartApple.png'
import chartMeta from '../assets/chartMeta.png'
import chartMicro from '../assets/chartMicro.jpg'
import chartGG from '../assets/chartGG.png'

import logoApple from '../assets/logoApple.png'
import logoFb from '../assets/logoFb.png'
import logoMicro from '../assets/logoMicro.png'
import logoGG from '../assets/logoGG.png'

import logoStock from '../assets/logoStock.png'


export const FOOTER_CONTACT_INFOR = {
  title: "GoStock",
  image: logoStock,
  links: [
      "Technology Park",
      "8-14 Marie Curie Street",
      "08042 Barcelona"
  ],
  email: "gostock@example.com"
}

export const FOOTER_LINK = [
  {
      title: "Platform",
      links: [
          "Analytics",
          "Planning",
          "Collaboration",
          "Data Management",
          "Integrations",
          "Security"
      ]
  },
  {
      title: "Resource",
      links: [
          "Custormers",
          "Strategic Finance",
          "Ebooks & Guides",
          "Webinars & Events",
          "Podcast & Video",
      ]
  },
  {
      title: "Solutions",
      links: [
          "Financial",
          "Investors & CEOs",
          "Revenue Operations",
          "Sales & Marketing",
          "Human Resources",
      ]
  },
  {
      title: "Resource",
      links: [
          "Custormers",
          "Strategic Finance",
          "Ebooks & Guides",
          "Webinars & Events",
          "Podcast & Video",
          "Matrics Catalog",
      ]
  },
  
]

  export const watchList = [
    {
      name: "SPOT",
      subName: "Spotify",
      role: "Python Developer",
      totalShare: '$310,40',
      totalReturn: '-1,10%',
      image: spotify,
    },
    {
      name: "ABNB",
      subName: "Airbnb",
      totalShare: '$132,72',
      totalReturn: '-10,29%',
      image: airbnb,
    },
    {
      name: "SHOP",
      subName: "Shopify",
      totalShare: '$28,57',
      totalReturn: '-6,48%',
      image: shopify,
    },
    {
      name: "SONY",
      subName: "Playstation",
      totalShare: '$71,86',
      totalReturn: '+0,98%',
      image: playstation,
    },
    {
      name: "DBX",
      subName: "Dropbox Inc",
      totalShare: '$20,44',
      totalReturn: '-3,08%',
      image: dropbox,
    },
    {
      name: "PYPL",
      subName: "Paypal",
      totalShare: '$87,66',
      totalReturn: '-3,86%',
      image: paypal,
    },
  ];


  export const empolyeesData = [
    {
      title: "Apple",
      logo: logoApple,
      image: chartApple ,
      totalshare: '$310,40',
      totalreturn: '-1,10%',
      bgColor: "bg-gray-100",
    },
    {
      title: "Meta",
      logo: logoFb,
      image: chartMeta,
      totalshare: '$140,45',
      totalreturn: '-0,10%',
      bgColor: "bg-blue-100",
    },
    {
      title: "Microsoft",
      logo: logoMicro,
      image: chartMicro,
      totalshare: '$240,98',
      totalreturn: '+0,85%',
      bgColor: "bg-yellow-100",
    },
    {
      title: "Google",
      logo: logoGG,
      image: chartGG,
      totalshare: '$99,12',
      totalreturn: '-0,04%',
      bgColor: "bg-yellow-100",
    },
  ];

export const links = [
    {
      href: "#",
      icon: FaChartBar,
      text: "Dashboard",
    },
    {
      href: "#",
      icon: FaCalendarAlt,
      text: "Kanban",
      badge: {
        text: "Pro",
        color: "bg-gray-100 text-gray-800",
        darkColor: "dark:bg-gray-700 dark:text-gray-300",
      },
    },
    {
      href: "#",
      icon: FaFacebookMessenger,
      text: "Inbox",
      badge: {
        text: "4",
        color: "bg-blue-100 text-blue-800",
        darkColor: "dark:bg-blue-900 dark:text-blue-300",
      },
    },
    {
      href: "#",
      icon: FaUsersCog,
      text: "Users",
    },
    {
      href: "#",
      icon: FaListAlt,
      text: "Products",
    },
    // {
    //   href: "#",
    //   icon: IoIosLogIn,
    //   text: "Sign In",
    // },
    // {
    //   href: "#",
    //   icon: IoIosLogOut,
    //   text: "Sign Up",
    // },
    {
      href: "/login",
      icon: IoIosLogOut,
      text: "Log Out",
    },
  ];