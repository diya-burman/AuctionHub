import React from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { Product } from './types';
import { Filter, TrendingUp } from 'lucide-react';

// Mock data - replace with API calls later
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Vintage Leather Camera Bag',
    description: 'Authentic leather camera bag from the 1960s. Perfect condition, genuine leather with brass fixtures.',
    currentBid: 150,
    startingPrice: 100,
    imageUrl: 'https://images.unsplash.com/photo-1525103504173-8dc1582c7430',
    endTime: new Date(Date.now() + 86400000 * 2), // 2 days from now
    seller: 'VintageCollector',
    bids: []
  },
  {
    id: '2',
    title: 'Limited Edition Mechanical Watch',
    description: 'Handcrafted mechanical watch, limited edition. Number 7 of 100 pieces made.',
    currentBid: 2500,
    startingPrice: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314',
    endTime: new Date(Date.now() + 86400000 * 1), // 1 day from now
    seller: 'LuxuryTimepieces',
    bids: []
  },
  {
    id: '3',
    title: 'Modern Art Original Painting',
    description: 'Original abstract painting by emerging artist. Acrylic on canvas, 36x48 inches.',
    currentBid: 800,
    startingPrice: 500,
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5',
    endTime: new Date(Date.now() + 86400000 * 3), // 3 days from now
    seller: 'ArtGalleryNYC',
    bids: []
  }
];

function App() {
  const [products, setProducts] = React.useState<Product[]>(MOCK_PRODUCTS);

  const handleBid = (productId: string, amount: number) => {
    setProducts(prev => prev.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          currentBid: amount,
          bids: [...product.bids, {
            id: Date.now().toString(),
            userId: 'current-user',
            amount,
            timestamp: new Date()
          }]
        };
      }
      return product;
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Active Auctions</h1>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
              <Filter size={20} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
              <TrendingUp size={20} />
              Sort
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onBid={handleBid}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;