import React, { FC } from "react";
import { useAuth } from "../../hooks/auth";
import { AvatarContainer, ProfileButton } from "./styles";
import { AvatarProps } from "./typings/typings";

export const Avatar: FC<AvatarProps> = ({ onPressImage, uriImage }) => {
  return (
    <ProfileButton onPress={onPressImage}>
      <AvatarContainer source={{ uri: uriImage }} />
    </ProfileButton>
  );
};
