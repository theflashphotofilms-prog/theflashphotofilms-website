// Mock data storage for feedback (will be replaced with Google Sheets integration later)
let mockFeedbackData: Feedback[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    mobile: '+91 98765 43210',
    serviceType: 'Wedding Photography',
    rating: 5,
    feedback: 'Outstanding work! Captured every moment perfectly. Highly recommend!',
    submissionDate: new Date('2024-06-15').toISOString(),
    status: 'approved'
  },
  {
    id: '2',
    name: 'Rahul Patel',
    mobile: '+91 87654 32109',
    serviceType: 'Pre Wedding Photography',
    rating: 4,
    feedback: 'Great experience, very professional team. Loved the final photos!',
    submissionDate: new Date('2024-07-10').toISOString(),
    status: 'approved'
  }
];

export interface Feedback {
  id: string;
  name: string;
  mobile: string;
  serviceType: string;
  rating: number;
  feedback: string;
  submissionDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface NewFeedback {
  name: string;
  mobile: string;
  serviceType: string;
  rating: number;
  feedback: string;
}

export const feedbackService = {
  getAllFeedback: (): Feedback[] => {
    return mockFeedbackData;
  },

  getApprovedFeedback: (): Feedback[] => {
    return mockFeedbackData.filter(feedback => feedback.status === 'approved');
  },

  submitFeedback: (newFeedback: NewFeedback): Promise<{ success: boolean; message: string }> => {
    return new Promise((resolve) => {
      try {
        // Validate input
        if (!newFeedback.name || !newFeedback.mobile || !newFeedback.serviceType || !newFeedback.feedback || newFeedback.rating < 1 || newFeedback.rating > 5) {
          resolve({ success: false, message: 'Please fill all required fields with valid data.' });
          return;
        }

        // Create new feedback entry
        const feedbackEntry: Feedback = {
          id: Math.random().toString(36).substring(2, 15),
          name: newFeedback.name,
          mobile: newFeedback.mobile,
          serviceType: newFeedback.serviceType,
          rating: newFeedback.rating,
          feedback: newFeedback.feedback,
          submissionDate: new Date().toISOString(),
          status: 'pending'
        };

        // Add to mock data
        mockFeedbackData.push(feedbackEntry);

        resolve({ success: true, message: 'Thank you for your feedback. Your review has been received and will appear on the website after verification.' });
      } catch (error) {
        resolve({ success: false, message: 'Failed to submit feedback. Please try again.' });
      }
    });
  },

  updateFeedbackStatus: (id: string, status: 'pending' | 'approved' | 'rejected'): Promise<boolean> => {
    return new Promise((resolve) => {
      try {
        const index = mockFeedbackData.findIndex(f => f.id === id);
        if (index !== -1) {
          mockFeedbackData[index].status = status;
          resolve(true);
        } else {
          resolve(false);
        }
      } catch (error) {
        resolve(false);
      }
    });
  }
};