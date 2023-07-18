import React from 'react';
import {
  Container,
  CustomText,
  DefaultList,
  DefaultScroll,
  FundCard,
  LearnMoreCard,
  Separator,
  InvestCard,
} from '../../components';
import {useSelector} from 'react-redux';
import {t} from '../../resources';

function Home() {
  const homeData = useSelector(({homeState}: any) => homeState);

  function renderFundItem({item}: any) {
    return <FundCard fund={item} />;
  }

  function renderInvestItem({item}: any) {
    return <InvestCard item={item} />;
  }

  return (
    <DefaultScroll>
      <Container>
        <CustomText semiBold size={18}>
          {t('funds')}
        </CustomText>
      </Container>
      <DefaultList
        horizontal
        contentContainerStyle={{paddingHorizontal: 20}}
        showsHorizontalScrollIndicator={false}
        data={homeData.funds}
        keyExtractor={(item: any) => String(item.id)}
        ItemSeparatorComponent={() => <Separator x={10} />}
        renderItem={renderFundItem}
      />
      <Container>
        <LearnMoreCard />
        <Separator y={10} />
      </Container>
      <DefaultList
        data={homeData.investTips}
        numColumns={2}
        scrollEnabled={false}
        contentContainerStyle={{alignItems: 'center'}}
        keyExtractor={(item: any) => String(item.id)}
        ItemSeparatorComponent={() => <Separator y={20} />}
        renderItem={renderInvestItem}
      />
    </DefaultScroll>
  );
}

export default Home;
