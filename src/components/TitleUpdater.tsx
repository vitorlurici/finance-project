import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface TitleUpdaterProps {
  title: string;
}

const TitleUpdater: React.FC<TitleUpdaterProps> = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null;
};

export default TitleUpdater;
