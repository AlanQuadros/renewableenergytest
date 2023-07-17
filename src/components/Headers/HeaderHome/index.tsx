import React, {useState} from 'react';
import {EarnRewardsPress, HeaderHomeContainer, UserCircle} from './styles';
import {
  Column,
  CustomText,
  DefaultPress,
  PercentageValuation,
  Row,
  Separator,
} from '../../index';
import UserIcon from '../../../icons/UserIcon';
import {useSelector} from 'react-redux';
import {Colors, t} from '../../../resources';
import Icon from 'react-native-vector-icons/Ionicons';
import BellIcon from '../../../icons/BellIcon';
import CoinIcon from '../../../icons/CoinIcon';

function HeaderHome() {
  const [showPortfolio, togglePortfolio] = useState(false);
  const homeData = useSelector(({homeState}: any) => homeState);

  return (
    <HeaderHomeContainer>
      <Row justifyContent={'space-between'}>
        <UserCircle>
          <UserIcon />
        </UserCircle>
        <DefaultPress onPress={() => togglePortfolio(!showPortfolio)}>
          <Row>
            <CustomText semiBold>{`${t('account')}: $${
              homeData.account
            }`}</CustomText>
            <Icon name={showPortfolio ? 'md-chevron-down' : 'md-chevron-up'} />
          </Row>
        </DefaultPress>
        <DefaultPress>
          <BellIcon />
        </DefaultPress>
      </Row>
      {showPortfolio && (
        <>
          <Separator y={20} />
          <CustomText size={12}>{t('portfolio')}</CustomText>
          <Separator y={5} />
          <Row justifyContent={'space-between'}>
            <Row justifyContent={'flex-start'}>
              <CustomText
                semiBold
                size={24}>{`$${homeData.portfolio.value}`}</CustomText>
              <Separator x={5} />
              <Column>
                <Separator y={5} />
                <PercentageValuation
                  value={homeData.portfolio.percentageValuation}
                />
              </Column>
            </Row>
            <EarnRewardsPress>
              <CoinIcon />
              <Separator x={5} />
              <CustomText size={11} semiBold color={Colors.purple}>
                {t('earnRewards')}
              </CustomText>
            </EarnRewardsPress>
          </Row>
          <Separator y={15} />
        </>
      )}
    </HeaderHomeContainer>
  );
}

export default HeaderHome;
