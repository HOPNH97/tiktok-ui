import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy interactive offset={[-20, 0]} placement="bottom" delay={[1000, 10]} render={renderPreview}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b3b71b673c555c1def9302650c6fae00.jpeg?x-expires=1697788800&x-signature=I%2FSA%2FLq4AqFN4rvuHt%2FvTnP%2FFGg%3D"
                    alt="avatar"
                />
                <div className={cx('item-info')}>
                    <span className={cx('nick-name')}>
                        thlinh13_
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />{' '}
                    </span>
                    <p className={cx('name')}>thùy linh</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
