import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p116-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e9a6d3fc79ceb0efc869ef18de9c87fe~c5_300x300.webp?x-expires=1697230800&x-signature=9MADXMuVUv32nDB0d5FnZOjXJ%2Bc%3D"
                alt="tlinh"
            />
            <div className={cx('info')}>
                <h4 className={cx('user-name')}>
                    tlinh_
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('name')}>Nguyen Thi Linh</span>
            </div>
        </div>
    );
}

export default AccountItem;
