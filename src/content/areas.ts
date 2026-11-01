/**
 * City pages. Every fact here comes from Wikipedia, the City's own pages or the
 * current allfresh512.com site, and was checked before writing. Do not add
 * claims about the business (jobs done, customers, reviews) to these pages.
 * Event dates change: the page tells readers to check official listings.
 */
import { areaPhotoCredits, type PhotoCredit } from "@/content/area-photo-credits";

export type Area = {
  slug: string;
  name: string;
  /** Short facts shown as chips with a pin icon. */
  facts: string[];
  titleTag: string;
  description: string;
  intro: string;
  things: { title: string; text: string }[];
  /** One soft sentence connecting local life to our services. */
  local: string;
  photoAlt: string;
  /** Short caption under the photo, naming the place shown. */
  photoCaption: string;
  credit: PhotoCredit;
  /** FAQ entries specific to this city, shown before the standard ones. */
  extraFaqs?: { q: string; a: string }[];
};

type AreaInput = Omit<Area, "credit">;

const raw: AreaInput[] = [
  {
    slug: "austin",
    name: "Austin",
    facts: ["Travis County", "Texas state capital", "Where we are based"],
    titleTag: "Cleaning Services in Austin, TX",
    description:
      "Residential, commercial and move-in/move-out cleaning in Austin, Texas. See what to do around town, then text or call All Fresh Cleaning Services for an estimate.",
    intro:
      "Austin is where All Fresh Cleaning Services is based, and it is the heart of our service area. We clean homes and businesses across the city.",
    things: [
      {
        title: "Texas State Capitol",
        text: "Completed in 1888, the capitol anchors downtown Austin and is one of the city's best-known landmarks.",
      },
      {
        title: "Zilker Park and Barton Springs Pool",
        text: "A favorite for picnics, hiking and kayaking on Lady Bird Lake, and home to the spring-fed Barton Springs Pool.",
      },
      {
        title: "Lady Bird Lake",
        text: "Formerly Town Lake, it is lined by the Ann and Roy Butler Hike-and-Bike Trail, a popular route for walkers and runners.",
      },
      {
        title: "Live music on Sixth and Rainey Street",
        text: "Austin's official slogan is \"The Live Music Capital of the World,\" and venues on Sixth Street and Rainey Street fill up most nights.",
      },
      {
        title: "SXSW and Austin City Limits",
        text: "South by Southwest and the Austin City Limits Music Festival bring visitors from around the world each year.",
      },
      {
        title: "Blanton Museum of Art and the Bullock Texas State History Museum",
        text: "Two of the city's major museums, covering art from the Renaissance to today and the story of Texas.",
      },
    ],
    local:
      "Whether you live near the lake or work downtown, we can clean your home or office on the schedule that suits you.",
    photoAlt: "Lady Bird Lake in Austin, Texas, with the downtown skyline across the water",
    photoCaption: "Lady Bird Lake and the Austin skyline",
  },
  {
    slug: "lakeway",
    name: "Lakeway",
    facts: ["Travis County", "About 16 miles west of Austin", "On Lake Travis"],
    titleTag: "Cleaning Services in Lakeway, TX",
    description:
      "House and office cleaning in Lakeway, Texas, on Lake Travis. Explore the area, then text or call All Fresh Cleaning Services for an estimate.",
    intro:
      "Lakeway sits on the shore of Lake Travis, west of Austin. We clean homes and businesses in Lakeway and the surrounding lake communities.",
    things: [
      {
        title: "Lake Travis",
        text: "The lake borders Lakeway and is the town's defining feature, popular for boating, fishing and time on the water.",
      },
      {
        title: "Lakeway City Park",
        text: "A park on the Hurst Creek arm of Lake Travis with trails, picnic areas and spots to fish, swim and kayak.",
      },
      {
        title: "Hurst Creek",
        text: "The creek runs through Lakeway and empties into Lake Travis, with green space and walking paths along the way.",
      },
      {
        title: "Lake Travis Community Library",
        text: "A public library in the Tuscan Village area, a quiet spot for books and community programs.",
      },
    ],
    local:
      "After a weekend on the lake, a fresh clean at home makes the week easier. Ask us about one-time or recurring visits.",
    photoAlt: "Lake Travis near Lakeway, Texas, with hills along the far shore",
    photoCaption: "Lake Travis",
  },
  {
    slug: "bee-cave",
    name: "Bee Cave",
    facts: ["Travis County", "About 12 miles west of Austin", "Dark-Sky community"],
    titleTag: "Cleaning Services in Bee Cave, TX",
    description:
      "Home and business cleaning in Bee Cave, Texas, in the Hill Country west of Austin. Text or call All Fresh Cleaning Services for an estimate.",
    intro:
      "Bee Cave is a Hill Country community west of Austin. We clean homes and businesses in Bee Cave and nearby.",
    things: [
      {
        title: "Hill Country Galleria",
        text: "The town's main center for shopping and dining, with a grocery store and a movie theater.",
      },
      {
        title: "Bee Cave Central Park",
        text: "A green space in town suited to picnics and time outdoors.",
      },
      {
        title: "The \"West Pole of the Earth\"",
        text: "In 2007 the Texas Legislature declared this quirky geographical pole to be in Bee Cave.",
      },
      {
        title: "International Dark-Sky Community",
        text: "Since April 2023, Bee Cave has held this designation, recognizing its efforts to protect the night sky.",
      },
      {
        title: "Hamilton Pool Preserve (nearby)",
        text: "A natural grotto with a waterfall, a short drive from Bee Cave. Reservations are required, so check the official site before you go.",
      },
    ],
    local:
      "If you are getting a Hill Country home ready for guests or for a move, we can help with one-time and move-in / move-out cleaning.",
    photoAlt: "Hamilton Pool Preserve near Bee Cave, Texas, a grotto with a waterfall into a pool",
    photoCaption: "Hamilton Pool Preserve, near Bee Cave",
  },
  {
    slug: "westlake",
    name: "Westlake",
    facts: ["Travis County", "ZIP code 78746", "Officially West Lake Hills"],
    titleTag: "Cleaning Services in Westlake, TX (West Lake Hills)",
    description:
      "Residential, commercial and move-in/move-out cleaning in Westlake (West Lake Hills), Texas, west of Austin. Text or call (512) 740-5481 for an estimate.",
    intro:
      "Westlake is the everyday name for West Lake Hills, a city in Travis County just west of central Austin. All Fresh Cleaning Services cleans homes and businesses in Westlake.",
    things: [
      {
        title: "Pennybacker Bridge overlook",
        text: "The Percy V. Pennybacker Jr. Bridge, known as the 360 Bridge, opened in 1982 and crosses Lake Austin. An overlook beside it is one of Austin's most popular photo spots.",
      },
      {
        title: "Mount Bonnell (nearby)",
        text: "A limestone overlook in west Austin reached by about 100 steps, with views of Lake Austin and the Hill Country. It is free and open daily from 5 a.m. to 10 p.m.",
      },
      {
        title: "Lake Austin and the Colorado River",
        text: "Pennybacker Bridge carries Loop 360 across Lake Austin, a stretch of the Colorado River framed by Hill Country views.",
      },
    ],
    local:
      "Westlake neighbors Austin, Bee Cave and Lakeway, all of which we serve, so a home or office just outside the city line is likely covered too.",
    photoAlt: "Pennybacker Bridge, the 360 Bridge, a red steel arch bridge over Lake Austin near Westlake, Texas",
    photoCaption: "Pennybacker Bridge (360 Bridge) in west Austin",
    extraFaqs: [
      {
        q: "Is Westlake the same as West Lake Hills?",
        a: "Yes. The city's official name is West Lake Hills, in Travis County, and people commonly call it Westlake. This page is about that Westlake near Austin, not the Westlake in the Dallas–Fort Worth area.",
      },
    ],
  },
  {
    slug: "pflugerville",
    name: "Pflugerville",
    facts: ["Travis County", "About 14 miles northeast of downtown Austin", "40+ miles of trails"],
    titleTag: "Cleaning Services in Pflugerville, TX",
    description:
      "House and office cleaning in Pflugerville, Texas. Learn about the lake, parks and festivals, then text or call All Fresh Cleaning Services for an estimate.",
    intro:
      "Pflugerville is a growing city northeast of Austin, known for its lake, parks and trails. We clean homes and businesses in Pflugerville.",
    things: [
      {
        title: "Lake Pflugerville",
        text: "A 180-acre reservoir open for fishing, swimming, jogging, canoeing and kayaking, with a lakeside park and a three-mile trail.",
      },
      {
        title: "Pfluger Park and Deutschen Pfest",
        text: "A park along Gilleland Creek that hosts the city's German festival, Deutschen Pfest, on the third weekend in October.",
      },
      {
        title: "Northeast Metropolitan Park",
        text: "A 349-acre recreation area with soccer, baseball and cricket fields, courts and a skate park.",
      },
      {
        title: "Typhoon Texas",
        text: "A water and adventure park that opened in 2014 as Hawaiian Falls and now operates as Typhoon Texas.",
      },
      {
        title: "Trails across the city",
        text: "Pflugerville has more than 40 miles of trails and is working toward the designation of Trail Capital of Texas.",
      },
      {
        title: "East Main Street Historic District",
        text: "The historic heart of Pflugerville, with buildings that tell the story of the town.",
      },
    ],
    local:
      "With so much time spent outdoors, a regular cleaning can keep the house ready for the next trail day or festival weekend.",
    photoAlt: "The shoreline of Lake Pflugerville in Texas, with reeds along the water",
    photoCaption: "Lake Pflugerville",
  },
  {
    slug: "georgetown",
    name: "Georgetown",
    facts: ["Williamson County seat", "About 26 miles north of downtown Austin", "Historic Square"],
    titleTag: "Cleaning Services in Georgetown, TX",
    description:
      "Residential and commercial cleaning in Georgetown, Texas. Explore the Square, Blue Hole Park and more, then text or call All Fresh Cleaning Services.",
    intro:
      "Georgetown is the Williamson County seat, north of Austin, and is known for its historic downtown Square. We clean homes and businesses in Georgetown.",
    things: [
      {
        title: "The Square and the Williamson County Courthouse",
        text: "The 1911 Beaux-Arts courthouse is the centerpiece of Georgetown's historic downtown district.",
      },
      {
        title: "Red Poppy Festival",
        text: "Held each April on the historic Square, this festival draws tens of thousands of visitors.",
      },
      {
        title: "Blue Hole Park",
        text: "A popular swimming area on the South Fork of the San Gabriel River.",
      },
      {
        title: "Inner Space Cavern",
        text: "A large cave and one of the city's major attractions, just west of Interstate 35.",
      },
      {
        title: "Lake Georgetown and the San Gabriel River trails",
        text: "A reservoir plus more than 30 miles of hike-and-bike trails and parks along the San Gabriel River.",
      },
      {
        title: "Southwestern University",
        text: "Founded in 1840, it is described as the oldest university in Texas.",
      },
    ],
    local:
      "Hosting family during Red Poppy weekend? A one-time cleaning before guests arrive can take the pressure off.",
    photoAlt: "The Williamson County Courthouse in Georgetown, Texas, a stone building with columns",
    photoCaption: "Williamson County Courthouse",
  },
  {
    slug: "round-rock",
    name: "Round Rock",
    facts: ["Williamson and Travis counties", "About 15 miles north of Austin", "\"Sports Capital of Texas\""],
    titleTag: "Cleaning Services in Round Rock, TX",
    description:
      "Home and office cleaning in Round Rock, Texas. See Dell Diamond, Old Settlers Park and more, then text or call All Fresh Cleaning Services for an estimate.",
    intro:
      "Round Rock is a city just north of Austin that calls itself the \"Sports Capital of Texas.\" We clean homes and businesses in Round Rock.",
    things: [
      {
        title: "Dell Diamond",
        text: "The ballpark and home of the Round Rock Express, the Triple-A baseball team in the Pacific Coast League.",
      },
      {
        title: "Old Settlers Park",
        text: "A large park with a disc golf course, sports fields and the Rockin' River Family Aquatic Center.",
      },
      {
        title: "Frontier Days Celebration",
        text: "An annual July 4 event at Old Settlers Park that recreates the Sam Bass shootout of 1878.",
      },
      {
        title: "Chisholm Trail Crossing Park",
        text: "A park that tells the story of Round Rock's role in the Chisholm cattle drives, with bronze steer sculptures.",
      },
      {
        title: "Old Town",
        text: "A historic area with preserved 19th-century buildings, including the old Saint Charles Hotel.",
      },
      {
        title: "Round Rock Donuts",
        text: "A bakery founded in 1926 and a local favorite.",
      },
    ],
    local:
      "Busy with games and practices? A regular cleaning can keep the house in order while your calendar fills up.",
    photoAlt: "The Dell Diamond entrance in Round Rock, Texas, with flags flying out front",
    photoCaption: "Dell Diamond, home of the Round Rock Express",
  },
  {
    slug: "cedar-park",
    name: "Cedar Park",
    facts: ["Williamson County", "About 16 miles northwest of downtown Austin", "H-E-B Center"],
    titleTag: "Cleaning Services in Cedar Park, TX",
    description:
      "Residential and commercial cleaning in Cedar Park, Texas. Learn about the H-E-B Center and local parks, then text or call All Fresh Cleaning Services.",
    intro:
      "Cedar Park is a suburb northwest of Austin. We clean homes and businesses in Cedar Park.",
    things: [
      {
        title: "H-E-B Center at Cedar Park",
        text: "A multipurpose arena completed in 2009 that hosts concerts, family shows and pro sports, including the Texas Stars hockey team and the Austin Spurs basketball team.",
      },
      {
        title: "Cedar Park skate park",
        text: "A 15,000-square-foot public skate park that opened in July 2010, with a large bowl, a mini bowl and a street course.",
      },
      {
        title: "Veterans Memorial Park",
        text: "A city park with an aquatic center for summer swimming.",
      },
      {
        title: "Cedar Park Sculpture Garden",
        text: "A garden featuring sculptures by Texas-based artists.",
      },
    ],
    local:
      "Whether you run a business near the arena or keep a busy household, we can build a cleaning plan around your schedule.",
    photoAlt: "The H-E-B Center at Cedar Park, a glass-fronted arena with flags",
    photoCaption: "H-E-B Center at Cedar Park",
  },
  {
    slug: "leander",
    name: "Leander",
    facts: ["Williamson and Travis counties", "About 22 miles northwest of downtown Austin", "MetroRail Red Line stop"],
    titleTag: "Cleaning Services in Leander, TX",
    description:
      "Home and office cleaning in Leander, Texas. Discover Old Town, Devine Lake Park and local festivals, then text or call All Fresh Cleaning Services.",
    intro:
      "Leander is a suburb just north of Austin with a historic Old Town. We clean homes and businesses in Leander.",
    things: [
      {
        title: "Leander Presbyterian Church",
        text: "A church built in 1884 and a landmark of the town's early history.",
      },
      {
        title: "Devine Lake Park",
        text: "A regional park around a lake, used for fishing, non-motorized boating and wildlife watching.",
      },
      {
        title: "Old Town Leander",
        text: "The historic center, home to street festivals in the warmer months and a holiday festival in December.",
      },
      {
        title: "Liberty Fest",
        text: "Leander's largest annual event, with live music, food, children's activities and fireworks.",
      },
      {
        title: "Leander Station",
        text: "The northern end of the Capital MetroRail Red Line, linking Leander to Austin by train.",
      },
    ],
    local:
      "If you commute on the train or spend weekends in Old Town, a regular cleaning keeps home comfortable when you walk in.",
    photoAlt: "Leander Presbyterian Church, a white wooden church with a steeple in Leander, Texas",
    photoCaption: "Leander Presbyterian Church",
  },
  {
    slug: "kyle",
    name: "Kyle",
    facts: ["Hays County", "About 22 miles southwest of downtown Austin", "Historic depot"],
    titleTag: "Cleaning Services in Kyle, TX",
    description:
      "Residential and commercial cleaning in Kyle, Texas. See the Auction Oak, the historic depot and the Vybe trails, then text or call All Fresh Cleaning Services.",
    intro:
      "Kyle is a city in Hays County, southwest of Austin, with a rich railroad and literary history. We clean homes and businesses in Kyle.",
    things: [
      {
        title: "Historic Kyle Railroad Depot",
        text: "A historic railroad depot, a reminder of the railroad's place in the town's past.",
      },
      {
        title: "The Auction Oak",
        text: "A historic oak where the town's first lots were auctioned in 1880.",
      },
      {
        title: "Katherine Anne Porter House",
        text: "The former home of the Pulitzer Prize-winning author, now a writer's residence open to the public by appointment.",
      },
      {
        title: "The Vybe trail system",
        text: "A citywide trail system that combines dirt, crushed granite and paved trails with existing roadways.",
      },
    ],
    local:
      "Moving to or from Kyle? Our move-in / move-out cleaning covers the inside of closets and cabinets, the oven and the refrigerator.",
    photoAlt: "The historic Kyle Railroad Depot in Kyle, Texas, a yellow wooden station building",
    photoCaption: "Historic Kyle Railroad Depot",
  },
  {
    slug: "buda",
    name: "Buda",
    facts: ["Hays County", "About 15 miles southwest of downtown Austin", "Wiener Dog Races"],
    titleTag: "Cleaning Services in Buda, TX",
    description:
      "House and office cleaning in Buda, Texas. See Main Street and the famous Wiener Dog Races, then text or call All Fresh Cleaning Services for an estimate.",
    intro:
      "Buda is a Hays County city south of Austin with a walkable Main Street. We clean homes and businesses in Buda.",
    things: [
      {
        title: "Downtown Gazebo and Main Street",
        text: "A walkable downtown with restored 19th-century buildings that house local shops and restaurants.",
      },
      {
        title: "Buda Wiener Dog Races",
        text: "A popular annual event organized each April by the Buda Lions Club at Buda Amphitheater & City Park, with a pet parade and races.",
      },
      {
        title: "Buda Amphitheater and City Park",
        text: "The park that hosts community events, including the Wiener Dog Races.",
      },
    ],
    local:
      "Big weekend events bring guests and traffic. A one-time cleaning before or after can save you the cleanup.",
    photoAlt: "The Downtown Gazebo in Buda, Texas, with a freight train passing behind the lawn",
    photoCaption: "Downtown Gazebo in Buda",
  },
];

export const areas: Area[] = raw.map((a) => ({
  ...a,
  credit: areaPhotoCredits[a.slug],
}));

/** "Round Rock" -> "round-rock". */
export const areaSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
export const areaHref = (slug: string) => `/service-areas/${slug}`;
export const areaImage = (slug: string) => `/images/cities/${slug}.webp`;
export const areaCardImage = (slug: string) => `/images/cities/${slug}-card.webp`;
