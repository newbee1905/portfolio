import React from 'react';
import slugify from 'slugify';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export function createHeading(level: HeadingLevel) {
  const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const slug = slugify(typeof children === 'string' ? children : '');
    
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
}

export const H1 = createHeading(1);
export const H2 = createHeading(2);
export const H3 = createHeading(3);
export const H4 = createHeading(4);
export const H5 = createHeading(5);
export const H6 = createHeading(6);