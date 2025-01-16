'use client';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useClickAway } from 'react-use';

type Props = {
  className?: string;
};

export const SearchInput = ({ className }: Props) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [focused, setFocused] = React.useState(false);

  useClickAway(ref, () => {
    setFocused(false);
  });

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-[150]" />
      )}

      <div
        className={cn(
          'flex rounded-2xl flex-1 justify-between relative h-11 z-[150]',
          className
        )}
        ref={ref}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Search..."
          onFocus={() => setFocused(true)}
        />
        <div
          className={cn(
            'absolute w-full bg-white rounded-xl py-2 top-16 shadow-md transition-all duration-200 invisible opacity-0 z-[150]',
            focused && 'visible opacity-100 top-12'
          )}
        >
          <Link
            href={'/product/1'}
            className="flex items-center  hover:bg-primary/10"
          >
            <img
              src="https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif"
              alt="Pizza Image"
              className="h-8 w-8 ml-2 rounded-full"
            />
            <div className="px-3 py-2">Margheritta</div>
          </Link>
        </div>
      </div>
    </>
  );
};
