import React from 'react';
import {CustomText} from '../../index';
import {Colors} from '../../../resources';
import {FilterItemPress} from '../styles';

type FilterItemProps = {
  label: string;
  selected: boolean;
  onPress: (value: string) => void;
};

function FilterItem({label, selected, onPress}: FilterItemProps) {
  return (
    <FilterItemPress selected={selected} onPress={() => onPress(label)}>
      <CustomText
        medium
        size={15}
        color={selected ? Colors.purple : Colors.grey}>
        {label}
      </CustomText>
    </FilterItemPress>
  );
}

export default FilterItem;
