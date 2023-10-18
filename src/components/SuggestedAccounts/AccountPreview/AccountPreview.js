import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b3b71b673c555c1def9302650c6fae00.jpeg?x-expires=1697814000&x-signature=qyXkRw%2BdNxWLVvjOmaBjKYx46Nw%3D"
                    alt="avt"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>ttlinh13_</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>thùy linh</p>
            </div>
            <div className={cx('analytics')}>
                <strong className={cx('value')}>1.2M </strong>
                <span className={cx('label')}>Following</span>
                <strong className={cx('value')}>12.7M </strong>
                <span className={cx('label')}>Likes</span>
            </div>
        </div>
    );
}

export default AccountPreview;
