import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackParamList} from '../../routes/MainStack';
import {
  Column,
  Container,
  CustomText,
  DefaultList,
  DefaultScroll,
  FundBreakdown,
  PercentageValuation,
  Row,
  Separator,
  SingleAssetChart,
  YourPortfolio,
  InfoStatsItem,
} from '../../components';
import {t} from '../../resources';

type SingleAssetScreenRouteProp = RouteProp<MainStackParamList, 'SingleAsset'>;

function SingleAsset() {
  const route = useRoute<SingleAssetScreenRouteProp>();
  const {fund} = route.params;

  function renderInfoStatsItem({item}: any) {
    return <InfoStatsItem info={item} />;
  }

  return (
    <DefaultScroll>
      <Container>
        <Row justifyContent={'space-between'} alignItems={'flex-start'}>
          <Column>
            <CustomText semiBold size={24}>
              {`$${fund.invest}`}
            </CustomText>
            <PercentageValuation
              value={fund.percentageValuation}
              profit={fund.profit}
            />
          </Column>
          <CustomText semiBold size={24}>
            {fund.year}
          </CustomText>
        </Row>
        <Separator y={20} />
        <SingleAssetChart data={fund.chartData} color={fund.color} />
        <Separator y={20} />
        <CustomText semiBold size={17}>
          {t('infoAndStats')}
        </CustomText>
        <Separator y={15} />
        <DefaultList
          data={fund.info}
          keyExtractor={(item: any) => String(item.id)}
          columnWrapperStyle={{
            justifyContent: 'space-around',
            flex: 1,
          }}
          scrollEnabled={false}
          numColumns={2}
          ItemSeparatorComponent={() => <Separator y={10} />}
          renderItem={renderInfoStatsItem}
        />
        <Separator y={35} />
        <CustomText semiBold size={17}>
          {t('fundBreakdown')}
        </CustomText>
        <Separator y={15} />
        <FundBreakdown data={fund.breakdown} />
        <Separator y={35} />
        <YourPortfolio data={fund.portfolio} />
      </Container>
    </DefaultScroll>
  );
}

export default SingleAsset;
