import React from 'react';
import PortfolioIcon from '../../icons/PortfolioIcon';
import {
  Column,
  Container,
  CustomButton,
  CustomText,
  PercentageValuation,
  Row,
  Separator,
} from '../index';
import {Colors, t} from '../../resources';
import {InfoContainer} from './styles';

type YourPortfolioProps = {
  data: any;
};

const YourPortfolio = ({data}: YourPortfolioProps) => {
  return (
    <>
      <Row justifyContent={'flex-start'}>
        <PortfolioIcon focused={false} />
        <Separator x={5} />
        <CustomText semiBold size={17}>
          {t('yourPortfolio')}
        </CustomText>
      </Row>
      <Separator y={20} />
      <Row justifyContent={'space-between'}>
        <Column>
          <CustomText semiBold size={24}>{`${data.credits} ${t(
            'credits',
          )}`}</CustomText>
          <PercentageValuation value={data.percentageValuation} />
        </Column>
        <Column style={{alignItems: 'flex-end'}}>
          <CustomText semiBold size={24}>
            {`$${data.value}`}
          </CustomText>
          <CustomText color={Colors.grey}>{`${t('lastPurchase')} ${
            data.lastPurchase
          }`}</CustomText>
        </Column>
      </Row>
      <Separator y={15} />
      <Row justifyContent={'space-between'}>
        <CustomButton
          label={t('sell')}
          flex={1}
          bgColor={Colors.white}
          textColor={Colors.purple}
          borderColor={Colors.grey}
        />
        <Separator x={10} />
        <CustomButton
          label={t('retireCredits')}
          flex={1}
          bgColor={Colors.lightGreen}
        />
      </Row>
      <Separator y={15} />
      <CustomText color={Colors.grey} size={11}>
        {t('previouslyRetired1')}
        {data.previousRetiredCredits}
        {t('previouslyRetired2')}
      </CustomText>
      <Separator y={20} />
      <InfoContainer>
        <CustomText color={Colors.grey} size={12}>
          {t('yourPortfolioInfo')}
        </CustomText>
      </InfoContainer>
      <Separator y={10} />
      <Container>
        <CustomButton label={t('buy')} />
      </Container>
    </>
  );
};

export default YourPortfolio;
