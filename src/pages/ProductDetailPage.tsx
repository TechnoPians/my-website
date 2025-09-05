import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft, Star, Check, Heart, Share2 } from 'lucide-react';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const product = products.find(p => p.id === productId);
  const relatedProducts = products.filter(p => 
    p.category === product?.category && p.id !== productId
  ).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Product not found</h1>
        <Link to="/services" className="text-[#327fe9] hover:underline">
          ← Back to Services
        </Link>
      </div>
    );
  }

  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to={`/service/${product.category}`}
            className="inline-flex items-center text-[#327fe9] hover:text-white transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to {product.category}
          </Link>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="aspect-square mb-4 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/20">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? 'border-[#327fe9] shadow-lg'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-300 ml-2">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <span className="text-4xl font-bold text-[#327fe9]">
                  ₱{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-400 line-through ml-4">
                    ₱{product.originalPrice}
                  </span>
                )}
              </div>
              {savings > 0 && (
                <span className="text-green-400 font-semibold">
                  You save ₱{savings}!
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check size={18} className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-[#327fe9] hover:bg-blue-600 text-white py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Get Started - ₱{product.price}
              </button>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center">
                  <Heart size={18} className="mr-2" />
                  Save to Favorites
                </button>
                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center">
                  <Share2 size={18} className="mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-[#327fe9]/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#327fe9] transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-[#327fe9]">
                        ₱{relatedProduct.price}
                      </span>
                      <div className="flex items-center">
                        <Star size={14} className="text-yellow-400 fill-current mr-1" />
                        <span className="text-gray-300 text-sm">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;