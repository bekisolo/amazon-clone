import React from 'react'
import {categoryInfo} from './CategoryFullInfos';
import CategoryCard from './CategoryCard';
import classes from './Category.module.css'

function Category() {
  return (
    <>
      <section className={classes.category__container}>
        {categoryInfo.map((Item) => (
          <CategoryCard key={Item.name} data={Item} />
        ))}
      </section>
    </>
  );
}

export default Category