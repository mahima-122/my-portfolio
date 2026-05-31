// src/designGalleryData.js

// This data is for the Design category filter within the Projects section.
// Each entry represents a design category card, and contains its own gallery images.
export const designCategoryFilters = [
  {
    category: 'Logos',
    id: 'logos-gallery',
    cardThumbnail: '/public/images/design_gallery/thumbnails/culinary white.png', // A representative image for the "Logos" card
    cardDescription: 'A collection of unique brand marks and identity elements.',
    items: [
      { src: '/public/images/design_gallery/logos/culinary white.png' },
      { src: '/public/images/design_gallery/logos/excel1.png' },
      { src: '/public/images/design_gallery/logos/FH.png' },
      { src: '/public/images/design_gallery/logos/gastronomic white.png' },
      { src: '/public/images/design_gallery/logos/spice.png' },
      { src: '/images/design_gallery/logos/logo_modern.png' },
      // Add paths to all your logo images here
    ]
  },
  {
    category: 'Posters',
    id: 'posters-gallery',
    cardThumbnail: '/public/images/design_gallery/thumbnails/Summer Sale.png', // A representative image for the "Posters" card
    cardDescription: 'Striking visuals for events, campaigns, and announcements.',
    items: [
      { src: '/public/images/design_gallery/posters/skincare.png' },
      { src: '/public/images/design_gallery/posters/Mango Holic.png' },
      { src: '/public/images/design_gallery/posters/horror design.png' },
      { src: '/public/images/design_gallery/posters/cover design copy.png' },
      { src: '/public/images/design_gallery/posters/Bike Social media post.png' },
      // Add paths to all your poster images here
    ]
  },
  {
    category: 'Mockups',
    id: 'mockups-gallery',
    cardThumbnail: '/public/images/design_gallery/thumbnails/Square_Sign_Mockup copy.png', // A representative image for the "Mockups" card
    cardDescription: 'Showcasing designs in real-world contexts and digital interfaces.',
    items: [
      { src: '/public/images/design_gallery/mockups/Frame Mockups Play of Sunlight copy.png' },
      { src: '/public/images/design_gallery/mockups/Free_Square_Business_Card_Mockup_4 copy.png' },
      { src: '/public/images/design_gallery/mockups/mockup clock.png' },
      { src: '/public/images/design_gallery/mockups/Shaded_Billboard_Mockup copy.png' },
      { src: '/public/images/design_gallery/mockups/Square_Sign_Mockup copy.png' },
      // Add paths to all your mockup images here
    ]
  }
];