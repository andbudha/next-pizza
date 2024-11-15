import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Pizza, ShoppingCart, User } from 'lucide-react';
import { Button } from '../ui';
import { Container } from './container';

type Props = {
  className?: string;
};

export const Header: React.FC<Props> = ({ className }: Props) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Pizza size={'35px'} color="orange" />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button variant={'outline'} className="flex items-center gap-2">
            <User size={16} /> Login
          </Button>
          <div>
            {' '}
            <Button className="group relative">
              <p>55 €</p>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center justify-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} strokeWidth={2} className="relative" />{' '}
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
