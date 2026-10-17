/**
 * ============================================================
 *  FITFORM FITNESS — ALL WEBSITE TEXT AND DETAILS LIVE HERE
 * ============================================================
 *  Edit this one file to change the words, contact details,
 *  programmes and colours on the website.
 *
 *  Anything marked "TODO" is still missing from the brief.
 *  Leave a value as "" (empty) and the website hides it
 *  automatically, so nothing broken or made-up ever shows.
 * ============================================================
 */

import type { ImageKey } from "@/lib/images";

export const site = {
  // TODO: confirm the final business name (the brief says "suggested name").
  name: "FitForm Fitness",
  shortName: "FitForm",

  // TODO: add your domain once you have it, without https:// (for example "fitformfitness.co.za").
  // While this is empty, the site uses the Vercel address automatically.
  domain: "" as string,

  description:
    "Personal training, online coaching and strength programmes in South Africa. Plans built around your goals, ability and schedule.",

  // Brand colours. Change these and the whole site updates (see app/globals.css).
  colours: {
    primary: "#F97316", // energetic orange: buttons and key highlights
    secondary: "#171717", // charcoal black: headings and text
    accent: "#F3F4F6", // soft grey: calm background panels
  },

  // ---------- CONTACT ----------
  contact: {
    // TODO: phone number in international format without spaces, e.g. "+27821234567".
    phone: "" as string,
    // TODO: WhatsApp number in international format WITHOUT + or leading 0, e.g. "27821234567".
    whatsapp: "" as string,
    // TODO: email address for enquiries.
    email: "" as string,
    // TODO: gym, studio or training location. Leave empty to show "Online across South Africa".
    address: "" as string,
    // TODO: Google Maps link to your training location.
    mapsUrl: "" as string,
    // TODO: confirmed session times and coaching availability, e.g. { days: "Mon – Fri", time: "05:30 – 19:00" }.
    hours: [] as { days: string; time: string }[],
    areaServed: "Online coaching across South Africa. In-person training locations to be confirmed.",
  },

  // TODO: add your social links (full https:// addresses). Empty ones are hidden.
  social: {
    facebook: "" as string,
    instagram: "" as string,
    linkedin: "" as string,
  },

  // ---------- HOME PAGE HERO ----------
  hero: {
    headline: "Build Strength. Find Your Confidence.",
    subline:
      "Personalised training, supportive coaching and a plan that fits your life. Take the first step towards a stronger, fitter you.",
    primaryButton: "Explore training options",
    secondaryButton: "Speak to a coach",
    image: "hero" as ImageKey,
    imageAlt: "A coach guides a client through a push-up with good form in a training studio",
  },

  // Short facts under the hero. No numbers until they are verified.
  // TODO: add verified experience, qualifications and client results here before publishing.
  trust: [
    "One-to-one, small group and online coaching",
    "Plans built around your goals and schedule",
    "Beginners always welcome",
  ],

  // The statement under the hero. Words in [image:key] become small inline photos.
  statement: [
    { text: "Whether you’re starting from scratch" },
    { image: "service-5" as ImageKey, alt: "People stretching outdoors before a session" },
    { text: "or picking the weights back up," },
    { image: "service-3" as ImageKey, alt: "Two people lifting kettlebells overhead" },
    { text: "you get a plan built around your goals, your ability and your week." },
    { image: "service-2" as ImageKey, alt: "Someone following a workout on a laptop at home" },
  ],

  // ---------- WHY CHOOSE US (from the brief) ----------
  reasons: [
    {
      title: "Built Around You",
      text: "Your training plan is designed around your individual goals, your current ability and the time you actually have.",
    },
    {
      title: "Coaching That Keeps You Going",
      text: "Friendly coaching and accountability help you show up, stay consistent and turn exercise into a habit.",
    },
    {
      title: "Progress That Lasts",
      text: "A practical approach focused on sustainable progress, not quick fixes you can’t keep up.",
    },
  ],

  // ---------- HOW IT WORKS (from the brief) ----------
  steps: [
    {
      name: "Tell",
      title: "Tell Us About You",
      text: "Share your goals, your experience and when you’re available to train.",
    },
    {
      name: "Choose",
      title: "Choose Your Programme",
      text: "Pick the training programme that suits you, together with your coach.",
    },
    {
      name: "Train",
      title: "Train And Improve",
      text: "Start training, track your progress and adjust your plan as you get stronger.",
    },
  ],

  // ---------- MEET YOUR COACH ----------
  coach: {
    // TODO: coach's name, a short bio, qualifications and a real photo before publishing.
    name: "" as string,
    bio: "" as string,
    qualifications: [] as string[],
    approach: [
      "Every client starts in a different place. Your coach takes the time to understand your goals, your experience and your schedule before building your plan.",
      "From there it’s practical, friendly coaching: clear guidance on how to train, support to stay consistent, and regular adjustments as you improve.",
    ],
  },

  // ---------- PROGRAMMES ----------
  // TODO: confirm these proposed programmes and add prices (written like "R1 500") before publishing.
  programmes: [
    {
      id: "personal-training",
      title: "Personal Training",
      short: "One-to-one sessions tailored to your fitness level and goals.",
      intro:
        "Train one-to-one with a coach who plans every session around you. Your fitness level, your goals and your pace set the direction.",
      forWho: "Anyone who wants full attention, clear guidance on technique and a plan made only for them.",
      includes: [
        "Sessions tailored to your fitness level and goals",
        "Guidance on technique while you train",
        "Your plan adjusted as you progress",
      ],
      price: "" as string, // TODO e.g. "From R450 per session"
      image: "service-1" as ImageKey,
      imageAlt: "A coach kneels beside a client to guide a dumbbell row",
    },
    {
      id: "online-coaching",
      title: "Online Coaching",
      short: "Flexible workout plans with regular coach check-ins.",
      intro:
        "Train wherever you are in South Africa. You get a flexible workout plan and regular check-ins with your coach to keep you on track.",
      forWho: "Busy professionals and anyone who wants coaching that fits around work, travel and family.",
      includes: [
        "A flexible workout plan you can follow anywhere",
        "Regular check-ins with your coach",
        "Updates to your plan as you improve",
      ],
      price: "" as string,
      image: "service-2" as ImageKey,
      imageAlt: "A woman stretches on a mat while following a workout on her laptop at home",
    },
    {
      id: "strength-conditioning",
      title: "Strength & Conditioning",
      short: "Structured training to build strength, stamina and confidence.",
      intro:
        "A structured programme to help you get stronger, build stamina and move with more confidence in everyday life.",
      forWho: "People who want to lift with confidence, build real strength and improve their overall fitness.",
      includes: [
        "A structured plan focused on strength and stamina",
        "Progress that builds week by week",
        "Coaching to help you train safely and confidently",
      ],
      price: "" as string,
      image: "service-3" as ImageKey,
      imageAlt: "A man and a woman press kettlebells overhead in a bright gym",
    },
    {
      id: "small-group-training",
      title: "Small Group Training",
      short: "Supportive sessions that make exercising with others motivating and enjoyable.",
      intro:
        "Train alongside others in supportive small-group sessions. The energy of the group helps keep you motivated and makes training more enjoyable.",
      forWho: "Anyone who enjoys training with others and wants coaching with a social, motivating feel.",
      includes: [
        "Coach-led sessions in a small group",
        "A supportive, motivating atmosphere",
        "Workouts you can scale to your own level",
      ],
      price: "" as string,
      image: "service-4" as ImageKey,
      imageAlt: "A small group squats with light dumbbells in a studio class",
    },
    {
      id: "beginner-programme",
      title: "Beginner Fitness Programme",
      short: "Guided workouts to help you get started and build a routine.",
      intro:
        "New to exercise, or starting again after a break? Guided workouts help you build confidence, learn the basics and create a routine that sticks.",
      forWho: "Beginners and anyone returning to exercise who wants a friendly, guided start.",
      includes: [
        "Guided workouts that start where you are",
        "The basics of training, explained simply",
        "Support to build a routine you can keep",
      ],
      price: "" as string,
      image: "service-5" as ImageKey,
      imageAlt: "Three people stretch together outdoors before a workout",
    },
  ],

  // ---------- FAQS ----------
  faqs: [
    {
      q: "Do I need to be fit before I start?",
      a: "Not at all. Every plan starts from your current fitness level, and the Beginner Fitness Programme is made for people who are new to exercise or returning after a break.",
    },
    {
      q: "How does online coaching work?",
      a: "You get a flexible workout plan you can follow at home, at a gym or while travelling, plus regular check-ins with your coach to review your progress and adjust your plan.",
    },
    {
      q: "Where does in-person training take place?",
      a: "In-person training locations are being confirmed. Online coaching is available anywhere in South Africa, so you can start right away.",
    },
    {
      q: "How much does training cost?",
      a: "Package prices are being finalised. Send an enquiry or speak to a coach and we’ll share the current options for the programme that suits you.",
    },
    {
      q: "Which programme is right for me?",
      a: "Use the programme finder on this page for a quick suggestion, or tell us about your goals and we’ll help you choose with your coach.",
    },
    {
      q: "Can I train with a friend or in a group?",
      a: "Yes. Small Group Training gives you coach-led sessions with others, which many people find more motivating and enjoyable.",
    },
    {
      q: "I have an injury or health condition. Can I still train?",
      a: "Please mention it when you enquire so your coach can take it into account. If you have a medical condition, check with your doctor before starting a new exercise programme.",
    },
  ],

  // ---------- PROOF (hidden until real content exists) ----------
  // TODO: add genuine testimonials WITH permission to publish. The reviews section stays hidden while this is empty.
  reviews: [] as { quote: string; name: string; programme?: string }[],
  // TODO: authentic client results and photos, only with each client's consent. Hidden while empty.
  transformations: [] as { title: string; text: string; image: ImageKey }[],
  // TODO: partner or client logos, only with permission. Hidden while empty.
  clientLogos: [] as { name: string; src: string }[],

  // ---------- ENQUIRY FORM ----------
  form: {
    goals: [
      "Get started with exercise",
      "Build strength",
      "Improve fitness and stamina",
      "Feel more confident",
      "Build a consistent routine",
      "Something else",
    ],
    contactTimes: ["Morning", "Midday", "Afternoon", "Evening", "Any time"],
  },
} as const;

export type Programme = (typeof site.programmes)[number];
export type ProgrammeId = Programme["id"];
