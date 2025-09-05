import React, { useState, useEffect } from 'react';
import { Star, User } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  address: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewsPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    address: '',
    rating: 5,
    comment: ''
  });

  // Default reviews
  const defaultReviews: Review[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      address: '123 Main Street, New York, NY 10001',
      rating: 5,
      comment: 'Outstanding service and exceptional results. They transformed our custom mug designs completely. Highly recommended for anyone looking for quality custom printing!',
      date: '2024-01-15'
    },
    {
      id: '2',
      name: 'Michael Chen',
      address: '456 Oak Avenue, Los Angeles, CA 90210',
      rating: 5,
      comment: 'Professional, reliable, and creative. Exceeded all our expectations with their innovative approach to custom hat printing.',
      date: '2024-01-10'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      address: '789 Pine Road, Chicago, IL 60601',
      rating: 5,
      comment: 'The team was incredibly responsive and delivered exactly what we needed on time and budget. Amazing custom shirt quality!',
      date: '2024-01-08'
    },
    {
      id: '4',
      name: 'David Thompson',
      address: '321 Cedar Lane, Houston, TX 77001',
      rating: 5,
      comment: 'Their expertise in custom printing is impressive. Highly recommend their services for any business looking for quality products.',
      date: '2024-01-05'
    },
    {
      id: '5',
      name: 'Lisa Park',
      address: '654 Maple Drive, Miami, FL 33101',
      rating: 5,
      comment: 'From concept to completion, they guided us through every step with professionalism. Our custom tarpaulins turned out perfect!',
      date: '2024-01-03'
    },
    {
      id: '6',
      name: 'James Wilson',
      address: '987 Elm Street, Seattle, WA 98101',
      rating: 5,
      comment: 'Our custom printing projects doubled in quality after working with them. Simply amazing results and customer service!',
      date: '2024-01-01'
    }
  ];

  // Load reviews from localStorage or use defaults
  useEffect(() => {
    try {
      const savedReviews = localStorage.getItem('customPrintReviews');
      if (savedReviews) {
        const parsed = JSON.parse(savedReviews);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews(parsed);
        } else {
          setReviews(defaultReviews);
        }
      } else {
        setReviews(defaultReviews);
      }
    } catch (error) {
      console.error('Error loading reviews:', error);
      setReviews(defaultReviews);
    }
  }, []);

  // Save reviews to localStorage whenever reviews change
  useEffect(() => {
    if (reviews.length > 0) {
      try {
        localStorage.setItem('customPrintReviews', JSON.stringify(reviews));
      } catch (error) {
        console.error('Error saving reviews:', error);
      }
    }
  }, [reviews]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newReview.name.trim() && newReview.address.trim() && newReview.comment.trim()) {
      const review: Review = {
        id: Date.now().toString(),
        name: newReview.name.trim(),
        address: newReview.address.trim(),
        rating: newReview.rating,
        comment: newReview.comment.trim(),
        date: new Date().toISOString().split('T')[0]
      };

      setReviews(prev => [review, ...prev]);
      setNewReview({ name: '', address: '', rating: 5, comment: '' });
      setShowForm(false);
    }
  };

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Real feedback from satisfied customers who trust our custom printing expertise
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-white mr-2">
                {calculateAverageRating()}
              </span>
              <span className="text-gray-300">
                ({reviews.length} reviews)
              </span>
            </div>
          </div>

          {/* Add Review Button */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#327fe9] hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {showForm ? 'Cancel Review' : 'Write a Review'}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Share Your Experience</h2>
              
              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={newReview.name}
                      onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#327fe9] transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Rating *
                    </label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                          className="transition-colors"
                        >
                          <Star
                            size={28}
                            className={`${
                              star <= newReview.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-400'
                            } hover:text-yellow-300`}
                          />
                        </button>
                      ))}
                      <span className="text-white ml-2 font-medium">
                        {newReview.rating}/5
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    value={newReview.address}
                    onChange={(e) => setNewReview(prev => ({ ...prev, address: e.target.value }))}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#327fe9] transition-colors"
                    placeholder="Enter your address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Your Review *
                  </label>
                  <textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#327fe9] transition-colors resize-none"
                    rows={4}
                    placeholder="Share your experience with our custom printing services..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#327fe9] hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-[#327fe9]/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#327fe9] to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-white text-lg">
                      {review.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {review.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-400'
                    }`}
                  />
                ))}
                <span className="text-gray-300 text-sm ml-2">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>

              {/* Comment */}
              <p className="text-gray-300 italic leading-relaxed">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>

        {reviews.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No reviews yet. Be the first to share your experience!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsPage;