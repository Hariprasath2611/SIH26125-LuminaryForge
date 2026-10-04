import React from 'react';

interface CopilotPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * CopilotPanel is now seamlessly unified into the interactive Ask Bharosa seal component (CopilotButton).
 * This component is maintained for backwards compatibility across layouts.
 */
export const CopilotPanel: React.FC<CopilotPanelProps> = () => {
  return null;
};

export default CopilotPanel;
