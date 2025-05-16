'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import OrangeButton from './OrangeButton';
import { useCartStore } from '../lib/store/cart-store';

export default function ProductCart(props: { 
  name: string; 
  image: string; 
  description: string; 
  price: string;
  variantId: string; // Make sure this is being passed from parent
}) {
  const { addToCart, isLoading } = useCartStore();
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <Image
          src={props.image}
          alt={props.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-600">{props.name}</h3>
        <p className="text-gray-600 mb-4">{props.description}</p>
        <p className="text-orange-600 font-bold mb-4">{props.price}</p>
        <OrangeButton 
          onClick={() => addToCart(props.variantId, 1)}
          disabled={isLoading}
        >
          Add to Cart
        </OrangeButton>
      </div>
    </div>          
  );
}