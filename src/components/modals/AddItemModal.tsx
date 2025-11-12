import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Alert, AlertDescription } from '../ui/alert';
import { AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface AddItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  userId: string;
}

const categories = ['Books', 'Electronics', 'Hostel', 'Clothing', 'Other'];
const conditions = ['Excellent', 'Good', 'Fair', 'Poor'];

export function AddItemModal({ isOpen, onClose, onSuccess, userId }: AddItemModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!title.trim() || !description.trim() || !price || !category || !condition || !location) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    const priceNum = parseFloat(price);
    const originalPriceNum = originalPrice ? parseFloat(originalPrice) : null;

    if (isNaN(priceNum) || priceNum < 0) {
      setError('Please enter a valid price');
      setIsLoading(false);
      return;
    }

    if (originalPriceNum !== null && (isNaN(originalPriceNum) || originalPriceNum < priceNum)) {
      setError('Original price should be greater than or equal to selling price');
      setIsLoading(false);
      return;
    }

    try {
      const { error: insertError } = await supabase
        .from('marketplace_items')
        .insert({
          user_id: userId,
          title,
          description,
          price: priceNum,
          original_price: originalPriceNum,
          category,
          condition,
          location,
          image_url: imageUrl || null,
          likes_count: 0,
          is_sold: false
        });

      if (insertError) {
        throw insertError;
      }

      // Reset form
      setTitle('');
      setDescription('');
      setPrice('');
      setOriginalPrice('');
      setCategory('');
      setCondition('');
      setLocation('');
      setImageUrl('');
      setError('');
      
      onSuccess();
      onClose();
    } catch (err: any) {
      console.error('Error adding item:', err);
      setError(err.message || 'Failed to add item. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setTitle('');
    setDescription('');
    setPrice('');
    setOriginalPrice('');
    setCategory('');
    setCondition('');
    setLocation('');
    setImageUrl('');
    setError('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Post an Item</DialogTitle>
          <DialogDescription>
            List your item for sale in the NMIET marketplace
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Item Title *</Label>
            <Input
              id="title"
              placeholder="e.g., Data Structures & Algorithms (Cormen)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              placeholder="Describe the condition and details of your item..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price (₹) *</Label>
              <Input
                id="price"
                type="number"
                placeholder="1200"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
                step="0.01"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="originalPrice">Original Price (₹) (Optional)</Label>
              <Input
                id="originalPrice"
                type="number"
                placeholder="2500"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="condition">Condition *</Label>
              <Select value={condition} onValueChange={setCondition} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  {conditions.map(cond => (
                    <SelectItem key={cond} value={cond}>
                      {cond}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              placeholder="e.g., Main Campus, Hostel Block A"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageUrl">Image URL (Optional)</Label>
            <Input
              id="imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading} className="bg-gradient-to-r from-primary to-blue-500">
              {isLoading ? 'Posting...' : 'Post Item'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

