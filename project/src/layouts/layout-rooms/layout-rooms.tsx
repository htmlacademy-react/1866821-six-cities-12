import {Outlet} from 'react-router-dom';
import PageHeader from '../../components/page-header/page-header';

export default function LayoutRooms() {
  return (
    <div className="page">
      <PageHeader />
      <Outlet />
    </div>
  );
}
