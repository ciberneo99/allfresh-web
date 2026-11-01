/**
 * Customer reviews shown on the home page.
 *
 * HOW TO ADD ONE: open your Google Business reviews, copy the review text
 * EXACTLY as written (do not edit, shorten or improve it), and add an entry
 * below. Only add real reviews. While this list is empty the site shows just
 * the "Google Reviews" button and no review cards.
 *
 * Fields
 * - name:    how the reviewer appears on Google (first name + last initial is fine)
 * - text:    the review, copied verbatim
 * - rating:  1-5 stars exactly as given on Google (omit if unsure)
 * - date:    optional, e.g. "March 2026" (as shown on Google)
 * - service: optional, e.g. "Move In / Move Out Cleaning" (only if the review says so)
 *
 * Example (delete this comment block's example before use, never publish it):
 *   { name: "Jane D.", rating: 5, date: "March 2026", text: "..." },
 */
export type Review = {
  name: string;
  text: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  date?: string;
  service?: string;
};

export const reviews: Review[] = [
  {
    name: "Katharine Weaver",
    rating: 5,
    text: "I truly cannot recommend Angelica and Polo highly enough. They are truly beyond incredible, they go above and beyond every single time. Their rates are so reasonable and they are so so so trustworthy. I have left them alone in my apartment several times without any issue and when I say, I am always blown away by the job they do, I truly am. You will not find a better team in all of Austin!!",
  },
  {
    name: "Kathleen Wong",
    rating: 5,
    service: "Move In / Move Out Cleaning",
    text: "Polo and Angelica did an amazing job for my move in cleaning. This is the first time working with them, they are on time, easy to communicate, and most importantly make my new place really clean. My floors are shining now! They offered really good price, so I personally do not recommend negotiate with them. I own some airbnb properties, and definitely will use their service again! Thank you so much!",
  },
  {
    name: "Carolina Elias",
    rating: 5,
    text: "Angelica and Polo were fantastic!! They are very thorough and detail oriented. The best service!",
  },
];
