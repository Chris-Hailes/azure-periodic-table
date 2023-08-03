import type { Dispatch, SetStateAction } from 'react';
import { useState, useEffect } from 'react';
import { Column } from './grid';
import { CategorySelector, CategoryData } from './category-selector';
import { Item, columns } from '@/app/data';
import { Categories } from '@/app/constants';
import { colorConfig } from '@/config';

export const categoryData: CategoryData = [
  { name: Categories.GENERAL, color: colorConfig.gray },
  { name: Categories.NETWORKING, color: colorConfig.red },
  { name: Categories.COMPUTEANDWEB, color: colorConfig.orange },
  { name: Categories.CONTAINERS, color: colorConfig.yellow },
  { name: Categories.DATABASES, color: colorConfig.lime },
  { name: Categories.STORAGE, color: colorConfig.green },
  { name: Categories.AIANDML, color: colorConfig.cyan },
  { name: Categories.ANALYTICSANDIOT, color: colorConfig.blue },
  { name: Categories.VIRTUALDESKTOP, color: colorConfig.indigo },
  { name: Categories.DEVTOOLS, color: colorConfig.violet },
  { name: Categories.INTEGRATION, color: colorConfig.fuchsia },
  { name: Categories.MIGRATION, color: colorConfig.pink },
  { name: Categories.MANAGEMENT, color: colorConfig.rose },
];

interface PeriodicTableProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  activeElement: Item | null;
  setSelectedElement: Dispatch<SetStateAction<Item | null>>;
  activeCategory: Categories | null;
  setActiveCategory: Dispatch<SetStateAction<Categories | null>>;
  textSearch: string;
  zoomLevel: 0 | 1 | 2;
}

export default function PeriodicTable({
  setOpen,
  activeElement,
  setSelectedElement,
  activeCategory,
  setActiveCategory,
  textSearch,
  zoomLevel,
}: PeriodicTableProps) {

  const [response, setResponse] = useState<string | null>(null);

  const handleSelect = async (serviceName: string) => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ serviceName }),
    });
    const data = await res.json();
    setResponse(data.message);
  };

  useEffect(() => {
    if (activeElement) {
      handleSelect(activeElement.name);
    }
  }, [activeElement]);

  return (
    <div className="flex-col-reverse flex w-full lg:flex-row lg:flex text-white justify-start md:justify-center items-start py-6 overflow-scroll md:overflow-visible flex-nowrap">
      <div className="flex justify-start md:justify-center items-start">
        {columns.map((group, i) => (
          <Column
            select={() => setOpen(true)}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            key={i}
            items={group.items}
            textSearch={textSearch}
            setSelectedElement={setSelectedElement}
            categoryData={categoryData}
            zoomLevel={zoomLevel}
          />
        ))}
      </div>

      <CategorySelector
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categoryData={categoryData}
      />
    </div>
  );
}
