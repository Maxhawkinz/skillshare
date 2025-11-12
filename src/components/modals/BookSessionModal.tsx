import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Alert, AlertDescription } from '../ui/alert';
import { AlertCircle, Calendar, Clock } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface BookSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  skillId: string;
  mentorId: string;
  studentId: string;
  skillTitle: string;
}

export function BookSessionModal({
  isOpen,
  onClose,
  onSuccess,
  skillId,
  mentorId,
  studentId,
  skillTitle
}: BookSessionModalProps) {
  const [sessionDate, setSessionDate] = useState('');
  const [sessionTime, setSessionTime] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!sessionDate || !sessionTime) {
      setError('Please select both date and time');
      setIsLoading(false);
      return;
    }

    // Validate date is not in the past
    const selectedDateTime = new Date(`${sessionDate}T${sessionTime}`);
    if (selectedDateTime < new Date()) {
      setError('Please select a date and time in the future');
      setIsLoading(false);
      return;
    }

    try {
      const { error: insertError } = await supabase
        .from('booked_sessions')
        .insert({
          skill_id: skillId,
          student_id: studentId,
          mentor_id: mentorId,
          session_date: sessionDate,
          session_time: sessionTime,
          notes: notes || null,
          status: 'pending'
        });

      if (insertError) {
        throw insertError;
      }

      // Reset form
      setSessionDate('');
      setSessionTime('');
      setNotes('');
      setError('');
      
      onSuccess();
      onClose();
    } catch (err: any) {
      console.error('Error booking session:', err);
      setError(err.message || 'Failed to book session. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setSessionDate('');
    setSessionTime('');
    setNotes('');
    setError('');
    onClose();
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book a Session</DialogTitle>
          <DialogDescription>
            Schedule a session for: {skillTitle}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="date">Session Date *</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="date"
                type="date"
                value={sessionDate}
                onChange={(e) => setSessionDate(e.target.value)}
                min={today}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Session Time *</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="time"
                type="time"
                value={sessionTime}
                onChange={(e) => setSessionTime(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Any specific topics you'd like to cover..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
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
              {isLoading ? 'Booking...' : 'Book Session'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

