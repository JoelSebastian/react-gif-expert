import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {
    const trimCategory = newCategory.trim();

    if (categories.includes(trimCategory)) {
      alert(`Ya existe la categoria: ${trimCategory}`);
      return;
    }

    setCategories([trimCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* Listado de Gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif item */}
    </>
  );
};
