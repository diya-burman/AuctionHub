export interface Product {
  id: string;
  title: string;
  description: string;
  currentBid: number;
  startingPrice: number;
  imageUrl: string;
  endTime: Date;
  seller: string;
  bids: Bid[];
}

export interface Bid {
  id: string;
  userId: string;
  amount: number;
  timestamp: Date;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}