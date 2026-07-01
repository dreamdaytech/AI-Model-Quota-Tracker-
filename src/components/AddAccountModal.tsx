import React, { useState, useEffect } from 'react';

interface AddAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (email: string) => void;
  existingEmails: string[];
  initialEmail?: string;
}

export function AddAccountModal({ isOpen, onClose, onSave, existingEmails, initialEmail }: AddAccountModalProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setEmail(initialEmail || '');
      setError(null);
    }
  }, [isOpen, initialEmail]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (trimmedEmail) {
      if (
        trimmedEmail.toLowerCase() !== (initialEmail || '').toLowerCase() &&
        existingEmails.some(e => e.toLowerCase() === trimmedEmail.toLowerCase())
      ) {
        setError('This account has already been added.');
        return;
      }
      onSave(trimmedEmail);
      setEmail('');
      setError(null);
    }
  };

  const handleClose = () => {
    setEmail('');
    setError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 w-full max-w-md shadow-2xl">
        <h2 className="text-xl font-semibold mb-6 text-zinc-900 dark:text-white">
          {initialEmail ? 'Edit Account' : 'Add Google Account'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">Email Address</label>
            <input 
              type="email" 
              required
              placeholder="e.g. workspace@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(null);
              }}
              className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
              autoFocus
            />
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          </div>

          <div className="flex justify-end gap-3">
            <button 
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={!email.trim()}
              className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {initialEmail ? 'Save Changes' : 'Add Account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
