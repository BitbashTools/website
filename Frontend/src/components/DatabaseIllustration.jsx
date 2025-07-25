import React from 'react';

const DatabaseIllustration = () => {
  return (
    <div className="relative">
      {/* Main circular database container */}
      <div 
        className="w-[300px] h-[300px] rounded-full relative overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #1a1a1a, #222222)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 24px rgba(0, 0, 0, 0.4)',
          border: '2px solid #333333'
        }}
      >
        {/* Animated rings */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="absolute inset-0 rounded-full"
            style={{
              border: '2px solid rgba(255, 107, 53, 0.2)',
              animation: `rotate ${6 + index * 2}s linear infinite`,
              transform: `scale(${0.7 + index * 0.15})`,
            }}
          ></div>
        ))}

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div 
              className="mb-2 text-4xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #ff7a47, #ff6b35, #e55a2b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(255, 107, 53, 0.2)'
              }}
            >
              DB
            </div>
            <div className="text-gray-400 text-sm">Backend Database</div>
          </div>
        </div>

        {/* Data points */}
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #ff6b35, #ff8c69)',
              boxShadow: '0 0 10px rgba(255, 107, 53, 0.4)',
              left: `${50 + 35 * Math.cos(index * Math.PI / 4)}%`,
              top: `${50 + 35 * Math.sin(index * Math.PI / 4)}%`,
              transform: 'translate(-50%, -50%)',
              animation: `pulse 2s ${index * 0.25}s infinite`
            }}
          ></div>
        ))}
      </div>

      {/* Add global styles */}
      <style jsx global>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg) scale(var(--scale));
          }
          to {
            transform: rotate(360deg) scale(var(--scale));
          }
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default DatabaseIllustration;
