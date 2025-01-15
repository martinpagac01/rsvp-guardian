import React from 'react';
import { X } from 'lucide-react';
import { useNotification } from '@/contexts/NotificationContext';

export const Notification = () => {
  const { notification, hideNotification } = useNotification();

  if (!notification) return null;

  const bgColorClass = {
    success: 'bg-[#F5F3FF] text-[#4A5568]',
    error: 'bg-red-50 text-red-700',
    info: 'bg-blue-50 text-blue-700',
  }[notification.type];

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 p-4 rounded-xl shadow-lg ${bgColorClass} max-w-md`}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">{notification.message}</div>
        <button
          onClick={hideNotification}
          className="text-current opacity-50 hover:opacity-100 transition-opacity"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
