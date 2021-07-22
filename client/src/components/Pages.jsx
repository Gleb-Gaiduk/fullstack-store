import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import PageItem from 'react-bootstrap/PageItem';
import { Context } from '..';

const Pages = observer(() => {
  const { device } = useContext(Context);
  console.log(device.page);
  const pagesCount = Math.ceil(device.totalCount / device.limit);

  const pages = [];

  for (let index = 0; index < pagesCount; index++) {
    pages.push(index + 1);
  }

  return (
    <Pagination className='mt-3'>
      {pages.map(page => (
        <PageItem
          key={page}
          activeLabel=''
          active={device.page === page}
          onClick={() => device.setPage(page)}
        >
          {page}
        </PageItem>
      ))}
    </Pagination>
  );
});
export default Pages;
