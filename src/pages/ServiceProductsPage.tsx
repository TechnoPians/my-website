import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { Star, ArrowLeft } from 'lucide-react';

const ServiceProductsPage = () => {
  const { serviceId } = useParams();
  
  const categoryProducts = products.filter(product => product.category === serviceId);
  
  const categoryNames: { [key: string]: string } = {
    'mugs': 'Customized Mugs',
    'hats': 'Custom Hats',
    'shirts': 'Custom Shirts',
    'tarpaulins': 'Custom Tarpaulins'
  };

  const categoryName = categoryNames[serviceId || ''] || 'Products';

  if (categoryProducts.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Category not found</h1>
        <Link to="/services" className="text-[#327fe9] hover:underline">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/services"
            className="inline-flex items-center text-[#327fe9] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {categoryName}
          </h1>
          <p className="text-xl text-gray-300">
            Discover our premium {categoryName.toLowerCase()} collection
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-[#327fe9]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    Save ₱{(product.originalPrice - product.price)}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#327fe9] transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#327fe9]">
                      ₱{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through ml-2">
                        ₱{product.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-[#327fe9] group-hover:text-white transition-colors font-semibold">
                    View Details →
                  </span>
                </div>

                {/* Features Preview */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {product.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="text-xs text-gray-400 px-2 py-1">
                        +{product.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProductsPage;