import React from 'react';

interface PrimaryButtonProps {
    text: string;
    onClick: () => void;
}


function PrimaryButton({ text, onClick }: PrimaryButtonProps) {
  return (
    <button className="bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
        {text}
    </button>
  );
}

export default PrimaryButton;

