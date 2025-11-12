import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Alert, AlertDescription } from '../ui/alert';
import { AlertCircle, ShoppingBag } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  itemId: string;
  sellerId: string;
  buyerId: string;
  itemTitle: string;
  price: number;
}

const paymentMethods = ['Cash', 'UPI', 'Bank Transfer', 'Other'];

export function PurchaseModal({
  isOpen,
  onClose,
  onSuccess,
  itemId,
  sellerId,
  buyerId,
  itemTitle,
  price
}: PurchaseModalProps) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!paymentMethod) {
      setError('Please select a payment method');
      setIsLoading(false);
      return;
    }

    try {
      // Create purchase record
      const { error: purchaseError } = await supabase
        .from('purchases')
        .insert({
          item_id: itemId,
          buyer_id: buyerId,
          seller_id: sellerId,
          price: price,
          payment_method: paymentMethod,
          notes: notes || null,
          status: 'pending'
        });

      if (purchaseError) {
        throw purchaseError;
      }

      // Mark item as sold
      const { error: updateError } = await supabase
        .from('marketplace_items')
        .update({ is_sold: true })
        .eq('id', itemId);

      if (updateError) {
        console.error('Error updating item:', updateError);
        // Don't throw - purchase was created successfully
      }

      // Reset form
      setPaymentMethod('');
      setNotes('');
      setError('');
      
      onSuccess();
      onClose();
    } catch (err: any) {
      console.error('Error creating purchase:', err);
      setError(err.message || 'Failed to complete purchase. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setPaymentMethod('');
    setNotes('');
    setError('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Purchase</DialogTitle>
          <DialogDescription>
            Purchase: {itemTitle}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Total Price</Label>
            <div className="text-2xl font-bold text-primary">
              ₹{price.toLocaleString()}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="paymentMethod">Payment Method *</Label>
            <Select value={paymentMethod} onValueChange={setPaymentMethod} required>
              <SelectTrigger>
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                {paymentMethods.map(method => (
                  <SelectItem key={method} value={method}>
                    {method}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Any special instructions or questions..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </div>

          <Alert>
            <AlertDescription>
              <strong>Note:</strong> After confirming the purchase, you'll need to coordinate with the seller 
              for payment and item pickup/delivery. The seller's contact information will be shared with you.
            </AlertDescription>
          </Alert>

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
              {isLoading ? (
                <>
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Processing...
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Confirm Purchase
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

