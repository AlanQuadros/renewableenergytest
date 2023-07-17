import React from 'react';
import {
  Container,
  CustomText,
  DefaultScroll,
  Separator,
} from '../../components';

function Portfolio() {
  return (
    <DefaultScroll>
      <Container>
        <CustomText bold size={22}>
          {'Portfolio'}
        </CustomText>
        <Separator y={20} />
        <CustomText>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat sem, aliquet eu tincidunt id, malesuada mattis nulla. Aenean pretium diam sem, sit amet imperdiet nulla mollis sit amet. Pellentesque quis venenatis nisi, vel lobortis odio. Maecenas nunc ex, vehicula eget lacus a, porta pellentesque purus. Etiam mattis sapien nisi, eu sodales diam tempor et. Integer volutpat non augue accumsan commodo. In pharetra, leo ac auctor aliquet, justo orci imperdiet ligula, eu malesuada urna dui commodo eros. Ut eleifend ex elementum, tempus nunc nec, semper mauris. Nam ut elit mattis erat ultricies lobortis eget vitae urna. Nulla a volutpat felis. Sed leo lacus, dictum sed velit quis, maximus blandit ipsum. Mauris nec ex tincidunt odio ultrices ullamcorper in at eros.'
          }
        </CustomText>
      </Container>
    </DefaultScroll>
  );
}

export default Portfolio;
