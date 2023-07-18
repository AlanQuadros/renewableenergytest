import React, {useState} from 'react';
import {CustomText, DefaultList, Row, Separator} from '../index';
import {BreakDownItemPress} from './styles';
import {Colors} from '../../resources';
import BreakdownItem from './BreakdownItem';

type FundBreakdownProps = {
  data: any;
};

function FundBreakdown({data}: FundBreakdownProps) {
  const [breakDownSelected, setBreakDownSelected] = useState(data[0]);

  function renderBreakdownHeaderItem({item}: any) {
    const isSelected = breakDownSelected.name === item.name;

    return (
      <BreakDownItemPress
        onPress={() => setBreakDownSelected(item)}
        isSelected={isSelected}>
        <CustomText semiBold color={isSelected ? Colors.black : Colors.grey}>
          {item.name}
        </CustomText>
      </BreakDownItemPress>
    );
  }

  function renderBreakdownItem({item}: any) {
    return <BreakdownItem item={item} />;
  }

  return (
    <>
      <Row justifyContent={'flex-start'}>
        <DefaultList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={renderBreakdownHeaderItem}
        />
      </Row>
      <Separator y={10} />
      <DefaultList
        data={breakDownSelected.data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={renderBreakdownItem}
      />
    </>
  );
}

export default FundBreakdown;
