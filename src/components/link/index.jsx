import { Link as RouterLink } from 'react-router-dom';
import './styles.css';

export const Link = ({ className, children, ...props }) => {
  return (
    <RouterLink
      className={`custom-link ${className}`}
      {...props}
    >
      {children}
    </RouterLink>
  );
};
