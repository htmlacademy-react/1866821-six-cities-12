import { bringFirstCharToUpperCase } from '../../utils/common';

type AvatarProps = {
  avatarUrl: string | null;
  type: 'host' | 'reviews' | 'loginfo';
  classNamePrefix: string;
}

const sizes = {
  host: {
    width: 74,
    height: 74
  },
  reviews: {
    width: 54,
    height: 54
  },
  loginfo: {
    width: 20,
    height: 20
  }
};

export default function Avatar({avatarUrl, type, classNamePrefix}: AvatarProps) {
  const size = sizes[type];
  return (
    <div className={`${classNamePrefix}__avatar-wrapper ${classNamePrefix}__avatar-wrapper--pro user__avatar-wrapper`}>
      {avatarUrl &&
      <img className={`${classNamePrefix}__avatar user__avatar`}
        src={avatarUrl}
        width={size.width}
        height={size.height}
        alt={bringFirstCharToUpperCase(`${type} avatar`)}
      />}
    </div>
  );
}
