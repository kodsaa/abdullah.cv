import React from "react";
import { useLocation } from "react-router-dom";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const location = useLocation();

  return (
    <div className="page-perspective-container">
      <div key={location.pathname} className="page-open-animation">
        {children}
      </div>
    </div>
  );
}