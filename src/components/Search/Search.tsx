import { states } from '@/recoil';
import { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import * as APIService from '@/services/APIService';
import { AxiosError } from 'axios';

export default function Search() {
  const val = useRecoilValue(states.data);
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [valueSearch, setValueSearch] = useState('');
  const productList = useQuery({
    queryKey: ['product-search', valueSearch],
    queryFn: async () => {
      try {
        const res = await APIService.search(valueSearch);
        return res.data;
      } catch (_error) {
        const error = (_error as AxiosError).response?.data;
        console.log((error as Error).message);
        throw new Error('error');
      }
    },
    staleTime: 1 * 60 * 1000,
    cacheTime: 5 * 60 * 1000
  });
  if (!val.adminRole) {
    return (
      <div className='wrapper'>
        <p className='text-red-600 grid justify-center'>Vui lòng đăng nhập để vào trang này</p>
      </div>
    );
  }
  return (
    <div className='wrapper'>
      <p className='text-green-500 grid justify-center font-bold mb-4'>Xin chào admin</p>
      <div className='wrapper flex items-center mb-4 p-2 bg-slate-300 pl-2'>
        <input
          className='mr-2 bg-slate-300 outline-none ml-2'
          type='text'
          ref={inputRef}
          placeholder='Nhập sản phẩm cần tìm'
          onChange={(e) => {
            inputRef.current.value = e.target.value;
          }}
        ></input>
        <button
          className='hover:bg-slate-600 rounded-md p-2'
          type='button'
          onClick={() => {
            setValueSearch(inputRef.current.value);
          }}
        >
          Tìm kiếm
        </button>
      </div>
      <div className='grid justify-center flex-col'>
        {productList.isLoading && <p className='text-blue-400'>Loading...</p>}
        {productList.isError && <p className='text-red-500 font-bold'>Error</p>}
        {productList.isSuccess &&
          (productList.data as Array<unknown>).length > 0 &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          productList.data.map((product: any, index: number) => {
            return (
              <p className='text-yellow-500 mb-2' key={index}>
                {product.item.name}
              </p>
            );
          })}
      </div>
    </div>
  );
}
