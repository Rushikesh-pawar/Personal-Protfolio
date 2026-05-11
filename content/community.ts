export type CommunityRole = {
  org: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  summary: string;
  highlights?: string[];
};

export const community: CommunityRole[] = [
  {
    org: "TEDxTarabaiPark",
    role: "Event Organizer",
    start: "Jul 2019",
    end: "Jul 2019",
    location: "Hotel Virshali · Kolhapur, India",
    summary:
      "Organized a fully licensed TEDx event on 12 July 2019, with ownership across speaker curation, venue logistics, sponsorship, promotion, and stage management.",
    highlights: [
      "Ran the full event lifecycle, from speaker outreach and curation to sponsor pitches and on day program direction.",
      "Led the digital marketing and promotion effort across social channels in the lead up to the event.",
      "Hands on with budgeting and accounting through the event, and closed the books cleanly after.",
    ],
  },
  {
    org: "Rotaract Club of Kolhapur Midtown Phoenix",
    role: "Member",
    start: "Aug 2018",
    end: "Present",
    location: "Kolhapur, India",
    summary:
      "Active member of a registered NGO that runs sustained social impact programming, including blood and platelet donation drives, support for a school for blind children, and city wide cleanliness drives.",
  },
  {
    org: "Robin Hood Army",
    role: "Volunteer",
    start: "Feb 2018",
    end: "Present",
    location: "Kolhapur, India",
    summary:
      "Volunteer with a zero funds, all volunteer organization that recovers surplus food from restaurants and the community and redistributes it to people in need. I help with distribution drives whenever I am in town.",
  },
];
