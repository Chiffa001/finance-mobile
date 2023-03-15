import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome5';

export enum IconCodes {
  STATISTICS = 'line-graph',
  HOME = 'rocket',
}

export const getIcon = (name: IconCodes, color: string, size: number) => {
  const icons = {
    [IconCodes.STATISTICS]: (
      <EntypoIcon name={IconCodes.STATISTICS} color={color} size={size} />
    ),
    [IconCodes.HOME]: <Icon name={IconCodes.HOME} color={color} size={size} />,
  };

  return icons[name];
};
