export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  category: string;
  features: string[];
  description: string;
}

export const products: Product[] = [
  // Mugs
  {
    id: 'ceramic-mug-1',
    name: 'Premium Ceramic Mug - Classic White',
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 127,
    image: 'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/551993/pexels-photo-551993.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'mugs',
    features: ['Dishwasher Safe', 'Microwave Safe', '11oz Capacity', 'High-Quality Print'],
    description: 'Our premium ceramic mug features vibrant, long-lasting prints that won\'t fade over time. Perfect for daily use with your favorite beverages.'
  },
  {
    id: 'travel-mug-1',
    name: 'Insulated Travel Mug - Stainless Steel',
    price: 499,
    originalPrice: 649,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.pexels.com/photos/4226880/pexels-photo-4226880.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/4226880/pexels-photo-4226880.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4664189/pexels-photo-4664189.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4226833/pexels-photo-4226833.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'mugs',
    features: ['Double-Wall Insulation', 'Leak-Proof Lid', '16oz Capacity', 'Custom Engraving'],
    description: 'Premium stainless steel travel mug with double-wall insulation keeps drinks hot for up to 6 hours or cold for 12 hours.'
  },
  {
    id: 'color-mug-1',
    name: 'Color Changing Magic Mug',
    price: 379,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1251176/pexels-photo-1251176.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'mugs',
    features: ['Color-Changing Technology', 'Heat Activated', '11oz Capacity', 'Unique Design'],
    description: 'Amazing color-changing mug that reveals your custom design when hot liquid is added. A perfect conversation starter!'
  },

  // Hats
  {
    id: 'baseball-cap-1',
    name: 'Custom Embroidered Baseball Cap',
    price: 399,
    originalPrice: 529,
    rating: 4.6,
    reviews: 203,
    image: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1038076/pexels-photo-1038076.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1078885/pexels-photo-1078885.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'hats',
    features: ['Embroidered Logo', 'Adjustable Strap', '100% Cotton', 'Multiple Colors'],
    description: 'Classic baseball cap with premium embroidered custom designs. Made from high-quality cotton for comfort and durability.'
  },
  {
    id: 'beanie-1',
    name: 'Custom Knit Beanie',
    price: 329,
    rating: 4.8,
    reviews: 92,
    image: 'https://images.pexels.com/photos/1124062/pexels-photo-1124062.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1124062/pexels-photo-1124062.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1040737/pexels-photo-1040737.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'hats',
    features: ['Warm & Cozy', 'Custom Patch', 'One Size Fits All', 'Machine Washable'],
    description: 'Soft knit beanie perfect for cold weather. Features custom patches or embroidery with your unique design.'
  },
  {
    id: 'snapback-1',
    name: 'Premium Snapback Hat',
    price: 449,
    originalPrice: 559,
    rating: 4.7,
    reviews: 167,
    image: 'https://images.pexels.com/photos/1078885/pexels-photo-1078885.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1078885/pexels-photo-1078885.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1038076/pexels-photo-1038076.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'hats',
    features: ['Flat Bill', 'Snapback Closure', 'Structured Crown', 'Custom Embroidery'],
    description: 'Modern snapback hat with flat bill and structured crown. Perfect for street style and custom branding.'
  },

  // Shirts
  {
    id: 'cotton-tshirt-1',
    name: 'Premium Cotton T-Shirt',
    price: 379,
    originalPrice: 469,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'shirts',
    features: ['100% Premium Cotton', 'Soft Feel', 'Vibrant Prints', 'Multiple Sizes'],
    description: 'High-quality cotton t-shirt with exceptional print quality. Comfortable, durable, and perfect for everyday wear.'
  },
  {
    id: 'hoodie-1',
    name: 'Custom Pullover Hoodie',
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviews: 198,
    image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'shirts',
    features: ['Fleece Lined', 'Kangaroo Pocket', 'Drawstring Hood', 'Custom Print'],
    description: 'Cozy pullover hoodie with soft fleece lining. Features kangaroo pocket and custom print options for maximum comfort and style.'
  },
  {
    id: 'polo-shirt-1',
    name: 'Custom Polo Shirt',
    price: 499,
    rating: 4.6,
    reviews: 143,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'shirts',
    features: ['Collared Design', 'Button Placket', 'Breathable Fabric', 'Professional Look'],
    description: 'Professional polo shirt perfect for business casual settings. Features custom embroidery options and comfortable fit.'
  },

  // Tarpaulins
  {
    id: 'vinyl-banner-1',
    name: 'Heavy Duty Vinyl Banner',
    price: 1499,
    originalPrice: 1999,
    rating: 4.7,
    reviews: 76,
    image: 'https://images.pexels.com/photos/1040658/pexels-photo-1040658.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1040658/pexels-photo-1040658.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1040737/pexels-photo-1040737.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'tarpaulins',
    features: ['Weather Resistant', 'Reinforced Edges', 'Custom Size', 'High Resolution Print'],
    description: 'Durable vinyl banner perfect for outdoor advertising. Weather-resistant with reinforced grommets for easy hanging.'
  },
  {
    id: 'mesh-banner-1',
    name: 'Wind-Resistant Mesh Banner',
    price: 1129,
    originalPrice: 1399,
    rating: 4.8,
    reviews: 54,
    image: 'https://images.pexels.com/photos/1040737/pexels-photo-1040737.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1040737/pexels-photo-1040737.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1040658/pexels-photo-1040658.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'tarpaulins',
    features: ['Wind Perforated', 'UV Resistant', 'Lightweight', 'Easy Installation'],
    description: 'Mesh banner designed for windy conditions. Perforated material reduces wind resistance while maintaining print quality.'
  },
  {
    id: 'event-backdrop-1',
    name: 'Event Backdrop Banner',
    price: 2099,
    originalPrice: 2699,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1040658/pexels-photo-1040658.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1040737/pexels-photo-1040737.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'tarpaulins',
    features: ['Premium Quality', 'Photo Backdrop', 'Easy Setup', 'Professional Finish'],
    description: 'High-quality event backdrop banner perfect for weddings, corporate events, and photo opportunities. Premium finish and easy setup.'
  }
];