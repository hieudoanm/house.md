import { NextPage } from 'next';
import { useState } from 'react';

const HomePage: NextPage = () => {
  const [name, setName] = useState('House');
  const letters = name.trim().toUpperCase().split('');

  return (
    <div className="flex min-h-screen w-full flex-col gap-y-4 md:gap-y-8">
      {/* NAV */}
      <nav className="bg-base-100 shadow">
        <div className="container mx-auto px-4 py-3 md:px-8 md:py-4">
          <div className="flex flex-col items-stretch justify-between gap-3 md:flex-row md:items-center md:gap-6">
            <h1 className="text-lg font-bold whitespace-nowrap md:text-2xl">
              House, M.D.
            </h1>

            <div className="flex w-full items-center gap-2 md:w-auto md:gap-4">
              <input
                type="text"
                placeholder="e.g. Gregory"
                className="input input-bordered w-full md:w-64"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-primary whitespace-nowrap">
                Capture
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* DISPLAY */}
      <main className="flex grow items-center justify-center overflow-x-auto px-4">
        {letters.length > 0 && (
          <div className="relative flex items-center">
            {letters.map((letter, index) => {
              const isFirst = index === 0;

              return (
                <div
                  key={`${letter}-${index}`}
                  className={`border-base-content flex items-center justify-center ${isFirst ? 'border-4' : 'border-b-4'} min-text-[28px] h-[14vw] max-h-[110px] min-h-[48px] w-[14vw] max-w-[110px] min-w-[48px] text-[8vw] md:text-[5vw] lg:text-[64px] ${isFirst ? 'mr-2 md:mr-4' : ''} `}>
                  {letter}
                </div>
              );
            })}

            {/* M.D. */}
            <div className="absolute -right-12 -bottom-2 text-sm font-bold tracking-[0.3em]">
              M.D.
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
