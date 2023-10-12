import classNames from 'classnames/bind';
import styles from './DefaltLayout.module.scss';

import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaltLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaltLayout;
