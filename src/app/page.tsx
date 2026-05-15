"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "About",          id: "about"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Pizzaria"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Authentic Italian Pizza, Delivered Hot."
      description="Handcrafted, stone-baked, and made with the freshest local ingredients. Taste the tradition in every slice."
      buttons={[
        {
          text: "Order Now",          href: "#menu"},
        {
          text: "View Menu",          href: "#menu"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-slice-pizza-wooden-board_176474-120139.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/funny-brunette-girl-yellow-sweater-eating-pizza-restaurant_627829-7945.jpg",          alt: "Funny brunette girl in yellow sweater eating pizza at restaurant"},
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-eating-pizza-isolated-white-background-looking-camera_23-2148120174.jpg",          alt: "Young woman eating the pizza isolated on white background"},
        {
          src: "http://img.b2bpic.net/free-photo/front-view-woman-eating-delicious-pizza_23-2150317030.jpg",          alt: "Front view woman eating delicious pizza"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-person-smiling-while-eating_23-2151027812.jpg",          alt: "Portrait of person smiling while eating"},
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-holding-pizza-boxes-white-background_1149-1994.jpg",          alt: "young woman holding a pizza boxes on white background"},
      ]}
      avatarText="Join 1,000+ satisfied pizza lovers"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Our Passion for Pizza"
      description="We started our journey with a simple mission: bringing authentic, traditional pizza recipes to your neighborhood. Every dough is hand-kneaded daily and fired in our brick oven for that perfect, crispy crust."
      imageSrc="http://img.b2bpic.net/free-photo/chef-white-uniform-prepare-pizzaa_1157-27027.jpg"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Margherita",          price: "$12.00",          variant: "Traditional",          imageSrc: "http://img.b2bpic.net/free-photo/raw-dough-pizza-with-ingredients-kitchen-counter_23-2147975149.jpg"},
        {
          id: "2",          name: "Pepperoni",          price: "$14.00",          variant: "Classic",          imageSrc: "http://img.b2bpic.net/free-photo/pepperoni-pizza_181624-2447.jpg"},
        {
          id: "3",          name: "Veggie Delight",          price: "$13.00",          variant: "Vegetarian",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-mushroom-pizza-with-tomatoes-olives-mushrooms-with-flour-grey-desk-pizza-dough-italian-food_140725-22910.jpg"},
        {
          id: "4",          name: "Four Cheese",          price: "$15.00",          variant: "Cheese",          imageSrc: "http://img.b2bpic.net/free-photo/delicious-pizza-indoors_23-2150901147.jpg"},
        {
          id: "5",          name: "BBQ Chicken",          price: "$16.00",          variant: "Gourmet",          imageSrc: "http://img.b2bpic.net/free-photo/rolled-dough-near-sauces_23-2147772104.jpg"},
        {
          id: "6",          name: "Prosciutto",          price: "$17.00",          variant: "Premium",          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-tasty-traditional-pizza_23-2148921286.jpg"},
      ]}
      title="Our Menu"
      description="Discover our collection of handcrafted pizzas, ranging from traditional favorites to bold, new flavors."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",          tag: "Fresh",          title: "Farm Fresh Ingredients",          description: "We source only the freshest tomatoes, herbs, and meats for our toppings.",          imageSrc: "http://img.b2bpic.net/free-photo/line-green-leaves-copy-space-surface_23-2148236740.jpg"},
        {
          id: "f2",          tag: "Traditional",          title: "Traditional Wood-Fired",          description: "Authentic stone-oven baking ensures the perfect crust every time.",          imageSrc: "http://img.b2bpic.net/free-photo/baking-delicious-pizza-with-wood-fired-oven_23-2150134277.jpg"},
        {
          id: "f3",          tag: "Speedy",          title: "Lightning Fast Delivery",          description: "We ensure your pizza arrives hot and ready to enjoy at your doorstep.",          imageSrc: "http://img.b2bpic.net/free-photo/crazy-dealer-happy-expression_1194-2232.jpg"},
      ]}
      title="Why Choose Us"
      description="We take pride in every detail to provide you with the best pizza experience possible."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Sarah J.",          role: "Food Blogger",          testimonial: "The best pizza in town, hands down! The crust is perfection.",          imageSrc: "http://img.b2bpic.net/free-photo/young-pretty-woman-eating-pizza-pizza-bar_1303-20331.jpg"},
        {
          id: "t2",          name: "Mike D.",          role: "Regular Customer",          testimonial: "Consistently delicious and fresh. I order every Friday.",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-friends-partying-with-food_23-2149525599.jpg"},
        {
          id: "t3",          name: "Elena R.",          role: "Local Guide",          testimonial: "Authentic flavors and great service. A must-visit place.",          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-couple-talking-while-eating-lunch-restaurant_637285-9017.jpg"},
        {
          id: "t4",          name: "James P.",          role: "Happy Foodie",          testimonial: "Incredible toppings and great staff. My family loves it here.",          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-with-salad_1303-3887.jpg"},
        {
          id: "t5",          name: "Linda M.",          role: "Pizza Enthusiast",          testimonial: "Everything is always perfect, from dough to toppings.",          imageSrc: "http://img.b2bpic.net/free-photo/businesspeople-lunch-break-eating-pizza_23-2148908952.jpg"},
      ]}
      title="What Our Guests Say"
      description="Real feedback from our happy pizza lovers."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "City Bites",        "Local Food Guide",        "The Daily Crust",        "Neighborhood Eats",        "Urban Kitchen",        "Pizza Weekly",        "Culinary Monthly"]}
      title="Loved By Local Media"
      description="Featured in leading local food publications."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Do you offer gluten-free options?",          content: "Yes, we offer gluten-free crust options for all our pizzas."},
        {
          id: "q2",          title: "What are your delivery hours?",          content: "We deliver daily from 11 AM to 10 PM."},
        {
          id: "q3",          title: "Can I customize my toppings?",          content: "Absolutely! Feel free to customize your pizza with any of our available toppings."},
      ]}
      title="Frequently Asked Questions"
      description="Answers to commonly asked questions about our service."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Contact Us"
      title="Ready for a Slice?"
      description="Place your order today and satisfy those cravings."
      buttons={[
        {
          text: "Call Now",          href: "tel:5550123"},
        {
          text: "Order Online",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Pizzaria"
      columns={[
        {
          title: "Menu",          items: [
            {
              label: "All Pizzas",              href: "#menu"},
            {
              label: "Drinks",              href: "#menu"},
            {
              label: "Desserts",              href: "#menu"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Location",              href: "#"},
            {
              label: "Call Us",              href: "tel:5550123"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Order Status",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Pizzaria. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
