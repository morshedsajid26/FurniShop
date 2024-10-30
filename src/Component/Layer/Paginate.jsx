import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import ProductCard from './ProductCard';

import product4 from '/product4.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 13, 14];


function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <ProductCard src={product4} pName='Ole Gundorse Spring...' price='$82.00' mainPrice='$100.00'/>
              
            </div>

            
          ))}
      </>
    );
  }

const Paginate = ({itemsPerPage}) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='flex gap-x-[13px] flex-wrap gap-y-[60px]'>
      <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaArrowRight className='' />}
        nextClassName="page-item bg-slate-400 rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-all duration-300 ml-[30px]"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        
        previousLabel={<FaArrowLeft className='' />}
        previousClassName="page-item bg-slate-400 rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-all duration-300 mr-[30px] "
        renderOnZeroPageCount={null}
       
        pageClassName="page-item liCss flex items-center justify-center text-transparent ml-4"

         pageLinkClassName="page-link aCss w-[10px] h-[10px] rounded-full border border-black"

         activeClassName="active bg-[#23262F] rounded-full"
        
         containerClassName="pagination flex  items-center"
      />
    </>
  );
}





export default Paginate