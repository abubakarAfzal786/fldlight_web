// TODO: Chat with Bryce... where does this belong?

export const cmteOrgTypes = {
  C: "Corporation",
  L: "Labor organization",
  M: "Membership organization",
  T: "Trade association",
  V: "Cooperative",
  W: "Corporation without capital stock"
};

// https://www.fec.gov/campaign-finance-data/committee-type-code-descriptions/
export const cmteTypeCodes = {
  C: {
    type: "Communication cost",
    desc:
      "Organizations like corporations or unions may prepare communications for their employees or members that advocate the election of specific candidates and they must disclose them under certain circumstances. These are usually paid with direct corporate or union funds rather than from PACs."
  },
  D: {
    type: "Delegate committee",
    desc:
      "Delegate committees are organized for the purpose of influencing the selection of delegates to Presidential nominating conventions. The term includes a group of delegates, a group of individuals seeking to become delegates, and a group of individuals supporting delegates."
  },
  E: {
    type: "Electioneering communication",
    desc: "Groups (other than PACs) making electioneering communications"
  },
  H: {
    type: "House",
    desc:
      "Campaign committees for candidates for the U.S. House of Representatives"
  },
  I: {
    type: "Independent expenditor (person or group)",
    desc:
      "Individuals or groups (other than PACs) making independent expenditures over $250 in a year must disclose those expenditures"
  },
  N: {
    type: "PAC - nonqualified",
    desc:
      "PACs that have not yet been in existence for six months and received contributions from 50 people and made contributions to five federal candidates. These committees have lower limits for their contributions to candidates."
  },
  O: {
    type: "Independent expenditure-only (Super PACs)",
    desc:
      "Political Committee that has filed a statement consistent with AO 2010-09 or AO 2010-11."
  },
  P: {
    type: "Presidential",
    desc: "Campaign committee for candidate for U.S. President"
  },
  Q: {
    type: "PAC - qualified",
    desc:
      "PACs that have been in existence for six months and received contributions from 50 people and made contributions to five federal candidates"
  },
  S: { type: "Senate", desc: "Campaign committee for candidate for Senate" },
  U: { type: "Single-candidate independent expenditure", desc: "" },
  V: {
    type: "PAC with non-contribution account - nonqualified",
    desc: "Political committees with non-contribution accounts"
  },
  W: {
    type: "PAC with non-contribution account - qaualified",
    desc: "Political committees with non-contribution accounts"
  },
  X: {
    type: "Party - nonqualified",
    desc:
      "Party committees that have not yet been in existence for six months and received contributions from 50 people, unless they are affiliated with another party committee that has met these requirements."
  },
  Y: {
    type: "Party - qualified",
    desc:
      "Party committees that have existed for at least six months and received contributions from 50 people or are affiliated with another party committee that meets these requirements."
  },
  Z: {
    type: "National party nonfederal account",
    desc:
      "National party nonfederal accounts. Not permitted after enactment of Bipartisan Campaign Reform Act of 2002."
  }
};

export const cmteDesignations = {
  A: "Authorized by a candidate",
  B: "Lobbyist/Registrant PAC",
  D: "Leadership PAC",
  J: "Joint fundraiser",
  P: "Principal campaign committee of a candidate",
  U: "Unauthorized"
};

export const candOffice = {
  H: "House",
  P: "President",
  S: "Senate"
};

export const candICStatus = {
  C: "Challenger",
  I: "Incumbent",
  O: "Open Seat"
};

export const partyCodes = {
  ACE: "Ace Party",
  AKI: "Alaskan Independence Party",
  AIC: "American Independent Conservative",
  AIP: "American Independent Party",
  AMP: "American Party",
  APF: "American People's Freedom Party",
  AE: "Americans Elect",
  CIT: "Citizens' Party",
  CMD: "Commandments Party",
  CMP: "Commonwealth Party of the U.S.",
  COM: "Communist Party",
  CNC: "Concerned Citizens Party Of Connecticut",
  CRV: "Conservative Party",
  CON: "Constitution Party",
  CST: "Constitutional",
  COU: "Country",
  DCG: "D.C. Statehood Green Party",
  DNL: "Democratic -Nonpartisan League",
  DEM: "Democratic Party",
  "D/C": "Democratic/Conservative",
  DFL: "Democratic-Farmer-Labor",
  DGR: "Desert Green Party",
  FED: "Federalist",
  FLP: "Freedom Labor Party",
  FRE: "Freedom Party",
  GWP: "George Wallace Party",
  GRT: "Grassroots",
  GRE: "Green Party",
  GR: "Green-Rainbow",
  HRP: "Human Rights Party",
  IDP: "Independence Party",
  IND: "Independent",
  IAP: "Independent American Party",
  ICD: "Independent Conservative Democratic",
  IGR: "Independent Green",
  IP: "Independent Party",
  IDE: "Independent Party of Delaware",
  IGD: "Industrial Government Party",
  JCN: "Jewish/Christian National",
  JUS: "Justice Party",
  LRU: "La Raza Unida",
  LBR: "Labor Party",
  LFT: "Less Federal Taxes",
  LBL: "Liberal Party",
  LIB: "Libertarian Party",
  LBU: "Liberty Union Party",
  MTP: "Mountain Party",
  NDP: "National Democratic Party",
  NLP: "Natural Law Party",
  NA: "New Alliance",
  NJC: "New Jersey Conservative Party",
  NPP: "New Progressive Party",
  NPA: "No Party Affiliation",
  NOP: "No Party Preference Commonly used in CA & W",
  NNE: "None",
  N: "Nonpartisan",
  NON: "Non-Party",
  OE: "One Earth Party",
  OTH: "Other",
  PG: "Pacific Green",
  PSL: "Party for Socialism and Liberation",
  PAF: "Peace And Freedom",
  PFP: "Peace And Freedom Party",
  PFD: "Peace Freedom Party",
  POP: "People Over Politics",
  PPY: "People's Party",
  PCH: "Personal Choice Party",
  PPD: "Popular Democratic Party",
  PRO: "Progressive Party",
  NAP: "Prohibition Party",
  PRI: "Puerto Rican Independence Party",
  RUP: "Raza Unida Party",
  REF: "Reform Party",
  REP: "Republican Party",
  RES: "Resource Party",
  RTL: "Right To Life",
  SEP: "Socialist Equality Party",
  SLP: "Socialist Labor Party",
  SUS: "Socialist Party",
  SOC: "Socialist Party U.S.A.",
  SWP: "Socialist Workers Party",
  TX: "Taxpayers",
  TWR: "Taxpayers Without Representation",
  TEA: "Tea Party",
  THD: "Theo-Democratic",
  LAB: "U.S. Labor Party",
  USP: "U.S. People's Party",
  UST: "U.S. Taxpayers Party",
  UN: "Unaffiliated",
  UC: "United Citizen",
  UNI: "United Party",
  UNK: "Unknown",
  VET: "Veterans Party",
  WTP: "We the People",
  W: "Write-In"
};

export const states = {
  AL: "Alabama",
  AK: "Alaska",
  AS: "American Samoa",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  DC: "District Of Columbia",
  FM: "Federated States Of Micronesia",
  FL: "Florida",
  GA: "Georgia",
  GU: "Guam",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MH: "Marshall Islands",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  MP: "Northern Mariana Islands",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PW: "Palau",
  PA: "Pennsylvania",
  PR: "Puerto Rico",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VI: "Virgin Islands",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming"
};
