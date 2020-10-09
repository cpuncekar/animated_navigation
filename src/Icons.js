import React from 'react';

export function IconNotifications(props) {
  const { filled } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill={filled ? 'currentColor' : 'none'}
      strokeLinecap="round"
      strokeLinejoin="round"
      class="css-i6dzq1"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

export function IconBookmarks(props) {
  const { filled } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill={filled ? 'currentColor' : 'none'}
      strokeLinecap="round"
      strokeLinejoin="round"
      class="css-i6dzq1"
    >
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}
