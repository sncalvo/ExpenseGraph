import type { FC } from 'react';

interface Props {
  color: 'cyan' | 'gray' | 'red';
}

const LoadingIndicator: FC<Props> = ({ color = 'cyan' }) => (
  <div
    style={{
      borderTopColor: 'transparent',
    }}
  >
    <div
      className={`animate-spin inline-block w-8 h-8 border-4 rounded-full text-${color}-500`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default LoadingIndicator;
