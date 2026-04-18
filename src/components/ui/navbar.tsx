'use client';

import React, { useState, useRef, useLayoutEffect, cloneElement } from 'react';
import { cn } from '@/lib/utils';

const DefaultHomeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...(props as any)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>;
const DefaultCompassIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...(props as any)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" /></svg>;
const DefaultBellIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...(props as any)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>;

export type NavItem = {
  id: string | number;
  icon?: React.ReactElement;
  label: string;
  onClick?: () => void;
};

const defaultNavItems: NavItem[] = [
  { id: 'default-home', label: 'Home' },
  { id: 'default-explore', label: 'Explore' },
  { id: 'default-notifications', label: 'Notifications' },
];

export type LimelightNavProps = {
  items?: NavItem[];
  defaultActiveIndex?: number;
  activeIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

/**
 * An adaptive-width navigation bar with a "limelight" effect that highlights the active item.
 */
export const LimelightNav = ({
  items = defaultNavItems,
  defaultActiveIndex = 0,
  activeIndex: controlledActiveIndex,
  onTabChange,
  className,
  limelightClassName,
  iconContainerClassName,
  iconClassName,
}: LimelightNavProps) => {
  const [internalActiveIndex, setInternalActiveIndex] = useState(defaultActiveIndex);
  const isControlled = controlledActiveIndex !== undefined;
  const activeIndex = isControlled ? controlledActiveIndex : internalActiveIndex;
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];

    if (limelight && activeItem) {
      const itemWidth = activeItem.offsetWidth;
      const limelightWidth = Math.max(itemWidth * 0.8, 40);
      const newLeft = activeItem.offsetLeft + itemWidth / 2 - limelightWidth / 2;
      limelight.style.left = `${newLeft}px`;
      limelight.style.width = `${limelightWidth}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [activeIndex, isReady, items]);

  if (items.length === 0) {
    return null;
  }

  const handleItemClick = (index: number, itemOnClick?: () => void) => {
    if (!isControlled) {
      setInternalActiveIndex(index);
    }
    onTabChange?.(index);
    itemOnClick?.();
  };

  return (
    <nav className={cn('relative inline-flex items-center h-12 rounded-lg backdrop-blur-sm text-foreground border px-2', className)}>
      {items.map(({ id, icon, label, onClick }, index) => (
        <a
          key={id}
          ref={el => { navItemRefs.current[index] = el; }}
          className={cn('relative z-20 flex h-full cursor-pointer items-center justify-center px-5', iconContainerClassName)}
          onClick={() => handleItemClick(index, onClick)}
          aria-label={label}
        >
          {icon ? (
            cloneElement(icon as React.ReactElement<any>, {
              className: cn(
                'w-6 h-6 transition-opacity',
                activeIndex === index ? 'opacity-100 font-bold' : 'opacity-50 font-medium',
                (icon.props as any)?.className || '',
                iconClassName || ''
              ),
            })
          ) : (
            <span className={cn(
              'text-sm transition-opacity duration-100 ease-in-out',
              activeIndex === index ? 'opacity-100 font-bold scale-110' : 'opacity-50 font-medium hover:opacity-75 hover:scale-110',
              iconClassName || ''
            )}>
              {label}
            </span>
          )}
        </a>
      ))}

      <div
        ref={limelightRef}
        className={cn(
          'absolute top-0 z-10 h-[3px] rounded-full bg-primary shadow-[0_0px_10px_var(--primary)]',
          isReady ? 'transition-[left,width] duration-400 ease-in-out' : '',
          limelightClassName
        )}
        style={{ left: '-999px', width: 'auto' }}
      >
        <div className="absolute left-[-30%] top-[2px] w-[160%] h-[45px] [clip-path:polygon(5%_100%,25%_0,75%_0,95%_100%)] bg-gradient-to-b from-primary/30 to-transparent pointer-events-none" />
      </div>
    </nav>
  );
};