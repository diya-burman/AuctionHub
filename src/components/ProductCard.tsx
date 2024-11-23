import React from 'react';
import { Clock, DollarSign, User } from 'lucide-react';
import { Product } from '../types';
import { formatTimeLeft, formatCurrency } from '../utils';

interface ProductCardProps {
  product: Product;
  onBid: (productId: string, amount: number) => void;
}

export function ProductCard({ product, onBid }: ProductCardProps) {
  const [bidAmount, setBidAmount] = React.useState(product.currentBid + 1);
  const timeLeft = formatTimeLeft(product.endTime);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/50 text-white px-3 py-1 rounded-full flex items-center gap-2">
          <Clock size={16} />
          <span className="text-sm">{timeLeft}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center gap-2 mb-4">
          <User size={16} className="text-gray-500" />
          <span className="text-sm text-gray-500">{product.seller}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-500">Current Bid</p>
            <p className="text-xl font-bold text-emerald-600">
              {formatCurrency(product.currentBid)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Bids</p>
            <p className="text-xl font-bold text-gray-900">{product.bids.length}</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <input
            type="number"
            min={product.currentBid + 1}
            value={bidAmount}
            onChange={(e) => setBidAmount(Number(e.target.value))}
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            onClick={() => onBid(product.id, bidAmount)}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
          >
            <DollarSign size={16} />
            Bid Now
          </button>
        </div>
      </div>
    </div>
  );
}