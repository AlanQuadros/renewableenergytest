import React from 'react';
import {
  Container,
  CustomText,
  DefaultScroll,
  Separator,
} from '../../components';

function Trade() {
  return (
    <DefaultScroll>
      <Container>
        <CustomText bold size={22}>
          {'Trade'}
        </CustomText>
        <Separator y={20} />
        <CustomText>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id libero egestas, mollis sapien sit amet, dapibus ipsum. Praesent nec neque diam. Suspendisse id dapibus nulla. Pellentesque tempus auctor ante, eu scelerisque tellus porta et. In gravida laoreet nisl quis viverra. Quisque eu nisi ac quam dignissim porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis velit a magna venenatis volutpat. Proin vitae erat quam. In semper libero maximus tellus varius tincidunt. Nulla sit amet magna rutrum, mattis sapien a, imperdiet elit. Pellentesque hendrerit nulla velit, sit amet consequat nisl congue non. Praesent erat nulla, efficitur nec diam convallis, vulputate tincidunt purus.'
          }
        </CustomText>
      </Container>
    </DefaultScroll>
  );
}

export default Trade;
