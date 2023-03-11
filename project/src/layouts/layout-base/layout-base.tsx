import PageHeader from '../../components/page-header/page-header';
import cn from 'classnames';
import { Helmet } from 'react-helmet-async';
import PageFooter from '../../components/page-footer/page-footer';

type LayoutBaseProps = {
  pageTitle: string;
  className?: string;
  withBaseHeader?: boolean;
  withBaseFooter?: boolean;
  children: JSX.Element;
}

export default function LayoutBase({ pageTitle, className, withBaseHeader, withBaseFooter, children }: LayoutBaseProps) {
  return (
    <div className={cn('page', className)}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {withBaseHeader && <PageHeader />}
      {children}
      {withBaseFooter && <PageFooter/>}
    </div>
  );
}
