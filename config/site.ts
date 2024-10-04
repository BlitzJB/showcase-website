export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Community Digital Canvas",
  description:
    "A showcase of our community's digital projects, celebrating creativity and innovation.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Join Showcase",
      href: "#join-showcase",
    },
  ],
  links: {
    whatsapp: "https://wa.me/919677196957",
  },
  showcaseInfo: {
    title: "Our Community's Digital Canvas",
    subtitle: "Let's put election politics and coalitions aside for some time, and appreciate what our community has built in such a short span of time. Sort of like our own, accidental hackathon.",
    joinMessage: "If you would like your website to be added to this wall, contact Joshua Bharathi (+91 96771 96957) on WhatsApp.",
    disclaimer: "This platform has nothing to do with coalitions or any politics. Everyone is welcome and encouraged to build things!",
  },
}
