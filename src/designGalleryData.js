// src/designGalleryData.js

// This data is for the Design category filter within the Projects section.
// Each entry represents a design category card, and contains its own gallery images.
export const designCategoryFilters = [
  {
    category: 'Logos',
    id: 'logos-gallery',
    cardThumbnail: '/images/design_gallery/thumbnails/culinary-white.png', // A representative image for the "Logos" card
    cardDescription: 'A collection of unique brand marks and identity elements.',
    items: [
      { src: '/images/design_gallery/logos/culinary-white.png' },
      { src: '/images/design_gallery/logos/excel1.png' },
      { src: '/images/design_gallery/logos/FH.png' },
      { src: '/images/design_gallery/logos/gastronomic-white.png' },
      { src: '/images/design_gallery/logos/spice.png' },
    
      // Add paths to all your logo images here
    ]
  },
  {
    category: 'Posters',
    id: 'posters-gallery',
    cardThumbnail: '/images/design_gallery/thumbnails/Summer-Sale.png', // A representative image for the "Posters" card
    cardDescription: 'Striking visuals for events, campaigns, and announcements.',
    items: [
      { src: '/images/design_gallery/posters/skincare.png' },
      { src: '/images/design_gallery/posters/Mango-Holic.png' },
      { src: '/images/design_gallery/posters/horror.png' },
      { src: '/images/design_gallery/posters/cover.png' },
      { src: '/images/design_gallery/posters/bike.png' },
      // Add paths to all your poster images here
    ]
  },
  {
    category: 'Mockups',
    id: 'mockups-gallery',
    cardThumbnail: '/images/design_gallery/thumbnails/Square_Sign_Mockup copy.png', // A representative image for the "Mockups" card
    cardDescription: 'Showcasing designs in real-world contexts and digital interfaces.',
    items: [
      { src: '/images/design_gallery/mockups/Frames.png' },
      { src: '/images/design_gallery/mockups/Free_Square_Business_Card_Mockup_4 copy.png' },
      { src: '/images/design_gallery/mockups/mockup-clock.png' },
      { src: '/images/design_gallery/mockups/Shaded_Billboard_Mockup copy.png' },
      { src: '/images/design_gallery/mockups/Square_Sign_Mockup copy.png' },
      // Add paths to all your mockup images here
    ]
  }
];