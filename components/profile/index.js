import React from 'react';
import Card from '../card';
import MaleAvatar from '../../assets/images/maleAvatar';
import FemaleAvatar from '../../assets/images/femaleAvatar';

import { cardStyles } from './styles';

export default Profile = ({ getParam }) => {
  const userType = getParam('userType') || 'male';

  return (
    <Card styles={cardStyles}>
      {userType === 'male' ? <MaleAvatar /> : <FemaleAvatar />}
    </Card>
  );
};
